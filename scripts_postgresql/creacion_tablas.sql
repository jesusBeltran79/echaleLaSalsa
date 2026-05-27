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
CREATE TABLE "auditoria_presentacion" (
	"id_auditoria" serial,
	"presentacion_id" integer NOT NULL,
	"campo_modificado" varchar(50) NOT NULL,
	"valor_anterior" text,
	"valor_nuevo" text,
	"usuario_db" varchar(100) DEFAULT CURRENT_USER NOT NULL,
	"fecha_cambio" timestamp DEFAULT now() NOT NULL,
	"operacion" varchar(10) NOT NULL,
	CONSTRAINT "auditoria_presentacion_pk" PRIMARY KEY("id_auditoria")
);
CREATE TABLE "boleta" (
	"id_boleta" serial,
	"escenario_id" integer NOT NULL,
	"tipo_boleta_id" integer NOT NULL,
	"fecha_evento" date NOT NULL,
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
	"cachet" numeric(14, 2) NOT NULL,
	"moneda" varchar(3) DEFAULT 'COP' NOT NULL,
	"clausula" text,
	"estado" varchar(20) DEFAULT 'activo' NOT NULL,
	"fecha_firma" timestamp DEFAULT now() NOT NULL,
	"fecha_vigencia" timestamp NOT NULL,
	"fecha_fin" timestamp NOT NULL,
	CONSTRAINT "contrato_pk" PRIMARY KEY("numero_contrato"),
	CONSTRAINT "contrato_cachet_check" CHECK ((cachet > (0)::numeric)),
	CONSTRAINT "contrato_estado_chk" CHECK (((estado)::text = ANY (ARRAY[('activo'::character varying)::text, ('cumplido'::character varying)::text, ('cancelado'::character varying)::text, ('en_revision'::character varying)::text]))),
	CONSTRAINT "contrato_fechas_chk" CHECK ((fecha_fin > fecha_vigencia)),
	CONSTRAINT "contrato_moneda_chk" CHECK (((moneda)::text = ANY ((ARRAY['COP'::character varying, 'USD'::character varying])::text[])))
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

CREATE INDEX "idx_artista_usuario_id" ON "artista" ("usuario_id");
CREATE INDEX "idx_asistente_usuario_id" ON "asistente" ("usuario_id");
CREATE INDEX "idx_boleta_activas" ON "boleta" ("escenario_id","fecha_evento");
CREATE INDEX "idx_boleta_escenario_id" ON "boleta" ("escenario_id");
CREATE INDEX "idx_boleta_estado" ON "boleta" ("estado");
CREATE INDEX "idx_boleta_fecha_esc_estado" ON "boleta" ("fecha_evento","escenario_id","estado");
CREATE INDEX "idx_boleta_fecha_evento" ON "boleta" ("fecha_evento");
CREATE INDEX "idx_boleta_tipo_boleta_id" ON "boleta" ("tipo_boleta_id");
CREATE INDEX "idx_boleta_venta_id" ON "boleta" ("venta_id");
CREATE INDEX "idx_contrato_activos" ON "contrato" ("artista_id");
CREATE INDEX "idx_contrato_artista_estado" ON "contrato" ("artista_id","estado");
CREATE INDEX "idx_contrato_artista_id" ON "contrato" ("artista_id");
CREATE INDEX "idx_contrato_estado" ON "contrato" ("estado");
CREATE INDEX "idx_esc_bol_fecha_evento" ON "esc_bol" ("fecha_evento");
CREATE INDEX "idx_presentacion_escenario_id" ON "presentacion" ("escenario_id");
CREATE INDEX "idx_presentacion_estado" ON "presentacion" ("estado");
CREATE INDEX "idx_presentacion_fecha" ON "presentacion" ("fecha_presentacion");
CREATE INDEX "idx_realizar_pres_artista" ON "realizar" ("presentacion_id","artista_id");
CREATE INDEX "idx_realizar_presentacion_id" ON "realizar" ("presentacion_id");
CREATE INDEX "idx_staff_rol_id" ON "staff" ("rol_id");
CREATE INDEX "idx_staff_usuario_id" ON "staff" ("usuario_id");
CREATE INDEX "idx_staff_turno_esc_fecha" ON "staff_turno" ("escenario_id","fecha_turno");
CREATE INDEX "idx_staff_turno_escenario_id" ON "staff_turno" ("escenario_id");
CREATE INDEX "idx_usuario_pais_codigo_iso" ON "usuario" ("pais_codigo_iso");
CREATE INDEX "idx_venta_asistente_estado" ON "venta" ("asistente_id","estado");
CREATE INDEX "idx_venta_asistente_id" ON "venta" ("asistente_id");
CREATE INDEX "idx_venta_estado" ON "venta" ("estado");
CREATE INDEX "idx_venta_metodo_pago_id" ON "venta" ("metodo_pago_id");
ALTER TABLE "boleta" ADD CONSTRAINT "boleta_esc_bol_fk" FOREIGN KEY ("escenario_id","tipo_boleta_id","fecha_evento") REFERENCES "esc_bol"("escenario_id","tipo_boleta_id","fecha_evento");