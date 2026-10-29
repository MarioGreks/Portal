// Edita esta lista para cambiar el portal. Cada proyecto va en una sección:
// "webs", "apps" o "github". "tipos" sirve para los filtros (web, windows, android).
// "imagen" es opcional: pon una captura en img/ (por ejemplo "img/viajes.jpg").
window.PROYECTOS = [
  {
    seccion: "webs", tipos: ["web"],
    titulo: "Vuelos, hoteles y trenes",
    resumen: "Compara vuelos, hoteles y trenes desde la ciudad y las fechas que elijas, con mapas y gráficos de precios.",
    dominio: "tu-app.streamlit.app", estado: "Puede tardar 30 s en abrir",
    enlaces: [{ texto: "Abrir la web", href: "https://example.com", principal: true }]
  },
  {
    seccion: "webs", tipos: ["web"],
    titulo: "Finanzas personales",
    resumen: "Calcula la cuota de tu hipoteca y cuánto podría crecer lo que inviertes.",
    dominio: "tu-app.streamlit.app", estado: "Puede tardar 30 s en abrir",
    enlaces: [{ texto: "Abrir la web", href: "https://example.com", principal: true }]
  },
  {
    seccion: "webs", tipos: ["web"],
    titulo: "Comidas",
    resumen: "Organiza qué comes y qué cenas cada día, con ingredientes, cantidades y alérgenos.",
    dominio: "kuerb0.github.io/comidas",
    enlaces: [{ texto: "Abrir la web", href: "https://kuerb0.github.io/comidas", principal: true }]
  },
  {
    seccion: "apps", tipos: ["windows", "android"],
    titulo: "Viajes", version: "2.7.2",
    resumen: "Descarga precios de vuelos, hoteles y trenes, los compara y te avisa si alguno baja de tu precio.",
    enlaces: [
      { texto: "Windows", href: "#", principal: true, peso: "121 MB" },
      { texto: "Android", href: "#", peso: "17 MB" }
    ]
  },
  {
    seccion: "apps", tipos: ["windows"],
    titulo: "Apagador", version: "1.0.0",
    resumen: "Apaga tu PC dentro de los minutos que elijas o a una hora exacta, con cuenta atrás.",
    enlaces: [{ texto: "Descargar para Windows", href: "#", principal: true, peso: "11 MB" }]
  },
  {
    seccion: "github", tipos: ["web"],
    titulo: "Excel avanzado",
    resumen: "Practica funciones avanzadas de Excel, como FILTRAR u ORDENARPOR, con miles de datos.",
    dominio: "github.com/Kuerb0/Excel",
    enlaces: [{ texto: "Ver en GitHub", href: "https://github.com/Kuerb0/Excel", principal: true }]
  }
];
