// ZETTTA — DIGITAL ATELIER
// Datos centrales. Se conserva el contenido real del portfolio (Zara Caballero
// Díaz, proyectos, trenzas, equipo, testimonios, contacto) y se enriquece con
// metadatos editoriales (números, categorías, año, cliente) para la nueva
// dirección artística. Las imágenes usan rutas /portfolio/*; mientras no
// existan se muestra un placeholder que no rompe la maquetación.

export type NavItem = {
  id: string;
  code: string; // p.ej. "07"
  label: string;
};

export const navItems: NavItem[] = [
  { id: "work", code: "07", label: "Work" },
  { id: "face", code: "13", label: "Face" },
  { id: "hair", code: "04", label: "Hair" },
  { id: "editorial", code: "09", label: "Editorial" },
  { id: "archive", code: "∞", label: "Archive" },
  { id: "about", code: "01", label: "About" },
  { id: "contact", code: "→", label: "Contact" },
];

// ── Selected Work (anti-grid). Cada proyecto define su propia composición. ──
export type WorkLayout = "left" | "right" | "center" | "stacked";

export type Work = {
  index: string; // "01"
  slug: string;
  title: string; // nombre editorial del proyecto
  category: string; // SKIN / HAIR / EDITORIAL...
  year: string;
  client: string;
  role: string[]; // MAKE-UP, HAIR, CREATIVE DIRECTION
  image: string;
  imageHover?: string; // segunda imagen para el hover
  layout: WorkLayout;
  note?: string; // anotación editorial
};

export const works: Work[] = [
  {
    index: "01",
    slug: "carioca-club",
    title: "Carioca Club",
    category: "SKIN",
    year: "2026",
    client: "Kristina",
    role: ["MAKE-UP", "HAIR"],
    image: "/portfolio/hair-1.svg",
    imageHover: "/portfolio/hair-3.svg",
    layout: "left",
    note: "Recogido de trenzas + liso. Identidad, no peinado.",
  },
  {
    index: "02",
    slug: "infierno-fest",
    title: "Infierno Fest",
    category: "LOOK",
    year: "2026",
    client: "Festival",
    role: ["MAKE-UP", "HAIR", "STYLING"],
    image: "/portfolio/hair-2.svg",
    imageHover: "/portfolio/editorial-2.svg",
    layout: "right",
    note: "Look festivalero. Raw energy.",
  },
  {
    index: "03",
    slug: "2spicyy-sessions",
    title: "2Spicyy Sessions",
    category: "EDITORIAL",
    year: "2026",
    client: "2Spicyy",
    role: ["MAKE-UP", "HAIR", "CREATIVE DIRECTION"],
    image: "/portfolio/hair-3.svg",
    imageHover: "/portfolio/editorial-1.svg",
    layout: "center",
    note: "Editorial urbana con balón. Statement.",
  },
];

// ── FACE — mini-proyectos / caras (antiguas mini-cards de hair styling) ──
export type FaceItem = {
  index: string;
  code: string; // FACE / 003
  title: string;
  project: string;
  image: string;
};

export const faces: FaceItem[] = [
  {
    index: "013",
    code: "FACE / 013",
    title: "Semirecogido",
    project: "«La Bizcochita» — Kristina ft. El Toca",
    image: "/portfolio/mini-1.svg",
  },
  {
    index: "014",
    code: "FACE / 014",
    title: "Semirecogido",
    project: "Audiovisual «La dueña de tu dinero» — La Dreisyy",
    image: "/portfolio/mini-2.svg",
  },
  {
    index: "015",
    code: "FACE / 015",
    title: "Semirecogido",
    project: "Cartel Fiestas de Sanse — Paula Reyzz",
    image: "/portfolio/mini-3.svg",
  },
];

// ── HAIR — trenzas (galería) ──
export type HairItem = {
  code: string; // HAIR / 04
  caption: string;
  image: string;
};

export const hairWorks: HairItem[] = [
  { code: "HAIR / 041", caption: "Trenzas sueltas · varios colores", image: "/portfolio/trenzas-1.svg" },
  { code: "HAIR / 042", caption: "Boxeadoras con líneas curvas", image: "/portfolio/trenzas-2.svg" },
  { code: "HAIR / 043", caption: "Coleta de trenzas · mini trenzas", image: "/portfolio/trenzas-3.svg" },
  { code: "HAIR / 044", caption: "Fulani braids · con rizos", image: "/portfolio/trenzas-4.svg" },
];

// ── EDITORIAL urbano ──
export const editorialWorks: HairItem[] = [
  { code: "EDIT / 026", caption: "Doble moño · detalle translúcido", image: "/portfolio/editorial-1.svg" },
  { code: "EDIT / 027", caption: "Trenzas frontales · grafiti", image: "/portfolio/editorial-2.svg" },
  { code: "EDIT / 028", caption: "Coletas burbuja · outfit amarillo", image: "/portfolio/editorial-3.svg" },
];

