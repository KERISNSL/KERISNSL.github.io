/* 화면을 그리는 코드입니다. 내용 수정은 data.js 에서 하세요.
   상단 메뉴와 하단은 모든 페이지에 여기서 똑같이 넣어 줍니다. */
(function () {
  document.documentElement.classList.add("js");
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const img = (src, alt, cls, label) =>
    src ? `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
        : `<div class="${cls} ph">${esc(label || "사진 자리")}</div>`;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const body = document.body, main = document.querySelector("main");
  const page = body.dataset.page || "home";

  /* ---------- 메뉴 (페이지를 추가하면 여기에 한 줄 추가) ---------- */
  const MENU = [
    ["research", "Research", "research.html"],
    ["people", "People", "professor.html", [
      ["professor", "Principal Investigator", "professor.html"],
      ["members", "Members", "members.html"],
      ["alumni", "Alumni", "alumni.html"],
    ]],
    ["publications", "Publications", "publications.html"],
    ["news", "News", "news.html"],
    ["gallery", "Gallery", "gallery.html"],
  ];
  const menuHtml = MENU.map(([k, label, href, sub]) => {
    const active = k === page || (sub && sub.some((s) => s[0] === page));
    const top = `<a href="${href}" class="${active ? "active" : ""}"${sub ? ` aria-expanded="${active}"` : ""}>${label}${sub ? `<i class="chev" aria-hidden="true"></i>` : ""}</a>`;
    if (!sub) return top;
    return `<div class="nav-item ${active ? "open" : ""}">${top}<div class="sub">${sub.map((s) => `<a href="${s[2]}" class="${s[0] === page ? "on" : ""}">${s[1]}</a>`).join("")}</div></div>`;
  }).join("");

  /* ---------- SNSL 심볼 ----------
     육각형 = 고체(Solid) 결정 격자, 가운데 노란 S = 황(Sulfur), 꼭짓점의 점 = 리튬 이온.
     예전 사선 3줄 로고로 되돌리려면 아래 return 줄을 이 한 줄로 바꾸면 됩니다:
       return `<span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>`;  */
  let logoCount = 0;
  function logoMark() {
    return `<span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>`;   // 지금은 예전 사선 로고 사용. 이 줄을 지우면 아래 육각형 심볼이 나옵니다.
    const id = "lg" + (++logoCount);
    return `<svg class="brand-symbol" viewBox="0 0 48 48" aria-hidden="true">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a6fe8"/><stop offset="1" stop-color="#2fd3ff"/></linearGradient></defs>
      <path d="M30.500 6.800 24 3 6 13.500v21l6.500 3.800M17.500 41.200 24 45l18-10.500v-21l-6.500-3.800" fill="none" stroke="url(#${id})" stroke-width="3.600" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="s" d="M31 17c-1.800-2.500-4.300-3.600-7.300-3.600-4.400 0-7.300 2.200-7.300 5.600 0 7.400 15.400 3.300 15.400 11 0 3.400-3.200 5.600-7.700 5.600-3.600 0-6.500-1.300-8.300-4" fill="none" stroke-width="4.200" stroke-linecap="round"/>
      <circle cx="33" cy="8.200" r="2.600" fill="#2fd3ff"/><circle cx="15" cy="39.800" r="2.600" fill="#2a6fe8"/>
    </svg>`;
  }

  /* ---------- 공통: 상단 ---------- */
  body.insertAdjacentHTML("afterbegin", `
    <header class="nav" id="nav">
      <a class="brand" href="index.html" aria-label="KERI SNSL 처음으로">
        ${logoMark("a")}
        <span class="brand-name">SNSL</span>
        <span class="brand-sub">Sulfur<br>and Solid<br>Laboratory</span>
      </a>
      <!-- KERI 로고: images/keri-logo.png 파일이 있으면 그림으로, 없으면 글자로 보입니다 -->
      <a class="keri-logo" href="https://www.keri.re.kr" target="_blank" rel="noopener" aria-label="한국전기연구원">
        <img src="images/keri-logo.png" alt="KERI 한국전기연구원" onerror="this.replaceWith(Object.assign(document.createElement('b'),{textContent:'KERI'}))">
      </a>
      <nav class="nav-links" id="navLinks">${menuHtml}<a href="contact.html" class="mobile-only ${page === "contact" ? "active" : ""}">Contact Us</a></nav>
      <div class="nav-right">
        <a class="btn-contact" href="contact.html">Contact Us</a>
        <button class="nav-toggle" id="navToggle" aria-label="메뉴 열기" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </header>`);

  /* ---------- 공통: 하위 페이지 제목 띠 ---------- */
  if (body.dataset.title) {
    /* WAVE_TITLE = true: 물결치는 점 배경에 제목을 가운데 정렬 (새 디자인)
       WAVE_TITLE = false: 예전 모눈 점 배경에 왼쪽 정렬 제목 */
    const WAVE_TITLE = true;
    main.insertAdjacentHTML("afterbegin", `
      <section class="subhero ${WAVE_TITLE ? "wave" : ""}">
        ${WAVE_TITLE ? `<canvas class="subhero-fx" id="subFx" aria-hidden="true"></canvas>
        <svg class="subhero-bolt" viewBox="0 0 240 240" aria-hidden="true">
          ${Array.from({ length: 70 }, () => { const a = Math.random() * 6.283, d = 30 + Math.random() * 90; return `<circle class="spark" cx="${(120 + Math.cos(a) * d * 1.150).toFixed(1)}" cy="${(120 + Math.sin(a) * d).toFixed(1)}" r="${(0.8 + Math.random() * 1.900).toFixed(1)}" style="animation-delay:${(-Math.random() * 4).toFixed(2)}s"/>`; }).join("")}
          <path class="bolt" d="M132 22 78 128h40l-14 90 62-112h-42z"/>
        </svg>
        <svg class="subhero-battery" viewBox="0 0 220 110" fill="none" stroke="#7fe9ff" stroke-width="2.500" stroke-linejoin="round" aria-hidden="true">
          <rect x="4" y="10" width="192" height="90" rx="12"/><rect x="196" y="38" width="14" height="34" rx="3"/>
          <rect class="cell" x="18" y="24" width="34" height="62" rx="4"/><rect class="cell" x="60" y="24" width="34" height="62" rx="4"/>
          <rect class="cell" x="102" y="24" width="34" height="62" rx="4"/><rect class="cell" x="144" y="24" width="34" height="62" rx="4"/>
        </svg>` : ""}
        <div class="wrap">
          <p class="crumb"><a href="index.html">Home</a> / ${esc(body.dataset.title)}</p>
          <div class="subhero-title"><h1>${esc(body.dataset.title)}</h1><span class="stripes" aria-hidden="true"><i></i><i></i><i></i></span></div>
          <p>${esc(body.dataset.sub || "")}</p>
        </div>
      </section>`);
    if (WAVE_TITLE) waveBackground($("subFx"), $("subFx").parentElement);
  }

  /* 하위 페이지 제목 뒤의 물결 배경: 원근감 있게 깔린 점들이 천천히 출렁입니다 */
  function waveBackground(cv, host) {
    const ctx = cv.getContext("2d");
    let W = 0, H = 0, raf = 0, running = false;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = host.clientWidth; H = host.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function frame(ms) {
      const t = ms / 1000;
      ctx.clearRect(0, 0, W, H);
      const ROWS = 26, COLS = Math.max(50, Math.round(W / 13));
      for (let r = 0; r < ROWS; r++) {
        const d = r / (ROWS - 1);                         // 0 = 멀리, 1 = 가까이
        const yBase = H * (0.34 + 0.72 * Math.pow(d, 1.5));
        const gap = (W / COLS) * (0.75 + d * 1.5);
        const amp = 6 + d * 26;
        const size = 0.7 + d * 1.9;
        for (let c = 0; c < COLS; c++) {
          const x = W / 2 + (c - COLS / 2) * gap;
          if (x < -10 || x > W + 10) continue;
          const w1 = Math.sin(c * 0.21 + t * 0.7 + r * 0.33), w2 = Math.cos(c * 0.09 - t * 0.45 + r * 0.2);
          const y = yBase + (w1 * 0.65 + w2 * 0.35) * amp;
          const glow = (w1 + 1) / 2;                      // 물결 꼭대기일수록 밝게
          ctx.fillStyle = `rgba(${Math.round(60 + 110 * glow)},${Math.round(190 + 50 * glow)},${Math.round(215 + 40 * glow)},${(0.1 + 0.62 * d) * (0.35 + 0.65 * glow)})`;
          ctx.fillRect(x, y, size, size);
        }
      }
      if (running) raf = requestAnimationFrame(frame);
    }
    const start = () => { if (!running && !reducedMotion) { running = true; raf = requestAnimationFrame(frame); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    resize();
    if (reducedMotion) frame(0); else start();
    addEventListener("resize", () => { resize(); if (reducedMotion) frame(0); });
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    if ("IntersectionObserver" in window) new IntersectionObserver((es) => (es[0].isIntersecting ? start() : stop())).observe(host);
  }

  /* ---------- 공통: 하단 ---------- */
  body.insertAdjacentHTML("beforeend", `
    <footer class="footer">
      <div class="footer-cta">
        <div class="wrap">
          <div><p class="eyebrow">Join Us</p><h2>차세대 이차전지를 함께 연구할 분을 기다립니다</h2></div>
          <a class="btn" href="contact.html">모집 안내 보기 &rarr;</a>
        </div>
      </div>
      <div class="wrap footer-grid">
        <div class="footer-brand">
          <a class="brand" href="index.html">
            ${logoMark("a")}
            <span class="brand-name">SNSL</span>
          </a>
          <p class="footer-name">Sulfur and Solid Laboratory</p>
          <p>한국전기연구원 이차전지연구단 차세대전지연구센터<br>전고체전지 · 리튬황전지 연구실</p>
          <div class="footer-orgs">
            <img src="images/keri-logo.png" alt="KERI 한국전기연구원" onerror="this.remove()">
            <img class="ust" src="images/ust-mark.png" alt="UST 과학기술연합대학원대학교" onerror="this.outerHTML='<span>UST</span>'">
          </div>
        </div>
        <div>
          <h3>Menu</h3>
          <ul class="footer-menu">
            ${MENU.map(([, label, href, sub]) => sub ? sub.map((s) => `<li><a href="${s[2]}">${s[1]}</a></li>`).join("") : `<li><a href="${href}">${label}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <dl class="footer-contact">
            <dt>Address</dt><dd>${esc(SITE.contact.address)}</dd>
            <dt>Tel</dt><dd>${esc(SITE.contact.phone)}</dd>
            <dt>E-mail</dt><dd>${esc(SITE.contact.email)}</dd>
          </dl>
          <ul class="footer-links">${SITE.contact.links.concat(SITE.pi.links.filter((l) => l.url && l.label === "Google Scholar")).map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} &nearr;</a></li>`).join("")}</ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="wrap">
          <p>Copyright © ${new Date().getFullYear()}. <b>KERI SNSL - Sulfur and Solid Lab</b>. All rights reserved.</p>
          <span class="stripes" aria-hidden="true"><i></i><i></i><i></i></span>
        </div>
      </div>
    </footer>
    <a class="to-top" id="toTop" href="#" aria-label="맨 위로">&uarr;</a>
    <div class="lightbox" id="lightbox" hidden>
      <button class="lightbox-close" aria-label="닫기">&times;</button>
      <figure><img id="lightboxImg" alt=""><figcaption id="lightboxCap"></figcaption></figure>
    </div>`);

  const nav = $("nav");
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 40 || $("navLinks").classList.contains("open"));
    $("toTop").classList.toggle("show", scrollY > 500);
  };
  addEventListener("scroll", onScroll, { passive: true });
  $("navToggle").onclick = () => {
    const open = $("navLinks").classList.toggle("open");
    $("navToggle").setAttribute("aria-expanded", open);
    onScroll();
  };
  /* 모바일 메뉴: People 처럼 하위 메뉴가 있는 항목은 누르면 아래로 펼쳐지고, 다시 누르면 접힙니다 (PC 에서는 마우스를 올리면 나옵니다) */
  const mobileNav = matchMedia("(max-width: 980px)");
  document.querySelectorAll(".nav-item > a").forEach((a) => a.addEventListener("click", (e) => {
    if (!mobileNav.matches) return;
    e.preventDefault();
    a.setAttribute("aria-expanded", a.parentElement.classList.toggle("open"));
  }));
  $("toTop").onclick = (e) => { e.preventDefault(); scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }); };
  onScroll();

  /* 사진 크게 보기 */
  const openLb = (g) => { if (!g.image) return; $("lightboxImg").src = g.image; $("lightboxCap").textContent = g.caption; $("lightbox").hidden = false; };
  const closeLb = () => ($("lightbox").hidden = true);
  $("lightbox").onclick = (e) => { if (e.target.tagName !== "IMG") closeLb(); };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

  /* 자동으로 넘어가는 슬라이드 (배너, 사진첩 공용) */
  function slider(slideEls, dotEls, hoverEl, ms) {
    let cur = 0, timer = null;
    const go = (n) => {
      cur = (n + slideEls.length) % slideEls.length;
      slideEls.forEach((el, i) => el.classList.toggle("active", i === cur));
      dotEls.forEach((el, i) => el.classList.toggle("active", i === cur));
    };
    const stop = () => clearInterval(timer);
    const play = () => { stop(); if (slideEls.length > 1 && !reduced) timer = setInterval(() => go(cur + 1), ms); };
    dotEls.forEach((d, i) => (d.onclick = () => { go(i); play(); }));
    hoverEl.addEventListener("mouseenter", stop);
    hoverEl.addEventListener("mouseleave", play);
    go(0); play();
    return { next: () => { go(cur + 1); play(); }, prev: () => { go(cur - 1); play(); } };
  }
  const dots = (n) => Array.from({ length: n }, (_, i) => `<button aria-label="${i + 1}번"></button>`).join("");

  const ICONS = {
    solid: `<path d="M27 8 6 19l21 11 21-11z"/><path d="m6 28 21 11 21-11"/><path d="m6 37 21 11 21-11"/>`,
    sulfur: `<path d="M27 5 46 16v22L27 49 8 38V16z"/><path d="M33 21c-1.5-2.4-4-3.2-6.5-3.2-3.5 0-6 1.8-6 4.6 0 6.2 13 2.800 13 9.400 0 2.800-2.700 4.600-6.400 4.600-3 0-5.600-1.200-7-3.800"/>`,
    hybrid: `<path d="M27 4 38 10v12L27 28 16 22V10z"/><path d="M30.500 13c-1-1.300-2.200-1.800-3.600-1.800-2 0-3.300 1-3.300 2.500 0 3.400 7.200 1.600 7.200 5.200 0 1.500-1.500 2.500-3.600 2.500-1.600 0-3-.600-3.900-2"/><path d="m10 30-4 3 21 10 21-10-4-3"/><path d="m6 41 21 10 21-10"/>`,
    flask: `<path d="M21 6h12M23 6v15L10 43a4 4 0 0 0 3.500 6h27a4 4 0 0 0 3.500-6L31 21V6"/><path d="M16 35h22"/><circle cx="24" cy="41" r="1.5"/><circle cx="31" cy="43" r="1.5"/>`,
    chart: `<path d="M7 6v42h42"/><path d="m13 38 9-12 8 7 8-15 8 6"/><circle cx="22" cy="26" r="2"/><circle cx="30" cy="33" r="2"/><circle cx="38" cy="18" r="2"/>`,
  };
  const icon = (name) => `<svg viewBox="0 0 54 54" aria-hidden="true">${ICONS[name] || ICONS.flask}</svg>`;
  const num = (i) => String(i + 1).padStart(2, "0");

  /* ================= 첫 페이지 ================= */
  if ($("heroSlides")) {
    const BATTERY = `<svg class="hero-battery" viewBox="0 0 120 220" fill="none" stroke="#7fe9ff" stroke-width="2.5" stroke-linejoin="round" aria-hidden="true">
      <rect x="40" y="4" width="40" height="14" rx="3"/><rect x="10" y="18" width="100" height="196" rx="12"/>
      <path d="M68 62 38 122h22l-8 44 32-62H62z" fill="rgba(127,233,255,.25)"/></svg>`;
    const boldCaps = (t) => /[가-힣]/.test(t) ? `<b>${esc(t)}</b>` : esc(t).replace(/[A-Z]/g, "<b>$&</b>");   // 영문 제목은 대문자만 굵게, 한글 제목은 전체 굵게
    $("heroSlides").innerHTML = SITE.hero.map((s, i) => `
      <div class="hero-slide ${s.image ? "" : "empty"}">
        <div class="hero-bg" ${s.image ? `style="background-image:url('${esc(s.image)}')"` : ""}></div>
        ${s.image ? "" : BATTERY}
        <div class="hero-body">
          <span class="hero-tag">${esc(s.tag)}</span>
          <div class="hero-title"><h1>${boldCaps(s.title)}</h1><span class="stripes" aria-hidden="true"><i></i><i></i><i></i></span></div>
          <p>${esc(s.text)}</p>
          ${s.link ? `<a class="btn" href="${esc(s.link)}">${esc(s.linkText || "자세히")}</a>` : ""}
        </div>
      </div>`).join("");
    $("heroDots").innerHTML = dots(SITE.hero.length);
    const hero = slider([...$("heroSlides").children], [...$("heroDots").children], $("hero"), 6000);
    $("heroPrev").onclick = hero.prev; $("heroNext").onclick = hero.next;
    heroAnimation($("heroFx"), $("hero"));
  }

  /* ---------- 배너 애니메이션 ----------
     천천히 떠다니는 점들이 가까워지면 선으로 이어지고(결정 격자),
     그 사이를 밝은 입자가 왼쪽에서 오른쪽으로 흘러갑니다(리튬 이온, 노란 것은 황).
     사진이 들어간 슬라이드에서는 사진에 가려 보이지 않습니다. */
  function heroAnimation(cv, host) {
    if (!cv || !cv.getContext) return;
    const ctx = cv.getContext("2d");
    let W = 0, H = 0, nodes = [], ions = [], raf = 0, running = false;
    const mouse = { x: -9999, y: -9999 };
    const rnd = (a, b) => a + Math.random() * (b - a);
    const newIon = (anywhere) => ({
      x: anywhere ? rnd(0, W) : -20, y: rnd(H * 0.08, H * 0.92), v: rnd(0.5, 1.5), r: rnd(1.4, 2.6),
      sulfur: Math.random() < 0.22, phase: rnd(0, 6.28), amp: rnd(4, 14),
    });
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = host.clientWidth; H = host.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(26, Math.min(90, Math.round(W * H / 15000)));
      nodes = Array.from({ length: n }, () => ({ x: rnd(0, W), y: rnd(0, H), vx: rnd(-0.22, 0.22), vy: rnd(-0.22, 0.22), r: rnd(1, 2.2) }));
      ions = Array.from({ length: Math.round(n / 3.2) }, () => newIon(true));
    }
    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      const link = Math.min(170, Math.max(110, W / 8));
      for (const p of nodes) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = W + 20; else if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; else if (p.y > H + 20) p.y = -20;
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
          if (d < link) { ctx.strokeStyle = `rgba(70,200,255,${0.26 * (1 - d / link)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);   // 마우스 가까이의 점은 마우스와도 이어짐
        if (dm < link * 1.25) { ctx.strokeStyle = `rgba(160,235,255,${0.5 * (1 - dm / (link * 1.25))})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
        ctx.fillStyle = "rgba(120,220,255,.75)"; ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fill();
      }
      for (let i = 0; i < ions.length; i++) {
        const q = ions[i];
        q.x += q.v;
        const y = q.y + Math.sin(t / 900 + q.phase) * q.amp;
        if (q.x > W + 30) { ions[i] = newIon(false); continue; }
        const c = q.sulfur ? "255,210,63" : "150,235,255";
        const tail = ctx.createLinearGradient(q.x - 46 * q.v, y, q.x, y);
        tail.addColorStop(0, `rgba(${c},0)`); tail.addColorStop(1, `rgba(${c},.55)`);
        ctx.strokeStyle = tail; ctx.lineWidth = q.r; ctx.beginPath(); ctx.moveTo(q.x - 46 * q.v, y); ctx.lineTo(q.x, y); ctx.stroke();
        ctx.shadowColor = `rgba(${c},.9)`; ctx.shadowBlur = 12;
        ctx.fillStyle = `rgba(${c},1)`; ctx.beginPath(); ctx.arc(q.x, y, q.r, 0, 6.283); ctx.fill();
        ctx.shadowBlur = 0;
      }
      if (running) raf = requestAnimationFrame(frame);
    }
    const start = () => { if (!running && !reduced) { running = true; raf = requestAnimationFrame(frame); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    resize();
    if (reduced) frame(0); else start();                       // 움직임 줄이기 설정이면 멈춘 그림 한 장만
    addEventListener("resize", () => { resize(); if (reduced) frame(0); });
    host.addEventListener("mousemove", (e) => { const r = host.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    host.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    if ("IntersectionObserver" in window) new IntersectionObserver((es) => (es[0].isIntersecting ? start() : stop())).observe(host);   // 화면 밖이면 쉬기
  }

  if ($("aboutIntro")) $("aboutIntro").textContent = SITE.lab.intro;

  if ($("researchGrid")) {
    $("researchGrid").innerHTML = SITE.research.map((r, i) => `
      <a class="research-card reveal" href="research.html#r${i + 1}" style="transition-delay:${i * 90}ms">
        <div class="research-icon">${icon(r.icon)}</div>
        <span class="pill">RESEARCH ${num(i)}</span>
        <h3>${esc(r.title)}</h3>
        <p class="en">${esc(r.en)}</p>
      </a>`).join("");
  }
  if ($("stats")) {
    $("stats").innerHTML = SITE.stats.map((s) => `<div class="stat"><b>${esc(s.number)}</b><span>${esc(s.label)}</span></div>`).join("");
    if (SITE.statsNote) $("stats").insertAdjacentHTML("afterend", `<p class="stats-note">${esc(SITE.statsNote)}</p>`);
  }

  /* 소식 목록: 첫 페이지는 3개만, 소식 페이지는 전부 (data-limit 로 조절) */
  if ($("newsList")) {
    const limit = Number($("newsList").dataset.limit) || SITE.news.length;
    $("newsList").innerHTML = SITE.news.slice(0, limit).map((n) => {
      const [y, m, d] = String(n.date).split(".");
      return `<article class="news-item">
        <div class="news-date"><b>${esc(d || "")}</b><span>${esc(y || "")}.${esc(m || "")}</span></div>
        <div><h3>${n.link ? `<a href="${esc(n.link)}" target="_blank" rel="noopener">${esc(n.title)}</a>` : esc(n.title)}</h3><p>${esc(n.text)}</p></div>
        ${img(n.image, n.title, "news-thumb", "사진")}
      </article>`;
    }).join("");
  }

  /* 첫 페이지의 사진 슬라이드 */
  if ($("gallerySlides")) {
    const items = SITE.gallery.slice(0, 5);
    $("gallerySlides").innerHTML = items.map((g, i) => `
      <figure class="gallery-slide" data-i="${i}">${img(g.image, g.caption, "", "사진 자리")}
        <figcaption><b>${esc(g.caption)}</b><span>${esc(g.date || "")}</span></figcaption></figure>`).join("");
    $("galleryDots").innerHTML = dots(items.length);
    slider([...$("gallerySlides").children], [...$("galleryDots").children], $("gallery"), 4500);
    $("gallerySlides").onclick = (e) => { const f = e.target.closest(".gallery-slide"); if (f) openLb(items[f.dataset.i]); };
  }

  /* 첫 페이지의 대표 논문 카드 */
  const pubs = (typeof PUBLICATIONS !== "undefined" ? PUBLICATIONS : []).concat(SITE.publications);   // 논문(publications.js) + 특허·학회(data.js)
  if ($("hlTrack")) {
    const featured = pubs.filter((p) => p.type === "paper")
      .sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0) || b.year - a.year).slice(0, 8);
    $("hlTrack").innerHTML = featured.map((p) => `
      <a class="hl-card" ${p.link ? `href="${esc(p.link)}" target="_blank" rel="noopener"` : `href="publications.html"`}>
        <span class="year">${esc(p.year)}</span>
        <h3>${esc(p.title)}</h3>
        <p><em>${esc(p.venue)}</em>, ${esc(p.authors)}</p>
        <span class="hl-view"></span><span class="hl-view-text">VIEW</span>
      </a>`).join("");
    const step = () => ($("hlTrack").firstElementChild ? $("hlTrack").firstElementChild.offsetWidth + 26 : 300);
    $("hlPrev").onclick = () => $("hlTrack").scrollBy({ left: -step(), behavior: "smooth" });
    $("hlNext").onclick = () => $("hlTrack").scrollBy({ left: step(), behavior: "smooth" });
  }

  /* ================= Research 페이지 ================= */
  if ($("researchDetail")) {
    $("researchDetail").innerHTML = SITE.research.map((r, i) => `
      <article class="r-row reveal" id="r${i + 1}">
        ${img(r.image, r.title, "r-img", "연구 대표 그림 자리")}
        <div class="r-text">
          <div class="r-head"><div class="research-icon small">${icon(r.icon)}</div><span class="pill">RESEARCH ${num(i)}</span></div>
          <h2>${esc(r.title)}</h2>
          <p class="en">${esc(r.en)}</p>
          <p>${esc(r.text)}</p>
          ${r.topics && r.topics.length ? `<ul class="topics">${r.topics.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        </div>
      </article>`).join("");
  }

  /* ================= Members 페이지 ================= */
  /* ---- Professor ---- */
  if ($("piCard")) {
    const pi = SITE.pi;
    const ext = (l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">`;
    $("piCard").innerHTML = `
      ${img(pi.photo, pi.name, "photo", "사진 자리")}
      <div>
        <span class="pill">Principal Investigator</span>
        <h3>${esc(pi.name)} 교수</h3>
        <p class="en">${esc(pi.nameEn)}</p>
        <p class="role">${esc(pi.role)}${pi.role2 ? `<br>${esc(pi.role2)}` : ""}</p>
        <dl class="pi-info">
          <dt>연구 분야</dt><dd>${pi.interests.map(esc).join("<br>")}</dd>
          <dt>학력 · 경력</dt><dd>${pi.bio.map(esc).join("<br>")}</dd>
          ${pi.activities && pi.activities.length ? `<dt>대외 활동</dt><dd>${pi.activities.map(esc).join("<br>")}</dd>` : ""}
          <dt>연락처</dt><dd>${esc(pi.email)} · ${esc(pi.phone)}</dd>
        </dl>
        <div class="pi-links">${pi.links.filter((l) => l.url).map((l) => `${ext(l)}${esc(l.label)} &nearr;</a>`).join("")}</div>
      </div>`;
    $("piAchievements").innerHTML = pi.achievements.map((a, i) => `
      <div class="ach"><span class="ach-no">${num(i)}</span><h3>${esc(a.title)}</h3><p>${esc(a.note)}</p></div>`).join("");
    $("piAwards").innerHTML = pi.awards.map((a) => `
      <li><span class="yr">${esc(a.year)}</span><div><b>${esc(a.title)}</b><p>${esc(a.text)}</p></div></li>`).join("");
    $("piProjects").innerHTML = pi.projects.map((p) => `
      <li><div><b>${esc(p.title)}</b><p>${esc(p.org)}</p></div><span class="role-tag ${p.role === "연구책임자" ? "lead" : ""}">${esc(p.role)}</span></li>`).join("");
    const linkList = (arr) => arr.map((m) => `<li>${ext(m)}<span class="src">${esc(m.source)}</span><b>${esc(m.title)}</b><i>&nearr;</i></a></li>`).join("");
    $("piMedia").innerHTML = linkList(pi.media);
    $("piPress").innerHTML = linkList(pi.press);
  }

  /* ---- Members (현재 구성원) ---- */
  if ($("memberGroups")) {
    $("memberGroups").innerHTML = SITE.members.filter((g) => g.people.length).map((g) => `
      <h3 class="group-title">${esc(g.group)}</h3>
      <div class="member-list">${g.people.map((p) => {
        const list = (title, arr) => arr && arr.length ? `<div><h4>${title}</h4><ul>${arr.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>` : "";
        const more = list("학력 · 경력", p.edu) + list("수상", p.awards);
        return `
        <article class="member">
          ${img(p.photo, p.name, "photo", "사진")}
          <div class="member-body">
            <div class="member-head"><b>${esc(p.name)}</b><span>${esc(p.role)}</span>${p.email ? `<i>${esc(p.email)}</i>` : ""}</div>
            ${p.skills && p.skills.length ? `<ul class="skills">${p.skills.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
            ${p.metrics ? `<p class="metrics">${esc(p.metrics)}</p>` : ""}
            ${more ? `<details><summary>학력 · 수상 보기</summary><div class="member-more">${more}</div></details>` : ""}
          </div>
        </article>`; }).join("")}
      </div>`).join("");
  }

  /* ---- Alumni (졸업생) ---- */
  if ($("alumniList")) {
    const row = (k, v, cls) => v ? `<dt>${k}</dt><dd class="${cls || ""}">${esc(v)}</dd>` : "";   // 빈 항목은 건너뜀
    $("alumniList").innerHTML = (SITE.alumniNote ? `<p class="alum-note">${esc(SITE.alumniNote)}</p>` : "") + SITE.alumni.map((a) => `
      <article class="alum">
        ${img(a.photo, a.name, "photo", "사진")}
        <div class="alum-main"><b>${esc(a.name)}</b>${a.degree ? `<span>${esc(a.degree)}</span>` : ""}${a.period ? `<span class="period">${esc(a.period)}</span>` : ""}</div>
        <dl>${a.company ? `<dt>현 소속</dt><dd class="strong">${a.logo ? `<img class="alum-ci" src="${esc(a.logo)}" alt="${esc(a.company)}" title="${esc(a.company)}">` : `<span>${esc(a.company)}</span>`}</dd>` : ""}${row("연구 분야", a.topic)}${row("현재 업무", a.job)}</dl>
      </article>`).join("");
  }

  /* ================= Publications 페이지 ================= */
  if ($("pubList")) {
    const TYPES = { all: "전체", paper: "논문", patent: "특허", conference: "학회발표" };
    let pubType = "all";
    $("pubTabs").innerHTML = Object.keys(TYPES).map((k) => {
      const n = k === "all" ? pubs.length : pubs.filter((p) => p.type === k).length;
      return `<button role="tab" data-type="${k}" class="${k === "all" ? "active" : ""}">${TYPES[k]}<em>${n}</em></button>`;
    }).join("");
    const years = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a);
    $("pubYear").innerHTML = `<option value="">전체 연도</option>` + years.map((y) => `<option>${y}</option>`).join("");
    const renderPubs = () => {
      const year = $("pubYear").value, q = $("pubSearch").value.trim().toLowerCase();
      const list = pubs
        .filter((p) => (pubType === "all" || p.type === pubType) && (!year || String(p.year) === year) &&
          (!q || `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(q)))
        .sort((a, b) => b.year - a.year);
      if (!list.length) { $("pubList").innerHTML = `<p class="pub-empty">해당하는 실적이 없습니다.</p>`; return; }
      let html = "", lastYear = null;
      list.forEach((p) => {
        if (p.year !== lastYear) { html += `<h3 class="pub-year">${p.year}</h3>`; lastYear = p.year; }
        const title = p.link
          ? `<a class="pub-title" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.title)}</a>`
          : `<span class="pub-title">${esc(p.title)}</span>`;
        html += `<div class="pub ${p.highlight ? "highlight" : ""}">
          <span class="badge ${esc(p.type)}">${TYPES[p.type] || ""}</span>
          <div>${title}${p.authors ? `<div class="pub-meta">${esc(p.authors)}</div>` : ""}<div class="pub-meta venue">${esc(p.venue)}</div></div>
        </div>`;
      });
      $("pubList").innerHTML = html;
    };
    $("pubTabs").onclick = (e) => {
      const b = e.target.closest("button"); if (!b) return;
      pubType = b.dataset.type;
      [...$("pubTabs").children].forEach((x) => x.classList.toggle("active", x === b));
      renderPubs();
    };
    $("pubYear").onchange = renderPubs;
    $("pubSearch").oninput = renderPubs;
    renderPubs();
  }

  /* ================= Gallery 페이지 ================= */
  if ($("galleryGrid")) {
    $("galleryGrid").innerHTML = SITE.gallery.map((g, i) => `
      <figure class="gallery-item" data-i="${i}">${img(g.image, g.caption, "", "사진 자리")}<figcaption>${esc(g.caption)}</figcaption></figure>`).join("");
    $("galleryGrid").onclick = (e) => { const f = e.target.closest(".gallery-item"); if (f) openLb(SITE.gallery[f.dataset.i]); };
  }

  /* ================= Contact 페이지 ================= */
  if ($("recruit")) {
    const r = SITE.recruit;
    const mail = SITE.contact.email.includes("@") ? "mailto:" + SITE.contact.email : "#contactCards";
    $("recruit").innerHTML = `
      <header class="head light"><div><p class="eyebrow">Join Us</p><h2>We are hiring</h2></div></header>
      <p class="recruit-lead">${esc(r.headline)}</p>
      <p class="recruit-course"><span>모집과정</span>${esc(r.course)}</p>
      <div class="recruit-grid">${r.sections.map((s, i) => `
        <div class="recruit-card"><span class="ach-no">${num(i)}</span><h3>${esc(s.title)}</h3>
          <ul>${s.items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>`).join("")}
      </div>
      <a class="btn" href="${esc(mail)}">지원 · 문의하기</a>`;
  }
  if ($("contactCards")) {
    const c = SITE.contact;
    $("contactCards").innerHTML = [["Address", c.address], ["E-mail", c.email], ["Phone", c.phone]]
      .map(([k, v]) => `<div class="contact-card"><h3>${k}</h3><p>${esc(v)}</p></div>`).join("");
  }
  if ($("mapBox")) {
    const c = SITE.contact;
    $("mapBox").innerHTML =
      (c.mapEmbed ? `<iframe class="map" src="${esc(c.mapEmbed)}" title="오시는 길 지도" loading="lazy"></iframe>` : `<div class="map ph">지도 자리</div>`) +
      (c.naverMap ? `<p class="more"><a class="btn-line" href="${esc(c.naverMap)}" target="_blank" rel="noopener">네이버 지도에서 보기 &nearr;</a></p>` : "");
  }
  /* 지원·문의 버튼: 메일 프로그램이 없는 컴퓨터에서도 쓸 수 있게, 누르면 이메일 주소를 복사하고 알려 줍니다 */
  const mailBtn = document.querySelector("#recruit .btn");
  if (mailBtn && SITE.contact.email.includes("@")) {
    mailBtn.insertAdjacentHTML("afterend", `<p class="mail-note" id="mailNote">${esc(SITE.contact.email)}</p>`);
    mailBtn.addEventListener("click", () => {
      const mail = SITE.contact.email;
      const say = (copied) => ($("mailNote").innerHTML = `<b>${esc(mail)}</b><br>` +
        (copied ? "이메일 주소를 복사했습니다. 메일 창이 열리지 않으면 붙여넣어 보내 주세요." : "메일 창이 열리지 않으면 위 주소로 보내 주세요."));
      const oldWay = () => {                       // 예전 방식 복사 (새 방식이 막혔을 때)
        const ta = document.createElement("textarea");
        ta.value = mail; ta.style.cssText = "position:fixed;opacity:0";
        document.body.appendChild(ta); ta.select();
        let ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
        ta.remove(); say(ok);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(mail).then(() => say(true), oldWay);
      else oldWay();
    });
  }

  /* ---------- 스크롤하면 나타나는 효과 ---------- */
  const targets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.1 });
    targets.forEach((t) => io.observe(t));
  } else targets.forEach((t) => t.classList.add("in"));

  /* 다른 페이지에서 #r2 같은 주소로 들어왔을 때, 내용이 그려진 뒤 그 위치로 이동 */
  if (location.hash.length > 1) {
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView();
  }
})();
