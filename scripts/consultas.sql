

-- CONSULTA 1: Programación completa del festival con artistas, escenario, horario y cachet 
-- por presentación


SELECT
    e.nombre                                        AS escenario,
    p.fecha_presentacion                            AS fecha,
    p.hora_inicio,
    p.hora_fin,
    a.nombre_artistico                              AS artista,
    r.rol_en_show,
    u.ciudad                                        AS ciudad_origen,
    pai.nombre                                      AS pais,
    p.estado                                        AS estado_presentacion,
    (
        SELECT dc.cachet
          FROM contrato    c
          JOIN detalle_contrato dc ON dc.contrato_id = c.numero_contrato
         WHERE c.artista_id = a.id_artista
           AND c.estado     = 'activo'
         LIMIT 1
    )                                               AS cachet,
    (
        SELECT pai2.moneda
          FROM contrato c2
          JOIN usuario  u2  ON u2.id_usuario  = a.usuario_id
          JOIN pais     pai2 ON pai2.codigo_iso = u2.pais_codigo_iso
         WHERE c2.artista_id = a.id_artista
         LIMIT 1
    )                                               AS moneda_cachet

FROM presentacion  p
JOIN realizar r   ON r.presentacion_id = p.id_presentacion
JOIN artista a   ON a.id_artista = r.artista_id
JOIN usuario u   ON u.id_usuario = a.usuario_id
JOIN pais pai ON pai.codigo_iso = u.pais_codigo_iso
JOIN escenarios e   ON e.id_escenario = p.escenario_id

ORDER BY
    e.nombre,
    p.fecha_presentacion,
    p.hora_inicio,
    r.rol_en_show DESC;   

-- CONSULTA 2: Ranking de asistentes por gasto total,
-- con detalle de boletas y métodos de pago usados

SELECT
    RANK() OVER (ORDER BY SUM(v.total) DESC)        AS posicion,
    u.nombre || ' ' || u.apellido                   AS asistente,
    u.ciudad,
    pai.nombre                                      AS pais,
    COUNT(DISTINCT v.id_venta)                      AS num_transacciones,
    SUM(v.cantidad)                                 AS total_boletas,
    SUM(v.total)                                    AS gasto_total_cop,
    STRING_AGG(DISTINCT tb.nombre, ' | '
               ORDER BY tb.nombre)                  AS tipos_boleta_comprados,
    STRING_AGG(DISTINCT mp.nombre, ', '
               ORDER BY mp.nombre)                  AS metodos_pago_usados,
    ROUND(AVG(v.total), 0)                          AS promedio_por_transaccion,
    MIN(v.fecha_hora_venta)::DATE                   AS primera_compra,
    MAX(v.fecha_hora_venta)::DATE                   AS ultima_compra

FROM asistente   asi
JOIN usuario     u   ON u.id_usuario      = asi.usuario_id
JOIN pais        pai ON pai.codigo_iso    = u.pais_codigo_iso
JOIN venta       v   ON v.asistente_id   = asi.id_asistente
JOIN boleta      b   ON b.venta_id       = v.id_venta
JOIN tipo_boleta tb  ON tb.id_tipo_boleta = b.tipo_boleta_id
JOIN metodo_pago mp  ON mp.id_metodo_pago = v.metodo_pago_id

WHERE v.estado = 'completada'   -- excluir ventas anuladas

GROUP BY
    asi.id_asistente,
    u.nombre, u.apellido,
    u.ciudad, pai.nombre

HAVING SUM(v.total) > 0

ORDER BY gasto_total_cop DESC
LIMIT 20;



-- CONSULTA 3: Análisis de ocupación y rentabilidad por escenario
-- comparado contra la media del festival

WITH totales_por_escenario AS (
    SELECT
        e.id_escenario,
        e.nombre                                    AS escenario,
        e.capacidad_maxima,
        eb.fecha_evento,
        SUM(eb.cupo_vendido)                        AS total_boletas_vendidas,
        SUM(eb.cupo_disponible)                     AS total_cupo_ofertado,
        SUM(eb.cupo_vendido * tb.precio)            AS ingresos_escenario,
        ROUND(
            SUM(eb.cupo_vendido)::NUMERIC
            / NULLIF(e.capacidad_maxima, 0) * 100
        , 2)                                        AS pct_ocupacion

    FROM esc_bol     eb
    JOIN escenarios  e  ON e.id_escenario    = eb.escenario_id
    JOIN tipo_boleta tb ON tb.id_tipo_boleta = eb.tipo_boleta_id

    GROUP BY
        e.id_escenario, e.nombre,
        e.capacidad_maxima, eb.fecha_evento
),

media_festival AS (
    SELECT
        ROUND(AVG(pct_ocupacion), 2)                AS media_pct_ocupacion,
        ROUND(AVG(ingresos_escenario), 0)           AS media_ingresos
    FROM totales_por_escenario
)

SELECT
    t.escenario,
    t.fecha_evento                                  AS dia_festival,
    t.capacidad_maxima,
    t.total_boletas_vendidas,
    t.total_cupo_ofertado,
    (t.total_cupo_ofertado - t.total_boletas_vendidas)
                                                    AS cupos_restantes,
    t.pct_ocupacion                                 AS ocupacion_pct,
    m.media_pct_ocupacion                           AS media_festival_pct,
    ROUND(t.pct_ocupacion - m.media_pct_ocupacion, 2)
                                                    AS diff_vs_media_pct,
    t.ingresos_escenario                            AS ingresos_cop,
    m.media_ingresos                                AS media_ingresos_festival,
    CASE
        WHEN t.pct_ocupacion >= m.media_pct_ocupacion * 1.10
            THEN '🟢 Sobre la media (+10%)'
        WHEN t.pct_ocupacion >= m.media_pct_ocupacion
            THEN '🟡 En la media'
        WHEN t.pct_ocupacion >= m.media_pct_ocupacion * 0.90
            THEN '🟠 Ligeramente bajo (-10%)'
        ELSE
            '🔴 Bajo rendimiento'
    END                                             AS clasificacion

FROM totales_por_escenario t
CROSS JOIN media_festival  m

ORDER BY
    t.fecha_evento,
    t.pct_ocupacion DESC;

