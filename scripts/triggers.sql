-- TRIGGER 1: Actualizar cupo_vendido en esc_bol al insertar o anular una boleta            
CREATE OR REPLACE FUNCTION fn_actualizar_cupo()
RETURNS TRIGGER AS $$
DECLARE
    v_escenario_id  INTEGER;
    v_fecha_evento  DATE;
BEGIN
       SELECT eb.escenario_id, eb.fecha_evento
      INTO v_escenario_id, v_fecha_evento
      FROM esc_bol eb
     WHERE eb.tipo_boleta_id = NEW.tipo_boleta_id
     ORDER BY eb.fecha_evento ASC
     LIMIT 1;

    IF NOT FOUND THEN
        RAISE EXCEPTION
            'No existe configuración de cupo para tipo_boleta_id = %',
            NEW.tipo_boleta_id;
    END IF;

    IF TG_OP = 'INSERT' THEN
        IF (SELECT cupo_disponible - cupo_vendido
              FROM esc_bol
             WHERE escenario_id   = v_escenario_id
               AND tipo_boleta_id = NEW.tipo_boleta_id
               AND fecha_evento   = v_fecha_evento) < 1 THEN
            RAISE EXCEPTION
                'Cupo agotado para el tipo de boleta % en el escenario % el %',
                NEW.tipo_boleta_id, v_escenario_id, v_fecha_evento;
        END IF;

        UPDATE esc_bol
           SET cupo_vendido = cupo_vendido + 1
         WHERE escenario_id   = v_escenario_id
           AND tipo_boleta_id = NEW.tipo_boleta_id
           AND fecha_evento   = v_fecha_evento;

    ELSIF TG_OP = 'UPDATE' THEN
        IF OLD.estado <> 'anulada' AND NEW.estado = 'anulada' THEN
            UPDATE esc_bol
               SET cupo_vendido = GREATEST(cupo_vendido - 1, 0)
             WHERE escenario_id   = v_escenario_id
               AND tipo_boleta_id = NEW.tipo_boleta_id
               AND fecha_evento   = v_fecha_evento;
        END IF;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_actualizar_cupo
    AFTER INSERT OR UPDATE OF estado
    ON boleta
    FOR EACH ROW
    EXECUTE FUNCTION fn_actualizar_cupo();



-- TRIGGER 2: Auditoría de cambios en presentacion

CREATE TABLE IF NOT EXISTS auditoria_presentacion (
    id_auditoria      SERIAL      NOT NULL,
    presentacion_id   INTEGER     NOT NULL,
    campo_modificado  VARCHAR(50) NOT NULL,
    valor_anterior    TEXT,
    valor_nuevo       TEXT,
    usuario_db        VARCHAR(100) NOT NULL DEFAULT current_user,
    fecha_cambio      TIMESTAMP   NOT NULL DEFAULT NOW(),
    operacion         VARCHAR(10) NOT NULL,

    CONSTRAINT auditoria_presentacion_pk PRIMARY KEY (id_auditoria)
);


CREATE OR REPLACE FUNCTION fn_auditoria_presentacion()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.fecha_presentacion IS DISTINCT FROM NEW.fecha_presentacion THEN
        INSERT INTO auditoria_presentacion
            (presentacion_id, campo_modificado, valor_anterior, valor_nuevo, operacion)
        VALUES
            (NEW.id_presentacion, 'fecha_presentacion',
             OLD.fecha_presentacion::TEXT, NEW.fecha_presentacion::TEXT, 'UPDATE');
    END IF;

    IF OLD.hora_inicio IS DISTINCT FROM NEW.hora_inicio THEN
        INSERT INTO auditoria_presentacion
            (presentacion_id, campo_modificado, valor_anterior, valor_nuevo, operacion)
        VALUES
            (NEW.id_presentacion, 'hora_inicio',
             OLD.hora_inicio::TEXT, NEW.hora_inicio::TEXT, 'UPDATE');
    END IF;

    IF OLD.hora_fin IS DISTINCT FROM NEW.hora_fin THEN
        INSERT INTO auditoria_presentacion
            (presentacion_id, campo_modificado, valor_anterior, valor_nuevo, operacion)
        VALUES
            (NEW.id_presentacion, 'hora_fin',
             OLD.hora_fin::TEXT, NEW.hora_fin::TEXT, 'UPDATE');
    END IF;

    IF OLD.estado IS DISTINCT FROM NEW.estado THEN
        INSERT INTO auditoria_presentacion
            (presentacion_id, campo_modificado, valor_anterior, valor_nuevo, operacion)
        VALUES
            (NEW.id_presentacion, 'estado',
             OLD.estado, NEW.estado, 'UPDATE');
    END IF;

    IF OLD.escenario_id IS DISTINCT FROM NEW.escenario_id THEN
        INSERT INTO auditoria_presentacion
            (presentacion_id, campo_modificado, valor_anterior, valor_nuevo, operacion)
        VALUES
            (NEW.id_presentacion, 'escenario_id',
             OLD.escenario_id::TEXT, NEW.escenario_id::TEXT, 'UPDATE');
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_auditoria_presentacion
    AFTER UPDATE
    ON presentacion
    FOR EACH ROW
    EXECUTE FUNCTION fn_auditoria_presentacion();


-- TRIGGER 3: Bloquear venta si el método de pago está inactivo

CREATE OR REPLACE FUNCTION fn_validar_metodo_pago()
RETURNS TRIGGER AS $$
DECLARE
    v_activo  BOOLEAN;
    v_nombre  VARCHAR(50);
BEGIN
    SELECT activo, nombre
      INTO v_activo, v_nombre
      FROM metodo_pago
     WHERE id_metodo_pago = NEW.metodo_pago_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION
            'Método de pago con id % no existe', NEW.metodo_pago_id;
    END IF;

    IF NOT v_activo THEN
        RAISE EXCEPTION
            'El método de pago "%" está desactivado. '
            'Por favor selecciona otro medio de pago.', v_nombre;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_validar_metodo_pago
    BEFORE INSERT
    ON venta
    FOR EACH ROW
    EXECUTE FUNCTION fn_validar_metodo_pago();


-- TRIGGER 4: Calcular automáticamente el total de la venta

CREATE OR REPLACE FUNCTION fn_calcular_total_venta()
RETURNS TRIGGER AS $$
DECLARE
    v_precio   NUMERIC(12,2);
BEGIN
        SELECT tb.precio
      INTO v_precio
      FROM tipo_boleta tb
     WHERE tb.id_tipo_boleta = (
                SELECT id_tipo_boleta
           FROM tipo_boleta
          ORDER BY id_tipo_boleta ASC
          LIMIT 1
     );

        IF v_precio IS NOT NULL THEN
        NEW.total := v_precio * NEW.cantidad;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_calcular_total
    BEFORE INSERT
    ON venta
    FOR EACH ROW
    EXECUTE FUNCTION fn_calcular_total_venta();

