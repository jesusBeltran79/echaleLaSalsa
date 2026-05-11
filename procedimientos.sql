
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
    WHERE (p_fecha IS NULL OR eb.fecha_evento = p_fecha)
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
        p.nombre                                        AS pais_origen,
        COUNT(DISTINCT r.presentacion_id)::BIGINT       AS num_presentaciones,
        c.numero_contrato,
        c.estado                                        AS estado_contrato,
        dc.cachet,
        pa.moneda                                       AS moneda_pago,
        -- Conversión aproximada a COP (tasa referencial 1 USD = 4200 COP)
        CASE
            WHEN pa.moneda = 'USD' THEN ROUND(dc.cachet * 4200, 2)
            ELSE dc.cachet
        END                                             AS cachet_en_cop,
        c.fecha_fin
    FROM artista a
    JOIN usuario  u  ON u.id_usuario      = a.usuario_id
    JOIN pais     p  ON p.codigo_iso      = u.pais_codigo_iso
    JOIN pais     pa ON pa.codigo_iso     = u.pais_codigo_iso
    JOIN contrato c  ON c.artista_id      = a.id_artista
    JOIN detalle_contrato dc ON dc.contrato_id = c.numero_contrato
    LEFT JOIN realizar r ON r.artista_id  = a.id_artista
    WHERE c.estado = p_estado_contrato
    GROUP BY
        a.id_artista, a.nombre_artistico, p.nombre,
        c.numero_contrato, c.estado, dc.cachet,
        pa.moneda, c.fecha_fin
    ORDER BY cachet_en_cop DESC;
END;
$$ LANGUAGE plpgsql;



-- PROCEDIMIENTO 3: Registrar venta completa con boletas
CREATE OR REPLACE FUNCTION sp_registrar_venta(
    p_asistente_id    INTEGER,
    p_tipo_boleta_id  INTEGER,
    p_metodo_pago_id  INTEGER,
    p_cantidad        INTEGER
)
RETURNS TABLE (
    id_venta_creada   INTEGER,
    boletas_emitidas  INTEGER,
    total_cobrado     NUMERIC(14,2),
    mensaje           TEXT
) AS $$
DECLARE
    v_precio          NUMERIC(12,2);
    v_total           NUMERIC(14,2);
    v_id_venta        INTEGER;
    v_codigo_boleta   VARCHAR(50);
    v_i               INTEGER;
    v_timestamp       VARCHAR(20);
BEGIN
    SELECT precio INTO v_precio
      FROM tipo_boleta
     WHERE id_tipo_boleta = p_tipo_boleta_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Tipo de boleta % no existe', p_tipo_boleta_id;
    END IF;

    v_total := v_precio * p_cantidad;
    v_timestamp := TO_CHAR(NOW(), 'YYYYMMDDHH24MISS');

    INSERT INTO venta (
        asistente_id, metodo_pago_id,
        cantidad, total, estado
    )
    VALUES (
        p_asistente_id, p_metodo_pago_id,
        p_cantidad, v_total, 'completada'
    )
    RETURNING id_venta INTO v_id_venta;

    FOR v_i IN 1..p_cantidad LOOP
        v_codigo_boleta := 'ES2026-' ||
                           LPAD(p_tipo_boleta_id::TEXT, 2, '0') || '-' ||
                           v_timestamp || '-' ||
                           LPAD(v_i::TEXT, 3, '0') || '-' ||
                           LPAD(v_id_venta::TEXT, 5, '0');

        INSERT INTO boleta (tipo_boleta_id, venta_id, codigo, estado)
        VALUES (p_tipo_boleta_id, v_id_venta, v_codigo_boleta, 'activa');
    END LOOP;

    RETURN QUERY
    SELECT
        v_id_venta,
        p_cantidad,
        v_total,
        'Venta registrada exitosamente. ' ||
        p_cantidad || ' boleta(s) emitida(s).'::TEXT;

EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Error al registrar venta: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;
