
use("echale_salsita");

db.setlists.drop();
db.riders_tecnicos.drop();
db.resenas_publico.drop();
db.reportes_incidentes.drop();

db.createCollection("setlists", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id_presentacion_pg",
        "id_artista_pg",
        "id_escenario_pg",
        "nombre_artista",
        "escenario",
        "fecha",
        "canciones"
      ],
      properties: {
        id_presentacion_pg: {
          bsonType: "int",
          description: "FK a presentacion.id_presentacion en PostgreSQL — obligatorio"
        },
        id_artista_pg: {
          bsonType: "int",
          description: "FK a artista.id_artista en PostgreSQL — obligatorio"
        },
        id_escenario_pg: {
          bsonType: "int",
          description: "FK a escenarios.id_escenario en PostgreSQL — obligatorio"
        },
        nombre_artista: {
          bsonType: "string",
          description: "Nombre artístico embebido para lectura directa — obligatorio"
        },
        escenario: {
          bsonType: "string",
          description: "Nombre del escenario embebido para lectura directa — obligatorio"
        },
        fecha: {
          bsonType: "string",
          description: "Fecha de la presentación YYYY-MM-DD — obligatorio"
        },
        canciones: {
          bsonType: "array",
          minItems: 1,
          description: "Lista de canciones embebidas — núcleo del setlist — obligatorio",
          items: {
            bsonType: "object",
            required: ["orden", "titulo", "duracion_min"],
            properties: {
              orden:        { bsonType: "int"    },
              titulo:       { bsonType: "string" },
              duracion_min: { bsonType: "int"    },
              nota: {
                bsonType: "string",
                description: "Nota especial para esta canción — opcional"
              }
            }
          }
        },
               invitados_especiales: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Artistas invitados — OPCIONAL. Omitir si no hay."
        },
        notas_director: {
          bsonType: "string",
          description: "Notas del director de escena — OPCIONAL"
        }
      }
    }
  }
});

db.setlists.createIndex({ id_presentacion_pg: 1 }, { unique: true });
db.setlists.createIndex({ id_artista_pg: 1 });
db.setlists.createIndex({ id_escenario_pg: 1 });
db.setlists.createIndex({ fecha: 1 });

db.createCollection("riders_tecnicos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id_artista_pg",
        "id_escenario_pg",
        "nombre_artista",
        "escenario"
      ],
      properties: {
        id_artista_pg: {
          bsonType: "int",
          description: "FK a artista.id_artista en PostgreSQL — obligatorio"
        },
        id_escenario_pg: {
          bsonType: "int",
          description: "FK a escenarios.id_escenario en PostgreSQL — obligatorio"
        },
        nombre_artista: {
          bsonType: "string",
          description: "Nombre artístico — obligatorio"
        },
        escenario: {
          bsonType: "string",
          description: "Nombre del escenario — obligatorio"
        },
        sonido: {
          bsonType: "object",
          description: "Requerimientos de sonido — OPCIONAL, estructura variable"
        },
        luces: {
          bsonType: "object",
          description: "Requerimientos de iluminación — OPCIONAL"
        },
        camerino: {
          bsonType: "object",
          description: "Requerimientos de camerino — OPCIONAL"
        },
        alimentacion: {
          bsonType: "object",
          description: "Requerimientos de catering — OPCIONAL"
        },
        observaciones_generales: {
          bsonType: "string",
          description: "Observaciones generales del artista o su management — OPCIONAL"
        }
      }
    }
  }
});

db.riders_tecnicos.createIndex({ id_artista_pg: 1 }, { unique: true });
db.riders_tecnicos.createIndex({ id_escenario_pg: 1 });

