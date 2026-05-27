
/* ============================================================
   1) FUNCIÓN: reporte de ventas por día y por escenario
   2) PROCEDIMIENTO: abre un cursor con el mismo reporte
   ============================================================ */

CREATE OR REPLACE FUNCTION fn_reporte_ventas_por_dia_escenario(
    p_fecha_desde   DATE DEFAULT NULL,
    p_fecha_hasta   DATE DEFAULT NULL,
    p_escenario_id  INTEGER DEFAULT NULL
)
RETURNS TABLE (
    fecha_evento        DATE,
    id_escenario        INTEGER,
    escenario           VARCHAR(100),
    ventas_realizadas   BIGINT,
    boletas_vendidas    BIGINT,
    total_facturado     NUMERIC(14,2)
)
LANGUAGE plpgsql
AS $$
BEGIN

    IF p_fecha_desde IS NOT NULL
       AND p_fecha_hasta IS NOT NULL
       AND p_fecha_desde > p_fecha_hasta THEN

        RAISE EXCEPTION
            'La fecha inicial (%) no puede ser mayor que la final (%)',
            p_fecha_desde,
            p_fecha_hasta;

    END IF;

    IF p_escenario_id IS NOT NULL
       AND NOT EXISTS (
            SELECT 1
            FROM escenarios e
            WHERE e.id_escenario = p_escenario_id
       ) THEN

        RAISE EXCEPTION
            'No existe el escenario con id %',
            p_escenario_id;

    END IF;

    RETURN QUERY
    SELECT
        b.fecha_evento                                 AS fecha_evento,
        e.id_escenario                                 AS id_escenario,
        e.nombre                                       AS escenario,
        COUNT(DISTINCT v.id_venta)::BIGINT             AS ventas_realizadas,
        COUNT(*)::BIGINT                               AS boletas_vendidas,
        COALESCE(SUM(tb.precio), 0)::NUMERIC(14,2)     AS total_facturado

    FROM boleta b

    INNER JOIN venta v
        ON v.id_venta = b.venta_id

    INNER JOIN escenarios e
        ON e.id_escenario = b.escenario_id

    INNER JOIN tipo_boleta tb
        ON tb.id_tipo_boleta = b.tipo_boleta_id

    WHERE b.estado = 'activa'
      AND v.estado = 'completada'
      AND (p_fecha_desde IS NULL OR b.fecha_evento >= p_fecha_desde)
      AND (p_fecha_hasta IS NULL OR b.fecha_evento <= p_fecha_hasta)
      AND (p_escenario_id IS NULL OR e.id_escenario = p_escenario_id)

    GROUP BY
        b.fecha_evento,
        e.id_escenario,
        e.nombre

    ORDER BY
        fecha_evento,
        escenario;

END;
$$;
CREATE OR REPLACE PROCEDURE sp_reporte_ventas_por_dia_escenario(
    IN p_fecha_desde   DATE DEFAULT NULL,
    IN p_fecha_hasta   DATE DEFAULT NULL,
    IN p_escenario_id  INTEGER DEFAULT NULL,
    INOUT p_cursor     REFCURSOR DEFAULT 'cur_reporte_ventas'
)
LANGUAGE plpgsql
AS $$
BEGIN
    OPEN p_cursor FOR
        SELECT *
          FROM fn_reporte_ventas_por_dia_escenario(
                p_fecha_desde,
                p_fecha_hasta,
                p_escenario_id
          );
END;
$$;


/* ============================================================
   3) FUNCIÓN: cálculo de pagos a artistas según contrato
   4) PROCEDIMIENTO: Ejecuta el procedimiento 
   ============================================================ */

CREATE OR REPLACE FUNCTION fn_calcular_pagos_artistas_contrato(
    p_fecha_desde   DATE DEFAULT NULL,
    p_fecha_hasta   DATE DEFAULT NULL,
    p_escenario_id  INTEGER DEFAULT NULL
)
RETURNS TABLE (
    id_artista              INTEGER,
    artista                 VARCHAR(150),
    numero_contrato         INTEGER,
    contrato_estado         VARCHAR(20),
    moneda                  VARCHAR(3),
    cachet                  NUMERIC(14,2),
    presentaciones_contadas BIGINT,
    total_a_pagar           NUMERIC(14,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF p_fecha_desde IS NOT NULL
       AND p_fecha_hasta IS NOT NULL
       AND p_fecha_desde > p_fecha_hasta THEN
        RAISE EXCEPTION
            'La fecha inicial (%) no puede ser mayor que la final (%)',
            p_fecha_desde, p_fecha_hasta;
    END IF;

    IF p_escenario_id IS NOT NULL
       AND NOT EXISTS (
           SELECT 1
             FROM escenarios e
            WHERE e.id_escenario = p_escenario_id
       ) THEN
        RAISE EXCEPTION 'No existe el escenario con id %', p_escenario_id;
    END IF;

    RETURN QUERY
    SELECT
        a.id_artista                                            AS id_artista,
        a.nombre_artistico                                      AS artista,
        c.numero_contrato                                       AS numero_contrato,
        c.estado                                                AS contrato_estado,
        c.moneda                                                AS moneda,
        c.cachet                                                AS cachet,
        COUNT(DISTINCT p.id_presentacion)::BIGINT               AS presentaciones_contadas,
        (c.cachet * COUNT(DISTINCT p.id_presentacion))::NUMERIC(14,2)
                                                                AS total_a_pagar
    FROM contrato c
    INNER JOIN artista a
            ON a.id_artista = c.artista_id
    LEFT JOIN realizar r
           ON r.artista_id = a.id_artista
    LEFT JOIN presentacion p
           ON p.id_presentacion = r.presentacion_id
          AND p.fecha_presentacion BETWEEN c.fecha_vigencia::DATE AND c.fecha_fin::DATE
          AND (p_fecha_desde IS NULL OR p.fecha_presentacion >= p_fecha_desde)
          AND (p_fecha_hasta IS NULL OR p.fecha_presentacion <= p_fecha_hasta)
          AND (p_escenario_id IS NULL OR p.escenario_id = p_escenario_id)
    WHERE c.estado = 'activo'
    GROUP BY
        a.id_artista,
        a.nombre_artistico,
        c.numero_contrato,
        c.estado,
        c.moneda,
        c.cachet
    ORDER BY
        artista,
        numero_contrato;
END;
$$;

CREATE OR REPLACE PROCEDURE sp_calcular_pagos_artistas_contrato(
    IN p_fecha_desde   DATE DEFAULT NULL,
    IN p_fecha_hasta   DATE DEFAULT NULL,
    IN p_escenario_id  INTEGER DEFAULT NULL,
    INOUT p_cursor     REFCURSOR DEFAULT 'cur_pagos_artistas'
)
LANGUAGE plpgsql
AS $$
BEGIN
    OPEN p_cursor FOR
        SELECT *
          FROM fn_calcular_pagos_artistas_contrato(
                p_fecha_desde,
                p_fecha_hasta,
                p_escenario_id
          );
END;
$$;
