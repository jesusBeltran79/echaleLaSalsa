use("echale_salsita");
db.setlists.insertMany([

  {
    id_presentacion_pg: 1,
    id_artista_pg: 1,
    id_escenario_pg: 1,
    nombre_artista: "Grupo Niche",
    escenario: "Golden Clave",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Cali Pachanguero",          duracion_min: 6 },
      { orden: 2, titulo: "Una Aventura",               duracion_min: 5 },
      { orden: 3, titulo: "Buenaventura y Caney",       duracion_min: 7 },
      { orden: 4, titulo: "No Hay Quinto Malo",         duracion_min: 5 },
      { orden: 5, titulo: "Etnia",                      duracion_min: 6 },
      { orden: 6, titulo: "Me Dueles Tanto",            duracion_min: 5 },
      { orden: 7, titulo: "El Tiempo de las Guayabas",  duracion_min: 6 },
      { orden: 8, titulo: "La Magia de Tus Besos",      duracion_min: 5 }
    ],
    notas_director: "Abrir con Cali Pachanguero para encender el publico. Set de 45 min."
  },
  {
    id_presentacion_pg: 2,
    id_artista_pg: 2,
    id_escenario_pg: 1,
    nombre_artista: "Gilberto Santa Rosa",
    escenario: "Golden Clave",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Vivir Sin Ti",               duracion_min: 5 },
      { orden: 2, titulo: "Que Manera de Quererte",     duracion_min: 6 },
      { orden: 3, titulo: "Perdoname",                  duracion_min: 5 },
      { orden: 4, titulo: "El Amor Mas Bonito",         duracion_min: 6 },
      { orden: 5, titulo: "Por Si Acaso No Regreso",    duracion_min: 5 },
      { orden: 6, titulo: "Conciencia",                 duracion_min: 6 },
      { orden: 7, titulo: "Nada Con Nadie",             duracion_min: 5 }
    ],
    notas_director: "Set romantico. Reducir luces durante baladas."
  },
  {
    id_presentacion_pg: 3,
    id_artista_pg: 3,
    id_escenario_pg: 1,
    nombre_artista: "Joe Arroyo",
    escenario: "Golden Clave",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "La Rebelion",                duracion_min: 7 },
      { orden: 2, titulo: "En Barranquilla Me Quedo",   duracion_min: 6 },
      { orden: 3, titulo: "Tumbatecho",                 duracion_min: 5 },
      { orden: 4, titulo: "El Centurion",               duracion_min: 6 },
      { orden: 5, titulo: "A Mi Dios Todo Le Debo",     duracion_min: 5 },
      { orden: 6, titulo: "No Le Pegue a La Negra",     duracion_min: 7 },
      { orden: 7, titulo: "Musa Original",              duracion_min: 6 },
      { orden: 8, titulo: "Yamulemau",                  duracion_min: 5 }
    ],
    notas_director: "Homenaje postumo con banda tributo. Pantallas con fotos historicas."
  },
  {
    id_presentacion_pg: 4,
    id_artista_pg: 4,
    id_escenario_pg: 1,
    nombre_artista: "Los Van Van",
    escenario: "Golden Clave",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Que Sorpresa",               duracion_min: 7 },
      { orden: 2, titulo: "Soy Todo",                   duracion_min: 6 },
      { orden: 3, titulo: "El Negro Esta Cocinando",    duracion_min: 8 },
      { orden: 4, titulo: "Que Palo Es Ese",            duracion_min: 6 },
      { orden: 5, titulo: "Sandunguera",                duracion_min: 7 },
      { orden: 6, titulo: "La Bomba",                   duracion_min: 6 },
      { orden: 7, titulo: "Tres Palabras",              duracion_min: 5 },
      { orden: 8, titulo: "Timbalaye",                  duracion_min: 8 },
      { orden: 9, titulo: "La Habana No Aguanta Mas",   duracion_min: 7, nota: "Cierre con confeti" }
    ],
    invitados_especiales: ["Gilberto Santa Rosa"],
    notas_director: "Cierre del sabado. Produccion maxima. Gilberto invitado en ultimo tema."
  },

  {
    id_presentacion_pg: 5,
    id_artista_pg: 4,
    id_escenario_pg: 1,
    nombre_artista: "Los Van Van",
    escenario: "Golden Clave",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Agua",                       duracion_min: 6 },
      { orden: 2, titulo: "El Tren",                    duracion_min: 7 },
      { orden: 3, titulo: "Chirrin Chirran",            duracion_min: 6 },
      { orden: 4, titulo: "Mayeya",                     duracion_min: 8 },
      { orden: 5, titulo: "Chapeando",                  duracion_min: 6 },
      { orden: 6, titulo: "Ven Ven Ven",                duracion_min: 7 },
      { orden: 7, titulo: "La Titimania",               duracion_min: 7 }
    ],
    notas_director: "Repertorio distinto al del sabado."
  },
  {
    id_presentacion_pg: 6,
    id_artista_pg: 3,
    id_escenario_pg: 1,
    nombre_artista: "Joe Arroyo",
    escenario: "Golden Clave",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Fuego en Mi Mente",          duracion_min: 6 },
      { orden: 2, titulo: "La Noche",                   duracion_min: 5 },
      { orden: 3, titulo: "Permitame",                  duracion_min: 6 },
      { orden: 4, titulo: "El Africano",                duracion_min: 7 },
      { orden: 5, titulo: "Rebelion 2",                 duracion_min: 7 },
      { orden: 6, titulo: "Querer Es Poder",            duracion_min: 5 }
    ],
    notas_director: "Segunda noche — set diferente al sabado."
  },
  {
    id_presentacion_pg: 7,
    id_artista_pg: 2,
    id_escenario_pg: 1,
    nombre_artista: "Gilberto Santa Rosa",
    escenario: "Golden Clave",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Conteo Regresivo",           duracion_min: 6 },
      { orden: 2, titulo: "Usted Abuso",                duracion_min: 5 },
      { orden: 3, titulo: "Cumpleme",                   duracion_min: 6 },
      { orden: 4, titulo: "Despues de Un Beso",         duracion_min: 5 },
      { orden: 5, titulo: "El Amor Mas Bonito",         duracion_min: 5 },
      { orden: 6, titulo: "Bomba a Todo Lo Que Se Mueve", duracion_min: 7 }
    ],
    notas_director: "Repertorio renovado para el domingo."
  },
  {
    id_presentacion_pg: 8,
    id_artista_pg: 1,
    id_escenario_pg: 1,
    nombre_artista: "Grupo Niche",
    escenario: "Golden Clave",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Colombia Tierra Querida",    duracion_min: 5 },
      { orden: 2, titulo: "A Veces",                    duracion_min: 6 },
      { orden: 3, titulo: "El Amor",                    duracion_min: 5 },
      { orden: 4, titulo: "Nuestro Sueno",              duracion_min: 6 },
      { orden: 5, titulo: "Sin Sentimiento",            duracion_min: 5 },
      { orden: 6, titulo: "Se Formo",                   duracion_min: 6 },
      { orden: 7, titulo: "Cali Pachanguero",           duracion_min: 7, nota: "Bis final con toda la produccion" }
    ],
    invitados_especiales: ["Celia Cruz"],
    notas_director: "Cierre del festival. Celia Cruz invitada en el bis. Fuegos artificiales al final."
  },

  {
    id_presentacion_pg: 9,
    id_artista_pg: 5,
    id_escenario_pg: 2,
    nombre_artista: "Choquibtown",
    escenario: "Barrio Fuego",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Somos Pacifico",             duracion_min: 5 },
      { orden: 2, titulo: "De Donde Vengo Yo",          duracion_min: 6 },
      { orden: 3, titulo: "Pescao Envenenao",           duracion_min: 5 },
      { orden: 4, titulo: "Oro",                        duracion_min: 6 },
      { orden: 5, titulo: "La Esencia",                 duracion_min: 5 }
    ],
    notas_director: "Apertura energetica del Barrio Fuego."
  },
  {
    id_presentacion_pg: 10,
    id_artista_pg: 6,
    id_escenario_pg: 2,
    nombre_artista: "Marc Anthony",
    escenario: "Barrio Fuego",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Vivir Mi Vida",              duracion_min: 6 },
      { orden: 2, titulo: "Valio La Pena",              duracion_min: 5 },
      { orden: 3, titulo: "Y Hubo Alguien",             duracion_min: 6 },
      { orden: 4, titulo: "Flor Palida",                duracion_min: 5 },
      { orden: 5, titulo: "Tu Amor Me Hace Bien",       duracion_min: 6 },
      { orden: 6, titulo: "Ahora Quien",                duracion_min: 5 },
      { orden: 7, titulo: "Nadie Como Ella",            duracion_min: 6 }
    ],
    notas_director: "Produccion de alto nivel. Vuelo privado confirmado."
  },
  {
    id_presentacion_pg: 11,
    id_artista_pg: 7,
    id_escenario_pg: 2,
    nombre_artista: "Carlos Vives",
    escenario: "Barrio Fuego",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "La Bicicleta",               duracion_min: 5 },
      { orden: 2, titulo: "Frio Frio",                  duracion_min: 6 },
      { orden: 3, titulo: "La Fiesta",                  duracion_min: 5 },
      { orden: 4, titulo: "Volvi a Nacer",              duracion_min: 6 },
      { orden: 5, titulo: "Carito",                     duracion_min: 5 },
      { orden: 6, titulo: "El Mar de Sus Ojos",         duracion_min: 7 }
    ],
    notas_director: "Set tropical-vallenato. Incluir decoracion de la Costa."
  },
  {
    id_presentacion_pg: 12,
    id_artista_pg: 8,
    id_escenario_pg: 2,
    nombre_artista: "Oscar D Leon",
    escenario: "Barrio Fuego",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Lloraras",                   duracion_min: 6 },
      { orden: 2, titulo: "Usted Abuso",                duracion_min: 5 },
      { orden: 3, titulo: "Pensando en Ti",             duracion_min: 6 },
      { orden: 4, titulo: "La Salsa Buena",             duracion_min: 7 },
      { orden: 5, titulo: "El Taxi",                    duracion_min: 5 },
      { orden: 6, titulo: "Que Bueno Baila Usted",      duracion_min: 6 },
      { orden: 7, titulo: "Julia",                      duracion_min: 5 },
      { orden: 8, titulo: "Son del Este",               duracion_min: 7, nota: "Cierre con Choquibtown invitado" }
    ],
    invitados_especiales: ["Choquibtown"],
    notas_director: "Cierre sabado Barrio Fuego. Oscar y Choquibtown juntos en ultimo tema."
  },

  {
    id_presentacion_pg: 13,
    id_artista_pg: 8,
    id_escenario_pg: 2,
    nombre_artista: "Oscar D Leon",
    escenario: "Barrio Fuego",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "El Preso",                   duracion_min: 6 },
      { orden: 2, titulo: "Boogaloo de Venezuela",      duracion_min: 7 },
      { orden: 3, titulo: "Detalles",                   duracion_min: 5 },
      { orden: 4, titulo: "Que Rico El Mambo",          duracion_min: 6 },
      { orden: 5, titulo: "De Venezuela Para El Mundo", duracion_min: 7 }
    ],
    notas_director: "Repertorio diferente al sabado."
  },
  {
    id_presentacion_pg: 14,
    id_artista_pg: 7,
    id_escenario_pg: 2,
    nombre_artista: "Carlos Vives",
    escenario: "Barrio Fuego",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Cuando Nos Volvamos a Ver",  duracion_min: 5 },
      { orden: 2, titulo: "Ella Es Mi Fiesta",          duracion_min: 6 },
      { orden: 3, titulo: "La Quiero a Morir",          duracion_min: 5 },
      { orden: 4, titulo: "Tu Eres la Reina",           duracion_min: 6 },
      { orden: 5, titulo: "Magdalena",                  duracion_min: 5 }
    ],
    notas_director: "Set acustico especial para el cierre del domingo."
  },
  {
    id_presentacion_pg: 15,
    id_artista_pg: 6,
    id_escenario_pg: 2,
    nombre_artista: "Marc Anthony",
    escenario: "Barrio Fuego",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "I Need to Know",             duracion_min: 5 },
      { orden: 2, titulo: "Hasta Ayer",                 duracion_min: 6 },
      { orden: 3, titulo: "El Cantante",                duracion_min: 6 },
      { orden: 4, titulo: "Se Esfumo",                  duracion_min: 5 },
      { orden: 5, titulo: "Preciosa",                   duracion_min: 7 },
      { orden: 6, titulo: "Aguanile",                   duracion_min: 6 }
    ],
    notas_director: "Second night set diferente al sabado."
  },
  {
    id_presentacion_pg: 16,
    id_artista_pg: 5,
    id_escenario_pg: 2,
    nombre_artista: "Choquibtown",
    escenario: "Barrio Fuego",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Cuando Te Veo",              duracion_min: 5 },
      { orden: 2, titulo: "Tienes que Moverte",         duracion_min: 6 },
      { orden: 3, titulo: "El Bombo",                   duracion_min: 7 },
      { orden: 4, titulo: "Nuestra Cancion",            duracion_min: 5 },
      { orden: 5, titulo: "Seal del Pacifico",          duracion_min: 6 },
      { orden: 6, titulo: "Somos Pacifico",             duracion_min: 5, nota: "Bis final" }
    ],
    notas_director: "Cierre domingo Barrio Fuego."
  },

  {
    id_presentacion_pg: 17,
    id_artista_pg: 9,
    id_escenario_pg: 3,
    nombre_artista: "La EBRS",
    escenario: "Luna Caribe",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Brisas del Pacifico",        duracion_min: 7 },
      { orden: 2, titulo: "Atardecer en Cali",          duracion_min: 8 },
      { orden: 3, titulo: "El Son que Nos Une",         duracion_min: 7 },
      { orden: 4, titulo: "Alma Calena",                duracion_min: 9 },
      { orden: 5, titulo: "Noche de Jazz Salsa",        duracion_min: 8 }
    ],
    notas_director: "Ambiente intimo. Iluminacion tenue. Sin efectos estroboscopicos."
  },
  {
    id_presentacion_pg: 18,
    id_artista_pg: 10,
    id_escenario_pg: 3,
    nombre_artista: "Ruben Blades",
    escenario: "Luna Caribe",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Pedro Navaja",               duracion_min: 8 },
      { orden: 2, titulo: "Plastico",                   duracion_min: 7 },
      { orden: 3, titulo: "Siembra",                    duracion_min: 8 },
      { orden: 4, titulo: "La Cancion",                 duracion_min: 6 },
      { orden: 5, titulo: "Buscando Guayaba",           duracion_min: 7 },
      { orden: 6, titulo: "El Padre Antonio",           duracion_min: 8 }
    ],
    notas_director: "Set narrativo. Ruben habla entre canciones. Respetar tiempos."
  },
  {
    id_presentacion_pg: 19,
    id_artista_pg: 11,
    id_escenario_pg: 3,
    nombre_artista: "Celia Cruz",
    escenario: "Luna Caribe",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "La Vida Es un Carnaval",     duracion_min: 6 },
      { orden: 2, titulo: "Quimbara",                   duracion_min: 7 },
      { orden: 3, titulo: "Bemba Colora",               duracion_min: 6 },
      { orden: 4, titulo: "Rie y Llora",                duracion_min: 6 },
      { orden: 5, titulo: "Guantanamera",               duracion_min: 7 },
      { orden: 6, titulo: "La Negra Tiene Tumbao",      duracion_min: 7 }
    ],
    notas_director: "Homenaje con orquesta especial. Pantallas con tributo visual."
  },
  {
    id_presentacion_pg: 20,
    id_artista_pg: 12,
    id_escenario_pg: 3,
    nombre_artista: "Fruko y Sus Tesos",
    escenario: "Luna Caribe",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "El Preso",                   duracion_min: 7 },
      { orden: 2, titulo: "Detalles",                   duracion_min: 6 },
      { orden: 3, titulo: "Cali Aji",                   duracion_min: 7 },
      { orden: 4, titulo: "Tumbatecho",                 duracion_min: 6 },
      { orden: 5, titulo: "El Patillero",               duracion_min: 7 },
      { orden: 6, titulo: "Luna Llena",                 duracion_min: 8, nota: "Ruben Blades invitado en este tema" }
    ],
    invitados_especiales: ["Ruben Blades"],
    notas_director: "Cierre del sabado en Luna Caribe. Ambiente intimo y emotivo."
  },

  {
    id_presentacion_pg: 21,
    id_artista_pg: 12,
    id_escenario_pg: 3,
    nombre_artista: "Fruko y Sus Tesos",
    escenario: "Luna Caribe",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Anacaona",                   duracion_min: 7 },
      { orden: 2, titulo: "Colombia Unida",             duracion_min: 6 },
      { orden: 3, titulo: "El Watusi",                  duracion_min: 7 },
      { orden: 4, titulo: "La Cosecha de Mujeres",      duracion_min: 6 }
    ],
    notas_director: "Apertura domingo Luna Caribe."
  },
  {
    id_presentacion_pg: 22,
    id_artista_pg: 11,
    id_escenario_pg: 3,
    nombre_artista: "Celia Cruz",
    escenario: "Luna Caribe",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Azucar Negra",               duracion_min: 6 },
      { orden: 2, titulo: "Yembe Laroco",               duracion_min: 7 },
      { orden: 3, titulo: "Cucala",                     duracion_min: 6 },
      { orden: 4, titulo: "Mi Vida Es Cantar",          duracion_min: 7 },
      { orden: 5, titulo: "Sazon",                      duracion_min: 6 }
    ],
    notas_director: "Segunda noche — repertorio distinto al sabado."
  },
  {
    id_presentacion_pg: 23,
    id_artista_pg: 10,
    id_escenario_pg: 3,
    nombre_artista: "Ruben Blades",
    escenario: "Luna Caribe",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Decisiones",                 duracion_min: 7 },
      { orden: 2, titulo: "La Rosa de los Vientos",     duracion_min: 8 },
      { orden: 3, titulo: "Amor y Control",             duracion_min: 7 },
      { orden: 4, titulo: "Ojos de Perro Azul",         duracion_min: 8 },
      { orden: 5, titulo: "Viva Mexico",                duracion_min: 7 }
    ],
    notas_director: "Set poetico. Respetar silencios narrativos."
  },
  {
    id_presentacion_pg: 24,
    id_artista_pg: 9,
    id_escenario_pg: 3,
    nombre_artista: "La EBRS",
    escenario: "Luna Caribe",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "El Valle del Cauca",         duracion_min: 8 },
      { orden: 2, titulo: "Lluvia de Estrellas",        duracion_min: 9 },
      { orden: 3, titulo: "Rios del Sur",               duracion_min: 8 },
      { orden: 4, titulo: "La Ultima Noche",            duracion_min: 10, nota: "Cierre del festival en Luna Caribe" }
    ],
    notas_director: "Cierre final del Luna Caribe. Set mas largo e intimista."
  },

  {
    id_presentacion_pg: 25,
    id_artista_pg: 13,
    id_escenario_pg: 1,
    nombre_artista: "Victor Manuelle",
    escenario: "Golden Clave",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Un Amor Que Se Me Va",       duracion_min: 6 },
      { orden: 2, titulo: "Si Tu Me Besas",             duracion_min: 5 },
      { orden: 3, titulo: "Que Haria Yo Sin Verte",     duracion_min: 6 },
      { orden: 4, titulo: "Sabor a Mentira",            duracion_min: 5 },
      { orden: 5, titulo: "Soy el Mismo",               duracion_min: 7 }
    ],
    notas_director: "Set romantico. Buena recepcion esperada del publico caleno."
  },
  {
    id_presentacion_pg: 26,
    id_artista_pg: 14,
    id_escenario_pg: 2,
    nombre_artista: "Eddie Santiago",
    escenario: "Barrio Fuego",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Lluvia",                     duracion_min: 6 },
      { orden: 2, titulo: "Que el Ritmo No Pare",       duracion_min: 5 },
      { orden: 3, titulo: "Insaciable",                 duracion_min: 6 },
      { orden: 4, titulo: "Hasta que te Conoci",        duracion_min: 5 },
      { orden: 5, titulo: "A Dos Aguas",                duracion_min: 7 }
    ],
    notas_director: "Eddie en Barrio Fuego — combinacion perfecta de salsa romantica y energia urbana."
  },
  {
    id_presentacion_pg: 27,
    id_artista_pg: 17,
    id_escenario_pg: 1,
    nombre_artista: "Willie Colon",
    escenario: "Golden Clave",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "El Malo",                    duracion_min: 7 },
      { orden: 2, titulo: "Calle Luna Calle Sol",       duracion_min: 6 },
      { orden: 3, titulo: "Che Che Cole",               duracion_min: 7 },
      { orden: 4, titulo: "El Dia de Mi Suerte",        duracion_min: 6 },
      { orden: 5, titulo: "Idilio",                     duracion_min: 5 },
      { orden: 6, titulo: "Todo Tiene Su Final",        duracion_min: 7 }
    ],
    notas_director: "Clasicos del boogaloo. Brass section reforzada."
  },
  {
    id_presentacion_pg: 28,
    id_artista_pg: 25,
    id_escenario_pg: 1,
    nombre_artista: "Guayacan Orquesta",
    escenario: "Golden Clave",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Manana",                     duracion_min: 6 },
      { orden: 2, titulo: "Oiga Mire Vea",              duracion_min: 7 },
      { orden: 3, titulo: "Querer Es Poder",            duracion_min: 6 },
      { orden: 4, titulo: "La Cura",                    duracion_min: 7 },
      { orden: 5, titulo: "Sombras",                    duracion_min: 6 },
      { orden: 6, titulo: "Amanecer Caleno",            duracion_min: 8, nota: "Cierre con orquesta completa" }
    ],
    notas_director: "Orquesta de 15. Requiere escenario amplio y tiempo de soundcheck extendido."
  },
  {
    id_presentacion_pg: 29,
    id_artista_pg: 16,
    id_escenario_pg: 3,
    nombre_artista: "Jerry Rivera",
    escenario: "Luna Caribe",
    fecha: "2026-10-17",
    canciones: [
      { orden: 1, titulo: "Amores Como el Nuestro",     duracion_min: 6 },
      { orden: 2, titulo: "Cara de Nino",               duracion_min: 5 },
      { orden: 3, titulo: "Eres Mia",                   duracion_min: 6 },
      { orden: 4, titulo: "Un Amor Eterno",             duracion_min: 5 },
      { orden: 5, titulo: "Que Pasara",                 duracion_min: 6 }
    ],
    notas_director: "Luna Caribe perfecto para el romanticismo de Jerry Rivera."
  },
  {
    id_presentacion_pg: 30,
    id_artista_pg: 28,
    id_escenario_pg: 3,
    nombre_artista: "India",
    escenario: "Luna Caribe",
    fecha: "2026-10-18",
    canciones: [
      { orden: 1, titulo: "Ese Hombre",                 duracion_min: 7 },
      { orden: 2, titulo: "Nunca Voy a Olvidarte",      duracion_min: 6 },
      { orden: 3, titulo: "Vivir Lo Nuestro",           duracion_min: 7 },
      { orden: 4, titulo: "Mi Mayor Venganza",          duracion_min: 6 },
      { orden: 5, titulo: "Dicen Que Soy",              duracion_min: 7 },
      { orden: 6, titulo: "Sedaceme",                   duracion_min: 6 }
    ],
    notas_director: "La Potra Salvaje en Luna Caribe — cierre intimo y poderoso."
  }

]); 



