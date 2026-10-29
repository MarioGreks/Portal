(function () {
  var $ = function (s) { return document.querySelector(s); };
  var lista = window.PROYECTOS || [];
  var filtro = "todo", texto = "";

  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; }
  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  function tarjeta(p, i) {
    var vista = p.imagen
      ? '<img src="' + esc(p.imagen) + '" alt="Vista previa de ' + esc(p.titulo) + '" loading="lazy">'
      : '<span class="letra">' + esc(p.titulo.charAt(0)) + "</span>";
    var botones = (p.enlaces || []).map(function (e) {
      return '<a class="boton ' + (e.principal ? "prin" : "") + '" href="' + esc(e.href) + '" target="_blank" rel="noopener">' + esc(e.texto) + "</a>" +
        (e.peso ? '<span class="peso">' + esc((p.version ? p.version + " · " : "") + e.peso) + "</span>" : "");
    }).join("");
    return '<li><article class="tarjeta" style="animation-delay:' + i * 40 + 'ms">' +
      '<div class="marco"><div class="barra" aria-hidden="true"><i></i><i></i><i></i><span>' + esc(p.dominio || p.titulo) + "</span></div>" +
      '<div class="vista">' + vista + "</div></div>" +
      '<div class="cuerpo"><div class="titulo"><h3>' + esc(p.titulo) + (p.version ? ' <span class="ver">' + esc(p.version) + "</span>" : "") + "</h3></div>" +
      '<p class="resumen">' + esc(p.resumen) + "</p>" +
      (p.estado ? '<div><span class="estado">' + esc(p.estado) + "</span></div>" : "") +
      '<div class="acciones">' + botones + "</div></div></article></li>";
  }

  function pintar() {
    var q = norm(texto), total = 0;
    ["webs", "apps", "github"].forEach(function (sec) {
      var items = lista.filter(function (p) {
        return p.seccion === sec &&
          (filtro === "todo" || p.tipos.indexOf(filtro) >= 0) &&
          (!q || norm(p.titulo + " " + p.resumen).indexOf(q) >= 0);
      });
      total += items.length;
      $("#lista-" + sec).innerHTML = items.map(tarjeta).join("");
      $("#" + sec).hidden = items.length === 0;
    });
    var t = total + (total === 1 ? " proyecto" : " proyectos");
    $("#contador").textContent = t;
    $("#recuento").textContent = lista.length + " proyectos.";
    $("#vacio").hidden = total !== 0;
  }

  document.querySelectorAll(".filtros button").forEach(function (b) {
    b.addEventListener("click", function () {
      filtro = b.dataset.f;
      document.querySelectorAll(".filtros button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      pintar();
    });
  });
  $("#q").addEventListener("input", function (e) { texto = e.target.value; pintar(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); $("#q").focus(); }
  });

  // Tema: Auto -> Claro -> Oscuro
  var temas = ["auto", "claro", "oscuro"], nombres = { auto: "Auto", claro: "Claro", oscuro: "Oscuro" };
  var actual = document.documentElement.dataset.tema || "auto";
  function aplicarTema() {
    if (actual === "auto") delete document.documentElement.dataset.tema; else document.documentElement.dataset.tema = actual;
    $("#tema-txt").textContent = nombres[actual];
    try { actual === "auto" ? localStorage.removeItem("tema") : localStorage.setItem("tema", actual); } catch (e) {}
  }
  $("#tema").addEventListener("click", function () { actual = temas[(temas.indexOf(actual) + 1) % 3]; aplicarTema(); });
  aplicarTema();

  $("#anio").textContent = new Date().getFullYear();
  pintar();

  // Fondo de esporas: motas que flotan hacia arriba y hilos de micelio curvos entre las cercanas
  var c = $("#fondo"), g = c.getContext("2d"), pts = [];
  function medir() {
    c.width = innerWidth; c.height = innerHeight;
    pts = Array.from({ length: Math.round(innerWidth * innerHeight / 9000) }, function () {
      return { x: Math.random() * c.width, y: Math.random() * c.height, v: .08 + Math.random() * .22,
               r: .6 + Math.random() * 1.8, f: Math.random() * 6.3, s: Math.random() * 6.3 };
    });
  }
  function dibujar(t) {
    g.clearRect(0, 0, c.width, c.height);
    c.style.color = "var(--espora)";   // el color computado ya resuelve light-dark(); la variable en crudo no
    var col = getComputedStyle(c).color;
    g.fillStyle = g.strokeStyle = col; g.lineWidth = .6;
    pts.forEach(function (p, i) {
      p.y -= p.v; p.x += Math.sin(t / 2500 + p.s) * .15;
      if (p.y < -5) { p.y = c.height + 5; p.x = Math.random() * c.width; }
      var tw = .5 + .5 * Math.sin(t / 1200 + p.f);
      g.globalAlpha = .08 + tw * .1; g.beginPath(); g.arc(p.x, p.y, p.r * 4, 0, 7); g.fill();
      g.globalAlpha = .35 + tw * .4; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 7); g.fill();
      for (var j = i + 1; j < pts.length; j++) {
        var q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 110) {
          g.globalAlpha = (1 - d / 110) * .22; g.beginPath(); g.moveTo(p.x, p.y);
          g.quadraticCurveTo((p.x + q.x) / 2 + Math.sin(p.s + q.s) * 18, (p.y + q.y) / 2 + Math.cos(p.s + q.s) * 18, q.x, q.y); g.stroke();
        }
      }
    });
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) requestAnimationFrame(dibujar);
  }
  medir(); dibujar(0); addEventListener("resize", medir);
})();