// ── THE ARCHIVE — colección irregular (reúne todo el material visual) ──
export type ArchiveItem = {
  n: string; // "037"
  category: string; // SKIN / HAIR / LOOK / EDIT
  title: string;
  year: string;
  image: string;
};

export const archive: ArchiveItem[] = [
  { n: "037", category: "SKIN", title: "Carioca Club", year: "2026", image: "/portfolio/hair-1.svg" },
  { n: "038", category: "LOOK", title: "Infierno Fest", year: "2026", image: "/portfolio/hair-2.svg" },
  { n: "039", category: "EDIT", title: "2Spicyy Sessions", year: "2026", image: "/portfolio/hair-3.svg" },
  { n: "040", category: "HAIR", title: "Trenzas sueltas", year: "2025", image: "/portfolio/trenzas-1.svg" },
  { n: "041", category: "HAIR", title: "Boxeadoras curvas", year: "2025", image: "/portfolio/trenzas-2.svg" },
  { n: "042", category: "HAIR", title: "Coleta de trenzas", year: "2025", image: "/portfolio/trenzas-3.svg" },
  { n: "043", category: "HAIR", title: "Fulani braids", year: "2025", image: "/portfolio/trenzas-4.svg" },
  { n: "044", category: "EDIT", title: "Doble moño", year: "2026", image: "/portfolio/editorial-1.svg" },
  { n: "045", category: "EDIT", title: "Trenzas grafiti", year: "2026", image: "/portfolio/editorial-2.svg" },
  { n: "046", category: "EDIT", title: "Coletas burbuja", year: "2026", image: "/portfolio/editorial-3.svg" },
  { n: "047", category: "FACE", title: "La Bizcochita", year: "2026", image: "/portfolio/mini-1.svg" },
  { n: "048", category: "FACE", title: "La dueña de tu dinero", year: "2026", image: "/portfolio/mini-2.svg" },
];

// ── Servicios como lista técnica ──
export const services: { group: string; items: string[] }[] = [
  { group: "MAKE-UP", items: ["Editorial", "Beauty", "Fashion", "Events", "Creative"] },
  { group: "HAIR", items: ["Editorial", "Fashion", "Beauty", "Braids"] },
  { group: "IMAGE", items: ["Creative Direction", "Campaigns", "Editorial"] },
];

// ── Equipo / colaboradores ──
export type TeamMember = { image: string; name: string; role: string };

export const team: TeamMember[] = [
  { image: "/portfolio/team-1.svg", name: "Elena Paula", role: "Branding & identidad visual" },
  { image: "/portfolio/team-2.svg", name: "Julián Alonso", role: "Filmmaker & editor" },
  { image: "/portfolio/team-3.svg", name: "Olivia Wilson", role: "Campañas & marketing digital" },
];

// ── Testimonios ──
export type Testimonial = { image: string; quote: string; name: string };

export const testimonials: Testimonial[] = [
  { image: "/portfolio/client-1.svg", quote: "Su creatividad y atención al detalle transformaron nuestra marca.", name: "Olivia Wilson" },
  { image: "/portfolio/client-2.svg", quote: "Cada look encajó con el concepto. Profesional y con una visión única.", name: "Elena Paula" },
  { image: "/portfolio/client-3.svg", quote: "El resultado superó lo que teníamos en mente. Lo elevó todo.", name: "Julián Alonso" },
  { image: "/portfolio/client-4.svg", quote: "Un talento enorme para el estilismo. Frescura y personalidad.", name: "Horacio Olivo" },
];

// ── Sobre Zara (contenido real conservado) ──
export const about = {
  name: ["Zara", "Caballero", "Díaz"],
  role: "MAKE-UP ARTIST",
  origin: "Chipiona (Cádiz)",
  base: "Granada",
  paragraphs: [
    "Maquilladora y peluquera, especializada en trenzas y recogidos. Formada en Asesoría de la Imagen Personal.",
    "Natural de Chipiona (Cádiz) y ubicada en Granada, donde he desarrollado mi creatividad y mi forma de entender la imagen.",
    "Desde clientes de a pie hasta artistas y proyectos audiovisuales. El maquillaje como actitud, no como acabado.",
  ],
};

// ── Contacto / redes ──
export const contact = {
  instagram: "https://instagram.com/zettta_mua",
  instagramHandle: "@ZETTTA_MUA",
  whatsapp:
    "https://wa.me/34600000000?text=" +
    encodeURIComponent("Hola Zara, quiero hacer algo raro juntas."),
  email: "zara.caballero@zetttamua.com",
  domain: "ZETTTAMUA.COM",
  location: "GRANADA — ES",
  year: "2026",
};

// ── Microcopy editorial ──
export const microcopy = {
  tagline: "BEAUTY, BUT WRONG.",
  alt: "I MAKE FACES MISBEHAVE.",
  lines: ["NOT A LOOK.", "A STATEMENT."],
  attitude: "MAKE-UP AS AN ATTITUDE.",
  loop: ["CREATE.", "DISTORT.", "REPEAT."],
  disciplines: ["MAKE-UP", "HAIR", "IMAGE", "ART DIRECTION"],
};
