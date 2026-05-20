
use("echale_salsita");
print("=======================================================");
print("CONSULTA 1: Programación Golden Clave — Sábado 17");
print("=======================================================");

db.setlists.find(
  {
    id_escenario_pg: 1,
    fecha: "2026-10-17"
  },
  {
    _id: 0,
    nombre_artista: 1,
    fecha: 1,
    "canciones.orden": 1,
    "canciones.titulo": 1,
    "canciones.duracion_min": 1,
    invitados_especiales: 1,
    notas_director: 1
  }
).sort({ "canciones.orden": 1 });

print("=======================================================");
print("CONSULTA 2: Ranking de artistas por calificación");
print("=======================================================");

db.resenas_publico.aggregate([
  {
    $match: {
      tipo_resena: { $in: ["artista", "presentacion"] },
      id_artista_pg: { $exists: true }
    }
  },
  {
    $group: {
      _id: {
        id_artista: "$id_artista_pg",
        nombre:     "$nombre_artista"
      },
      promedio_calificacion: { $avg: "$calificacion" },
      total_resenas:         { $sum: 1 },
      calificaciones:        { $push: "$calificacion" },
      todas_etiquetas:       { $push: "$etiquetas" }
    }
  },
  {
    $addFields: {
      promedio_redondeado: { $round: ["$promedio_calificacion", 2] },
      clasificacion: {
        $cond: {
          if:   { $gte: ["$promedio_calificacion", 4.8] },
          then: "Excepcional",
          else: {
            $cond: {
              if:   { $gte: ["$promedio_calificacion", 4.5] },
              then: "Excelente",
              else: {
                $cond: {
                  if:   { $gte: ["$promedio_calificacion", 4.0] },
                  then: "Muy bueno",
                  else: "Bueno"
                }
              }
            }
          }
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      id_artista_pg:        "$_id.id_artista",
      nombre_artista:       "$_id.nombre",
      promedio_calificacion: "$promedio_redondeado",
      total_resenas:         1,
      clasificacion:         1
    }
  },
  {
    $sort: {
      promedio_calificacion: -1,
      total_resenas: -1
    }
  }
]);

print("=======================================================");
print("CONSULTA 3: Panel de incidentes por escenario");
print("=======================================================");

db.reportes_incidentes.aggregate([
  {
    $group: {
      _id: {
        escenario:    "$escenario",
        id_escenario: "$id_escenario_pg"
      },
      total_incidentes: { $sum: 1 },
      resueltos: {
        $sum: {
          $cond: [{ $eq: ["$estado", "resuelto"] }, 1, 0]
        }
      },
      en_atencion: {
        $sum: {
          $cond: [{ $eq: ["$estado", "en_atencion"] }, 1, 0]
        }
      },
      alta_gravedad: {
        $sum: {
          $cond: [
            { $in: ["$gravedad", ["alta", "critica"]] },
            1,
            0
          ]
        }
      },
      tipos_incidente: { $push: "$tipo_incidente" },
      gravedades:      { $push: "$gravedad" }
    }
  },
  {
    $addFields: {
      pct_resolucion: {
        $round: [
          { $multiply: [
              { $divide: ["$resueltos", "$total_incidentes"] },
              100
          ]},
          1
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      escenario:         "$_id.escenario",
      id_escenario_pg:   "$_id.id_escenario",
      total_incidentes:  1,
      resueltos:         1,
      en_atencion:       1,
      alta_gravedad:     1,
      pct_resolucion:    1,
      tipos_registrados: "$tipos_incidente"
    }
  },
  {
    $sort: { total_incidentes: -1 }
  }
]);
