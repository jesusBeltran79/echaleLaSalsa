# 🎺 Festival Échale Salsita · Proyecto Integrador BD2
**Repositorio:** https://github.com/jesusBeltran79/echaleLaSalsa
**E-Portafolio**
https://e-portafolio-bd2.42web.io
---

## ¿Qué es este proyecto?

Sistema de gestión de datos para el festival de música **Échale Salsita**, implementado con arquitectura de **persistencia políglota**: dos motores de base de datos que cada uno resuelve lo que mejor sabe hacer, integrados por un script Python.

| Motor | Tecnología | Responsabilidad |
|---|---|---|
| Relacional | PostgreSQL · Neon | Datos transaccionales: contratos, ventas, boletas, escenarios, staff, artistas, asistentes, presentaciones |
| Documental | MongoDB · Atlas | Datos flexibles: setlists, riders técnicos, reseñas, incidentes |
| Integración | Python  | Cruza ambos motores en 3 casos de uso reales |

---

## Estructura del repositorio

```
EntregaFinal_Festival_Festival2/
│
├── scripts_postgresql/
│   ├── creacion_tablas.sql      ← ejecutar primero
│   ├── datos_prueba.sql         ← ejecutar segundo
│   ├── triggers.sql             ← ejecutar tercero
│   ├── procedimientos.sql       ← ejecutar cuarto  
│   └── consultas.sql            ← opcional, para verificar datos
│
├── scripts_mongodb/
│   ├── creacion_colecciones.js  ← ejecutar primero
│   ├── datos_prueba.js          ← ejecutar segundo
│   └── consultas.js             ← opcional, para verificar datos
│
├── integracion/
│   ├── integracion.py           ← script de integración Python
│   └── README_integracion.md    ← instrucciones de ejecución del script
│
│
└── README.md                    ← este archivo
```

---

## Ejecución paso a paso

### PostgreSQL en Neon