db.riders_tecnicos.insertMany([
  {
    id_artista_pg: 1,
    id_escenario_pg: 1,
    nombre_artista: "Grupo Niche",
    escenario: "Golden Clave",
    sonido: {
      consola: "Yamaha CL5",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Shure SM58 x6", "Sennheiser e835 x4", "AKG D112 x2"],
      monitores_escenario: 8,
      in_ear_monitoring: false,
      subwoofers: 12,
      notas: "Requiere tecnico de monitores propio"
    },
    luces: {
      moving_heads: 20,
      par_leds: 40,
      hazer: true,
      strobes: false,
      colores_requeridos: ["dorado", "rojo", "blanco"],
      notas: "Efecto lluvia de luces en Cali Pachanguero"
    },
    camerino: {
      capacidad_personas: 25,
      temperatura_celsius: 22,
      espejos: 4,
      sofas: 2,
      mesas_maquillaje: 3,
      sala_espera_separada: true
    },
    alimentacion: {
      comidas_calientes: true,
      bebidas: ["agua natural x30", "gatorade x10", "jugo natural x10", "cafe"],
      snacks: ["frutas", "sandwiches", "galletas"]
    },
    observaciones_generales: "Grupo de 18 personas. Coordinador: Mauricio Sanchez +5723000001"
  },
  {
    id_artista_pg: 2,
    id_escenario_pg: 1,
    nombre_artista: "Gilberto Santa Rosa",
    escenario: "Golden Clave",
    sonido: {
      consola: "Avid SC48",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Sennheiser SKM 9000", "Shure ULXD2"],
      monitores_escenario: 6,
      in_ear_monitoring: true,
      modelo_iem: "Sennheiser EW-IEM G4",
      notas: "El Caballero de la Salsa exige mezcla impecable"
    },
    luces: {
      moving_heads: 16,
      par_leds: 30,
      hazer: true,
      strobes: false,
      colores_requeridos: ["azul", "blanco", "dorado"],
      notas: "Iluminacion elegante, sin efectos agresivos durante baladas"
    },
    camerino: {
      capacidad_personas: 8,
      temperatura_celsius: 20,
      items_especiales: ["espejo full-body", "vaporizador de ropa", "perchero doble"]
    },
    alimentacion: {
      restricciones: ["sin mariscos"],
      bebidas: ["agua Evian x20", "jugos naturales x8", "Ron Brugal x2", "cafe premium"],
      comidas_calientes: true,
      snacks: ["frutas tropicales", "quesos", "antipasto"]
    },
    observaciones_generales: "Requiere 1 hora de soundcheck exclusivo. No interrumpir calentamiento vocal."
  },
  {
    id_artista_pg: 3,
    id_escenario_pg: 1,
    nombre_artista: "Joe Arroyo",
    escenario: "Golden Clave",
    sonido: {
      consola: "Yamaha PM5D",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Shure SM58 x8", "Shure Beta 52A x2"],
      monitores_escenario: 8,
      in_ear_monitoring: false,
      notas: "Homenaje postumo — banda tributo de 8 integrantes"
    },
    luces: {
      moving_heads: 18,
      par_leds: 36,
      hazer: true,
      strobes: false,
      pantallas_led: true,
      contenido_pantallas: "Fotos y videos historicos de Joe Arroyo",
      notas: "Pantallas con tributo visual durante todo el set"
    },
    camerino: {
      capacidad_personas: 12,
      temperatura_celsius: 22,
      notas: "Coordinacion con familia Arroyo para protocolo del homenaje"
    },
    alimentacion: {
      bebidas: ["agua x20", "jugos x8", "aguardiente Cristal x2"],
      comidas_calientes: true
    },
    observaciones_generales: "Acto de homenaje. Coordinacion previa con Fundacion Joe Arroyo."
  },
  {
    id_artista_pg: 4,
    id_escenario_pg: 1,
    nombre_artista: "Los Van Van",
    escenario: "Golden Clave",
    sonido: {
      consola: "DiGiCo SD10",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Sennheiser e935 x8", "Shure SM57 x6", "AKG C414 x4"],
      monitores_escenario: 10,
      in_ear_monitoring: true,
      modelo_iem: "Shure PSM1000",
      notas: "14 musicos en escena. Requerimiento de wedges en posiciones especificas"
    },
    luces: {
      moving_heads: 24,
      par_leds: 48,
      hazer: true,
      strobes: true,
      colores_requeridos: ["rojo", "amarillo", "azul cubano"],
      notas: "Efecto especial en El Negro Esta Cocinando"
    },
    camerino: {
      capacidad_personas: 18,
      temperatura_celsius: 21,
      salas_separadas: 2,
      items_especiales: ["sistema de sonido interno", "TV 55 pulgadas"]
    },
    alimentacion: {
      restricciones: ["vegetariano para 3 integrantes"],
      bebidas: ["agua x40", "jugos x15", "cerveza cubana x24", "ron Havana Club x3"],
      comidas_calientes: true,
      notas: "Cena caliente 2h antes del show"
    },
    observaciones_generales: "Coordinacion con ARTEX Cuba. 14 integrantes."
  },
  {
    id_artista_pg: 5,
    id_escenario_pg: 2,
    nombre_artista: "Choquibtown",
    escenario: "Barrio Fuego",
    sonido: {
      consola: "Allen & Heath dLive",
      sistema_pa: "d&b audiotechnik",
      microfonos: ["Shure SM58 x3", "Shure Beta 58A x2"],
      monitores_escenario: 4,
      in_ear_monitoring: true,
      playback_requerido: true,
      notas: "Requieren pistas de backing track. Laptop en escena."
    },
    luces: {
      moving_heads: 12,
      par_leds: 24,
      hazer: true,
      strobes: true,
      colores_requeridos: ["verde pacifico", "dorado", "naranja"],
      notas: "Concepto visual del Choco — colores tropicales y selva"
    },
    camerino: {
      capacidad_personas: 6,
      temperatura_celsius: 22,
      items_especiales: ["espejo x2", "parlante bluetooth"]
    },
    alimentacion: {
      bebidas: ["agua x15", "gatorade x6", "jugos x6", "aguardiente x1"],
      snacks: ["frutas", "sandwiches energeticos"]
    },
    observaciones_generales: "Grupo urbano. Requieren DJ set de 30 min de apertura antes de salir."
  },
  {
    id_artista_pg: 6,
    id_escenario_pg: 2,
    nombre_artista: "Marc Anthony",
    escenario: "Barrio Fuego",
    sonido: {
      consola: "Avid S6L",
      sistema_pa: "d&b audiotechnik J-Series",
      microfonos: ["Sennheiser SKM 9000 Gold"],
      monitores_escenario: 8,
      in_ear_monitoring: true,
      modelo_iem: "Sennheiser EW-IEM G4 Pro",
      tecnico_propio: true,
      notas: "Marc trae su propio ingeniero de monitores desde Miami"
    },
    luces: {
      moving_heads: 24,
      par_leds: 60,
      hazer: true,
      strobes: false,
      laser: true,
      colores_prohibidos: ["verde"],
      notas: "Rider de luces firmado por su production manager. Sin verde en ningun momento."
    },
    camerino: {
      capacidad_personas: 10,
      temperatura_celsius: 19,
      items_especiales: ["espejo full-body x2", "sofa de 3 puestos", "mini nevera", "TV 65 pulgadas"],
      seguridad_privada: 2
    },
    alimentacion: {
      restricciones: ["sin gluten", "sin lacteos en comidas calientes"],
      bebidas: ["agua Evian x30", "Red Bull x12", "Pedialyte x6", "jugo verde x6"],
      comidas_calientes: true,
      catering_especial: "Chef privado de la produccion",
      notas: "Cena especial 3h antes. Sin comida frita."
    },
    observaciones_generales: "Vuelo privado confirmado. Seguridad de 4 personas en todo momento."
  },
  {
    id_artista_pg: 7,
    id_escenario_pg: 2,
    nombre_artista: "Carlos Vives",
    escenario: "Barrio Fuego",
    sonido: {
      consola: "Yamaha CL5",
      sistema_pa: "d&b audiotechnik",
      microfonos: ["Shure SM58 x4", "Shure Beta 91A x2"],
      instrumentos_escenario: ["acordeon", "gaita", "caja vallenata", "bajo", "guitarras x2"],
      monitores_escenario: 6,
      in_ear_monitoring: false,
      notas: "Sonido tropical vallenato. Acustica natural preferida."
    },
    luces: {
      moving_heads: 16,
      par_leds: 32,
      hazer: true,
      strobes: false,
      colores_requeridos: ["azul cielo", "amarillo", "verde esmeralda"],
      notas: "Concepto de costa caribe colombiana"
    },
    camerino: {
      capacidad_personas: 10,
      temperatura_celsius: 21,
      items_especiales: ["nevera", "espejo x2"]
    },
    alimentacion: {
      bebidas: ["agua x20", "jugos costenos x10", "cerveza Club Colombia x12"],
      comidas_calientes: true,
      preferencias: "Comida costena — sancocho o bandeja costena si es posible"
    },
    observaciones_generales: "Carlos viene desde Santa Marta. Transporte terrestre coordinado."
  },
  {
    id_artista_pg: 8,
    id_escenario_pg: 2,
    nombre_artista: "Oscar D Leon",
    escenario: "Barrio Fuego",
    sonido: {
      consola: "DiGiCo SD9",
      sistema_pa: "d&b audiotechnik",
      microfonos: ["Shure SM58 x6", "DPA d:vote x4"],
      monitores_escenario: 8,
      in_ear_monitoring: false,
      notas: "El Leon requiere mucho nivel en monitores. 12 musicos en escena."
    },
    luces: {
      moving_heads: 16,
      par_leds: 32,
      hazer: true,
      colores_requeridos: ["naranja venezolano", "rojo", "dorado"]
    },
    camerino: {
      capacidad_personas: 16,
      temperatura_celsius: 23,
      items_especiales: ["espejo grande", "sofa", "TV"]
    },
    alimentacion: {
      bebidas: ["agua x30", "whisky Black Label x2", "ron Diplomatico x2", "jugos x10"],
      comidas_calientes: true,
      preferencias: "Comida venezolana — pabellon o arepa si es posible"
    },
    observaciones_generales: "Coordinacion con embajada venezolana para visas. 12 musicos."
  },
  {
    id_artista_pg: 9,
    id_escenario_pg: 3,
    nombre_artista: "La EBRS",
    escenario: "Luna Caribe",
    sonido: {
      consola: "Yamaha QL5",
      sistema_pa: "Meyer Sound LEOPARD",
      microfonos: ["Neumann KM 184 x4", "AKG C414 x4", "Shure SM58 x2"],
      instrumentos: ["piano de cola", "contrabajo", "bateria jazz", "trompeta", "saxofon alto", "saxofon tenor"],
      monitores_escenario: 6,
      in_ear_monitoring: false,
      notas: "Jazz acustico. Preferir sistema de PA de alta fidelidad."
    },
    luces: {
      moving_heads: 8,
      par_leds: 16,
      hazer: false,
      strobes: false,
      colores_requeridos: ["azul medianoche", "blanco calido"],
      notas: "Ambiente intimo. Sin efectos agresivos."
    },
    camerino: {
      capacidad_personas: 14,
      temperatura_celsius: 20,
      items_especiales: ["piano de calentamiento", "atriles x10"]
    },
    alimentacion: {
      restricciones: ["vegetariano para 2"],
      bebidas: ["agua x20", "te x10", "cafe premium x1", "vino tinto x2"],
      snacks: ["frutas", "quesos artesanales", "nueces"]
    },
    observaciones_generales: "Agrupacion local de Cali. Muy profesional y puntual."
  },
  {
    id_artista_pg: 10,
    id_escenario_pg: 3,
    nombre_artista: "Ruben Blades",
    escenario: "Luna Caribe",
    sonido: {
      consola: "Avid SC48",
      sistema_pa: "Meyer Sound",
      microfonos: ["Sennheiser SKM 5200", "Neumann KMS 105"],
      monitores_escenario: 6,
      in_ear_monitoring: true,
      notas: "Ruben habla entre canciones. Microfono siempre activo."
    },
    luces: {
      moving_heads: 10,
      par_leds: 20,
      hazer: true,
      strobes: false,
      colores_requeridos: ["sepia", "dorado", "azul profundo"],
      notas: "Estetica cinematografica."
    },
    camerino: {
      capacidad_personas: 8,
      temperatura_celsius: 20,
      items_especiales: ["escritorio", "libros", "cafe de altura"],
      notas: "Ruben necesita espacio tranquilo para escribir"
    },
    alimentacion: {
      restricciones: ["sin picante"],
      bebidas: ["agua x15", "cafe de altura x2", "jugos naturales x8"],
      comidas_calientes: true,
      preferencias: "Comida panamena o latinoamericana ligera"
    },
    observaciones_generales: "Llegar 3h antes para soundcheck."
  },
  {
    id_artista_pg: 11,
    id_escenario_pg: 3,
    nombre_artista: "Celia Cruz",
    escenario: "Luna Caribe",
    sonido: {
      consola: "DiGiCo SD10",
      sistema_pa: "Meyer Sound",
      microfonos: ["Shure SM58 Gold Edition"],
      orquesta_en_escena: true,
      num_musicos_orquesta: 12,
      monitores_escenario: 8,
      notas: "Homenaje con orquesta especial."
    },
    luces: {
      moving_heads: 16,
      par_leds: 30,
      hazer: true,
      pantallas_led: true,
      contenido_pantallas: "Tributo visual con imagenes de Celia Cruz",
      colores_requeridos: ["dorado", "naranja brillante", "blanco"],
      notas: "AZUCAR en las pantallas al inicio del show"
    },
    camerino: {
      capacidad_personas: 15,
      temperatura_celsius: 22,
      decoracion_especial: "Flores tropicales — rosas y orquideas"
    },
    alimentacion: {
      bebidas: ["agua x25", "ron Havana Club x2", "jugos tropicales x10"],
      comidas_calientes: true,
      preferencias: "Comida cubana — ropa vieja, arroz moros y platano"
    },
    observaciones_generales: "Homenaje postumo. Coordinacion con Pedro Knight."
  },
  {
    id_artista_pg: 12,
    id_escenario_pg: 3,
    nombre_artista: "Fruko y Sus Tesos",
    escenario: "Luna Caribe",
    sonido: {
      consola: "Yamaha CL3",
      sistema_pa: "Meyer Sound LEOPARD",
      microfonos: ["Shure SM58 x6", "Shure Beta 52A x2"],
      instrumentos: ["timbales", "congas x2", "bongos", "cowbell", "guiro"],
      monitores_escenario: 8,
      notas: "16 musicos en escena. Seccion de vientos amplia."
    },
    luces: {
      moving_heads: 12,
      par_leds: 24,
      hazer: true,
      colores_requeridos: ["amarillo Medellin", "verde", "rojo"]
    },
    camerino: {
      capacidad_personas: 20,
      temperatura_celsius: 22
    },
    alimentacion: {
      bebidas: ["agua x30", "aguardiente Antioqueno x3", "cerveza x24", "jugos x10"],
      comidas_calientes: true,
      preferencias: "Bandeja paisa o sancocho antioqueno"
    },
    observaciones_generales: "16 musicos. Transporte desde Medellin coordinado."
  },
  {
    id_artista_pg: 13,
    id_escenario_pg: 1,
    nombre_artista: "Victor Manuelle",
    escenario: "Golden Clave",
    sonido: {
      consola: "Yamaha CL5",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Sennheiser SKM 9000"],
      monitores_escenario: 6,
      in_ear_monitoring: true
    },
    luces: {
      moving_heads: 14,
      par_leds: 28,
      hazer: true,
      colores_requeridos: ["rojo pasion", "blanco", "dorado"]
    },
    camerino: {
      capacidad_personas: 8,
      temperatura_celsius: 21,
      items_especiales: ["espejo", "vaporizador vocal"]
    },
    alimentacion: {
      restricciones: ["sin picante fuerte"],
      bebidas: ["agua Evian x20", "te de manzanilla x6", "jugos x8"],
      notas: "Te de manzanilla obligatorio 1h antes del show para la voz"
    },
    observaciones_generales: "Vuelo desde San Juan. Soundcheck el dia 17 a las 14h."
  },
  {
    id_artista_pg: 14,
    id_escenario_pg: 2,
    nombre_artista: "Eddie Santiago",
    escenario: "Barrio Fuego",
    sonido: {
      consola: "Allen & Heath dLive",
      sistema_pa: "d&b audiotechnik",
      microfonos: ["Shure ULXD2"],
      monitores_escenario: 6,
      in_ear_monitoring: true,
      notas: "Eddie es muy exigente con el retorno de voz"
    },
    luces: {
      moving_heads: 12,
      par_leds: 24,
      hazer: true,
      colores_requeridos: ["azul marino", "blanco brillante"]
    },
    camerino: {
      capacidad_personas: 6,
      temperatura_celsius: 20
    },
    alimentacion: {
      bebidas: ["agua x15", "jugos x8", "Ron del Barrilito x1"],
      notas: "Ron del Barrilito de Puerto Rico si es posible conseguir"
    },
    observaciones_generales: "Vuelo desde San Juan. Artista puntual y profesional."
  },
  {
    id_artista_pg: 15,
    id_escenario_pg: 1,
    nombre_artista: "Wilson Saoko",
    escenario: "Golden Clave",
    sonido: {
      consola: "Yamaha CL3",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Shure SM58 x2"],
      monitores_escenario: 4
    },
    luces: {
      moving_heads: 10,
      par_leds: 20,
      hazer: true,
      colores_requeridos: ["verde", "dorado", "naranja"]
    },
    camerino: { capacidad_personas: 4, temperatura_celsius: 22 },
    alimentacion: {
      bebidas: ["agua x10", "aguardiente x1", "jugos x6"],
      preferencias: "Comida calena"
    },
    observaciones_generales: "Artista local. Transporte propio."
  },
  {
    id_artista_pg: 16,
    id_escenario_pg: 3,
    nombre_artista: "Jerry Rivera",
    escenario: "Luna Caribe",
    sonido: {
      consola: "Yamaha QL5",
      sistema_pa: "Meyer Sound",
      microfonos: ["Sennheiser SKM 5200"],
      monitores_escenario: 5,
      in_ear_monitoring: true,
      notas: "Voz suave y precisa. IEM obligatorio."
    },
    luces: {
      moving_heads: 10,
      par_leds: 20,
      hazer: true,
      strobes: false,
      colores_requeridos: ["lila", "rosa", "blanco calido"]
    },
    camerino: {
      capacidad_personas: 6,
      temperatura_celsius: 20,
      items_especiales: ["humidificador para la voz"]
    },
    alimentacion: {
      restricciones: ["sin alcohol"],
      bebidas: ["agua x15", "te herbal x8", "jugos naturales x8"],
      notas: "Jerry no consume alcohol. Respetar estrictamente."
    },
    observaciones_generales: "Llega desde San Juan el 16 de octubre."
  },
  {
    id_artista_pg: 17,
    id_escenario_pg: 1,
    nombre_artista: "Willie Colon",
    escenario: "Golden Clave",
    sonido: {
      consola: "DiGiCo SD10",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Shure SM58 x4", "Shure Beta 52A x4"],
      seccion_brass: ["trombones x3", "trompetas x2", "saxofon x1"],
      monitores_escenario: 8,
      notas: "Brass section pesada. Requiere FOH experimentado en salsa dura."
    },
    luces: {
      moving_heads: 16,
      par_leds: 32,
      hazer: true,
      strobes: true,
      colores_requeridos: ["rojo oscuro", "amarillo neon"]
    },
    camerino: { capacidad_personas: 12, temperatura_celsius: 21 },
    alimentacion: {
      bebidas: ["agua x20", "cerveza x18", "whisky x1", "jugos x8"]
    },
    observaciones_generales: "Leyenda viva del boogaloo. 8 musicos en escena."
  },
  {
    id_artista_pg: 18,
    id_escenario_pg: 1,
    nombre_artista: "Hector Lavoe",
    escenario: "Golden Clave",
    sonido: {
      consola: "Yamaha PM5D",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Shure SM58 x6"],
      notas: "Homenaje postumo. Banda tributo de 10 musicos."
    },
    luces: {
      moving_heads: 14,
      par_leds: 28,
      pantallas_led: true,
      contenido_pantallas: "Documental y fotos de Hector Lavoe",
      colores_requeridos: ["sepia", "dorado nostalgico"]
    },
    camerino: { capacidad_personas: 14, temperatura_celsius: 22 },
    alimentacion: {
      bebidas: ["agua x20", "ron x2", "jugos x8"],
      notas: "Homenaje. Coordinacion con familia Lavoe."
    },
    observaciones_generales: "El Cantante de los Cantantes. Homenaje especial con banda tributo."
  },
  {
    id_artista_pg: 19,
    id_escenario_pg: 3,
    nombre_artista: "Orquesta Aragon",
    escenario: "Luna Caribe",
    sonido: {
      consola: "Yamaha QL5",
      sistema_pa: "Meyer Sound",
      microfonos: ["AKG C414 x6", "Neumann KM 184 x4"],
      instrumentos: ["flautas x3", "violines x4", "bajo", "tumbadoras", "guiro"],
      monitores_escenario: 8,
      notas: "Orquesta cubana clasica. 16 musicos."
    },
    luces: {
      moving_heads: 8,
      par_leds: 16,
      colores_requeridos: ["blanco perla", "azul Cuba"]
    },
    camerino: {
      capacidad_personas: 20,
      temperatura_celsius: 20,
      notas: "Orquesta numerosa. Espacio amplio requerido."
    },
    alimentacion: {
      bebidas: ["agua x25", "ron Havana x2", "jugos x10"],
      preferencias: "Comida cubana"
    },
    observaciones_generales: "Orquesta historica de Cuba. Coordinacion con ARTEX."
  },
  {
    id_artista_pg: 20,
    id_escenario_pg: 1,
    nombre_artista: "Johnny Pacheco",
    escenario: "Golden Clave",
    sonido: {
      consola: "Avid SC48",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Shure SM58 x6"],
      notas: "Homenaje postumo. Coordinacion con Fania Records."
    },
    luces: {
      moving_heads: 12,
      par_leds: 24,
      pantallas_led: true,
      contenido_pantallas: "Historia de la Fania All Stars",
      colores_requeridos: ["dorado Fania", "rojo", "negro"]
    },
    camerino: { capacidad_personas: 12, temperatura_celsius: 22 },
    alimentacion: {
      bebidas: ["agua x20", "ron Brugal x2", "jugos x8"],
      preferencias: "Comida dominicana"
    },
    observaciones_generales: "El Catalizador. Homenaje con musicos de la Fania All Stars."
  },
  {
    id_artista_pg: 21,
    id_escenario_pg: 2,
    nombre_artista: "Samy y Sandra Sandoval",
    escenario: "Barrio Fuego",
    sonido: {
      consola: "Yamaha CL3",
      sistema_pa: "d&b audiotechnik",
      microfonos: ["Sennheiser e935 x2", "Shure SM58 x2"],
      monitores_escenario: 4,
      in_ear_monitoring: true,
      notas: "Duo romantico. Armonias vocales muy precisas."
    },
    luces: {
      moving_heads: 10,
      par_leds: 20,
      hazer: true,
      colores_requeridos: ["rosa", "lila", "blanco"]
    },
    camerino: {
      capacidad_personas: 8,
      temperatura_celsius: 21,
      notas: "Camerino mixto para el duo y sus 4 musicos"
    },
    alimentacion: {
      bebidas: ["agua x15", "jugos x8", "ron Abuelo x1"]
    },
    observaciones_generales: "Duo de Panama. Vuelo confirmado. Muy profesionales."
  },
  {
    id_artista_pg: 22,
    id_escenario_pg: 2,
    nombre_artista: "La Sonora Carruseles",
    escenario: "Barrio Fuego",
    sonido: {
      consola: "DiGiCo SD9",
      sistema_pa: "d&b audiotechnik",
      microfonos: ["Shure SM58 x8"],
      seccion_vientos: ["trompetas x3", "trombon x2", "saxofon x1"],
      monitores_escenario: 8,
      notas: "14 musicos. Orquesta costena de alto nivel."
    },
    luces: {
      moving_heads: 14,
      par_leds: 28,
      hazer: true,
      colores_requeridos: ["azul caribe", "dorado", "verde barranquilla"]
    },
    camerino: { capacidad_personas: 18, temperatura_celsius: 22 },
    alimentacion: {
      bebidas: ["agua x25", "aguardiente x2", "cerveza x18", "jugos costenos x10"],
      preferencias: "Ceviche, patacones o bandeja costena"
    },
    observaciones_generales: "Orquesta de Barranquilla. 14 musicos."
  },
  {
    id_artista_pg: 23,
    id_escenario_pg: 2,
    nombre_artista: "Dimension Latina",
    escenario: "Barrio Fuego",
    sonido: {
      consola: "Yamaha CL5",
      sistema_pa: "d&b audiotechnik",
      microfonos: ["Shure SM58 x6", "AKG D112 x2"],
      monitores_escenario: 8,
      notas: "12 musicos venezolanos."
    },
    luces: {
      moving_heads: 12,
      par_leds: 24,
      colores_requeridos: ["amarillo Venezuela", "azul", "rojo"]
    },
    camerino: { capacidad_personas: 16, temperatura_celsius: 22 },
    alimentacion: {
      bebidas: ["agua x25", "ron Diplomatico x2", "cerveza x18"],
      preferencias: "Pabellon criollo o arepas venezolanas"
    },
    observaciones_generales: "Coordinacion con embajada venezolana. 12 musicos."
  },
  {
    id_artista_pg: 24,
    id_escenario_pg: 2,
    nombre_artista: "Tony Vega",
    escenario: "Barrio Fuego",
    sonido: {
      consola: "Allen & Heath dLive",
      sistema_pa: "d&b audiotechnik",
      microfonos: ["Sennheiser SKM 5200"],
      monitores_escenario: 5,
      in_ear_monitoring: true
    },
    luces: {
      moving_heads: 10,
      par_leds: 20,
      colores_requeridos: ["lila", "blanco", "dorado"]
    },
    camerino: { capacidad_personas: 6, temperatura_celsius: 21 },
    alimentacion: {
      bebidas: ["agua x15", "jugos x8", "ron del Barrilito x1"]
    },
    observaciones_generales: "Vuelo desde San Juan."
  },
  {
    id_artista_pg: 25,
    id_escenario_pg: 1,
    nombre_artista: "Guayacan Orquesta",
    escenario: "Golden Clave",
    sonido: {
      consola: "DiGiCo SD10",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["Shure SM58 x8", "AKG C414 x4"],
      instrumentos: ["timbales", "congas x2", "bongos", "piano electrico", "bajo", "guitarras x2"],
      monitores_escenario: 10,
      notas: "15 musicos. La orquesta mas representativa de Cali."
    },
    luces: {
      moving_heads: 20,
      par_leds: 40,
      hazer: true,
      colores_requeridos: ["verde caleno", "dorado", "blanco"],
      notas: "Colores del Cali FC en apertura como homenaje"
    },
    camerino: {
      capacidad_personas: 20,
      temperatura_celsius: 22,
      items_especiales: ["sala VIP", "nevera grande"]
    },
    alimentacion: {
      bebidas: ["agua x30", "aguardiente Cristal x3", "cerveza Club Colombia x24", "jugos x12"],
      preferencias: "Chuleta valluna o sancocho valluno"
    },
    observaciones_generales: "Orquesta estrella del festival. Nativos de Cali."
  },
  {
    id_artista_pg: 26,
    id_escenario_pg: 3,
    nombre_artista: "Issac Delgado",
    escenario: "Luna Caribe",
    sonido: {
      consola: "Yamaha QL5",
      sistema_pa: "Meyer Sound",
      microfonos: ["Sennheiser e945"],
      monitores_escenario: 6,
      in_ear_monitoring: true,
      notas: "Timba cubana sofisticada."
    },
    luces: {
      moving_heads: 10,
      par_leds: 20,
      colores_requeridos: ["azul turquesa Cuba", "blanco", "dorado"]
    },
    camerino: { capacidad_personas: 8, temperatura_celsius: 21 },
    alimentacion: {
      bebidas: ["agua x15", "ron Havana x1", "jugos x8"],
      preferencias: "Comida cubana ligera"
    },
    observaciones_generales: "Vuelo coordinado con ARTEX Cuba."
  },
  {
    id_artista_pg: 27,
    id_escenario_pg: 3,
    nombre_artista: "Son de Cali",
    escenario: "Luna Caribe",
    sonido: {
      consola: "Yamaha CL3",
      sistema_pa: "Meyer Sound LEOPARD",
      microfonos: ["Shure SM58 x4"],
      monitores_escenario: 4
    },
    luces: {
      par_leds: 16,
      colores_requeridos: ["verde cali", "blanco", "dorado"]
    },
    camerino: { capacidad_personas: 10, temperatura_celsius: 22 },
    alimentacion: {
      bebidas: ["agua x15", "aguardiente x1", "jugos x6"],
      preferencias: "Comida calena"
    },
    observaciones_generales: "Grupo local de Cali. Transporte propio."
  },
  {
    id_artista_pg: 28,
    id_escenario_pg: 3,
    nombre_artista: "India",
    escenario: "Luna Caribe",
    sonido: {
      consola: "Avid S6L",
      sistema_pa: "Meyer Sound",
      microfonos: ["Sennheiser SKM 9000 Gold"],
      monitores_escenario: 6,
      in_ear_monitoring: true,
      notas: "La Potra Salvaje. IEM de alta calidad obligatorio."
    },
    luces: {
      moving_heads: 12,
      par_leds: 24,
      hazer: true,
      colores_requeridos: ["rojo pasion", "negro", "blanco"],
      notas: "Estetica dramatica y poderosa"
    },
    camerino: {
      capacidad_personas: 8,
      temperatura_celsius: 20,
      items_especiales: ["espejo full-body", "vaporizador vocal", "flores"]
    },
    alimentacion: {
      restricciones: ["sin gluten"],
      bebidas: ["agua Evian x20", "te herbal x8", "jugos x8"],
      notas: "Protocolo vocal estricto antes del show"
    },
    observaciones_generales: "Vuelo desde San Juan. Produccion privada."
  },
  {
    id_artista_pg: 29,
    id_escenario_pg: 1,
    nombre_artista: "Tito Puente",
    escenario: "Golden Clave",
    sonido: {
      consola: "DiGiCo SD9",
      sistema_pa: "L-Acoustics K2",
      microfonos: ["DPA d:vote x6", "Shure SM57 x4"],
      instrumentos: ["timbales Tito Puente originales", "vibraphone", "marimba"],
      notas: "Homenaje postumo. Timbales coordinados con Tito Puente Jr."
    },
    luces: {
      moving_heads: 16,
      par_leds: 30,
      pantallas_led: true,
      contenido_pantallas: "El Rey del Timbal — tributo visual",
      colores_requeridos: ["dorado", "rojo intenso"]
    },
    camerino: { capacidad_personas: 12, temperatura_celsius: 21 },
    alimentacion: {
      bebidas: ["agua x20", "ron x2", "jugos x8"],
      preferencias: "Comida neoyorquina latina"
    },
    observaciones_generales: "El Rey del Mambo. Homenaje coordinado con Tito Puente Jr."
  },
  {
    id_artista_pg: 30,
    id_escenario_pg: 3,
    nombre_artista: "Alfredo de la Fe",
    escenario: "Luna Caribe",
    sonido: {
      consola: "Yamaha QL5",
      sistema_pa: "Meyer Sound LEOPARD",
      microfonos: ["AKG C414 x2", "DPA 4099V x2"],
      instrumentos: ["violin electrico Zeta x2", "amplificador violin", "pedalera efectos"],
      monitores_escenario: 5,
      in_ear_monitoring: true,
      notas: "Violinista de jazz-salsa. Requiere DI box de alta calidad."
    },
    luces: {
      moving_heads: 8,
      par_leds: 16,
      hazer: false,
      colores_requeridos: ["azul jazz", "blanco calido"],
      notas: "Ambiente intimista de jazz club"
    },
    camerino: {
      capacidad_personas: 6,
      temperatura_celsius: 20,
      items_especiales: ["atril de musica", "silla especial para violinista"]
    },
    alimentacion: {
      bebidas: ["agua x15", "cafe x2", "vino tinto x1", "jugos x6"]
    },
    observaciones_generales: "El Violinista del Pueblo. Transporte desde Bogota."
  }

]);



