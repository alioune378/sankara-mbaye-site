/* SANKARA MBAYE — site logic. Built by DALAL STUDIO. */
(function () {
  "use strict";
  var LANGS = ["fr", "en"];
  var lang = "fr";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var t = function (k) { return (window.T[lang] && window.T[lang][k]) || window.T.fr[k] || ""; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* ---------- language ---------- */
  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem("sm-lang"); if (LANGS.indexOf(s) > -1) return s; } catch (e) {}
    return "fr";
  }
  function setMeta(sel, attr, val) { var el = $(sel); if (el) el.setAttribute(attr, val); }
  function applyLang(l) {
    lang = LANGS.indexOf(l) > -1 ? l : "fr";
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) { var v = t(el.dataset.i18n); if (v) el.textContent = v; });
    $$("[data-i18n-alt]").forEach(function (el) { el.alt = t(el.dataset.i18nAlt); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    $$(".lang-btn").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    document.title = t("meta_title");
    setMeta('meta[name="description"]', "content", t("meta_desc"));
    setMeta('meta[property="og:title"]', "content", t("meta_title"));
    setMeta('meta[property="og:description"]', "content", t("meta_desc"));
    setMeta('meta[property="og:locale"]', "content", lang === "fr" ? "fr_FR" : "en_US");
    setMeta('meta[property="og:locale:alternate"]', "content", lang === "fr" ? "en_US" : "fr_FR");
    var mb = $("#menuBtn"); if (mb) mb.setAttribute("aria-label", t(mb.getAttribute("aria-expanded") === "true" ? "menu_close" : "menu_open"));
    var fl = $("#f-lang"); if (fl) fl.value = lang;
    try { localStorage.setItem("sm-lang", lang); } catch (e) {}
    var u = new URL(location.href);
    if (lang === "fr") u.searchParams.delete("lang"); else u.searchParams.set("lang", lang);
    history.replaceState(null, "", u.pathname + u.search + u.hash);
    updateSeoLinks();
    renderTV(); renderSocials(); renderGallery(); renderCredit(); renderTickers();
    clearFormErrors();
  }

  /* ---------- scrolling banners ---------- */
  function renderTickers() {
    var words = ["Sankara Mbaye"].concat(t("hero_small").split("•").map(function (w) { return w.trim(); }).filter(Boolean)).concat(["Dakar", "New York", "Sénégal", "USA", "Diaspora"]);
    var one = words.map(function (w) { return "<span>" + esc(w) + '</span><span class="star">★</span>'; }).join("");
    $$("[data-ticker]").forEach(function (el) { el.innerHTML = one + one + one + one; });
  }

  /* ---------- SEO links (only when the final domain is known) ---------- */
  function updateSeoLinks() {
    var base = (window.SITE_URL || "").replace(/\/$/, "");
    $$("link[data-seo]").forEach(function (l) { l.remove(); });
    var old = $("#ld-person"); if (old) old.remove();
    var socials = (window.SOCIALS || []).filter(function (s) { return s.verified && s.url; }).map(function (s) { return s.url; });
    var person = { "@context": "https://schema.org", "@type": "Person", "name": "Sankara Mbaye", "description": t("meta_desc") };
    if (base) person.url = base + "/";
    if (socials.length) person.sameAs = socials;
    var ld = document.createElement("script"); ld.type = "application/ld+json"; ld.id = "ld-person"; ld.textContent = JSON.stringify(person); document.head.appendChild(ld);
    if (!base) return;
    var add = function (rel, href, hl) { var l = document.createElement("link"); l.rel = rel; l.href = href; if (hl) l.hreflang = hl; l.setAttribute("data-seo", ""); document.head.appendChild(l); };
    add("canonical", lang === "fr" ? base + "/" : base + "/?lang=en");
    add("alternate", base + "/", "fr"); add("alternate", base + "/?lang=en", "en"); add("alternate", base + "/", "x-default");
    setMeta('meta[property="og:url"]', "content", lang === "fr" ? base + "/" : base + "/?lang=en");
    setMeta('meta[property="og:image"]', "content", base + "/assets/img/hero-maillot-bleu.jpg");
  }

  /* ---------- Sankara TV ---------- */
  var CATS = ["all", "humour", "famille", "lives", "societe", "culture"];
  var activeCat = "all";
  function videoUrl(v) { return v.type === "youtube" ? "https://www.youtube.com/watch?v=" + encodeURIComponent(v.id) : v.url; }
  function renderTV() {
    var box = $("#tvContent"); if (!box) return;
    var vids = (window.VIDEOS || []).filter(function (v) { return (v.type === "youtube" && v.id) || (v.type === "link" && v.url); });
    if (!vids.length) {
      var socials = verifiedSocials();
      var hasTT = socials.some(function (s) { return s.id === "tiktok"; });
      box.innerHTML = '<div class="tv-empty"><h3>' + esc(t(hasTT ? "tv_tiktok_t" : "tv_empty_t")) + "</h3><p>" + esc(hasTT ? t("tv_tiktok_p") : (socials.length ? t("tv_empty_p") : t("tv_empty_nosocial"))) + "</p>" +
        (socials.length ? '<div class="socials" style="justify-content:flex-start">' + socials.map(socialBtn).join("") + "</div>" : "") + "</div>";
      return;
    }
    var featured = vids.filter(function (v) { return v.featured && v.type === "youtube"; })[0];
    var list = vids.filter(function (v) { return activeCat === "all" || v.category === activeCat; });
    var html = '<div class="filters" role="group">' + CATS.map(function (c) {
      return '<button type="button" class="filter" data-cat="' + c + '" aria-pressed="' + (c === activeCat) + '">' + esc(t("cat_" + c)) + "</button>";
    }).join("") + "</div>";
    if (featured && activeCat === "all") {
      html += '<h3 class="tv-sub">' + esc(t("tv_featured")) + '</h3><div class="featured"><iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(featured.id) +
        '" title="' + esc(featured.title[lang] || featured.title.fr) + '" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    }
    html += '<h3 class="tv-sub">' + esc(t("tv_latest")) + "</h3>";
    if (!list.length) html += '<p class="lede light">' + esc(t("tv_none_cat")) + "</p>";
    else html += '<div class="vgrid">' + list.map(function (v) {
      var thumb = v.type === "youtube" ? "https://i.ytimg.com/vi/" + encodeURIComponent(v.id) + "/hqdefault.jpg" : (v.thumb || "");
      return '<a class="vcard" href="' + esc(videoUrl(v)) + '" target="_blank" rel="noopener" aria-label="' + esc(t("tv_open") + " : " + (v.title[lang] || v.title.fr)) + '">' +
        '<div class="vthumb"' + (thumb ? ' style="background-image:url(\'' + esc(thumb) + '\')"' : "") + '></div><div class="vbody"><p class="vcat">' + esc(t("cat_" + v.category)) + '</p><p class="vtitle">' + esc(v.title[lang] || v.title.fr) + "</p></div></a>";
    }).join("") + "</div>";
    var yt = verifiedSocials().filter(function (s) { return s.id === "youtube"; })[0];
    if (yt) html += '<p style="margin-top:28px"><a class="btn btn-ghost" href="' + esc(yt.url) + '" target="_blank" rel="noopener">' + esc(t("tv_more")) + "</a></p>";
    box.innerHTML = html;
    $$(".filter", box).forEach(function (b) { b.addEventListener("click", function () { activeCat = b.dataset.cat; renderTV(); }); });
  }

  /* ---------- press ---------- */
  function renderPress() {
    var box = $("#pressList"); if (!box) return;
    box.innerHTML = (window.PRESS || []).map(function (p) {
      return '<article class="pcard"><div class="pmeta"><span class="poutlet">' + esc(p.outlet) + '</span><span class="pkind">' + esc(p.kind[lang]) + "</span>" +
        (p.date ? "<span>" + esc(p.date) + "</span>" : "") + "</div><h3>" + esc(p.title[lang]) + "</h3><p>" + esc(p.desc[lang]) + '</p><a class="plink" href="' + esc(p.url) +
        '" target="_blank" rel="noopener">' + esc(t("media_read") + " " + p.outlet) + " ↗</a></article>";
    }).join("");
  }

  /* ---------- socials ---------- */
  var ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v7h4v-7h3l1-4h-4V8.6c0-.4.2-.6.6-.6z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 3c.4 2.2 1.8 3.6 4 3.9v3.4c-1.5 0-2.9-.4-4-1.2v6.4A6 6 0 1 1 10 9.6v3.5a2.6 2.6 0 1 0 2.6 2.5V3H16z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 8.2c-.2-1.5-1-2.5-2.5-2.7C17.3 5.2 12 5.2 12 5.2s-5.3 0-7.5.3C3 5.7 2.2 6.7 2 8.2 1.8 9.7 1.8 12 1.8 12s0 2.3.2 3.8c.2 1.5 1 2.5 2.5 2.7 2.2.3 7.5.3 7.5.3s5.3 0 7.5-.3c1.5-.2 2.3-1.2 2.5-2.7.2-1.5.2-3.8.2-3.8s0-2.3-.2-3.8zM10 15.2V8.8l5.5 3.2L10 15.2z"/></svg>'
  };
  function verifiedSocials() { return (window.SOCIALS || []).filter(function (s) { return s.verified && s.url; }); }
  function socialBtn(s) { return '<a class="sbtn" href="' + esc(s.url) + '" target="_blank" rel="noopener me">' + (ICONS[s.id] || "") + "<span>" + esc(s.label) + "</span></a>"; }
  function renderSocials() {
    var box = $("#socialList"); if (!box) return;
    var list = verifiedSocials();
    box.innerHTML = list.length ? list.map(socialBtn).join("") : '<p class="soon">' + esc(t("soc_soon")) + "</p>";
  }
  function renderCredit() {
    var c = $("#dalalCredit"); if (!c) return;
    c.innerHTML = window.DALAL_URL ? '<a href="' + esc(window.DALAL_URL) + '" target="_blank" rel="noopener">DALAL STUDIO</a>' : "DALAL STUDIO";
  }

  /* ---------- gallery + lightbox ---------- */
  var lbIndex = 0, lastFocus = null;
  function renderGallery() {
    var box = $("#galleryGrid"); if (!box) return;
    box.innerHTML = (window.GALLERY || []).map(function (g, i) {
      return '<button type="button" class="gitem" data-i="' + i + '" aria-label="' + esc(t("lb_open") + " : " + g.alt[lang]) + '"><img src="' + esc(g.src) + '" width="' + g.w + '" height="' + g.h + '" loading="lazy" alt="' + esc(g.alt[lang]) + '"></button>';
    }).join("");
    $$(".gitem", box).forEach(function (b) { b.addEventListener("click", function () { openLb(+b.dataset.i); }); });
  }
  function showLb() {
    var g = window.GALLERY[lbIndex];
    $("#lbImg").src = g.src; $("#lbImg").alt = g.alt[lang]; $("#lbCap").textContent = g.alt[lang] + " · " + (lbIndex + 1) + " / " + window.GALLERY.length;
  }
  function openLb(i) { lbIndex = i; lastFocus = document.activeElement; showLb(); $("#lightbox").hidden = false; document.body.style.overflow = "hidden"; $("#lbClose").focus(); }
  function closeLb() { $("#lightbox").hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  function stepLb(d) { var n = window.GALLERY.length; lbIndex = (lbIndex + d + n) % n; showLb(); }

  /* ---------- contact form (Netlify Forms) ---------- */
  function clearFormErrors() { $$(".err").forEach(function (e) { e.textContent = ""; }); $$("#contactForm [aria-invalid]").forEach(function (e) { e.removeAttribute("aria-invalid"); }); }
  function validate(form) {
    clearFormErrors();
    var ok = true, first = null;
    var check = function (id, errId, bad, msg) { if (bad) { ok = false; var el = $(id); el.setAttribute("aria-invalid", "true"); $(errId).textContent = msg; first = first || el; } };
    var v = function (id) { return $(id).value.trim(); };
    check("#f-name", "#e-name", !v("#f-name"), t("f_req"));
    var em = v("#f-email");
    check("#f-email", "#e-email", !em ? true : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em), !em ? t("f_req") : t("f_bad_email"));
    check("#f-subject", "#e-subject", !v("#f-subject"), t("f_req"));
    check("#f-msg", "#e-msg", !v("#f-msg"), t("f_req"));
    if (first) first.focus();
    return ok;
  }
  function initForm() {
    var form = $("#contactForm"); if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = $("#formStatus"); status.className = "form-status"; status.textContent = "";
      if (!validate(form)) return;
      var btn = $("#f-submit"); btn.disabled = true; btn.textContent = t("f_sending");
      var body = new URLSearchParams(new FormData(form)).toString();
      fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body })
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          form.reset(); $("#f-lang").value = lang;
          status.classList.add("ok"); status.textContent = t("f_ok");
        })
        .catch(function () { status.classList.add("bad"); status.textContent = t("f_err"); })
        .then(function () { btn.disabled = false; btn.textContent = t("f_submit"); });
    });
  }

  /* ---------- nav + reveal ---------- */
  function initNav() {
    var btn = $("#menuBtn"), links = $("#navLinks");
    var set = function (open) { btn.setAttribute("aria-expanded", String(open)); links.classList.toggle("open", open); btn.setAttribute("aria-label", t(open ? "menu_close" : "menu_open")); };
    btn.addEventListener("click", function () { set(btn.getAttribute("aria-expanded") !== "true"); });
    $$("a", links).forEach(function (a) { a.addEventListener("click", function () { set(false); }); });
    $$(".lang-btn").forEach(function (b) { b.addEventListener("click", function () { applyLang(b.dataset.lang); }); });
  }
  function initReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }
  function initLightbox() {
    $("#lbClose").addEventListener("click", closeLb);
    $("#lbPrev").addEventListener("click", function () { stepLb(-1); });
    $("#lbNext").addEventListener("click", function () { stepLb(1); });
    $("#lightbox").addEventListener("click", function (e) { if (e.target.id === "lightbox") closeLb(); });
    document.addEventListener("keydown", function (e) {
      if ($("#lightbox").hidden) return;
      if (e.key === "Escape") closeLb(); else if (e.key === "ArrowLeft") stepLb(-1); else if (e.key === "ArrowRight") stepLb(1);
      else if (e.key === "Tab") { var f = $$("#lightbox button"); var i = f.indexOf(document.activeElement); if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); } }
    });
    var x0 = null;
    $("#lightbox").addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    $("#lightbox").addEventListener("touchend", function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) stepLb(dx < 0 ? 1 : -1); x0 = null; });
  }
  function initPrivacy() {
    var dlg = $("#privacyDlg");
    $("#privacyBtn").addEventListener("click", function () { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", ""); });
    $("#privacyClose").addEventListener("click", function () { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav(); initLightbox(); initPrivacy(); initForm();
    applyLang(initialLang());
    initReveal();
  });
})();
