CREATE SCHEMA "public";
CREATE TABLE "artista" (
	"id_artista" serial,
	"usuario_id" integer NOT NULL CONSTRAINT "artista_usuario_uq" UNIQUE,
	"nombre_artistico" varchar(150) NOT NULL,
	"genero" varchar(60) NOT NULL,
	"num_integrantes" integer DEFAULT 1 NOT NULL,
	CONSTRAINT "artista_pk" PRIMARY KEY("id_artista"),
	CONSTRAINT "artista_genero_chk" CHECK (((genero)::text = ANY (ARRAY[('salsa_clasica'::character varying)::text, ('salsa_romantica'::character varying)::text, ('salsa_urbana'::character varying)::text, ('timba_cubana'::character varying)::text, ('salsa_jazz'::character varying)::text, ('tropical'::character varying)::text, ('boogaloo'::character varying)::text]))),
	CONSTRAINT "artista_num_integrantes_check" CHECK ((num_integrantes >= 1))
);
CREATE TABLE "asistente" (
	"id_asistente" serial,
	"usuario_id" integer NOT NULL CONSTRAINT "asistente_usuario_uq" UNIQUE,
	"numero_documento" varchar(20) NOT NULL CONSTRAINT "asistente_doc_uq" UNIQUE,
	"tipo_documento" varchar(5) DEFAULT 'CC' NOT NULL,
	"fecha_nacimiento" date,
	CONSTRAINT "asistente_pk" PRIMARY KEY("id_asistente"),
	CONSTRAINT "asistente_tdoc_chk" CHECK (((tipo_documento)::text = ANY (ARRAY[('CC'::character varying)::text, ('CE'::character varying)::text, ('PA'::character varying)::text, ('TI'::character varying)::text, ('NIT'::character varying)::text])))
);
CREATE TABLE "boleta" (
	"id_boleta" serial,
	"tipo_boleta_id" integer NOT NULL,
	"venta_id" integer NOT NULL,
	"codigo" varchar(50) NOT NULL CONSTRAINT "boleta_codigo_uq" UNIQUE,
	"fecha_emision" timestamp DEFAULT now() NOT NULL,
	"estado" varchar(10) DEFAULT 'activa' NOT NULL,
	CONSTRAINT "boleta_pk" PRIMARY KEY("id_boleta"),
	CONSTRAINT "boleta_estado_chk" CHECK (((estado)::text = ANY (ARRAY[('activa'::character varying)::text, ('usada'::character varying)::text, ('anulada'::character varying)::text])))
);
CREATE TABLE "contrato" (
	"numero_contrato" serial,
	"artista_id" integer NOT NULL,
	"estado" varchar(20) DEFAULT 'activo' NOT NULL,
	"fecha_firma" timestamp DEFAULT now() NOT NULL,
	"fecha_vigencia" timestamp NOT NULL,
	"fecha_fin" timestamp NOT NULL,
	CONSTRAINT "contrato_pk" PRIMARY KEY("numero_contrato"),
	CONSTRAINT "contrato_estado_chk" CHECK (((estado)::text = ANY (ARRAY[('activo'::character varying)::text, ('cumplido'::character varying)::text, ('cancelado'::character varying)::text, ('en_revision'::character varying)::text]))),
	CONSTRAINT "contrato_fechas_chk" CHECK ((fecha_fin > fecha_vigencia))
);
CREATE TABLE "detalle_contrato" (
	"id_detalle" serial,
	"contrato_id" integer NOT NULL CONSTRAINT "detalle_contrato_uq" UNIQUE,
	"cachet" numeric(14, 2) NOT NULL,
	"clausula" text,
	CONSTRAINT "detalle_contrato_pk" PRIMARY KEY("id_detalle"),
	CONSTRAINT "detalle_contrato_cachet_check" CHECK ((cachet > (0)::numeric))
);
CREATE TABLE "esc_bol" (
	"escenario_id" integer,
	"tipo_boleta_id" integer,
	"cupo_disponible" integer NOT NULL,
	"cupo_vendido" integer DEFAULT 0 NOT NULL,
	"fecha_evento" date,
	CONSTRAINT "esc_bol_pk" PRIMARY KEY("escenario_id","tipo_boleta_id","fecha_evento"),
	CONSTRAINT "esc_bol_cupo_disponible_check" CHECK ((cupo_disponible > 0)),
	CONSTRAINT "esc_bol_cupo_vendido_check" CHECK ((cupo_vendido >= 0)),
	CONSTRAINT "esc_bol_cupos_chk" CHECK ((cupo_vendido <= cupo_disponible)),
	CONSTRAINT "esc_bol_fecha_chk" CHECK ((fecha_evento = ANY (ARRAY['2026-10-17'::date, '2026-10-18'::date])))
);
CREATE TABLE "escenarios" (
	"id_escenario" serial,
	"nombre" varchar(100) NOT NULL CONSTRAINT "escenarios_nombre_uq" UNIQUE,
	"equipamiento" text,
	"capacidad_maxima" integer NOT NULL,
	"ubicacion" varchar(150),
	CONSTRAINT "escenarios_pk" PRIMARY KEY("id_escenario"),
	CONSTRAINT "escenarios_capacidad_maxima_check" CHECK ((capacidad_maxima > 0))
);
CREATE TABLE "metodo_pago" (
	"id_metodo_pago" serial,
	"nombre" varchar(50) NOT NULL CONSTRAINT "metodo_pago_nombre_uq" UNIQUE,
	"activo" boolean DEFAULT true NOT NULL,
	CONSTRAINT "metodo_pago_pk" PRIMARY KEY("id_metodo_pago"),
	CONSTRAINT "metodo_pago_nombre_chk" CHECK (((nombre)::text = ANY (ARRAY[('tarjeta_credito'::character varying)::text, ('tarjeta_debito'::character varying)::text, ('transferencia'::character varying)::text, ('efectivo'::character varying)::text, ('nequi'::character varying)::text, ('daviplata'::character varying)::text, ('pse'::character varying)::text])))
);
CREATE TABLE "pais" (
	"codigo_iso" varchar(3),
	"nombre" varchar(100) NOT NULL,
	"moneda" varchar(3) DEFAULT 'COP' NOT NULL,
	CONSTRAINT "pais_pk" PRIMARY KEY("codigo_iso"),
	CONSTRAINT "pais_moneda_chk" CHECK (((moneda)::text = ANY (ARRAY[('COP'::character varying)::text, ('USD'::character varying)::text, ('EUR'::character varying)::text, ('MXN'::character varying)::text, ('PEN'::character varying)::text, ('ARS'::character varying)::text, ('VEF'::character varying)::text, ('DOP'::character varying)::text])))
);
CREATE TABLE "presentacion" (
	"id_presentacion" serial,
	"escenario_id" integer NOT NULL,
	"fecha_presentacion" date NOT NULL,
	"hora_inicio" time NOT NULL,
	"hora_fin" time NOT NULL,
	"estado" varchar(20) DEFAULT 'programada' NOT NULL,
	CONSTRAINT "presentacion_pk" PRIMARY KEY("id_presentacion"),
	CONSTRAINT "presentacion_estado_chk" CHECK (((estado)::text = ANY (ARRAY[('programada'::character varying)::text, ('en_curso'::character varying)::text, ('finalizada'::character varying)::text, ('cancelada'::character varying)::text, ('pospuesta'::character varying)::text]))),
	CONSTRAINT "presentacion_fecha_chk" CHECK ((fecha_presentacion = ANY (ARRAY['2026-10-17'::date, '2026-10-18'::date]))),
	CONSTRAINT "presentacion_horario_chk" CHECK ((hora_fin > hora_inicio))
);
CREATE TABLE "realizar" (
	"artista_id" integer,
	"presentacion_id" integer,
	"rol_en_show" varchar(20) DEFAULT 'principal' NOT NULL,
	CONSTRAINT "realizar_pk" PRIMARY KEY("artista_id","presentacion_id"),
	CONSTRAINT "realizar_rol_chk" CHECK (((rol_en_show)::text = ANY (ARRAY[('principal'::character varying)::text, ('invitado'::character varying)::text, ('telonero'::character varying)::text])))
);
CREATE TABLE "rol" (
	"id_rol" serial,
	"nombre" varchar(60) NOT NULL CONSTRAINT "rol_nombre_uq" UNIQUE,
	"salario" numeric(14, 2) DEFAULT '0' NOT NULL,
	CONSTRAINT "rol_pk" PRIMARY KEY("id_rol"),
	CONSTRAINT "rol_nombre_chk" CHECK (((nombre)::text = ANY (ARRAY[('tecnico_sonido'::character varying)::text, ('tecnico_luces'::character varying)::text, ('seguridad'::character varying)::text, ('logistica'::character varying)::text, ('taquilla'::character varying)::text, ('produccion'::character varying)::text, ('admin'::character varying)::text]))),
	CONSTRAINT "rol_salario_check" CHECK ((salario >= (0)::numeric))
);
CREATE TABLE "staff" (
	"id_staff" serial,
	"usuario_id" integer NOT NULL CONSTRAINT "staff_usuario_uq" UNIQUE,
	"rol_id" integer NOT NULL,
	"fecha_inicio_contrato" date NOT NULL,
	CONSTRAINT "staff_pk" PRIMARY KEY("id_staff")
);
CREATE TABLE "staff_turno" (
	"staff_id" integer,
	"escenario_id" integer,
	"turno" varchar(10) DEFAULT 'completo' NOT NULL,
	"fecha_turno" date,
	CONSTRAINT "staff_turno_pk" PRIMARY KEY("staff_id","escenario_id","fecha_turno"),
	CONSTRAINT "staff_turno_turno_chk" CHECK (((turno)::text = ANY (ARRAY[('mañana'::character varying)::text, ('tarde'::character varying)::text, ('noche'::character varying)::text, ('completo'::character varying)::text])))
);
CREATE TABLE "tipo_boleta" (
	"id_tipo_boleta" serial,
	"nombre" varchar(80) NOT NULL CONSTRAINT "tipo_boleta_nombre_uq" UNIQUE,
	"zona" varchar(10) NOT NULL,
	"precio" numeric(12, 2) NOT NULL,
	"moneda" varchar(3) DEFAULT 'COP' NOT NULL,
	CONSTRAINT "tipo_boleta_pk" PRIMARY KEY("id_tipo_boleta"),
	CONSTRAINT "tipo_boleta_moneda_chk" CHECK (((moneda)::text = ANY (ARRAY[('COP'::character varying)::text, ('USD'::character varying)::text]))),
	CONSTRAINT "tipo_boleta_precio_check" CHECK ((precio > (0)::numeric)),
	CONSTRAINT "tipo_boleta_zona_chk" CHECK (((zona)::text = ANY (ARRAY[('General'::character varying)::text, ('VIP'::character varying)::text])))
);
CREATE TABLE "usuario" (
	"id_usuario" serial,
	"pais_codigo_iso" varchar(3) NOT NULL,
	"nombre" varchar(100) NOT NULL,
	"apellido" varchar(100) NOT NULL,
	"email" varchar(120) NOT NULL CONSTRAINT "usuario_email_uq" UNIQUE,
	"telefono" varchar(30),
	"ciudad" varchar(80),
	"nombre_usuario" varchar(60) NOT NULL CONSTRAINT "usuario_nombre_usu_uq" UNIQUE,
	"contrasena" varchar(255) NOT NULL,
	"fecha_registro" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "usuario_pk" PRIMARY KEY("id_usuario")
);
CREATE TABLE "venta" (
	"id_venta" serial,
	"asistente_id" integer NOT NULL,
	"metodo_pago_id" integer NOT NULL,
	"fecha_hora_venta" timestamp DEFAULT now() NOT NULL,
	"cantidad" integer NOT NULL,
	"total" numeric(14, 2) NOT NULL,
	"estado" varchar(20) DEFAULT 'completada' NOT NULL,
	CONSTRAINT "venta_pk" PRIMARY KEY("id_venta"),
	CONSTRAINT "venta_cantidad_check" CHECK ((cantidad > 0)),
	CONSTRAINT "venta_estado_chk" CHECK (((estado)::text = ANY (ARRAY[('completada'::character varying)::text, ('anulada'::character varying)::text, ('pendiente'::character varying)::text]))),
	CONSTRAINT "venta_total_check" CHECK ((total > (0)::numeric))
);
CREATE UNIQUE INDEX "artista_pk" ON "artista" ("id_artista");
CREATE UNIQUE INDEX "artista_usuario_uq" ON "artista" ("usuario_id");
CREATE UNIQUE INDEX "asistente_doc_uq" ON "asistente" ("numero_documento");
CREATE UNIQUE INDEX "asistente_pk" ON "asistente" ("id_asistente");
CREATE UNIQUE INDEX "asistente_usuario_uq" ON "asistente" ("usuario_id");
CREATE UNIQUE INDEX "boleta_codigo_uq" ON "boleta" ("codigo");
CREATE UNIQUE INDEX "boleta_pk" ON "boleta" ("id_boleta");
CREATE INDEX "idx_boleta_estado" ON "boleta" ("estado");
CREATE UNIQUE INDEX "contrato_pk" ON "contrato" ("numero_contrato");
CREATE INDEX "idx_contrato_artista" ON "contrato" ("artista_id");
CREATE UNIQUE INDEX "detalle_contrato_pk" ON "detalle_contrato" ("id_detalle");
CREATE UNIQUE INDEX "detalle_contrato_uq" ON "detalle_contrato" ("contrato_id");
CREATE UNIQUE INDEX "esc_bol_pk" ON "esc_bol" ("escenario_id","tipo_boleta_id","fecha_evento");
CREATE UNIQUE INDEX "escenarios_nombre_uq" ON "escenarios" ("nombre");
CREATE UNIQUE INDEX "escenarios_pk" ON "escenarios" ("id_escenario");
CREATE UNIQUE INDEX "metodo_pago_nombre_uq" ON "metodo_pago" ("nombre");
CREATE UNIQUE INDEX "metodo_pago_pk" ON "metodo_pago" ("id_metodo_pago");
CREATE UNIQUE INDEX "pais_pk" ON "pais" ("codigo_iso");
CREATE INDEX "idx_presentacion_escenario" ON "presentacion" ("escenario_id");
CREATE INDEX "idx_presentacion_fecha" ON "presentacion" ("fecha_presentacion");
CREATE UNIQUE INDEX "presentacion_pk" ON "presentacion" ("id_presentacion");
CREATE UNIQUE INDEX "realizar_pk" ON "realizar" ("artista_id","presentacion_id");
CREATE UNIQUE INDEX "rol_nombre_uq" ON "rol" ("nombre");
CREATE UNIQUE INDEX "rol_pk" ON "rol" ("id_rol");
CREATE UNIQUE INDEX "staff_pk" ON "staff" ("id_staff");
CREATE UNIQUE INDEX "staff_usuario_uq" ON "staff" ("usuario_id");
CREATE UNIQUE INDEX "staff_turno_pk" ON "staff_turno" ("staff_id","escenario_id","fecha_turno");
CREATE UNIQUE INDEX "tipo_boleta_nombre_uq" ON "tipo_boleta" ("nombre");
CREATE UNIQUE INDEX "tipo_boleta_pk" ON "tipo_boleta" ("id_tipo_boleta");
CREATE INDEX "idx_usuario_pais" ON "usuario" ("pais_codigo_iso");
CREATE UNIQUE INDEX "usuario_email_uq" ON "usuario" ("email");
CREATE UNIQUE INDEX "usuario_nombre_usu_uq" ON "usuario" ("nombre_usuario");
CREATE UNIQUE INDEX "usuario_pk" ON "usuario" ("id_usuario");
CREATE INDEX "idx_venta_asistente" ON "venta" ("asistente_id");
CREATE INDEX "idx_venta_fecha" ON "venta" ("fecha_hora_venta");
CREATE UNIQUE INDEX "venta_pk" ON "venta" ("id_venta");
ALTER TABLE "artista" ADD CONSTRAINT "artista_usuario_fk" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT;
ALTER TABLE "asistente" ADD CONSTRAINT "asistente_usuario_fk" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT;
ALTER TABLE "boleta" ADD CONSTRAINT "boleta_tipo_boleta_fk" FOREIGN KEY ("tipo_boleta_id") REFERENCES "tipo_boleta"("id_tipo_boleta") ON DELETE RESTRICT;
ALTER TABLE "boleta" ADD CONSTRAINT "boleta_venta_fk" FOREIGN KEY ("venta_id") REFERENCES "venta"("id_venta") ON DELETE RESTRICT;
ALTER TABLE "contrato" ADD CONSTRAINT "contrato_artista_fk" FOREIGN KEY ("artista_id") REFERENCES "artista"("id_artista") ON DELETE RESTRICT;
ALTER TABLE "detalle_contrato" ADD CONSTRAINT "detalle_contrato_contrato_fk" FOREIGN KEY ("contrato_id") REFERENCES "contrato"("numero_contrato") ON DELETE CASCADE;
ALTER TABLE "esc_bol" ADD CONSTRAINT "esc_bol_escenario_fk" FOREIGN KEY ("escenario_id") REFERENCES "escenarios"("id_escenario") ON DELETE RESTRICT;
ALTER TABLE "esc_bol" ADD CONSTRAINT "esc_bol_tipo_boleta_fk" FOREIGN KEY ("tipo_boleta_id") REFERENCES "tipo_boleta"("id_tipo_boleta") ON DELETE RESTRICT;
ALTER TABLE "presentacion" ADD CONSTRAINT "presentacion_escenario_fk" FOREIGN KEY ("escenario_id") REFERENCES "escenarios"("id_escenario") ON DELETE RESTRICT;
ALTER TABLE "realizar" ADD CONSTRAINT "realizar_artista_fk" FOREIGN KEY ("artista_id") REFERENCES "artista"("id_artista") ON DELETE RESTRICT;
ALTER TABLE "realizar" ADD CONSTRAINT "realizar_presentacion_fk" FOREIGN KEY ("presentacion_id") REFERENCES "presentacion"("id_presentacion") ON DELETE RESTRICT;
ALTER TABLE "staff" ADD CONSTRAINT "staff_rol_fk" FOREIGN KEY ("rol_id") REFERENCES "rol"("id_rol") ON DELETE RESTRICT;
ALTER TABLE "staff" ADD CONSTRAINT "staff_usuario_fk" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT;
ALTER TABLE "staff_turno" ADD CONSTRAINT "staff_turno_escenario_fk" FOREIGN KEY ("escenario_id") REFERENCES "escenarios"("id_escenario") ON DELETE RESTRICT;
ALTER TABLE "staff_turno" ADD CONSTRAINT "staff_turno_staff_fk" FOREIGN KEY ("staff_id") REFERENCES "staff"("id_staff") ON DELETE RESTRICT;
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_pais_fk" FOREIGN KEY ("pais_codigo_iso") REFERENCES "pais"("codigo_iso") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "venta" ADD CONSTRAINT "venta_asistente_fk" FOREIGN KEY ("asistente_id") REFERENCES "asistente"("id_asistente") ON DELETE RESTRICT;
ALTER TABLE "venta" ADD CONSTRAINT "venta_metodo_pago_fk" FOREIGN KEY ("metodo_pago_id") REFERENCES "metodo_pago"("id_metodo_pago") ON DELETE RESTRICT;