db.resenas_publico.insertMany([
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 1,
    id_presentacion_pg: 1,
    id_artista_pg: 1,
    id_escenario_pg: 1,
    nombre_artista: "Grupo Niche",
    escenario: "Golden Clave",
    calificacion: 5,
    texto: "Grupo Niche abrio el Golden Clave con una energia que jamas habia sentido en un concierto. Cali Pachanguero sono y la gente enloquecio.",
    etiquetas: ["energia", "clasicos", "publico entregado"],
    fecha_resena: new Date("2026-10-17T17:45:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 2,
    id_presentacion_pg: 2,
    id_artista_pg: 2,
    id_escenario_pg: 1,
    nombre_artista: "Gilberto Santa Rosa",
    escenario: "Golden Clave",
    calificacion: 5,
    texto: "El Caballero de la Salsa hizo llorar a medio festival. Que Manera de Quererte fue magica. Perfecto en todo.",
    etiquetas: ["romantico", "emocionante", "voz perfecta"],
    fecha_resena: new Date("2026-10-17T19:10:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 3,
    id_presentacion_pg: 4,
    id_artista_pg: 4,
    id_escenario_pg: 1,
    nombre_artista: "Los Van Van",
    escenario: "Golden Clave",
    calificacion: 5,
    texto: "Los Van Van cerraron el sabado con una energia brutal. El Negro Esta Cocinando duro 8 minutos y nadie queria que parara.",
    etiquetas: ["timba", "cubanos", "cierre epico"],
    fecha_resena: new Date("2026-10-17T23:15:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 4,
    id_presentacion_pg: 10,
    id_artista_pg: 6,
    id_escenario_pg: 2,
    nombre_artista: "Marc Anthony",
    escenario: "Barrio Fuego",
    calificacion: 5,
    texto: "Marc Anthony es otro nivel. Vivir Mi Vida con ese sonido del Barrio Fuego fue una experiencia de vida.",
    etiquetas: ["mundial", "produccion", "experiencia unica"],
    fecha_resena: new Date("2026-10-17T17:50:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 5,
    id_presentacion_pg: 18,
    id_artista_pg: 10,
    id_escenario_pg: 3,
    nombre_artista: "Ruben Blades",
    escenario: "Luna Caribe",
    calificacion: 5,
    texto: "Ruben Blades en Luna Caribe fue como escuchar poesia con ritmo. Pedro Navaja sono diferente, mas intima. Fue un privilegio.",
    etiquetas: ["intimo", "poetico", "legendario"],
    fecha_resena: new Date("2026-10-17T16:55:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 6,
    id_presentacion_pg: 19,
    id_artista_pg: 11,
    id_escenario_pg: 3,
    nombre_artista: "Celia Cruz",
    escenario: "Luna Caribe",
    calificacion: 5,
    texto: "El homenaje a Celia Cruz me hizo llorar. Cuando pusieron Azucar en la pantalla y empezo La Vida Es un Carnaval, el alma se me fue al pecho.",
    etiquetas: ["homenaje", "emotivo", "leyenda"],
    fecha_resena: new Date("2026-10-17T18:40:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 7,
    id_presentacion_pg: 9,
    id_artista_pg: 5,
    id_escenario_pg: 2,
    nombre_artista: "Choquibtown",
    escenario: "Barrio Fuego",
    calificacion: 4,
    texto: "Choquibtown abrio el Barrio Fuego con mucha garra. De Donde Vengo Yo fue un hit pero el sonido al inicio estuvo un poco bajo.",
    fecha_resena: new Date("2026-10-17T16:20:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 8,
    id_presentacion_pg: 20,
    id_artista_pg: 12,
    id_escenario_pg: 3,
    nombre_artista: "Fruko y Sus Tesos",
    escenario: "Luna Caribe",
    calificacion: 5,
    texto: "Fruko cerrando Luna Caribe con Ruben Blades de invitado fue historico. Luna Llena con los dos juntos fue el mejor momento del festival.",
    etiquetas: ["historico", "colaboracion", "cierre perfecto"],
    fecha_resena: new Date("2026-10-17T21:10:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 9,
    id_presentacion_pg: 11,
    id_artista_pg: 7,
    id_escenario_pg: 2,
    nombre_artista: "Carlos Vives",
    escenario: "Barrio Fuego",
    calificacion: 4,
    texto: "La Bicicleta en el Barrio Fuego fue una mezcla rara pero funcional. Carlos Vives siempre entrega.",
    fecha_resena: new Date("2026-10-17T19:35:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 10,
    id_presentacion_pg: 8,
    id_artista_pg: 1,
    id_escenario_pg: 1,
    nombre_artista: "Grupo Niche",
    escenario: "Golden Clave",
    calificacion: 5,
    texto: "Grupo Niche cerrando el festival con Celia Cruz de invitada fue el broche de oro perfecto. Los fuegos artificiales al final fueron espectaculares.",
    etiquetas: ["cierre festival", "epico", "fuegos artificiales"],
    fecha_resena: new Date("2026-10-18T23:05:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 11,
    id_presentacion_pg: 15,
    id_artista_pg: 6,
    id_escenario_pg: 2,
    nombre_artista: "Marc Anthony",
    escenario: "Barrio Fuego",
    calificacion: 5,
    texto: "El Cantante el domingo fue devastadoramente hermoso. Marc sabe como interpretar ese homenaje a Hector Lavoe.",
    etiquetas: ["homenaje Lavoe", "emocionante", "domingo"],
    fecha_resena: new Date("2026-10-18T18:00:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 12,
    id_presentacion_pg: 23,
    id_artista_pg: 10,
    id_escenario_pg: 3,
    nombre_artista: "Ruben Blades",
    escenario: "Luna Caribe",
    calificacion: 5,
    texto: "Decisiones el domingo fue diferente al Pedro Navaja del sabado. Ruben es el unico artista que hace que cada show sea unico e irrepetible.",
    etiquetas: ["unico", "irrepetible", "domingo"],
    fecha_resena: new Date("2026-10-18T17:50:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 13,
    id_artista_pg: 6,
    nombre_artista: "Marc Anthony",
    calificacion: 5,
    texto: "Marc Anthony es simplemente el mejor salsero vivo del mundo. Cada nota, cada gesto, cada pausa es perfecto.",
    etiquetas: ["mejor del mundo", "agradecimiento", "voz"],
    fecha_resena: new Date("2026-10-18T23:30:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 14,
    id_artista_pg: 1,
    nombre_artista: "Grupo Niche",
    calificacion: 5,
    texto: "Grupo Niche es el alma de Cali. Verlos en casa fue un sueno cumplido.",
    etiquetas: ["alma de Cali", "locales", "amor del publico"],
    fecha_resena: new Date("2026-10-18T23:45:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 15,
    id_artista_pg: 10,
    nombre_artista: "Ruben Blades",
    calificacion: 5,
    texto: "Ruben Blades no es solo un musico, es un poeta y un activista. Verlo dos noches seguidas y que cada noche fuera diferente dice todo de su grandeza.",
    fecha_resena: new Date("2026-10-19T00:15:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 16,
    id_artista_pg: 4,
    nombre_artista: "Los Van Van",
    calificacion: 5,
    texto: "Los Van Van no envejecen. La timba cubana que tocaron el sabado fue energia pura. Cuba musical en Cali.",
    etiquetas: ["Cuba", "timba", "energia"],
    fecha_resena: new Date("2026-10-17T23:50:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 17,
    id_artista_pg: 13,
    nombre_artista: "Victor Manuelle",
    calificacion: 5,
    texto: "Victor Manuelle tiene la voz mas bonita de la salsa romantica. Soy el Mismo me llego al corazon.",
    etiquetas: ["romantico", "voz bonita", "emocional"],
    fecha_resena: new Date("2026-10-18T22:30:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 18,
    id_artista_pg: 14,
    nombre_artista: "Eddie Santiago",
    calificacion: 5,
    texto: "Eddie Santiago en el Barrio Fuego fue una combinacion ganadora. Lluvia sono increible con ese sistema de sonido.",
    etiquetas: ["clase", "romantico", "Barrio Fuego"],
    fecha_resena: new Date("2026-10-17T17:55:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 19,
    id_artista_pg: 11,
    nombre_artista: "Celia Cruz",
    calificacion: 5,
    texto: "Aunque Celia ya no esta con nosotros, su homenaje fue tan real que se sentia su presencia.",
    fecha_resena: new Date("2026-10-18T22:00:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 20,
    id_artista_pg: 25,
    nombre_artista: "Guayacan Orquesta",
    calificacion: 5,
    texto: "Guayacan Orquesta en casa, en el Golden Clave, fue sublime. Oiga Mire Vea con 15 musicos en vivo es otra dimension.",
    etiquetas: ["caleno", "orgullo", "orquesta"],
    fecha_resena: new Date("2026-10-18T22:15:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 21,
    id_artista_pg: 2,
    nombre_artista: "Gilberto Santa Rosa",
    calificacion: 5,
    texto: "El Caballero de la Salsa merece su titulo. Dos noches distintas, dos repertorios distintos, y los dos perfectos.",
    fecha_resena: new Date("2026-10-19T00:30:00Z")
  },
  {
    tipo_resena: "escenario",
    id_asistente_pg: 22,
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    calificacion: 5,
    texto: "El Golden Clave es el escenario mas impresionante que he visto en Colombia. El sistema L-Acoustics es brutal.",
    etiquetas: ["sonido", "impresionante", "mejor escenario"],
    fecha_resena: new Date("2026-10-18T20:00:00Z")
  },
  {
    tipo_resena: "escenario",
    id_asistente_pg: 23,
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    calificacion: 4,
    texto: "Barrio Fuego tiene una energia especial. El diseno del escenario es perfecto para ver de cerca.",
    etiquetas: ["energetico", "cercano"],
    fecha_resena: new Date("2026-10-17T21:30:00Z")
  },
  {
    tipo_resena: "escenario",
    id_asistente_pg: 24,
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    calificacion: 5,
    texto: "Luna Caribe es mi escenario favorito del festival. El ambiente intimo hace que sientas que el artista te esta tocando solo para ti.",
    etiquetas: ["intimo", "magico", "favorito"],
    fecha_resena: new Date("2026-10-18T21:45:00Z")
  },
  {
    tipo_resena: "escenario",
    id_asistente_pg: 25,
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    calificacion: 4,
    texto: "El Golden Clave es imponente pero le faltaron mas pantallas laterales para los que estamos lejos.",
    fecha_resena: new Date("2026-10-17T22:00:00Z")
  },
  {
    tipo_resena: "escenario",
    id_asistente_pg: 26,
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    calificacion: 5,
    texto: "El Barrio Fuego me sorprendio. La vista desde cualquier angulo es perfecta y el sistema de luces es espectacular.",
    etiquetas: ["produccion mundial", "luces", "vista perfecta"],
    fecha_resena: new Date("2026-10-18T19:00:00Z")
  },
  {
    tipo_resena: "escenario",
    id_asistente_pg: 27,
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    calificacion: 5,
    texto: "El nombre Luna Caribe no pudo ser mas acertado. De noche, con esa iluminacion tenue y Ruben Blades cantando, fue una escena de pelicula.",
    etiquetas: ["nombre perfecto", "atmosfera", "de pelicula"],
    fecha_resena: new Date("2026-10-17T17:10:00Z")
  },
  {
    tipo_resena: "escenario",
    id_asistente_pg: 28,
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    calificacion: 5,
    texto: "Nunca habia estado en un escenario de 12 mil personas donde se escuche tan bien.",
    fecha_resena: new Date("2026-10-18T23:00:00Z")
  },
  {
    tipo_resena: "escenario",
    id_asistente_pg: 29,
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    calificacion: 4,
    texto: "Me encanto la ubicacion del Barrio Fuego. Perfecto para moverse rapido entre shows.",
    etiquetas: ["ubicacion estrategica", "logistica"],
    fecha_resena: new Date("2026-10-17T20:45:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 30,
    id_presentacion_pg: 3,
    id_artista_pg: 3,
    id_escenario_pg: 1,
    nombre_artista: "Joe Arroyo",
    escenario: "Golden Clave",
    calificacion: 5,
    texto: "El homenaje a Joe Arroyo fue el momento mas emotivo del festival. La Rebelion sono y todos cantamos hasta perder la voz.",
    etiquetas: ["homenaje", "emotivo", "colombiano"],
    fecha_resena: new Date("2026-10-17T20:50:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 31,
    id_artista_pg: 12,
    nombre_artista: "Fruko y Sus Tesos",
    calificacion: 5,
    texto: "Fruko es Medellin y Colombia. Sus Tesos siguen siendo una orquesta de primer nivel decadas despues.",
    fecha_resena: new Date("2026-10-17T21:30:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 32,
    id_presentacion_pg: 24,
    id_artista_pg: 9,
    id_escenario_pg: 3,
    nombre_artista: "La EBRS",
    escenario: "Luna Caribe",
    calificacion: 5,
    texto: "La EBRS cerrando Luna Caribe fue hermosisimo. La Ultima Noche duro 10 minutos y nadie queria que terminara.",
    etiquetas: ["caleno", "cierre emotivo", "talento local"],
    fecha_resena: new Date("2026-10-18T21:20:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 33,
    id_artista_pg: 9,
    nombre_artista: "La EBRS",
    calificacion: 5,
    texto: "La EBRS deberia tocar en todos los festivales del mundo. Son la prueba de que Cali sigue produciendo la mejor musica de salsa jazz del planeta.",
    etiquetas: ["orgullo caleno", "salsa jazz", "mundial"],
    fecha_resena: new Date("2026-10-19T01:00:00Z")
  },
  {
    tipo_resena: "escenario",
    id_asistente_pg: 34,
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    calificacion: 4,
    texto: "Luna Caribe es perfecto para el jazz pero para orquestas grandes se siente pequeno.",
    fecha_resena: new Date("2026-10-17T21:15:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 35,
    id_presentacion_pg: 12,
    id_artista_pg: 8,
    id_escenario_pg: 2,
    nombre_artista: "Oscar D Leon",
    escenario: "Barrio Fuego",
    calificacion: 5,
    texto: "Oscar D Leon es el Leon de la Salsa y lo demostro. Lloraras con ese sistema del Barrio Fuego fue devastador.",
    etiquetas: ["Venezuela", "clasico", "potente"],
    fecha_resena: new Date("2026-10-17T22:10:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 1,
    id_artista_pg: 8,
    nombre_artista: "Oscar D Leon",
    calificacion: 5,
    texto: "Dos shows de Oscar en dos noches y los dos distintos. Eso es un profesional de verdad.",
    fecha_resena: new Date("2026-10-19T00:45:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 2,
    id_presentacion_pg: 25,
    id_artista_pg: 13,
    id_escenario_pg: 1,
    nombre_artista: "Victor Manuelle",
    escenario: "Golden Clave",
    calificacion: 5,
    texto: "Victor Manuelle en el Golden Clave fue una experiencia que no olvidare. Romanticismo en estado puro.",
    etiquetas: ["romantico", "produccion", "emocionante"],
    fecha_resena: new Date("2026-10-17T21:45:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 3,
    id_presentacion_pg: 26,
    id_artista_pg: 14,
    id_escenario_pg: 2,
    nombre_artista: "Eddie Santiago",
    escenario: "Barrio Fuego",
    calificacion: 4,
    texto: "Eddie Santiago entrego un show solido. El sonido al inicio tuvo un pequeno fallo pero se recupero.",
    fecha_resena: new Date("2026-10-17T17:40:00Z")
  },
  {
    tipo_resena: "presentacion",
    id_asistente_pg: 4,
    id_presentacion_pg: 28,
    id_artista_pg: 25,
    id_escenario_pg: 1,
    nombre_artista: "Guayacan Orquesta",
    escenario: "Golden Clave",
    calificacion: 5,
    texto: "Guayacan cerrando el domingo con Amanecer Caleno y los 15 musicos fue el regalo que Cali se merece.",
    etiquetas: ["caleno", "piel de gallina", "cierre"],
    fecha_resena: new Date("2026-10-18T22:00:00Z")
  },
  {
    tipo_resena: "artista",
    id_asistente_pg: 5,
    id_artista_pg: 5,
    nombre_artista: "Choquibtown",
    calificacion: 4,
    texto: "Choquibtown representa el Pacifico colombiano con orgullo. Su fusion de salsa urbana y ritmos del Choco es unica en el mundo.",
    etiquetas: ["Pacifico", "fusion", "unico"],
    fecha_resena: new Date("2026-10-18T23:15:00Z")
  }

]);



db.reportes_incidentes.insertMany([
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "tecnico",
    gravedad: "alta",
    estado: "resuelto",
    descripcion: "Falla en uno de los amplificadores del sistema L-Acoustics durante soundcheck de Grupo Niche",
    id_staff_pg: 1,
    reportado_por_rol: "tecnico_sonido",
    fecha_reporte: new Date("2026-10-17T14:30:00Z"),
    detalles: {
      equipo_afectado: "Amplificador L-Acoustics LA8 unidad 4",
      solucion_aplicada: "Reemplazo por unidad de respaldo"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T14:45:00Z"), estado: "en_atencion", nota: "Tecnico en el lugar evaluando el equipo" },
      { hora: new Date("2026-10-17T15:10:00Z"), estado: "resuelto",    nota: "Amplificador reemplazado. Sistema funcionando al 100%" }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "seguridad",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Asistente intento ingresar al area de backstage sin credencial durante show de Marc Anthony",
    id_staff_pg: 7,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-17T16:45:00Z"),
    detalles: {
      personas_involucradas: 1,
      accion_tomada: "Retirado del area, entregado a seguridad externa"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T16:50:00Z"), estado: "en_atencion", nota: "Seguridad intercepto al individuo" },
      { hora: new Date("2026-10-17T17:00:00Z"), estado: "resuelto",    nota: "Persona retirada del festival. Sin violencia." }
    ]
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "medico",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Asistente con desmayo durante presentacion de Celia Cruz. Calor y deshidratacion",
    id_staff_pg: 8,
    reportado_por_rol: "tecnico_sonido",
    fecha_reporte: new Date("2026-10-17T18:15:00Z"),
    detalles: {
      sintomas: ["desmayo", "deshidratacion", "calor extremo"],
      atencion_brindada: ["suero oral", "zona de sombra y descanso"],
      requiere_traslado: false
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T18:18:00Z"), estado: "en_atencion", nota: "Medico del festival atendiendo" },
      { hora: new Date("2026-10-17T18:40:00Z"), estado: "resuelto",    nota: "Paciente estable." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "seguridad",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Pelea entre asistentes en sector central derecho durante Los Van Van",
    id_staff_pg: 3,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-17T21:30:00Z"),
    detalles: {
      personas_involucradas: 3,
      causa_aparente: "Discusion por espacio en zona general",
      unidades_seguridad: 3,
      policia_llamada: false
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T21:33:00Z"), estado: "en_atencion", nota: "3 agentes de seguridad en el lugar" },
      { hora: new Date("2026-10-17T21:42:00Z"), estado: "resuelto",    nota: "Dos personas retiradas del festival." }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "tecnico",
    gravedad: "alta",
    estado: "resuelto",
    descripcion: "Corte de energia en sistema de luces del Barrio Fuego por sobrecarga electrica",
    id_staff_pg: 6,
    reportado_por_rol: "tecnico_luces",
    fecha_reporte: new Date("2026-10-17T20:05:00Z"),
    detalles: {
      duracion_falla_segundos: 45,
      causa: "Sobrecarga en tablero electrico principal",
      impacto_show: "Momentaneo apagon de luces. El show continuo."
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T20:06:00Z"), estado: "en_atencion", nota: "Tecnico electrico reiniciando tablero" },
      { hora: new Date("2026-10-17T20:09:00Z"), estado: "resuelto",    nota: "Sistema restaurado al 100%." }
    ]
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "logistica",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Escasez de agua en puntos de hidratacion del Luna Caribe durante la tarde del sabado",
    id_staff_pg: 13,
    reportado_por_rol: "logistica",
    fecha_reporte: new Date("2026-10-17T16:00:00Z"),
    detalles: {
      puntos_afectados: ["hidratacion zona A", "hidratacion zona B"],
      unidades_faltantes: 200
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T16:15:00Z"), estado: "en_atencion", nota: "Logistica contacto al proveedor" },
      { hora: new Date("2026-10-17T16:45:00Z"), estado: "resuelto",    nota: "200 unidades de agua reabastecidas." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "medico",
    gravedad: "alta",
    estado: "resuelto",
    descripcion: "Asistente con crisis de asma en zona VIP durante show de Gilberto Santa Rosa",
    id_staff_pg: 3,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-17T18:20:00Z"),
    detalles: {
      sintomas: ["dificultad respiratoria", "crisis asmatica"],
      atencion_brindada: ["nebulizacion", "oxigeno"],
      requiere_traslado: true,
      hospital_destino: "Clinica Valle del Lili"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T18:22:00Z"), estado: "en_atencion", nota: "Paramedico atendiendo en zona VIP" },
      { hora: new Date("2026-10-17T18:35:00Z"), estado: "en_atencion", nota: "Paciente estabilizado con oxigeno" },
      { hora: new Date("2026-10-17T18:50:00Z"), estado: "resuelto",    nota: "Trasladado a Clinica Valle del Lili. Condicion estable." }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "seguridad",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Menor de edad perdida separada de sus padres en el Barrio Fuego",
    id_staff_pg: 7,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-17T17:30:00Z"),
    detalles: {
      edad_menor: 10,
      lugar_encuentro: "Puesto de seguridad central BF"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T17:35:00Z"), estado: "en_atencion", nota: "Menor en custodia. Buscando a los padres." },
      { hora: new Date("2026-10-17T17:50:00Z"), estado: "resuelto",    nota: "Padres localizados. Menor entregada." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "logistica",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Congestion en accesos VIP por lector de QR defectuoso",
    id_staff_pg: 10,
    reportado_por_rol: "taquilla",
    fecha_reporte: new Date("2026-10-17T15:00:00Z"),
    detalles: {
      tiempo_espera_estimado_min: 25,
      causa: "Lector de QR sector 3 con falla intermitente",
      aforo_represado: 400
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T15:10:00Z"), estado: "en_atencion", nota: "Tecnico revisando lector. Acceso adicional abierto." },
      { hora: new Date("2026-10-17T15:35:00Z"), estado: "resuelto",    nota: "Lector reemplazado. Tiempo de espera normalizado." }
    ]
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "tecnico",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Falla en el sistema de in-ear monitor de Ruben Blades durante soundcheck",
    id_staff_pg: 8,
    reportado_por_rol: "tecnico_sonido",
    fecha_reporte: new Date("2026-10-17T14:00:00Z"),
    detalles: {
      equipo_afectado: "Sennheiser EW-IEM G4 receptor",
      causa: "Bateria agotada en transmisor"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T14:05:00Z"), estado: "en_atencion", nota: "Tecnico revisando sistema IEM" },
      { hora: new Date("2026-10-17T14:25:00Z"), estado: "resuelto",    nota: "Sistema IEM funcionando. Ruben aprobo el nivel." }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "clima",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Viento fuerte desestabilizo parte del toldo lateral del Barrio Fuego",
    id_staff_pg: 13,
    reportado_por_rol: "logistica",
    fecha_reporte: new Date("2026-10-17T14:45:00Z"),
    detalles: {
      area_afectada: "Toldo lateral zona norte",
      riesgo_evaluado: "Bajo — estructura secundaria",
      accion: "Fijacion con tensores adicionales"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T15:00:00Z"), estado: "en_atencion", nota: "Equipo de estructura evaluando el toldo" },
      { hora: new Date("2026-10-17T15:30:00Z"), estado: "resuelto",    nota: "Toldo asegurado con 4 tensores adicionales." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "medico",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Multiples consultas medicas por calor durante la tarde del sabado",
    id_staff_pg: 3,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-17T16:30:00Z"),
    detalles: {
      num_pacientes: 8,
      sintomas_comunes: ["mareo leve", "deshidratacion"],
      traslados_hospital: 0
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T17:30:00Z"), estado: "resuelto", nota: "Todos los pacientes atendidos y dados de alta." }
    ]
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "seguridad",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Fotografo no acreditado intento acceder al pit fotografico durante show de Ruben Blades",
    id_staff_pg: 9,
    reportado_por_rol: "tecnico_luces",
    fecha_reporte: new Date("2026-10-17T15:35:00Z"),
    detalles: {
      accion: "Retirado del pit. Enviado a zona de prensa general."
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T15:40:00Z"), estado: "resuelto", nota: "Persona coopero. Sin incidentes." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "tecnico",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Pantalla LED lateral del Golden Clave perdio sincronia con el contenido principal",
    id_staff_pg: 2,
    reportado_por_rol: "tecnico_luces",
    fecha_reporte: new Date("2026-10-17T19:00:00Z"),
    detalles: {
      pantalla_afectada: "LED lateral izquierdo",
      duracion_falla_min: 3,
      causa: "Perdida de senal en cable de datos"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T19:05:00Z"), estado: "en_atencion", nota: "Tecnico revisando cableado" },
      { hora: new Date("2026-10-17T19:08:00Z"), estado: "resuelto",    nota: "Cable reconectado. Pantalla sincronizada." }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "medico",
    gravedad: "alta",
    estado: "resuelto",
    descripcion: "Asistente con probable fractura de tobillo tras caida en zona de baile del Barrio Fuego",
    id_staff_pg: 7,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-17T22:30:00Z"),
    detalles: {
      diagnostico_preliminar: "Probable fractura de tobillo derecho",
      requiere_traslado: true,
      hospital_destino: "Hospital Universitario del Valle"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T22:35:00Z"), estado: "en_atencion", nota: "Paramedico inmovilizando el tobillo" },
      { hora: new Date("2026-10-17T22:55:00Z"), estado: "resuelto",    nota: "Trasladada en ambulancia al Hospital Universitario." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "logistica",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Agotamiento de cerveza en punto de venta 3 del Golden Clave durante show de Los Van Van",
    id_staff_pg: 4,
    reportado_por_rol: "logistica",
    fecha_reporte: new Date("2026-10-17T21:00:00Z"),
    detalles: {
      producto_agotado: "Cerveza Club Colombia",
      unidades_faltantes: 144
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T21:15:00Z"), estado: "en_atencion", nota: "Coordinando reabastecimiento" },
      { hora: new Date("2026-10-17T21:40:00Z"), estado: "resuelto",    nota: "144 unidades reabastecidas." }
    ]
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "tecnico",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Microfono de Fruko con interferencia de radiofrecuencia al inicio del show",
    id_staff_pg: 8,
    reportado_por_rol: "tecnico_sonido",
    fecha_reporte: new Date("2026-10-17T19:10:00Z"),
    detalles: {
      causa: "Interferencia con frecuencia de radio de seguridad",
      duracion_problema_seg: 90
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T19:12:00Z"), estado: "en_atencion", nota: "Tecnico cambiando frecuencia del transmisor" },
      { hora: new Date("2026-10-17T19:14:00Z"), estado: "resuelto",    nota: "Nueva frecuencia asignada. Sin interferencias." }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "logistica",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Retraso de 20 minutos en el bus de transporte del equipo de Carlos Vives",
    id_staff_pg: 13,
    reportado_por_rol: "logistica",
    fecha_reporte: new Date("2026-10-17T15:30:00Z"),
    detalles: {
      causa: "Trafico en la Avenida 6N por accidente vial",
      impacto_programacion: "Soundcheck reducido a 20 minutos"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T15:45:00Z"), estado: "en_atencion", nota: "Bus en camino. ETA 15 min." },
      { hora: new Date("2026-10-17T16:00:00Z"), estado: "resuelto",    nota: "Equipo llego. Soundcheck ajustado." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "seguridad",
    gravedad: "alta",
    estado: "resuelto",
    descripcion: "Intento de ingreso masivo sin boleta por acceso norte durante show de Grupo Niche",
    id_staff_pg: 3,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-18T16:30:00Z"),
    detalles: {
      personas_involucradas: 15,
      policia_llamada: true,
      unidades_policia: 3
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T16:35:00Z"), estado: "en_atencion", nota: "Seguridad reforzada. Policia en camino." },
      { hora: new Date("2026-10-18T16:45:00Z"), estado: "en_atencion", nota: "Policia en el lugar." },
      { hora: new Date("2026-10-18T16:55:00Z"), estado: "resuelto",    nota: "Situacion controlada. 3 personas detenidas." }
    ]
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "medico",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Asistente con reaccion alergica severa a alimento del festival",
    id_staff_pg: 9,
    reportado_por_rol: "tecnico_luces",
    fecha_reporte: new Date("2026-10-18T15:00:00Z"),
    detalles: {
      alergeno_probable: "Mariscos en ceviche del puesto 7",
      sintomas: ["urticaria", "hinchazon facial"],
      tratamiento: "Antihistaminico IV",
      requiere_traslado: false
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T15:05:00Z"), estado: "en_atencion", nota: "Medico administrando antihistaminico" },
      { hora: new Date("2026-10-18T15:30:00Z"), estado: "resuelto",    nota: "Paciente respondio bien al tratamiento." }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "tecnico",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Falla en follow spot del Barrio Fuego durante show de Marc Anthony",
    id_staff_pg: 6,
    reportado_por_rol: "tecnico_luces",
    fecha_reporte: new Date("2026-10-18T16:35:00Z"),
    detalles: {
      equipo_afectado: "Follow spot Martin MAC Viper izquierdo",
      causa: "Sobrecalentamiento del motor",
      impacto: "Artista sin seguimiento durante 4 minutos"
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T16:40:00Z"), estado: "en_atencion", nota: "Tecnico activando follow spot de respaldo" },
      { hora: new Date("2026-10-18T16:45:00Z"), estado: "resuelto",    nota: "Follow spot de respaldo activado." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "clima",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Lluvia leve durante 20 minutos afecto accesos descubiertos del Golden Clave",
    id_staff_pg: 4,
    reportado_por_rol: "logistica",
    fecha_reporte: new Date("2026-10-18T15:30:00Z"),
    detalles: {
      duracion_lluvia_min: 20,
      accion: "Apertura de carpas de emergencia en accesos"
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T15:35:00Z"), estado: "en_atencion", nota: "Carpas desplegadas." },
      { hora: new Date("2026-10-18T15:55:00Z"), estado: "resuelto",    nota: "Lluvia ceso. Accesos normalizados." }
    ]
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "logistica",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Mesa VIP asignada incorrectamente a dos grupos en Luna Caribe",
    id_staff_pg: 13,
    reportado_por_rol: "logistica",
    fecha_reporte: new Date("2026-10-18T13:30:00Z"),
    detalles: {
      mesa_afectada: "Mesa VIP 12",
      causa: "Error en sistema de asignacion de mesas"
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T13:40:00Z"), estado: "en_atencion", nota: "Coordinador VIP gestionando reubicacion" },
      { hora: new Date("2026-10-18T13:55:00Z"), estado: "resuelto",    nota: "Grupo reubicado con upgrade cortesia del festival." }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "seguridad",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Sospecha de venta de sustancias en zona perimetral del Barrio Fuego",
    id_staff_pg: 7,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-18T20:00:00Z"),
    detalles: {
      zona: "Perimetro oeste BF",
      policia_notificada: true
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T20:05:00Z"), estado: "en_atencion", nota: "Seguridad y policia monitoreando el area" },
      { hora: new Date("2026-10-18T20:25:00Z"), estado: "resuelto",    nota: "Personas se retiraron voluntariamente." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "medico",
    gravedad: "media",
    estado: "resuelto",
    descripcion: "Asistente con ataque de panico en zona de prensa durante show de Guayacan",
    id_staff_pg: 3,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-18T21:30:00Z"),
    detalles: {
      sintomas: ["taquicardia", "hiperventilacion", "ansiedad severa"],
      causa_probable: "Aglomeracion y calor en zona de prensa"
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T21:35:00Z"), estado: "en_atencion", nota: "Paramedico atendiendo." },
      { hora: new Date("2026-10-18T21:50:00Z"), estado: "resuelto",    nota: "Paciente calmada." }
    ]
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "tecnico",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Piano de cola de La EBRS necesito afinacion de urgencia antes del show",
    id_staff_pg: 8,
    reportado_por_rol: "tecnico_sonido",
    fecha_reporte: new Date("2026-10-17T13:30:00Z"),
    detalles: {
      instrumento: "Yamaha CFIIIS Cola",
      problema: "Desafinacion en octava central por cambio de temperatura"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T13:35:00Z"), estado: "en_atencion", nota: "Afinador trabajando en el piano" },
      { hora: new Date("2026-10-17T13:58:00Z"), estado: "resuelto",    nota: "Piano afinado. Aprobado por el pianista." }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "logistica",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Agotamiento de vasos en barra de bebidas del Barrio Fuego",
    id_staff_pg: 13,
    reportado_por_rol: "logistica",
    fecha_reporte: new Date("2026-10-18T19:00:00Z"),
    detalles: { vasos_faltantes: 500 },
    actualizaciones: [
      { hora: new Date("2026-10-18T19:10:00Z"), estado: "resuelto", nota: "500 vasos enviados desde bodega." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "tecnico",
    gravedad: "media",
    estado: "en_atencion",
    descripcion: "Subwoofer del sistema principal del Golden Clave muestra irregularidades al final del festival",
    id_staff_pg: 1,
    reportado_por_rol: "tecnico_sonido",
    fecha_reporte: new Date("2026-10-18T22:50:00Z"),
    detalles: {
      equipo_afectado: "L-Acoustics SB28 subwoofer unidad 7",
      sintoma: "Distorsion intermitente en frecuencias bajas",
      impacto_show: "Imperceptible para el publico."
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T22:55:00Z"), estado: "en_atencion", nota: "Tecnico monitoreando el equipo." }
    ]
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "seguridad",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Cartera perdida reportada en zona de sillas del Luna Caribe",
    id_staff_pg: 9,
    reportado_por_rol: "tecnico_luces",
    fecha_reporte: new Date("2026-10-18T20:30:00Z"),
    detalles: {
      objeto: "Cartera negra con efectivo y documentos",
      propietario_identificado: true
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T20:35:00Z"), estado: "en_atencion", nota: "Objeto en custodia. Buscando propietaria." },
      { hora: new Date("2026-10-18T21:00:00Z"), estado: "resuelto",    nota: "Cartera devuelta intacta a su propietaria." }
    ]
  },
  {
    id_escenario_pg: 2,
    escenario: "Barrio Fuego",
    tipo_incidente: "medico",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Asistente con corte leve en la mano al tropezar con una valla de seguridad",
    id_staff_pg: 7,
    reportado_por_rol: "seguridad",
    fecha_reporte: new Date("2026-10-18T17:00:00Z"),
    detalles: {
      lesion: "Corte superficial mano derecha",
      atencion: "Limpieza y aposito"
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T17:05:00Z"), estado: "resuelto", nota: "Herida cubierta. Paciente continuo en el festival." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "seguridad",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Discusion verbal entre asistente y personal de taquilla por negativa de reembolso",
    id_staff_pg: 10,
    reportado_por_rol: "taquilla",
    fecha_reporte: new Date("2026-10-18T14:00:00Z"),
    detalles: {
      zona: "Taquilla acceso VIP",
      resolucion: "Coordinador explico politica de no reembolso. Asistente acepto."
    }
  },
  {
    id_escenario_pg: 3,
    escenario: "Luna Caribe",
    tipo_incidente: "clima",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "Viento fuerte apago las velas decorativas del area de sillas del Luna Caribe",
    id_staff_pg: 13,
    reportado_por_rol: "logistica",
    fecha_reporte: new Date("2026-10-17T20:00:00Z"),
    detalles: {
      velas_afectadas: 30,
      accion: "Reemplazo por luminarias LED a prueba de viento"
    },
    actualizaciones: [
      { hora: new Date("2026-10-17T20:15:00Z"), estado: "resuelto", nota: "Luminarias LED instaladas." }
    ]
  },
  {
    id_escenario_pg: 1,
    escenario: "Golden Clave",
    tipo_incidente: "logistica",
    gravedad: "baja",
    estado: "resuelto",
    descripcion: "El catering de Guayacan Orquesta llego 45 minutos tarde",
    id_staff_pg: 4,
    reportado_por_rol: "logistica",
    fecha_reporte: new Date("2026-10-18T17:00:00Z"),
    detalles: {
      causa: "Trafico en zona industrial",
      alternativa_ofrecida: "Refrigerios del festival mientras llegaba el catering"
    },
    actualizaciones: [
      { hora: new Date("2026-10-18T17:15:00Z"), estado: "en_atencion", nota: "Refrigerios de emergencia entregados a Guayacan" },
      { hora: new Date("2026-10-18T17:45:00Z"), estado: "resuelto",    nota: "Catering llego. Orquesta satisfecha." }
    ]
  }

]); 

