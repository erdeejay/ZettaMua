// Datos centrales del portfolio. Las imágenes usan placeholders locales
// (SVG generados) para que puedas sustituirlos por las fotos reales sin tocar
// la maquetación. Basta con reemplazar `image` por la ruta o URL definitiva.

export type NavItem = {
  id: string;
  index: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "sobre-mi", index: "01", label: "Sobre Mí" },
  { id: "hair-styling", index: "02", label: "Hair Styling" },
  { id: "trenzas", index: "03", label: "Trenzas" },
  { id: "editorial", index: "04", label: "Editorial & Creative" },
  { id: "contacto", index: "05", label: "Contacto" },
];

export type GalleryItem = {
  image: string;
  caption: string;
  ratio?: "portrait" | "landscape" | "square";
};

// Galería principal Hair Styling (proyectos grandes)
export const hairProjects: GalleryItem[] = [
  { image: "/portfolio/hair-1.svg", caption: "CARIOCA CLUB", ratio: "portrait" },
  { image: "/portfolio/hair-2.svg", caption: "INFIERNO FEST 2026", ratio: "landscape" },
  { image: "/portfolio/hair-3.svg", caption: "2SPICYY SESSIONS", ratio: "portrait" },
];

// Mini-cards inferiores de Hair Styling
export type MiniCard = {
  image: string;
  title: string;
  project: string;
};

export const hairMiniCards: MiniCard[] = [
  {
    image: "/portfolio/mini-1.svg",
    title: "Semirecogido",
    project: "«La Bizcochita» — Kristina ft. El Toca",
  },
  {
    image: "/portfolio/mini-2.svg",
    title: "Semirecogido",
    project: "Audiovisual «La dueña de tu dinero» — La Dreisyy",
  },
  {
    image: "/portfolio/mini-3.svg",
    title: "Semirecogido",
    project: "Cartel Fiestas de Sanse — Paula Reyzz",
  },
];

// Galería de Trenzas
export const trenzasProjects: GalleryItem[] = [
  { image: "/portfolio/trenzas-1.svg", caption: "TRENZAS SUELTAS VARIOS COLORES" },
  { image: "/portfolio/trenzas-2.svg", caption: "BOXEADORAS CON LÍNEAS CURVAS" },
  { image: "/portfolio/trenzas-3.svg", caption: "COLETA DE TRENZAS (COMPLETA DE MINI TRENZAS)" },
  { image: "/portfolio/trenzas-4.svg", caption: "FULANI BRAIDS (CON RIZOS)" },
];

// Galería Editorial Urbana (sección 04)
export const editorialProjects: GalleryItem[] = [
  { image: "/portfolio/editorial-1.svg", caption: "DOBLE MOÑO · DETALLE TRANSLÚCIDO" },
  { image: "/portfolio/editorial-2.svg", caption: "TRENZAS FRONTALES · GRAFITI" },
  { image: "/portfolio/editorial-3.svg", caption: "COLETAS BURBUJA · OUTFIT AMARILLO" },
];

// Equipo / colaboradores habituales
export type TeamMember = {
  image: string;
  name: string;
  role: string;
};

export const team: TeamMember[] = [
  {
    image: "/portfolio/team-1.svg",
    name: "Elena Paula",
    role: "Especialista en branding y diseño de identidad visual.",
  },
  {
    image: "/portfolio/team-2.svg",
    name: "Julián Alonso",
    role: "Filmmaker profesional y editor.",
  },
  {
    image: "/portfolio/team-3.svg",
    name: "Olivia Wilson",
    role: "Creativo en campañas publicitarias y marketing digital.",
  },
];

// Testimonios — Clientes felices
export type Testimonial = {
  image: string;
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    image: "/portfolio/client-1.svg",
    quote:
      "Trabajar con Zara fue una experiencia increíble. Su creatividad y atención al detalle transformaron nuestra marca.",
    name: "Olivia Wilson",
  },
  {
    image: "/portfolio/client-2.svg",
    quote:
      "Cada look que propuso encajó a la perfección con el concepto. Profesional, resolutiva y con una visión única.",
    name: "Elena Paula",
  },
  {
    image: "/portfolio/client-3.svg",
    quote:
      "El resultado superó lo que teníamos en mente. Entendió el proyecto desde el primer minuto y lo elevó.",
    name: "Julián Alonso",
  },
  {
    image: "/portfolio/client-4.svg",
    quote:
      "Un talento enorme para el estilismo. Aportó frescura y personalidad a toda la producción.",
    name: "Horacio Olivo",
  },
];

// Logo de la marca (imagen). Si falla la carga, la UI cae al texto.
export const logoUrl =
  "https://r2.fivemanage.com/0CLR2LmxGE4gkAoy8AlNA/Diseosinttulo(10).png";

// Contacto / redes (usado por el CTA final y el footer)
export const contact = {
  instagram: "https://instagram.com/zettta_mua",
  instagramHandle: "@ZETTTA_MUA",
  whatsapp:
    "https://wa.me/34600000000?text=" +
    encodeURIComponent(
      "¡Hola Zara! Me gustaría hablar sobre un proyecto de hair & makeup."
    ),
  email: "zara.caballero@zetttamua.com",
  domain: "WWW.ZETTTAMUA.COM",
};