Entra al SQL Editor de tu proyecto en [neon.tech](https://neon.tech) y ejecuta los scripts **en este orden exacto**:

**1. Crear las tablas**
```sql
-- Copia y pega el contenido de scripts_postgresql/creacion_tablas.sql
```

**2. Insertar datos de prueba**
```sql
-- Copia y pega el contenido de scripts_postgresql/datos_prueba.sql
```
Inserta artistas, contratos, escenarios, staff, asistentes, ventas, boletas del festival, etc.

**3. Crear los triggers**
```sql
-- Copia y pega el contenido de scripts_postgresql/triggers.sql
```
Activa los 4 triggers de negocio: control de aforo, auditoría de presentaciones, validación de método de pago y cálculo automático de totales.

**4. Crear procedimientos y funciones**
```sql
-- Copia y pega el contenido de scripts_postgresql/procedimientos.sql
```
Crea las 2 funciones auxiliares  y los 2 procedimientos almacenados.

**6. (Opcional) Verificar con las consultas**
```sql
-- Copia y pega el contenido de scripts_postgresql/consultas.sql
```
Ejecuta las 3 consultas avanzadas para confirmar que los datos y estructuras están correctos.

> **Si necesitas empezar de cero en Neon:**
> ```sql
> DROP SCHEMA public CASCADE;
> CREATE SCHEMA public;
> ```
> Luego vuelve al paso 1.

---

### MongoDB en Atlas

Abre **MongoDB Compass** o **mongosh** conectado a tu cluster de Atlas y ejecuta los scripts en este orden:

**1. Crear colecciones con validadores e índices**
```javascript
load("scripts_mongodb/creacion_colecciones.js")
```
Crea las 4 colecciones (`setlists`, `riders_tecnicos`, `resenas_publico`, `reportes_incidentes`) con sus `$jsonSchema` validators e índices.

**2. Insertar datos de prueba**
```javascript
load("scripts_mongodb/datos_prueba.js")
```

**3. (Opcional) Verificar con las consultas**
```javascript
load("scripts_mongodb/consultas.js")
```
Ejecuta las 3 queries para confirmar que los datos están correctos.

> Si usas **mongosh desde terminal**:
> ```bash
> mongosh "mongodb+srv://USUARIO:CONTRASEÑA@cluster.mongodb.net/echale_salsita" \
>   --file scripts_mongodb/creacion_colecciones.js
> mongosh "mongodb+srv://USUARIO:CONTRASEÑA@cluster.mongodb.net/echale_salsita" \
>   --file scripts_mongodb/datos_prueba.js
> ```

---

### Script de integración Python

Para ejecutar los 3 casos de integración PostgreSQL + MongoDB, consulta las instrucciones detalladas en:


---

## Descripción de los scripts SQL

### `creacion_tablas.sql`
Define las 17 tablas del sistema con todas sus restricciones. Las entidades principales son `artista`, `contrato`, `escenarios`, `presentacion`, `boleta`, `venta`, `asistente` y `staff`. Cada tabla tiene su `PRIMARY KEY`, y las relaciones entre tablas están modeladas con `FOREIGN KEY` y restricciones `CHECK` para garantizar integridad de datos.

### `datos_prueba.sql`
Inserta datos realistas del festival:  artistas internacionales, 3 escenarios (Golden Clave, Barrio Fuego, Luna Caribe), contratos con cachets en COP y USD,  asistentes, ventas de boletas para ambos días del festival (17 y 18 de octubre de 2026) y asignaciones de staff.

### `triggers.sql`

| Trigger | Tabla | Evento | Propósito |
|---|---|---|---|
| `trg_actualizar_cupo` | `boleta` | INSERT / UPDATE | Gestión automática de aforo — evita sobreventa |
| `trg_auditoria_presentacion` | `presentacion` | UPDATE | Registra campo a campo cualquier cambio en el cronograma |
| `trg_validar_metodo_pago` | `venta` | BEFORE INSERT | Bloquea ventas con métodos de pago inactivos |
| `trg_actualizar_total_venta` | `boleta` | AFTER INSERT | Calcula automáticamente el total de cada venta |

### `procedimientos.sql`
Contiene 5 funciones PL/pgSQL y 2 procedimientos almacenados:

**Procedimientos:**
- `sp_reporte_ventas(fecha, escenario_id)` → reporte de ventas por día y escenario.
- `sp_calcular_pagos(artista_id, tasa_usd_cop, forzar)` → calcula el pago a artistas según contrato

```sql
-- Ejemplos de invocación
BEGIN;

CALL sp_reporte_ventas_por_dia_escenario(
    '2026-10-01',
    '2026-10-31',
    null,
    'cur_reporte_ventas'
);

FETCH ALL FROM cur_reporte_ventas;

COMMIT;      -- todos los días, todos los escenarios
BEGIN;

CALL sp_reporte_ventas_por_dia_escenario(
    '2026-10-01',
    '2026-10-31',
    1,
    'cur_reporte_ventas'
);

FETCH ALL FROM cur_reporte_ventas;

COMMIT;                 -- solo Golden Clave
BEGIN;

CALL sp_calcular_pagos_artistas_contrato(
    '2026-10-01',
    '2026-12-31',
    NULL,
    'cur_pagos_artistas'
);

FETCH ALL FROM cur_pagos_artistas;

COMMIT;                -- calcular pagos de todos los artistas
BEGIN;

CALL sp_calcular_pagos_artistas_contrato(
    '2026-10-01',
    '2026-12-31',
    NULL,
    'cur_pagos_artistas'
);

FETCH ALL FROM cur_pagos_artistas;

COMMIT;                  -- calcular pago de 1 artista.
```

## Descripción de los scripts MongoDB

### `creacion_colecciones.js`
Crea las 4 colecciones con validación `$jsonSchema` e índices:
- `setlists` — setlists de cada presentación con canciones y duración
- `riders_tecnicos` — requisitos técnicos y de hospitalidad por artista
- `resenas_publico` — reseñas del público sobre presentaciones, artistas y escenarios
- `reportes_incidentes` — incidentes del festival con historial de actualizaciones embebido

### `datos_prueba.js`
Inserta datos  coherentes con el festival: setlists de los artistas, riders técnicos detallados (consolas, micrófonos, riders de camerino),  reseñas del público con calificaciones y etiquetas, y incidentes distribuidos en los 3 escenarios con su historial de resolución.


