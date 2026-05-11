# Echale Salsita 2026 — Festival Internacional de Salsa
### Bases de Datos II · 2026-1 · Avance 1

Bogotá, Colombia · 17 y 18 de octubre de 2026

---
## Descripción

Este repositorio contiene el núcleo transaccional del sistema de gestión del festival Echale Salsita 2026, desarrollado en PostgreSQL como primer avance del proyecto integrador de Bases de Datos II. Incluye el modelo de datos completo, los scripts de creación, datos de prueba, triggers, procedimientos almacenados y consultas analíticas.

---

## Requisitos previos

Antes de ejecutar cualquier script necesitas tener lo siguiente:

- Una cuenta activa en Neon (https://neon.tech). Si no tienes cuenta, puedes registrarte gratis con tu correo o con tu cuenta de GitHub.
- Un proyecto creado en Neon con una base de datos PostgreSQL. El plan gratuito es suficiente para este proyecto.
- Los archivos SQL de este repositorio descargados en tu computador.

---

## Como ejecutar los scripts en Neon

### Paso 1 — Crear el proyecto en Neon

Ingresa a tu cuenta en https://console.neon.tech y crea un nuevo proyecto. Puedes llamarlo echale-salsita o como prefieras. Neon creará automáticamente una base de datos llamada neondb y te dará una cadena de conexión. No necesitas cambiar nada de eso por ahora.

### Paso 2 — Abrir el SQL Editor

Una vez dentro de tu proyecto en Neon, en el menú de la izquierda encontrarás la opción SQL Editor. Haz clic ahí. Es el lugar donde vas a pegar y ejecutar todos los scripts.

### Paso 3 — Ejecutar los scripts en orden

Este es el punto más importante: los scripts deben ejecutarse en un orden específico porque cada uno depende del anterior. Si los ejecutas en otro orden vas a ver errores de tablas o referencias que no existen todavía.

El orden correcto es el siguiente:

**1. creacion_tablas.sql**

Copia todo el contenido de este archivo, pégalo en el SQL Editor de Neon y haz clic en el botón Run. Este script crea las 17 tablas del sistema con todas sus restricciones, llaves foráneas e índices. También incluye un bloque DROP TABLE al inicio, lo que significa que puedes ejecutarlo cuantas veces quieras para empezar desde cero sin errores.

**2. datos_prueba.sql**

Copia y pega el contenido de este archivo en el SQL Editor y ejecútalo. Inserta 383 registros distribuidos en todas las tablas, incluyendo los 12 artistas principales del festival, 35 asistentes, 40 ventas y 60 boletas.

**3. artistas_adicionales.sql**

Copia y pega el contenido de este archivo y ejecútalo. Agrega 18 artistas mas para completar los 30 requeridos, incluyendo a Victor Manuelle, Eddie Santiago, Willie Colon, India, entre otros.

**4. triggers.sql**

Copia y pega el contenido de este archivo y ejecútalo. Crea los 4 triggers del sistema y también genera automáticamente la tabla de auditoría que usa uno de ellos.

**5. procedimientos.sql**

Copia y pega el contenido de este archivo y ejecútalo. Crea los 3 procedimientos almacenados del sistema.

**6. consultas.sql**

Este archivo contiene las 3 consultas analíticas del proyecto. A diferencia de los anteriores, no necesitas ejecutarlas todas juntas. Puedes copiar cada consulta por separado en el SQL Editor y ejecutarlas individualmente para ver los resultados.

---

## Como probar que todo quedo bien

Después de ejecutar los cinco primeros scripts, puedes pegar estas consultas en el SQL Editor para confirmar que todo esta en orden:

```sql
-- Verificar que las tablas fueron creadas
SELECT table_name
  FROM information_schema.tables
 WHERE table_schema = 'public'
 ORDER BY table_name;
```
Deberías ver 18 tablas en la lista (17 del modelo mas la tabla de auditoría que crea el trigger).

```sql
-- Verificar conteo de registros en las tablas principales
SELECT 'artista'      AS tabla, COUNT(*) AS registros FROM artista      UNION ALL
SELECT 'asistente',             COUNT(*)              FROM asistente     UNION ALL
SELECT 'presentacion',          COUNT(*)              FROM presentacion  UNION ALL
SELECT 'venta',                 COUNT(*)              FROM venta         UNION ALL
SELECT 'boleta',                COUNT(*)              FROM boleta;
```
Deberías ver: 30 · 35 · 24 · 40 · 60.

---

## Como usar los procedimientos almacenados

Una vez ejecutado el script de procedimientos, puedes llamarlos directamente desde el SQL Editor de Neon así:

```sql
-- Reporte de ventas de todos los días del festival
SELECT * FROM sp_reporte_ventas_por_dia_escenario();

-- Reporte de ventas solo del sábado 17 de octubre
SELECT * FROM sp_reporte_ventas_por_dia_escenario('2026-10-17');

-- Liquidación de pagos a artistas
SELECT * FROM sp_pagos_artistas();

-- Registrar una venta nueva (asistente 1, boleta VIP Día, pago con Nequi, 2 unidades)
SELECT * FROM sp_registrar_venta(1, 2, 5, 2);
```
---

## Solución a errores frecuentes

**Las tablas ya existen y da error al crear**
Ejecuta nuevamente el script creacion_tablas.sql desde el principio. El bloque DROP TABLE al inicio se encarga de eliminar todo y volver a crearlo limpio.

**Error de llave foránea al insertar datos**
Significa que los scripts se ejecutaron en orden incorrecto. Vuelve a ejecutar creacion_tablas.sql para limpiar y repite el proceso desde el paso 1.

**El SQL Editor de Neon muestra un error en rojo pero sigue funcionando**
Algunos avisos en Neon son advertencias, no errores. Si el botón Run termina y ves filas afectadas en la parte inferior, el script se ejecutó correctamente.

---