db.createCollection("resenas_publico", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "tipo_resena",
        "id_asistente_pg",
        "calificacion",
        "texto",
        "fecha_resena"
      ],
      properties: {
        tipo_resena: {
          bsonType: "string",
          enum: ["presentacion", "artista", "escenario"],
          description: "Discriminador del tipo de reseña — obligatorio"
        },
        id_asistente_pg: {
          bsonType: "int",
          description: "FK a asistente.id_asistente en PostgreSQL — obligatorio"
        },
        calificacion: {
          bsonType: "int",
          minimum: 1,
          maximum: 5,
          description: "Calificacion de 1 a 5 estrellas — obligatorio"
        },
        texto: {
          bsonType: "string",
          description: "Texto libre de la reseña — obligatorio"
        },
        fecha_resena: {
          bsonType: "date",
          description: "Timestamp de la reseña — obligatorio"
        },
        id_presentacion_pg: {
          bsonType: "int",
          description: "FK presentacion — solo en tipo presentacion"
        },
        id_artista_pg: {
          bsonType: "int",
          description: "FK artista — en tipo artista y presentacion"
        },
        id_escenario_pg: {
          bsonType: "int",
          description: "FK escenario — en tipo escenario y presentacion"
        },
        nombre_artista: {
          bsonType: "string",
          description: "Nombre artístico embebido — OPCIONAL segun tipo"
        },
        escenario: {
          bsonType: "string",
          description: "Nombre del escenario embebido — OPCIONAL segun tipo"
        },
               etiquetas: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Etiquetas del asistente — OPCIONAL. Omitir si no aplica."
        }
      }
    }
  }
});

db.resenas_publico.createIndex({ tipo_resena: 1 });
db.resenas_publico.createIndex({ id_asistente_pg: 1 });
db.resenas_publico.createIndex({ id_artista_pg: 1 });
db.resenas_publico.createIndex({ id_escenario_pg: 1 });
db.resenas_publico.createIndex({ id_presentacion_pg: 1 });
db.resenas_publico.createIndex({ calificacion: -1 });
db.resenas_publico.createIndex({ fecha_resena: -1 });
db.createCollection("reportes_incidentes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id_escenario_pg",
        "escenario",
        "tipo_incidente",
        "gravedad",
        "estado",
        "descripcion",
        "id_staff_pg",
        "fecha_reporte"
      ],
      properties: {
        id_escenario_pg: {
          bsonType: "int",
          description: "FK a escenarios.id_escenario en PostgreSQL — obligatorio"
        },
        escenario: {
          bsonType: "string",
          description: "Nombre del escenario embebido para lectura rapida — obligatorio"
        },
        tipo_incidente: {
          bsonType: "string",
          enum: ["seguridad", "medico", "logistica", "tecnico", "clima"],
          description: "Categoria del incidente — obligatorio"
        },
        gravedad: {
          bsonType: "string",
          enum: ["baja", "media", "alta", "critica"],
          description: "Nivel de gravedad — obligatorio"
        },
        estado: {
          bsonType: "string",
          enum: ["abierto", "en_atencion", "resuelto", "escalado"],
          description: "Estado actual del incidente — obligatorio"
        },
        descripcion: {
          bsonType: "string",
          description: "Descripcion del incidente — obligatorio"
        },
        id_staff_pg: {
          bsonType: "int",
          description: "FK a staff.id_staff en PostgreSQL — obligatorio"
        },
        reportado_por_rol: {
          bsonType: "string",
          description: "Rol del staff que reporto — OPCIONAL para lectura rapida"
        },
        fecha_reporte: {
          bsonType: "date",
          description: "Timestamp del reporte — obligatorio"
        },
        detalles: {
          bsonType: "object",
          description: "Campos variables segun tipo — OPCIONAL"
        },
                actualizaciones: {
          bsonType: "array",
          description: "Historial de estados — OPCIONAL, embebido por baja cardinalidad",
          items: {
            bsonType: "object",
            required: ["hora", "estado", "nota"],
            properties: {
              hora:   { bsonType: "date"   },
              estado: { bsonType: "string" },
              nota:   { bsonType: "string" }
            }
          }
        }
      }
    }
  }
});

db.reportes_incidentes.createIndex({ id_escenario_pg: 1 });
db.reportes_incidentes.createIndex({ id_staff_pg: 1 });
db.reportes_incidentes.createIndex({ tipo_incidente: 1 });
db.reportes_incidentes.createIndex({ gravedad: -1 });
db.reportes_incidentes.createIndex({ estado: 1 });
db.reportes_incidentes.createIndex({ fecha_reporte: -1 });
