-- PROCEDIMIENTO 1: Reporte de ventas por día y por escenario

CREATE OR REPLACE FUNCTION sp_reporte_ventas_por_dia_escenario(
    p_fecha DATE DEFAULT NULL   -- NULL = reporte de todos los días
)
RETURNS TABLE (
    fecha_evento        DATE,
    escenario           VARCHAR,
    tipo_boleta         VARCHAR,
    zona                VARCHAR,
    boletas_vendidas    BIGINT,
    cupo_disponible     INTEGER,
    cupo_restante       INTEGER,
    porcentaje_ocupacion NUMERIC(5,2),
    ingresos_totales    NUMERIC(14,2),
    moneda              VARCHAR
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        eb.fecha_evento,
        e.nombre                                        AS escenario,
        tb.nombre                                       AS tipo_boleta,
        tb.zona,
        eb.cupo_vendido::BIGINT                         AS boletas_vendidas,
        eb.cupo_disponible,
        (eb.cupo_disponible - eb.cupo_vendido)          AS cupo_restante,
        ROUND(
            (eb.cupo_vendido::NUMERIC / eb.cupo_disponible) * 100, 2
        )                                               AS porcentaje_ocupacion,
        (eb.cupo_vendido * tb.precio)                   AS ingresos_totales,
        tb.moneda
    FROM esc_bol eb
    JOIN escenarios  e  ON e.id_escenario    = eb.escenario_id
    JOIN tipo_boleta tb ON tb.id_tipo_boleta = eb.tipo_boleta_id
    WHERE (p_fecha IS NULL OR eb.fecha_evento::DATE = p_fecha)
    ORDER BY eb.fecha_evento, e.nombre, tb.zona DESC;
END;
$$ LANGUAGE plpgsql;


-- PROCEDIMIENTO 2: Cálculo de pagos a artistas según contrato

CREATE OR REPLACE FUNCTION sp_pagos_artistas(
    p_estado_contrato VARCHAR DEFAULT 'activo'
)
RETURNS TABLE (
    id_artista          INTEGER,
    nombre_artistico    VARCHAR,
    pais_origen         VARCHAR,
    num_presentaciones  BIGINT,
    numero_contrato     INTEGER,
    estado_contrato     VARCHAR,
    cachet              NUMERIC(14,2),
    moneda_pago         VARCHAR,
    cachet_en_cop       NUMERIC(14,2),
    fecha_fin_contrato  TIMESTAMP
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        a.id_artista,
        a.nombre_artistico,
        p.nombre                                  AS pais_origen,
        COUNT(DISTINCT r.presentacion_id)::BIGINT AS num_presentaciones,
        c.numero_contrato,
        c.estado                                  AS estado_contrato,
        c.cachet,
        c.moneda                                  AS moneda_pago,

        CASE
            WHEN c.moneda = 'USD'
                THEN ROUND(c.cachet * 4200, 2)
            ELSE c.cachet
        END                                       AS cachet_en_cop,

        c.fecha_fin

    FROM artista a

    JOIN usuario u
        ON u.id_usuario = a.usuario_id

    JOIN pais p
        ON p.codigo_iso = u.pais_codigo_iso

    JOIN contrato c
        ON c.artista_id = a.id_artista

    LEFT JOIN realizar r
        ON r.artista_id = a.id_artista

    WHERE c.estado = p_estado_contrato

    GROUP BY
        a.id_artista,
        a.nombre_artistico,
        p.nombre,
        c.numero_contrato,
        c.estado,
        c.cachet,
        c.moneda,
        c.fecha_fin

    ORDER BY cachet_en_cop DESC;
END;
$$ LANGUAGE plpgsql;
