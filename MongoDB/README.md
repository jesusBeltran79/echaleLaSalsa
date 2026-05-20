
# AVANCE 2 ¡Échale Salsita! 2026
---

Este avance contiene la informacion necesaria
para la creación, carga y consulta de datos
en MongoDB.

---
## ORDEN DE EJECUCIÓN
### (IMPORTANTE EJECUTAR EN ESTE ORDEN)

1. creacion_colecciones.js
   - Crea la base de datos
   - Genera las colecciones
   - Define validaciones y estructura inicial

2. datos_prueba.js
   - Inserta documentos de prueba
   - Agrega datos de ejemplo a las colecciones

3. consultas.js
   - Ejecuta consultas de prueba
   - Realiza búsquedas, agregaciones y validaciones

---
## REQUISITOS

- MongoDB instalado
o
- MongoDB Atlas configurado

Herramientas recomendadas:
- MongoDB Compass
- Mongo Shell (mongosh)

---
## EJECUCIÓN EN MONGOSH

use echale_salsita

load("creacion_colecciones.js")
load("datos_prueba.js")
load("consultas.js")

---
## NOTAS

- Ejecutar primero la creación de colecciones.
- No ejecutar consultas antes de insertar datos.
- Algunas consultas dependen de documentos previamente cargados.

========================================
