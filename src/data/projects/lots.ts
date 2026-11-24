// src/data/projects/lots.ts
import type { Project } from "../project-types";

const shot = (name: string) => `/projects/lots/${name}.webp`;

export const lots: Project = {
    id: "lots",
    title: "LOTS",
    image: "/projects/lots.jpg",
    cover: {
        src: shot("coleccion"),
        alt: {
            es: "La colección, con el precio y el tamaño de la edición de cada prenda",
            en: "The collection, with each garment's price and edition size",
        },
    },
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "React", "Tailwind CSS", "Mapbox GL", "Zustand", "Zod", "Framer Motion", "Resend", "Vitest", "pgTAP"],
    stack: [
        {
            label: { es: "Frontend", en: "Frontend" },
            items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Mapbox GL", "Turf"],
        },
        {
            label: { es: "Backend y datos", en: "Backend & data" },
            items: ["Supabase (Auth, Storage)", "PostgreSQL (RLS, funciones, triggers)", "Stripe", "Resend", "Zod"],
        },
        {
            label: { es: "Calidad e infraestructura", en: "Quality & infrastructure" },
            items: ["Vitest", "pgTAP", "GitHub Actions", "Vercel"],
        },
    ],
    stats: [
        { value: "3", label: { es: "niveles de socio", en: "member tiers" } },
        { value: "16", label: { es: "formas de sumar puntos", en: "ways to earn points" } },
        { value: "1.400+", label: { es: "tests automáticos", en: "automated tests" } },
        { value: "50", label: { es: "migraciones SQL", en: "SQL migrations" } },
    ],
    highlights: [
        {
            id: "pasaporte",
            tag: "Mapbox GL · Turf",
            shots: [
                {
                    src: shot("pasaporte"),
                    alt: {
                        es: "Pasaporte de un abrigo: lana tejida en Béjar, patronaje y costura en Madrid, y el recorrido en el mapa",
                        en: "A coat's passport: wool woven in Béjar, pattern and sewing in Madrid, and the journey on the map",
                    },
                },
            ],
            es: {
                title: "Cada prenda tiene pasaporte",
                body: [
                    "En la ficha de cada prenda hay un pasaporte con lo que normalmente no se cuenta: de qué tela está hecha y de dónde viene, quién hizo el patrón, quién la cosió y en qué taller, con las notas del proceso.",
                    "Al lado, un mapa dibuja su recorrido, del origen de la tela al atelier y al lugar de producción, con arcos que se van trazando uno tras otro.",
                ],
                points: [
                    "Los arcos son curvas de Bézier calculadas con Turf; si dos etapas comparten coordenadas, el arco se queda en una recta en vez de romper el mapa",
                    "El mapa solo se carga si el visitante lo pide, porque Mapbox guarda un identificador y eso requiere consentimiento",
                    "La marca rellena el pasaporte desde su panel, prenda a prenda",
                ],
            },
            en: {
                title: "Every garment has a passport",
                body: [
                    "Each garment page carries a passport with what usually goes untold: what fabric it is made of and where it comes from, who cut the pattern, who sewed it and in which workshop, with notes on the process.",
                    "Next to it, a map draws its journey, from the fabric's origin to the atelier and the place of production, with arcs traced one after another.",
                ],
                points: [
                    "The arcs are Bézier curves computed with Turf; when two stages share coordinates, the arc falls back to a straight line instead of breaking the map",
                    "The map only loads when the visitor asks for it, because Mapbox stores an identifier and that needs consent",
                    "The brand fills in the passport from its admin, garment by garment",
                ],
            },
        },
        {
            id: "piezas",
            tag: "PostgreSQL",
            shots: [
                {
                    src: shot("prenda"),
                    alt: {
                        es: "Ficha de una prenda: nivel requerido, edición limitada de 16 piezas y compra reservada al Club",
                        en: "A garment page: required tier, a limited edition of 16 pieces and buying reserved for the Club",
                    },
                },
                {
                    src: shot("home-destacados"),
                    alt: {
                        es: "Prendas destacadas en la portada",
                        en: "Featured garments on the home page",
                    },
                },
            ],
            es: {
                title: "Ediciones cortas, piezas numeradas",
                body: [
                    "De cada prenda se hacen muy pocas unidades (16 del abrigo de la captura) y cada una es una fila en la base de datos, con su número de pieza y su talla. Al comprar, el socio no se lleva «una unidad de stock»: se lleva una pieza concreta, que queda a su nombre.",
                    "Esa pieza aparece después en su armario digital con el pasaporte completo, y sus orígenes se suman a un mapa personal con todas las prendas que tiene.",
                ],
                points: [
                    "El stock de cada talla se calcula a partir de las unidades reales, no de un contador",
                    "El número de pieza viaja en el correo de confirmación del pedido",
                    "Una devolución saca la prenda del armario y del mapa, y descuenta sus puntos",
                ],
            },
            en: {
                title: "Short runs, numbered pieces",
                body: [
                    "Very few units are made of each garment (16 of the coat in the screenshot) and each one is a row in the database, with its piece number and its size. On buying, the member does not take \"a unit of stock\": they take one specific piece, which stays in their name.",
                    "That piece then shows up in their digital wardrobe with its full passport, and its origins are added to a personal map of every garment they own.",
                ],
                points: [
                    "Stock per size is computed from the real units, not from a counter",
                    "The piece number travels in the order confirmation email",
                    "A return takes the garment out of the wardrobe and the map, and deducts its points",
                ],
            },
        },
        {
            id: "club",
            tag: "SQL · Supabase",
            shots: [
                {
                    src: shot("calculadora"),
                    alt: {
                        es: "Calculadora del Club: 1.010 puntos simulados que alcanzan el nivel Superior",
                        en: "The Club calculator: 1,010 simulated points that reach the Superior tier",
                    },
                },
                {
                    src: shot("nivel-superior"),
                    alt: {
                        es: "Nivel Superior: cómo se accede y qué incluye",
                        en: "The Superior tier: how to reach it and what it includes",
                    },
                },
                {
                    src: shot("nivel-principal"),
                    alt: {
                        es: "Nivel Principal, solo por invitación",
                        en: "The Principal tier, by invitation only",
                    },
                },
                {
                    src: shot("club"),
                    alt: {
                        es: "Cabecera de la página del Club",
                        en: "Header of the Club page",
                    },
                },
            ],
            es: {
                title: "Un club de tres niveles al que no se sube solo comprando",
                body: [
                    "Esencial se obtiene al crear la cuenta. Para Superior hacen falta 900 puntos y, además, haber comprado una prenda de colección y otra de un drop y haber asistido a un evento. Principal es solo por invitación. El nivel abre o cierra colecciones, drops y eventos, y con él cambian las ventajas de cada socio.",
                    "Los puntos se ganan de 16 formas (comprar, asistir a un evento, llevar a un invitado, que la marca comparta tu contenido…) y una calculadora pública deja simular el camino: va sumando y dice exactamente qué falta para el siguiente nivel.",
                ],
                points: [
                    "Las reglas viven en una función SQL que recalcula el nivel; la calculadora es su espejo y hay tests que fijan los umbrales",
                    "Los puntos son un libro de movimientos: una devolución no borra nada, añade un apunte en negativo",
                    "Credencial con código de socio para el control de acceso a los eventos",
                ],
            },
            en: {
                title: "A three-tier club you cannot climb just by buying",
                body: [
                    "Esencial comes with the account. Superior takes 900 points and, on top of them, a purchase from the collection, another from a drop and having attended an event. Principal is by invitation only. The tier opens or closes collections, drops and events, and each member's benefits change with it.",
                    "Points are earned in 16 ways (buying, attending an event, bringing a guest, the brand sharing your content…) and a public calculator lets you simulate the path: it adds up and says exactly what is missing for the next tier.",
                ],
                points: [
                    "The rules live in a SQL function that recalculates the tier; the calculator mirrors it and tests pin the thresholds",
                    "Points are a ledger: a return deletes nothing, it adds a negative entry",
                    "A credential with a member code for event check-in",
                ],
            },
        },
        {
            id: "diseno",
            tag: "Next.js · Tailwind CSS",
            shots: [
                {
                    src: shot("home"),
                    alt: {
                        es: "Portada: el dibujo del pasaporte y el lema «Cada prenda con identidad propia»",
                        en: "Home page: the passport drawing and the line \"Every garment with its own identity\"",
                    },
                },
                {
                    src: shot("nosotros"),
                    alt: {
                        es: "Página «Sobre nosotros»",
                        en: "The \"About us\" page",
                    },
                },
                {
                    src: shot("registro"),
                    alt: {
                        es: "Registro: «El comienzo de pertenecer»",
                        en: "Sign-up: \"The beginning of belonging\"",
                    },
                },
            ],
            es: {
                title: "Un diseño editorial que deja hablar a la ropa",
                body: [
                    "La marca dibuja a línea (una aguja, una puerta, un pasaporte) y la web sigue ese trazo: fondo perla, tipografía fina, mucho aire y nada entre la prenda y quien la mira. La portada va rotando los dibujos con el lema de cada uno, y el registro se presenta como «el comienzo de pertenecer», no como un formulario.",
                ],
                points: [
                    "Formularios que dicen qué falta en vez de dejar el botón desactivado",
                    "Fuentes locales: la compilación no depende de servicios externos",
                    "Imágenes optimizadas también en los correos de pedido",
                ],
            },
            en: {
                title: "An editorial design that lets the clothes speak",
                body: [
                    "The brand draws in line (a needle, a door, a passport) and the site follows that stroke: a pearl background, thin type, plenty of air and nothing between the garment and whoever is looking at it. The home page rotates the drawings with each one's line, and sign-up is presented as \"the beginning of belonging\", not as a form.",
                ],
                points: [
                    "Forms that say what is missing instead of leaving the button disabled",
                    "Local fonts: the build does not depend on external services",
                    "Optimised images in the order emails too",
                ],
            },
        },
    ],
    notes: [
        {
            id: "venta-privada",
            tag: "Middleware · Cookies",
            es: {
                title: "Venta privada: toda la tienda detrás de un código",
                body: "La colección se lanzó en un pop-up, y durante esas horas la tienda solo debía abrirse a quien estuviera allí. Desde su panel, la marca activa la venta privada y la web entera queda detrás de una pantalla que pide el código de la invitación, que también puede llegar ya escrito desde un QR.",
                points: [
                    "El código nunca sale del servidor: quien acierta recibe un token aleatorio en una cookie, y cambiar el código invalida las anteriores",
                    "Registrarse y pagar vuelven a comprobarlo por su cuenta",
                    "El webhook de pagos queda siempre fuera de la puerta: Stripe no lleva cookie y bloquearlo habría cortado los cobros",
                ],
            },
            en: {
                title: "Private sale: the whole shop behind a code",
                body: "The collection launched at a pop-up, and for those hours the shop had to open only to whoever was there. From its admin, the brand switches the private sale on and the entire site sits behind a screen asking for the invitation code, which can also arrive pre-filled from a QR.",
                points: [
                    "The code never leaves the server: a correct guess gets a random token in a cookie, and changing the code invalidates the old ones",
                    "Sign-up and checkout check it again on their own",
                    "The payments webhook always stays outside the gate: Stripe carries no cookie and blocking it would have cut off payments",
                ],
            },
        },
        {
            id: "pagos",
            tag: "Stripe · PostgreSQL",
            es: {
                title: "La última pieza es de quien paga primero",
                body: "Con ediciones tan cortas, apartar una prenda por cada carrito abandonado dejaría la tienda vacía. El checkout no reserva: comprueba que quedan unidades y la pieza se asigna cuando llega el pago, bajo un bloqueo en la base de datos. Si dos socios pagan la última a la vez, el segundo recibe su dinero de vuelta automáticamente y un correo que se lo explica.",
                points: [
                    "Precio, nivel y stock se resuelven en SQL: lo que diga el carrito del navegador no cuenta",
                    "Reembolsos y disputas se sincronizan releyendo el historial completo de Stripe, para no devolver nunca dos veces",
                    "IVA desglosado y congelado en cada pedido, envíos por zonas y exportación CSV para contabilidad",
                ],
            },
            en: {
                title: "The last piece goes to whoever pays first",
                body: "With runs this short, holding a garment for every abandoned cart would leave the shop empty. Checkout does not reserve: it checks there are units left and the piece is assigned when the payment arrives, under a lock in the database. If two members pay for the last one at once, the second gets their money back automatically and an email explaining it.",
                points: [
                    "Price, tier and stock are resolved in SQL: whatever the browser's cart says does not count",
                    "Refunds and disputes sync by re-reading Stripe's full history, so nothing is ever refunded twice",
                    "A VAT breakdown frozen on every order, shipping by zones and a CSV export for accounting",
                ],
            },
        },
        {
            id: "seguridad",
            tag: "RLS · pgTAP · Vitest",
            es: {
                title: "Seguridad y pruebas como parte del producto",
                body: "Todas las tablas tienen RLS: es la base de datos la que decide qué ve cada cuenta, no la interfaz. Encima hay límites de peticiones en Postgres, una auditoría de seguridad completa, borrado de cuentas (RGPD) como trabajo que se puede reintentar y cookies con consentimiento real.",
                points: [
                    "1.496 tests de aplicación con Vitest y 17 suites pgTAP contra la base de datos",
                    "Pruebas de concurrencia sobre un PostgreSQL real: pagos, reembolsos y borrados simultáneos",
                    "CI obligatorio antes de fusionar: tipos, lint, tests, pruebas de base de datos y build",
                ],
            },
            en: {
                title: "Security and testing as part of the product",
                body: "Every table has RLS: the database decides what each account sees, not the interface. On top come rate limits in Postgres, a full security audit, account erasure (GDPR) as a job that can be retried, and cookies with real consent.",
                points: [
                    "1,496 application tests with Vitest and 17 pgTAP suites against the database",
                    "Concurrency tests on a real PostgreSQL: simultaneous payments, refunds and erasures",
                    "Mandatory CI before merging: types, lint, tests, database tests and build",
                ],
            },
        },
    ],
    phoneShots: [
        { src: shot("m-home"), kind: "phone", alt: { es: "Portada en el móvil", en: "Home page on a phone" } },
        { src: shot("m-coleccion"), kind: "phone", alt: { es: "Colección en el móvil", en: "Collection on a phone" } },
        { src: shot("m-prenda"), kind: "phone", alt: { es: "Prenda en el móvil", en: "A garment on a phone" } },
        { src: shot("m-prenda-ficha"), kind: "phone", alt: { es: "Ficha de la prenda: edición limitada y compra reservada al Club", en: "Garment details: limited edition and buying reserved for the Club" } },
        { src: shot("m-club"), kind: "phone", alt: { es: "Nivel Esencial en la página del Club", en: "The Esencial tier on the Club page" } },
    ],
    links: {
        live: "https://lotss.es",
    },
    status: "completed",
    translations: {
        es: {
            shortDescription: "Tienda y club privado de una firma de moda: prendas numeradas con pasaporte, niveles de socio y venta privada",
            overview: [
                "LOTS es la tienda online y el club privado de una firma de moda española de producción limitada. No es una tienda al uso: comprar está reservado a los socios del Club, cada prenda es una pieza numerada de una edición corta y la relación con la marca se construye participando, no solo comprando.",
                "Me encargué de todo el desarrollo: la tienda, el área de socio, el panel desde el que la marca lo gestiona todo y el circuito de pago con Stripe. La parte visible es mínima a propósito; casi todo el trabajo está en las reglas que hay debajo.",
            ],
            features: [
                "Drops reservados a los socios del Club",
                "Eventos con reserva según el nivel y control de asistencia",
                "Contenido de los socios (UGC) con moderación y puntos",
                "Área de socio: credencial, puntos, beneficios, pedidos y cuenta",
                "Envíos por zonas con presupuesto en vivo antes de pagar",
                "Correos de pedido con la foto de cada prenda",
                "Panel de administración: productos, colecciones, eventos, socios, pedidos, envíos y contabilidad",
                "Aviso de cookies con consentimiento por categorías",
            ],
            challenges: [
                "Que el dinero cuadre siempre: webhooks idempotentes, reintentos y ningún reembolso doble",
                "Stock mínimo y concurrencia: dos pagos a la vez por la última pieza",
                "Precios, niveles y permisos resueltos en SQL, nunca confiados al navegador",
                "Seguridad por capas: RLS en todas las tablas, límites de peticiones y una auditoría completa",
                "Requisitos legales: IVA, derecho de desistimiento, cookies y borrado de datos (RGPD)",
                "Cerrar la tienda con un código sin dejar fuera los pagos ni la administración",
            ],
            learnings: [
                "Supabase a fondo: RLS, funciones SQL, triggers y Storage",
                "Stripe Checkout y webhooks en producción, con todo el ciclo posventa",
                "Tests de base de datos con pgTAP y pruebas de concurrencia en PostgreSQL",
                "Más de 1.400 tests automáticos y CI obligatorio antes de cada despliegue",
                "Convertir las decisiones de negocio de una marca real en reglas de código",
                "Diseño editorial y minimalista al servicio de la marca",
            ],
            role: "Full Stack Developer",
            duration: "6 meses",
            period: "May — Nov 2026",
        },
        en: {
            shortDescription: "Shop and private club for a fashion label: numbered garments with a passport, member tiers and private sales",
            overview: [
                "LOTS is the online shop and private club of a Spanish limited-production fashion label. It is not a regular shop: buying is reserved for Club members, every garment is a numbered piece from a short run, and the relationship with the brand is built by taking part, not only by buying.",
                "I handled all of the development: the shop, the member area, the admin the brand runs everything from, and the Stripe payment pipeline. The visible part is minimal on purpose; most of the work is in the rules underneath.",
            ],
            features: [
                "Drops reserved for Club members",
                "Events with booking by tier and attendance check-in",
                "Member content (UGC) with moderation and points",
                "Member area: credential, points, benefits, orders and account",
                "Shipping by zones with a live quote before paying",
                "Order emails with a photo of each garment",
                "Admin panel: products, collections, events, members, orders, shipping and accounting",
                "Cookie notice with consent by category",
            ],
            challenges: [
                "Money that always adds up: idempotent webhooks, retries and no double refunds",
                "Tiny stock and concurrency: two payments at once for the last piece",
                "Prices, tiers and permissions resolved in SQL, never trusted to the browser",
                "Layered security: RLS on every table, rate limits and a full audit",
                "Legal requirements: VAT, the right of withdrawal, cookies and data erasure (GDPR)",
                "Closing the shop behind a code without locking out payments or the admin",
            ],
            learnings: [
                "Supabase in depth: RLS, SQL functions, triggers and Storage",
                "Stripe Checkout and webhooks in production, with the whole after-sales cycle",
                "Database tests with pgTAP and concurrency tests in PostgreSQL",
                "Over 1,400 automated tests and mandatory CI before every deploy",
                "Turning a real brand's business decisions into rules in code",
                "Minimal, editorial design in service of the brand",
            ],
            role: "Full Stack Developer",
            duration: "6 months",
            period: "May — Nov 2026",
        },
    },
};
