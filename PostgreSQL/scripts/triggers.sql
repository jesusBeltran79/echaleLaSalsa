-- TRIGGER 1: Actualizar cupo_vendido en esc_bol al insertar o anular una boleta 

CREATE OR REPLACE FUNCTION fn_actualizar_cupo()
RETURNS TRIGGER AS $$
BEGIN

    -- Insertar boleta
    IF TG_OP = 'INSERT' THEN

        -- Verificar existencia del cupo
        IF NOT EXISTS (
            SELECT 1
              FROM esc_bol
             WHERE escenario_id   = NEW.escenario_id
               AND tipo_boleta_id = NEW.tipo_boleta_id
               AND fecha_evento   = NEW.fecha_evento
        ) THEN
            RAISE EXCEPTION
                'No existe configuración de cupo para escenario %, tipo %, fecha %',
                NEW.escenario_id,
                NEW.tipo_boleta_id,
                NEW.fecha_evento;
        END IF;

        -- Verificar disponibilidad
        IF (
            SELECT cupo_disponible - cupo_vendido
              FROM esc_bol
             WHERE escenario_id   = NEW.escenario_id
               AND tipo_boleta_id = NEW.tipo_boleta_id
               AND fecha_evento   = NEW.fecha_evento
        ) < 1 THEN
            RAISE EXCEPTION
                'Cupo agotado para escenario %, tipo %, fecha %',
                NEW.escenario_id,
                NEW.tipo_boleta_id,
                NEW.fecha_evento;
        END IF;

        -- Descontar cupo
        UPDATE esc_bol
           SET cupo_vendido = cupo_vendido + 1
         WHERE escenario_id   = NEW.escenario_id
           AND tipo_boleta_id = NEW.tipo_boleta_id
           AND fecha_evento   = NEW.fecha_evento;

    END IF;

    -- Anular boleta
    IF TG_OP = 'UPDATE' THEN

        IF OLD.estado <> 'anulada'
           AND NEW.estado = 'anulada' THEN

            UPDATE esc_bol
               SET cupo_vendido = GREATEST(cupo_vendido - 1, 0)
             WHERE escenario_id   = NEW.escenario_id
               AND tipo_boleta_id = NEW.tipo_boleta_id
               AND fecha_evento   = NEW.fecha_evento;

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

CREATE OR REPLACE FUNCTION fn_actualizar_total_venta()
RETURNS TRIGGER AS $$
DECLARE
    v_precio NUMERIC(12,2);
BEGIN

    -- Obtener precio REAL de la boleta comprada
    SELECT precio
      INTO v_precio
      FROM tipo_boleta
     WHERE id_tipo_boleta = NEW.tipo_boleta_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION
            'No existe el tipo de boleta %',
            NEW.tipo_boleta_id;
    END IF;

    -- Sumar al total de la venta
    IF NEW.estado = 'activa' THEN

        UPDATE venta
        SET total = total + v_precio
        WHERE id_venta = NEW.venta_id;

    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_actualizar_total_venta
AFTER INSERT
ON boleta
FOR EACH ROW
EXECUTE FUNCTION fn_actualizar_total_venta();
