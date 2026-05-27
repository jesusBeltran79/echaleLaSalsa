#  Script de Integración · Nota

Antes de comenzar con la integracion deben haber ya ejecutado los scripts de MongoDB y PostgreSQL detallados en el README, si no lo ha hecho vaya a la carpeta principal de este proyecto y siga los pasos.

#  Script de Integración · Festival Échale Salsita

Instrucciones para instalar y ejecutar el script de integración Python que sigue la arquitectura poliglota uniendo las bases de datos  PostgreSQL y MongoDB en 3 casos de uso.

---

## ¿Qué hace este script?

Conecta simultáneamente a PostgreSQL (Neon) y MongoDB (Atlas), hace consultas en ambos motores y combina los resultados en Python. Demostrado en 3 casos:

| Caso | Pregunta de negocio |
|---|---|---|
| **Caso 1** | ¿Qué sabemos de un artista? Contrato + setlist completo | 
| **Caso 2** | ¿Cómo está la operación de cada escenario? Staff + incidentes | 
| **Caso 3** | ¿Quién es este asistente y qué opinó del festival? Perfil + reseñas | 

---

## Requisitos

- Python 3.8 o superior
- PostgreSQL y MongoDB ya cargados con los detalles del README 


---

## Instalación

**1. Ir a la carpeta de integración**
```bash
cd integracion/
```

**2. Crear entorno virtual** *(recomendado)*
```bash
# Crear
python -m venv venv

# Activar en Windows
venv\Scripts\activate

# Activar en Mac / Linux
source venv/bin/activate
```

**3. Instalar dependencias**
```bash
pip install -r ../requirements.txt
```

El archivo `requirements.txt` contiene:
```
fastapi==0.111.0
uvicorn==0.29.0
psycopg2-binary==2.9.9
pymongo==4.7.2
```

---

## Configuración de credenciales

Abre `integracion.py` y reemplaza las líneas marcadas con tus datos reales:

```python
PG_CONNECTION_STRING = "postgresql://USUARIO:CONTRASEÑA@HOST.neon.tech/echale_salsita?sslmode=require"

MONGO_CONNECTION_STRING = "mongodb+srv://USUARIO:CONTRASEÑA@cluster.mongodb.net/?retryWrites=true&w=majority"
```

**¿Cómo obtener cada string?**
- **Neon:** Dashboard → tu proyecto → botón **Connect** → *Connection string*
- **Atlas:** Cluster → botón **Connect** → *Connect your application* → copiar

---

## Ejecución

```bash
python integracion.py
```

### Salida esperada

```
██████████████████████████████████████████████████████████████████████
  FESTIVAL ÉCHALE SALSITA · INTEGRACIÓN POLÍGLOTA
  PostgreSQL + MongoDB · Bases de Datos 2 · El Bosque 2026-1
██████████████████████████████████████████████████████████████████████

══════════════════════════════════════════════════════════════════════
  CASO 1 · REPORTE DE UN ARTISTA Y SUS PRESENTACIONES
══════════════════════════════════════════════════════════════════════
  ── INFORMACIÓN DEL ARTISTA  ──
  Nombre artístico : Grupo Niche
  ...
  ── SETLISTS COMPLETOS  ──
   Presentación #1 · 2026-10-17 · Golden Clave
  ...

══════════════════════════════════════════════════════════════════════
  CASO 2 · PANEL DE INCIDENTES POR ESCENARIO
══════════════════════════════════════════════════════════════════════
  ...

══════════════════════════════════════════════════════════════════════
  CASO 3 · ASISTENTE Y SUS RESEÑAS 
══════════════════════════════════════════════════════════════════════
  ...
```

---

## Cambiar artista o asistente durante la demo

Para el **Caso 1**, edita la linea dentro del main `integracion.py`:
```python
caso1_reporte_artista(pg_conn, mongo_db, artista_id=1)
#                                                   ↑ cambia este número
```

IDs de artistas disponibles:

| ID | Artista | Escenario |
|---|---|---|
| 1 | Grupo Niche | Golden Clave |
| 2 | Gilberto Santa Rosa | Golden Clave |
| 3 | Joe Arroyo | Golden Clave |
| 4 | Los Van Van | Golden Clave |
| 5 | Choquibtown | Barrio Fuego |
| 6 | Marc Anthony | Barrio Fuego |
| 7 | Carlos Vives | Barrio Fuego |
| 9 | La EBRS | Luna Caribe |
| 10 | Rubén Blades | Luna Caribe |

Para el **Caso 3**, edita la línea siguiente:
```python
caso3_asistente_resenas(pg_conn, mongo_db, asistente_id=1)
#                                                        ↑ del 1 al 35
```

---

## Descripción técnica de cada caso

### Caso 1 — Artista + Setlist (Patrón 2: secuencial dependiente)

PostgreSQL aporta el contrato del artista (cachet, cláusulas, vigencia) y sus presentaciones programadas (escenario, fecha, horario, rol). Con los `id_presentacion` obtenidos, se consulta MongoDB usando el operador `$in` para traer los setlists: canciones, duración, invitados especiales y notas del director.

**Llave de integración:** `presentacion.id_presentacion` (PostgreSQL) ↔ `setlists.id_presentacion_pg` (MongoDB)

### Caso 2 — Panel de incidentes (Patrón 3: agregación combinada)

PostgreSQL aporta los escenarios con su capacidad y el staff asignado, obtenido con `STRING_AGG` para agrupar el personal en una sola fila por escenario. MongoDB aporta un aggregation pipeline con `$group` y `$addFields` que calcula total de incidentes, resueltos, en atención y porcentaje de resolución. Python cruza ambos resultados usando `id_escenario` como llave.

**Llave de integración:** `escenarios.id_escenario` (PostgreSQL) ↔ `reportes_incidentes.id_escenario_pg` (MongoDB)

### Caso 3 — Asistente + Reseñas (Patrón 2: secuencial dependiente)

PostgreSQL aporta el perfil del asistente: nombre, ciudad, país, número de compras realizadas y total gastado. Con el `id_asistente` obtenido, se consulta MongoDB para traer todas sus reseñas del festival — sobre presentaciones específicas, artistas y escenarios — ordenadas por fecha descendente.

**Llave de integración:** `asistente.id_asistente` (PostgreSQL) ↔ `resenas_publico.id_asistente_pg` (MongoDB)





