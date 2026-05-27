import psycopg2                          
import psycopg2.extras                   
from pymongo import MongoClient          
from datetime import datetime            
import sys                               

PG_CONNECTION_STRING = (
"postgresql://neondb_owner:npg_Y5QbDEj4RpSy@ep-soft-king-apsrtark.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

MONGO_CONNECTION_STRING = (
    "mongodb+srv://sebasyt523:WReh4OlrVCqW9MLK@clubpenguin.0ipz2zm.mongodb.net/"
)
MONGO_DATABASE = "echale_salsita"  

def conectar_postgres():
    
    try:
        conn = psycopg2.connect(
            PG_CONNECTION_STRING,
            cursor_factory=psycopg2.extras.RealDictCursor
        )
        return conn
    except psycopg2.OperationalError as e:
        print(e)
        sys.exit(1) 


def conectar_mongo():
   
    try:
        client = MongoClient(MONGO_CONNECTION_STRING)
        db = client[MONGO_DATABASE]
        client.admin.command("ping")
        return db
    except Exception as e:
        print(e)
        sys.exit(1)


def separador(titulo):
    print("\n" + "═" * 70)
    print(f"  {titulo}")
    print("═" * 70)

def sub_separador(titulo):
    print(f"\n  ── {titulo} ──")

def formatear_moneda(valor, moneda="COP"):
    if valor is None:
        return "Sin contrato activo"
    return f"$ {float(valor):,.0f} {moneda}"

def formatear_duracion(minutos_totales):
 
    horas = minutos_totales // 60
    mins  = minutos_totales % 60
    if horas > 0:
        return f"{horas}h {mins}min"
    return f"{mins}min"



def caso1_reporte_artista(pg_conn, mongo_db, artista_id=1):

    separador("CASO 1 · REPORTE DE UN ARTISTA Y SUS PRESENTACIONES")

    sql = """
        SELECT
            a.id_artista,
            a.nombre_artistico,
            a.genero,
            a.num_integrantes,
            u.nombre || ' ' || u.apellido   AS nombre_real,
            u.ciudad,
            pa.nombre                        AS pais,
            c.numero_contrato,
            c.cachet,
            c.moneda                         AS moneda_contrato,
            c.clausula,
            c.estado                         AS estado_contrato,
            c.fecha_firma::DATE              AS fecha_firma,
            c.fecha_vigencia::DATE           AS vigencia_desde,
            c.fecha_fin::DATE                AS vigencia_hasta,
            p.id_presentacion,
            p.fecha_presentacion,
            p.hora_inicio,
            p.hora_fin,
            p.estado                         AS estado_presentacion,
            r.rol_en_show,
            e.nombre                         AS escenario,
            e.capacidad_maxima
        FROM artista a
        JOIN usuario     u  ON u.id_usuario       = a.usuario_id
        JOIN pais        pa ON pa.codigo_iso       = u.pais_codigo_iso
        LEFT JOIN contrato c ON c.artista_id       = a.id_artista
                             AND c.estado          = 'activo'
        JOIN realizar    r  ON r.artista_id        = a.id_artista
        JOIN presentacion p ON p.id_presentacion   = r.presentacion_id
        JOIN escenarios  e  ON e.id_escenario      = p.escenario_id
        WHERE a.id_artista = %s
        ORDER BY p.fecha_presentacion, p.hora_inicio;
    """
   
    with pg_conn.cursor() as cur:
        cur.execute(sql, (artista_id,))
        filas = cur.fetchall()  

    if not filas:
        print(f"\nNo se encontró el artista.")
        return

    artista = filas[0]

    sub_separador("INFORMACIÓN DEL ARTISTA")
    print(f"  Nombre artístico : {artista['nombre_artistico']}")
    print(f"  Nombre real      : {artista['nombre_real']}")
    print(f"  Género           : {artista['genero'].replace('_', ' ').title()}")
    print(f"  Integrantes      : {artista['num_integrantes']}")
    print(f"  Origen           : {artista['ciudad']}, {artista['pais']}")
    if artista["numero_contrato"]:
        print(f"  Nº de contrato   : {artista['numero_contrato']}")
        print(f"  Cachet pactado   : {formatear_moneda(artista['cachet'], artista['moneda_contrato'])}")
        print(f"  Estado           : {artista['estado_contrato']}")
        print(f"  Firma            : {artista['fecha_firma']}")
        print(f"  Vigencia         : {artista['vigencia_desde']} al {artista['vigencia_hasta']}")
        print(f"  Cláusula         : {artista['clausula']}")
    else:
        print("  Sin contrato activo registrado")

    sub_separador("PRESENTACIONES PROGRAMADAS")
    presentacion_ids = [] 

    for fila in filas:
        pid = fila["id_presentacion"]
        presentacion_ids.append(pid)  
        print(
            f"  [{pid:02d}] {fila['fecha_presentacion']} "
            f"{fila['hora_inicio']}–{fila['hora_fin']} | "
            f"Escenario: {fila['escenario']} | "
            f"Rol: {fila['rol_en_show']} | "
            f"Estado: {fila['estado_presentacion']}"
        )

    sub_separador("SETLISTS COMPLETOS")

    setlists = list(
        mongo_db.setlists.find(
            {"id_presentacion_pg": {"$in": presentacion_ids}},
            {"_id": 0}
        ).sort("fecha", 1)
    )

    if not setlists:
        print("No se encontraron setlists para este artista")
    else:
        for sl in setlists:
            duracion_total = sum(c.get("duracion_min", 0) for c in sl["canciones"])

            print(f"\n  Presentación #{sl['id_presentacion_pg']} · {sl['fecha']} · {sl['escenario']}")
            print(f"     Duración total del set: {formatear_duracion(duracion_total)}")

            if sl.get("invitados_especiales"):
                print(f"     Invitados especiales : {', '.join(sl['invitados_especiales'])}")

            if sl.get("notas_director"):
                print(f"     Nota del director    : {sl['notas_director']}")

            print(f"     {'Orden':<6} {'Título':<40} {'Duración':>8}  Nota")
            print(f"     {'─'*6} {'─'*40} {'─'*8}  {'─'*20}")
            for cancion in sorted(sl["canciones"], key=lambda x: x["orden"]):
                nota = cancion.get("nota", "")
                print(
                    f"     {cancion['orden']:<6} "
                    f"{cancion['titulo']:<40} "
                    f"{str(cancion['duracion_min']) + ' min':>8}  {nota}"
                )


def caso2_panel_incidentes(pg_conn, mongo_db):
    
    separador("CASO 2 · PANEL DE INCIDENTES POR ESCENARIO")
    sql_escenarios = """
        SELECT
            e.id_escenario,
            e.nombre                                AS escenario,
            e.capacidad_maxima,
            e.ubicacion,
            COUNT(DISTINCT st.staff_id)             AS total_staff_asignado,
            STRING_AGG(
                DISTINCT u.nombre || ' ' || u.apellido || ' (' || r.nombre || ')',
                ', '
                ORDER BY u.nombre || ' ' || u.apellido || ' (' || r.nombre || ')'
            )                                       AS personal_asignado
        FROM escenarios e
        LEFT JOIN staff_turno st ON st.escenario_id = e.id_escenario
        LEFT JOIN staff      s  ON s.id_staff       = st.staff_id
        LEFT JOIN rol        r  ON r.id_rol          = s.rol_id
        LEFT JOIN usuario    u  ON u.id_usuario      = s.usuario_id
        GROUP BY e.id_escenario, e.nombre, e.capacidad_maxima, e.ubicacion
        ORDER BY e.id_escenario;
    """
    with pg_conn.cursor() as cur:
        cur.execute(sql_escenarios)
        escenarios_pg = {row["id_escenario"]: dict(row) for row in cur.fetchall()}
    pipeline_resumen = [
        {
            "$group": {
                "_id": {
                    "id_escenario": "$id_escenario_pg",
                    "escenario":    "$escenario"
                },
                "total_incidentes": {"$sum": 1},
                "resueltos": {
                    "$sum": {"$cond": [{"$eq": ["$estado", "resuelto"]}, 1, 0]}
                },
                "en_atencion": {
                    "$sum": {"$cond": [{"$eq": ["$estado", "en_atencion"]}, 1, 0]}
                },
                "abiertos": {
                    "$sum": {"$cond": [{"$eq": ["$estado", "abierto"]}, 1, 0]}
                },
                "alta_critica": {
                    "$sum": {
                        "$cond": [
                            {"$in": ["$gravedad", ["alta", "critica"]]}, 1, 0
                        ]
                    }
                }
            }
        },
        {
            "$addFields": {
                "pct_resolucion": {
                    "$round": [
                        {"$multiply": [
                            {"$divide": ["$resueltos", "$total_incidentes"]},
                            100
                        ]},
                        1
                    ]
                }
            }
        },
        {"$sort": {"total_incidentes": -1}}
    ]

    resumen_mongo = {
        doc["_id"]["id_escenario"]: doc
        for doc in mongo_db.reportes_incidentes.aggregate(pipeline_resumen)
    }
    incidentes_detalle = list(
        mongo_db.reportes_incidentes.find(
            {},
            {"_id": 0}
        ).sort([("gravedad", -1), ("fecha_reporte", -1)])
    )
  
    incidentes_por_escenario = {}
    for inc in incidentes_detalle:
        eid = inc["id_escenario_pg"]
        incidentes_por_escenario.setdefault(eid, []).append(inc)

   
    sub_separador("PANEL GENERAL")

    print(f"\n  {'Escenario':<22} {'Cap':>6}  {'Staff':>5}  {'Incidentes':>10}  {'Resueltos':>9}  {'Graves':>6}  {'% Res':>6}")
    print(f"  {'─'*22} {'─'*6}  {'─'*5}  {'─'*10}  {'─'*9}  {'─'*6}  {'─'*6}")

    for eid, esc in escenarios_pg.items():
        resumen = resumen_mongo.get(eid, {})
        total   = resumen.get("total_incidentes", 0)
        res     = resumen.get("resueltos", 0)
        graves  = resumen.get("alta_critica", 0)
        pct     = resumen.get("pct_resolucion", 0) if total > 0 else 100.0

        print(
            f"  {esc['escenario']:<22} "
            f"{esc['capacidad_maxima']:>6,}  "
            f"{esc['total_staff_asignado']:>5}  "
            f"{total:>10}  "
            f"{res:>9}  "
            f"{graves:>6}  "
            f"{pct:>5.1f}%"
        )
    for eid, esc in escenarios_pg.items():
        resumen   = resumen_mongo.get(eid, {})
        incidents = incidentes_por_escenario.get(eid, [])

        print(f"\n\n  ┌─── {esc['escenario'].upper()} ({'─' * (55 - len(esc['escenario']))}┐")
        print(f"  │  Ubicación   : {esc['ubicacion']}")
        print(f"  │  Capacidad   : {esc['capacidad_maxima']:,} personas")

        sub_separador(f"Resumen de incidentes")
        if resumen:
            print(f"    Total incidentes  : {resumen['total_incidentes']}")
            print(f"    Resueltos         : {resumen['resueltos']}")
            print(f"    En atención       : {resumen['en_atencion']}")
            print(f"    Abiertos          : {resumen['abiertos']}")
            print(f"    Alta/Crítica      : {resumen['alta_critica']}")
            print(f"    % Resolución      : {resumen['pct_resolucion']}%")
        else:
            print("Sin incidentes registrados")

        if incidents:
            sub_separador(f"Incidentes detallados ({len(incidents)} reportes)")
            for inc in incidents:
                
                fecha_str = inc["fecha_reporte"].strftime("%d/%m %H:%M") if isinstance(
                    inc["fecha_reporte"], datetime) else str(inc["fecha_reporte"])

                print(f"\n    [{inc['gravedad'].upper()}] {inc['tipo_incidente'].replace('_',' ').title()} · {fecha_str}")
                print(f"       Estado     : {inc['estado']}")
                print(f"       Descripción: {inc['descripcion']}")
                print(f"       Reportado  : {inc.get('reportado_por_rol', 'N/A').replace('_',' ').title()}")

                if inc.get("detalles"):
                    detalles_str = ", ".join(
                        f"{k}: {v}" for k, v in inc["detalles"].items()
                        if not isinstance(v, list)
                    )
                    if detalles_str:
                        print(f"       Detalles   : {detalles_str}")
                if inc.get("actualizaciones"):
                    print(f"       Historial  :")
                    for act in inc["actualizaciones"]:
                        hora_str = act["hora"].strftime("%d/%m %H:%M") if isinstance(
                            act["hora"], datetime) else str(act["hora"])
                        print(f"         [{hora_str}] {act['estado']:12} → {act['nota']}")


def caso3_asistente_resenas(pg_conn, mongo_db, asistente_id=1):
    
    separador(f"CASO 3 · ASISTENTE Y SUS RESEÑAS ")
 
    sql = """
        SELECT
            asi.id_asistente,
            u.nombre || ' ' || u.apellido   AS nombre_completo,
            u.email,
            u.ciudad,
            pa.nombre                        AS pais,
            asi.tipo_documento,
            asi.numero_documento
        FROM asistente   asi
        JOIN usuario     u   ON u.id_usuario    = asi.usuario_id
        JOIN pais        pa  ON pa.codigo_iso   = u.pais_codigo_iso
        WHERE asi.id_asistente = %s
        GROUP BY asi.id_asistente, u.nombre, u.apellido,
                 u.email, u.ciudad, pa.nombre,
                 asi.tipo_documento, asi.numero_documento;
    """
    with pg_conn.cursor() as cur:
        cur.execute(sql, (asistente_id,))
        asistente = cur.fetchone()
 
    if not asistente:
        print(f"\n  No se encontró el asistente")
        return
 
    sub_separador("DATOS DEL ASISTENTE")
    print(f"  Nombre      : {asistente['nombre_completo']}")
    print(f"  Email       : {asistente['email']}")
    print(f"  Origen      : {asistente['ciudad']}, {asistente['pais']}")
    print(f"  Documento   : {asistente['tipo_documento']} {asistente['numero_documento']}")
 

    sub_separador("RESEÑAS DEL FESTIVAL")
 
    resenas = list(
        mongo_db.resenas_publico.find(
            {"id_asistente_pg": asistente_id},
            {"_id": 0}
        ).sort("fecha_resena", -1)
    )
 
    if not resenas:
        print("Este asistente no escribió reseñas")
    else:
        print(f"  Total de reseñas: {len(resenas)}\n")
 
        for r in resenas:
        
            if r["tipo_resena"] == "presentacion":
                contexto = f"{r.get('nombre_artista', '?')} · {r.get('escenario', '?')}"
            elif r["tipo_resena"] == "artista":
                contexto = r.get("nombre_artista", "?")
            else:
                contexto = r.get("escenario", "?")
 
            cal = r["calificacion"]
            estrellas = "★" * cal + "☆" * (5 - cal)
 
            fecha_str = r["fecha_resena"].strftime("%d/%m/%Y %H:%M") if isinstance(
                r["fecha_resena"], datetime) else str(r["fecha_resena"])
 
            print(f"  [{r['tipo_resena'].upper()}] {contexto}")
            print(f"     Calificación : {estrellas} ({cal}/5)")
            print(f"     Fecha        : {fecha_str}")
            print(f"     Reseña       : {r['texto']}")
            if r.get("etiquetas"):
                print(f"     Etiquetas    : {' · '.join(r['etiquetas'])}")
            print()
 
 
 
def main():
    print("\n" + "█" * 70)
    print("  FESTIVAL ÉCHALE SALSITA")
    print("█" * 70)
 
    pg_conn  = None
    mongo_db = None
 
    try:
        pg_conn  = conectar_postgres()
        mongo_db = conectar_mongo()
  
        caso1_reporte_artista(pg_conn, mongo_db, artista_id=1)
 
        caso2_panel_incidentes(pg_conn, mongo_db)
 
        caso3_asistente_resenas(pg_conn, mongo_db, asistente_id=1)
 
    except Exception as e:
        print(e)
        raise
 
if __name__ == "__main__":
    main()