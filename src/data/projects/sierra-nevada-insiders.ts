// src/data/projects/sierra-nevada-insiders.ts
import type { Project } from "../project-types";

const shot = (name: string) => `/projects/sierra-nevada-insiders/${name}.webp`;

export const sierraNevadaInsiders: Project = {
    id: "sierra-nevada-insiders",
    title: "Sierra Nevada Insiders",
    image: "/projects/sierra-nevada-insiders.jpg",
    cover: {
        src: shot("home"),
        alt: {
            es: "Portada de Sierra Nevada Insiders, con el tiempo de la estación en directo",
            en: "Sierra Nevada Insiders home page, with the resort's live weather",
        },
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "Django", "PostgreSQL", "REST API", "Mapbox GL", "next-intl", "Framer Motion", "Cloudinary", "Playwright", "PWA"],
    stack: [
        {
            label: { es: "Frontend", en: "Frontend" },
            items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Mapbox GL JS v3", "next-intl", "Framer Motion", "Recharts"],
        },
        {
            label: { es: "Backend y datos", en: "Backend & data" },
            items: ["Python", "Django", "Django REST Framework", "PostgreSQL (Neon)", "Cloudinary", "Drizzle ORM"],
        },
        {
            label: { es: "Calidad e infraestructura", en: "Quality & infrastructure" },
            items: ["Playwright", "GitHub Actions", "Vercel", "Render", "IndexNow"],
        },
    ],
    stats: [
        { value: "130", label: { es: "pistas sobre el relieve", en: "runs on the terrain" } },
        { value: "22", label: { es: "remontes con su estado", en: "lifts with live status" } },
        { value: "3", label: { es: "idiomas: ES, EN y PT", en: "languages: ES, EN, PT" } },
        { value: "12+", label: { es: "meses en producción", en: "months in production" } },
    ],
    highlights: [
        {
            id: "mapa-3d",
            tag: "Mapbox GL JS v3 · WebGL",
            shots: [
                {
                    src: shot("mapa-pistas"),
                    alt: {
                        es: "Mapa 3D con las pistas en el color de su dificultad y el panel en directo",
                        en: "3D map with the runs in their difficulty colour and the live panel",
                    },
                },
                {
                    src: shot("mapa-cabinas"),
                    alt: {
                        es: "Cabinas colgadas del cable de los telecabinas, vistas de cerca",
                        en: "Cabins hanging from the gondola cables, seen up close",
                    },
                },
                {
                    src: shot("mapa-sectores"),
                    alt: {
                        es: "Recorrido por sectores: la zona de Borreguiles pintada sobre la montaña",
                        en: "Tour of the sectors: the Borreguiles area painted on the mountain",
                    },
                },
                {
                    src: shot("mapa-pradollano"),
                    alt: {
                        es: "Pradollano en 3D, con cada negocio en su sitio y su logo",
                        en: "Pradollano in 3D, with every business in its place and its logo",
                    },
                },
            ],
            es: {
                title: "Un mapa 3D que cuenta lo que pasa ahora en la estación",
                body: [
                    "El mapa dibuja las 130 pistas y los 22 remontes sobre el relieve real de la sierra. Cada pista lleva el color de su dificultad y se queda en gris cuando el equipo la cierra desde el panel. La geometría viene de OpenStreetMap y una clave la une a su estado, así que el mapa, la página de pistas y el parte leen del mismo sitio.",
                    "La luz sigue la hora real, con el amanecer y el atardecer de cada día, y si en la estación nieva, llueve o hay niebla, en el mapa también.",
                ],
                points: [
                    "Cabinas y sillas en 3D colgadas del cable de cada remonte abierto: suben por un lado y bajan por el otro a la velocidad real del remonte",
                    "Cota de nieve prevista: el relieve se vuelve blanco por encima de la altitud que da la previsión de las próximas 24 horas",
                    "Recorrido por sectores, con lo que cada zona tiene abierto en ese momento",
                    "Ficha de cada pista con su perfil: desnivel, altitudes y pendiente media y máxima",
                    "En el móvil, «Dónde estoy» te sitúa sobre las pistas",
                ],
            },
            en: {
                title: "A 3D map that tells you what is happening at the resort right now",
                body: [
                    "The map draws all 130 runs and 22 lifts on the real terrain of the mountain. Each run carries its difficulty colour and turns grey when the team closes it from the admin. The geometry comes from OpenStreetMap and a key links it to its status, so the map, the runs page and the snow report all read from the same place.",
                    "The light follows the real time of day, with each day's sunrise and sunset, and when it snows, rains or gets foggy at the resort, it does on the map too.",
                ],
                points: [
                    "3D cabins and chairs hanging from the cable of every open lift: up one side and down the other, at the lift's real speed",
                    "Forecast snow line: the terrain turns white above the altitude given by the next 24 hours' forecast",
                    "A tour of the sectors, with what each area has open at that moment",
                    "A card for every run with its profile: vertical drop, altitudes and average and steepest gradient",
                    "On a phone, \"Where am I\" places you on the slopes",
                ],
            },
        },
        {
            id: "como-llegar",
            tag: "DGT · DATEX II · Mapbox Directions",
            shots: [
                {
                    src: shot("mapa-como-llegar"),
                    alt: {
                        es: "«Cómo llegar»: la subida desde Granada con un corte real de la DGT marcado en su tramo",
                        en: "\"How to get there\": the road up from Granada with a real DGT closure marked on its stretch",
                    },
                },
            ],
            es: {
                title: "«Cómo llegar», con la carretera tal y como está ahora",
                body: [
                    "La subida desde Granada va dibujada sobre el mapa con sus kilómetros, el tiempo en coche y el desnivel. Encima aparecen las incidencias que la DGT tiene activas en la A-395 y sus enlaces (cortes, cadenas, nieve, accidentes, obras), cada una en su tramo y ordenadas de más a menos grave.",
                ],
                points: [
                    "Lee el feed nacional DATEX II de la DGT y se queda con lo que afecta a la subida a la estación",
                    "Se actualiza cada 5 minutos, con la respuesta cacheada en el CDN",
                    "Gasolineras y aparcamientos del camino, sacados del gestor de contenidos",
                ],
            },
            en: {
                title: "\"How to get there\", with the road as it is right now",
                body: [
                    "The road up from Granada is drawn on the map with its kilometres, the driving time and the climb. On top of it come the incidents the DGT (Spain's traffic authority) has active on the A-395 and its links (closures, snow chains, snow, accidents, roadworks), each on its own stretch and sorted from worst to mildest.",
                ],
                points: [
                    "Reads the DGT's national DATEX II feed and keeps what affects the road to the resort",
                    "Refreshed every 5 minutes, with the response cached at the CDN",
                    "Petrol stations and car parks on the way, taken from the content manager",
                ],
            },
        },
        {
            id: "alojamientos",
            tag: "OpenStreetMap · Dijkstra",
            shots: [
                {
                    src: shot("alojamiento-rutas"),
                    alt: {
                        es: "Ficha de un alojamiento: las rutas a pie hasta cada remonte dibujadas sobre el mapa",
                        en: "An accommodation page: the walks to each lift drawn on the map",
                    },
                },
                {
                    src: shot("alojamientos"),
                    alt: {
                        es: "Listado de alojamientos con los minutos al remonte y el mapa con los precios",
                        en: "Accommodation list with the minutes to the lift and the map with prices",
                    },
                },
                {
                    src: shot("alojamientos-portada"),
                    alt: {
                        es: "Cabecera de alojamientos con la búsqueda por fechas",
                        en: "Accommodation header with the search by dates",
                    },
                },
            ],
            es: {
                title: "Alojamientos medidos en minutos a pie hasta el remonte",
                body: [
                    "Pradollano está en cuesta, y «a 300 metros del telecabina» puede ser un paseo o una escalada. Por eso cada alojamiento enseña el camino real a pie hasta los remontes, con sus minutos y su desnivel, y lo que tiene cerca: taquillas, alquiler, escuelas, restaurantes, supermercado o farmacia.",
                    "Las rutas se calculan sobre las calles, sendas y escaleras de OpenStreetMap con un Dijkstra propio, porque el enrutado estándar se perdía los atajos: en un caso la ruta pasó de 1.137 a 799 metros.",
                ],
                points: [
                    "Búsqueda por fechas con calendario propio y filtros por presupuesto o por «a 5 minutos de un remonte»",
                    "Mapa con el precio de cada alojamiento y sus rutas dibujadas al pasar por la tarjeta",
                    "La cuesta cuenta: un minuto más por cada 10 metros de subida",
                ],
            },
            en: {
                title: "Accommodation measured in minutes on foot to the lift",
                body: [
                    "Pradollano sits on a slope, and \"300 metres from the gondola\" can be a stroll or a climb. So every accommodation shows the real walk to the lifts, with its minutes and its climb, and what is nearby: ticket offices, rental, schools, restaurants, a supermarket or a pharmacy.",
                    "The routes are computed over OpenStreetMap's streets, paths and stairs with a Dijkstra of my own, because standard routing missed the shortcuts: in one case the route went from 1,137 to 799 metres.",
                ],
                points: [
                    "Search by dates with a custom calendar, and filters by budget or \"5 minutes from a lift\"",
                    "A map with each stay's price, and its routes drawn as you hover the card",
                    "The slope counts: one more minute for every 10 metres of climb",
                ],
            },
        },
        {
            id: "liquid-glass",
            tag: "CSS · Tailwind v4",
            shots: [
                {
                    src: shot("esqui"),
                    alt: {
                        es: "Sección de esquí: tarjetas de cristal con el estado de pistas, forfaits y alquiler",
                        en: "Skiing section: glass cards with slope status, lift passes and rental",
                    },
                },
                {
                    src: shot("restaurante"),
                    alt: {
                        es: "Ficha de un restaurante, con su propia identidad dentro de la guía",
                        en: "A restaurant page, with its own identity inside the guide",
                    },
                },
                {
                    src: shot("restaurantes"),
                    alt: {
                        es: "Listado de restaurantes con tarjetas de cristal sobre la foto",
                        en: "Restaurant list with glass cards over the photo",
                    },
                },
                {
                    src: shot("eventos"),
                    alt: {
                        es: "Página de eventos con la cuenta atrás del próximo",
                        en: "Events page with the countdown to the next one",
                    },
                },
            ],
            es: {
                title: "Un sistema de diseño de cristal, hecho a mano y ligero",
                body: [
                    "Todo el sitio comparte el mismo material: cristal esmerilado con un borde que atrapa la luz y un brillo que sigue al puntero. Está hecho con CSS y un único listener por página, sin librerías de efectos, y se adapta a lo que tiene debajo: sobre el mapa de noche el cristal se ahúma y el texto pasa a blanco.",
                ],
                points: [
                    "Radios concéntricos y medidas comprobadas a 320, 375, 390 y 1440 px",
                    "Probado en WebKit: había recortes que solo aparecían en iPhone",
                    "Fuentes servidas desde el propio sitio e imágenes a la medida de cada pantalla",
                ],
            },
            en: {
                title: "A glass design system, hand-built and lightweight",
                body: [
                    "The whole site shares one material: frosted glass with a rim that catches the light and a highlight that follows the pointer. It is built with CSS and a single listener per page, with no effects library, and it adapts to what is underneath: over the map at night the glass turns smoked and the text goes white.",
                ],
                points: [
                    "Concentric radii and sizes checked at 320, 375, 390 and 1440 px",
                    "Tested in WebKit: some clipping only showed up on iPhones",
                    "Fonts served from the site itself and images sized for each screen",
                ],
            },
        },
        {
            id: "hoy",
            tag: "Open-Meteo · API Django",
            shots: [
                {
                    src: shot("hoy-en-la-sierra"),
                    alt: {
                        es: "«Hoy en la sierra»: estación, carretera y autobuses, bajo la cabecera de la portada",
                        en: "\"Today on the mountain\": resort, road and buses, under the home header",
                    },
                },
                {
                    src: shot("pistas"),
                    alt: {
                        es: "Página de estado de pistas, con el teléfono de emergencias a mano",
                        en: "Slope status page, with the emergency number at hand",
                    },
                },
                {
                    src: shot("buscador"),
                    alt: {
                        es: "Buscador global, con resultados de lugares, actividades y artículos",
                        en: "Global search, with results from places, activities and articles",
                    },
                },
            ],
            es: {
                title: "La estación de hoy, de un vistazo",
                body: [
                    "La portada abre con «Hoy en la sierra»: el parte de la estación, el estado de la carretera y los autobuses que circulan ahora y hasta qué hora. La página de pistas lista las 130 con su estado, su zona y su dificultad, y es el mismo dato que pinta el mapa 3D, porque el equipo lo actualiza en un solo sitio.",
                ],
                points: [
                    "Temperatura en Pradollano y en Borreguiles, nieve y viento en la cabecera",
                    "Buscador global de lugares, actividades y artículos",
                    "Eventos con cuenta atrás, agenda y exportación al calendario",
                ],
            },
            en: {
                title: "Today at the resort, at a glance",
                body: [
                    "The home page opens with \"Today on the mountain\": the resort report, the state of the road and the buses running now and until when. The runs page lists all 130 with their status, area and difficulty, and it is the same data the 3D map paints, because the team updates it in one place.",
                ],
                points: [
                    "Temperature in Pradollano and Borreguiles, snow and wind in the header",
                    "Global search across places, activities and articles",
                    "Events with a countdown, an agenda and calendar export",
                ],
            },
        },
        {
            id: "idiomas",
            tag: "next-intl · django-modeltranslation",
            shots: [
                {
                    src: shot("portugues"),
                    alt: {
                        es: "La portada en portugués",
                        en: "The home page in Portuguese",
                    },
                },
            ],
            es: {
                title: "Toda la web en tres idiomas",
                body: [
                    "Español, inglés y portugués, con rutas propias en cada idioma, los formatos de fecha y moneda de cada país y el contenido del gestor traducido campo a campo. Si a un texto le falta la traducción, la API devuelve el español en vez de un hueco.",
                ],
                points: [
                    "Rutas localizadas y tipadas: cada página tiene su URL en los tres idiomas",
                    "Enlaces hreflang y URL canónica en cada página",
                    "Números, fechas y precios con el formato de cada país",
                ],
            },
            en: {
                title: "The whole site in three languages",
                body: [
                    "Spanish, English and Portuguese, with their own routes in each language, each country's date and currency formats, and the CMS content translated field by field. When a text has no translation yet, the API returns the Spanish instead of a gap.",
                ],
                points: [
                    "Localised, typed routes: every page has its URL in all three languages",
                    "hreflang links and a canonical URL on every page",
                    "Numbers, dates and prices in each country's format",
                ],
            },
        },
    ],
    notes: [
        {
            id: "gestor",
            tag: "Django · DRF",
            es: {
                title: "Un gestor de contenidos a medida",
                body: "El panel de Django es la herramienta del equipo: lugares con su logo, horarios y precios; cartas de restaurante con la foto y los alérgenos de cada plato; horarios oficiales, estado de cada pista y remonte, eventos, cursos, alojamientos y un blog con editor visual.",
                points: [
                    "Imágenes en Cloudinary, servidas al tamaño de cada pantalla",
                    "Más de 130 tests y CI que comprueba las migraciones",
                ],
            },
            en: {
                title: "A made-to-measure content manager",
                body: "The Django admin is the team's tool: places with their logo, opening hours and prices; restaurant menus with each dish's photo and allergens; official hours, the status of every run and lift, events, courses, accommodation and a blog with a visual editor.",
                points: [
                    "Images on Cloudinary, served at each screen's size",
                    "Over 130 tests and CI that checks the migrations",
                ],
            },
        },
        {
            id: "seo",
            tag: "JSON-LD · IndexNow · llms.txt",
            es: {
                title: "SEO para buscadores y para asistentes de IA",
                body: "Cada página lleva datos estructurados, y el sitemap, robots.txt y llms.txt se generan desde la API. Cuando alguien guarda un cambio en el panel, IndexNow avisa a los buscadores de las URL afectadas.",
                points: [
                    "Tests end-to-end con Playwright de accesibilidad, SEO y buscador",
                    "El motor del mapa solo se descarga en la página que lo usa",
                ],
            },
            en: {
                title: "SEO for search engines and for AI assistants",
                body: "Every page carries structured data, and the sitemap, robots.txt and llms.txt are generated from the API. When someone saves a change in the admin, IndexNow tells search engines which URLs changed.",
                points: [
                    "End-to-end Playwright tests for accessibility, SEO and search",
                    "The map engine is only downloaded on the page that uses it",
                ],
            },
        },
        {
            id: "crm",
            tag: "Next.js · Drizzle · Postgres",
            es: {
                title: "CRM propio y «Ventajas Insiders»",
                body: "Un CRM interno lleva la relación con los negocios de la estación. De él salen las «Ventajas Insiders»: el visitante pide un código personal en la ficha del negocio y lo recibe en pantalla y por correo.",
                points: [
                    "La web habla con el CRM de servidor a servidor: el token nunca llega al navegador",
                    "Portal para los negocios, con acceso por enlace de un solo uso",
                    "Inicio de sesión con segundo factor opcional (TOTP)",
                ],
            },
            en: {
                title: "An in-house CRM and \"Insiders perks\"",
                body: "An internal CRM handles the relationship with the resort's businesses. It feeds the \"Insiders perks\": the visitor asks for a personal code on the business's page and gets it on screen and by email.",
                points: [
                    "The site talks to the CRM server to server: the token never reaches the browser",
                    "A portal for the businesses, with one-time sign-in links",
                    "Sign-in with optional two-factor (TOTP)",
                ],
            },
        },
    ],
    phoneShots: [
        { src: shot("m-home"), kind: "phone", alt: { es: "Portada en el móvil", en: "Home page on a phone" } },
        { src: shot("m-mapa"), kind: "phone", alt: { es: "Mapa 3D en el móvil, con las pistas", en: "3D map on a phone, with the runs" } },
        { src: shot("m-menu"), kind: "phone", alt: { es: "Menú móvil en una hoja de cristal", en: "Mobile menu in a glass sheet" } },
        { src: shot("m-pistas"), kind: "phone", alt: { es: "Estado de pistas en el móvil", en: "Slope status on a phone" } },
        { src: shot("m-alojamientos"), kind: "phone", alt: { es: "Alojamientos en el móvil", en: "Accommodation on a phone" } },
    ],
    links: {
        live: "https://sierranevadainsiders.com",
    },
    status: "completed",
    translations: {
        es: {
            shortDescription: "La guía digital de la estación de esquí de Sierra Nevada, con mapa 3D en vivo y en tres idiomas",
            overview: [
                "Sierra Nevada Insiders es la guía digital de la estación de esquí más al sur de Europa: pistas y remontes, actividades, transporte, restaurantes, alojamiento, ocio, eventos y blog, en español, inglés y portugués.",
                "En 2026 rehice la web de arriba abajo. La idea era que dejara de ser un directorio y contestara lo que uno se pregunta antes de subir: qué hay abierto, cómo está la carretera, dónde me alojo y cuánto voy a andar con las botas puestas.",
                "Son tres piezas que trabajan juntas: la web pública en Next.js, una API en Django cuyo panel hace de gestor de contenidos y un CRM interno para el equipo.",
            ],
            features: [
                "Guía de forfaits, consejos y horarios oficiales",
                "Escuelas de esquí y alquiler de material, con filtro «Adaptado»",
                "Restaurantes con carta, fotos de los platos y alérgenos",
                "Actividades, cursos y planes destacados",
                "Familia y niños, guarderías y Sierra Nevada inclusiva",
                "Líneas de autobús con sus horarios y aparcamientos",
                "Blog y noticias con editor visual",
                "Instalable como app en el móvil",
            ],
            challenges: [
                "Un mapa 3D fluido también en móviles: relieve, capas y memoria ajustados a cada dispositivo",
                "Unir el estado de pistas y remontes del panel con su geometría de OpenStreetMap",
                "Rediseñar todo el sitio con cristal y luz sin penalizar el rendimiento",
                "Tres idiomas con rutas, SEO y contenido del gestor localizados",
                "Datos en vivo de varias fuentes: meteorología, estación, autobuses y tráfico",
                "Fallos visuales que solo aparecían en iPhone y hubo que reproducir en WebKit",
            ],
            learnings: [
                "Mapbox GL JS v3: estilo Standard, terreno 3D y capas propias",
                "Un sistema de diseño con cristal que sigue siendo ligero",
                "Internacionalización completa con next-intl y django-modeltranslation",
                "SEO técnico: datos estructurados, IndexNow y llms.txt",
                "Tests end-to-end con Playwright (accesibilidad, SEO y buscador)",
                "Mantener y hacer crecer un producto real en producción durante más de un año",
            ],
            role: "Full Stack Developer",
            duration: "12+ meses",
            period: "Nov 2025 — hoy",
        },
        en: {
            shortDescription: "The digital guide to the Sierra Nevada ski resort, with a live 3D map and three languages",
            overview: [
                "Sierra Nevada Insiders is the digital guide to Europe's southernmost ski resort: runs and lifts, activities, transport, restaurants, accommodation, nightlife, events and a blog, in Spanish, English and Portuguese.",
                "In 2026 I rebuilt the site from top to bottom. The idea was for it to stop being a directory and answer what you ask yourself before driving up: what is open, how the road is, where to stay and how far you will walk in ski boots.",
                "It is three pieces working together: the public site in Next.js, a Django API whose admin doubles as the content manager, and an internal CRM for the team.",
            ],
            features: [
                "Lift pass guide, tips and official opening hours",
                "Ski schools and equipment rental, with an \"Adaptive\" filter",
                "Restaurants with their menu, dish photos and allergens",
                "Activities, courses and featured plans",
                "Family and kids, nurseries and an inclusive Sierra Nevada",
                "Bus lines with their timetables, and car parks",
                "Blog and news with a visual editor",
                "Installable as an app on a phone",
            ],
            challenges: [
                "A 3D map that stays smooth on phones: terrain, layers and memory tuned per device",
                "Linking the admin's run and lift status to their OpenStreetMap geometry",
                "Redesigning the whole site with glass and light without hurting performance",
                "Three languages with localised routes, SEO and CMS content",
                "Live data from several sources: weather, resort, buses and traffic",
                "Visual bugs that only showed on iPhones and had to be reproduced in WebKit",
            ],
            learnings: [
                "Mapbox GL JS v3: the Standard style, 3D terrain and custom layers",
                "A glass design system that stays lightweight",
                "Full internationalisation with next-intl and django-modeltranslation",
                "Technical SEO: structured data, IndexNow and llms.txt",
                "End-to-end tests with Playwright (accessibility, SEO and search)",
                "Maintaining and growing a real product in production for over a year",
            ],
            role: "Full Stack Developer",
            duration: "12+ months",
            period: "Nov 2025 — present",
        },
    },
};
