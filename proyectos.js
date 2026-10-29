// Edita esta lista para cambiar el portal. Cada proyecto va en una sección:
// "webs", "apps" o "github". "tipos" sirve para los filtros (web, windows, android).
// "imagen" es opcional: pon una captura en img/ (por ejemplo "img/proyecto.jpg").
window.PROYECTOS = [
  {
    seccion: "webs", tipos: ["web"],
    titulo: "Mi primera web",
    resumen: "Descripción corta de lo que hace este proyecto.",
    dominio: "mariogreks.github.io/mi-web",
    enlaces: [{ texto: "Abrir la web", href: "https://mariogreks.github.io/", principal: true }]
  },
  {
    seccion: "apps", tipos: ["windows"],
    titulo: "Mi primera app", version: "1.0.0",
    resumen: "Descripción corta de lo que hace esta app.",
    enlaces: [{ texto: "Descargar para Windows", href: "#", principal: true, peso: "10 MB" }]
  },
  {
    seccion: "github", tipos: ["web"],
    titulo: "Mi primer repositorio",
    resumen: "Descripción corta del repositorio.",
    dominio: "github.com/MarioGreks",
    enlaces: [{ texto: "Ver en GitHub", href: "https://github.com/MarioGreks", principal: true }]
  }
];