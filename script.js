/* ============================================================
   BREADFORPEOPLE — SCRIPT.JS
   Three.js interactive 3D bread + site interactivity
   ============================================================ */

'use strict';

// ============================================================
// DATA: Bread catalogue
// ============================================================
const BREAD_DATA = {
  baguette: {
    name: 'Багет',
    origin: 'Франция · Классический',
    desc: 'Символ французской кухни и повседневной жизни Парижа. Тонкий, хрустящий снаружи и воздушный внутри — багет пекут дважды в день по всей Франции.',
    image: 'images/baguette.png',
    imageSvg: null,
    difficulty: 'Лёгкий',
    diffClass: 'badge--easy',
    chars: [
      { label: 'Страна', value: '🇫🇷 Франция' },
      { label: 'Время', value: '⏱ 2.5 ч' },
      { label: 'Сложность', value: '★ Лёгкий' },
      { label: 'Калории', value: '250 ккал / 100г' },
    ],
    ingredients: ['Мука пшеничная', 'Вода — 65%', 'Соль — 2%', 'Дрожжи сухие', 'Солод (опц.)'],
    steps: [
      'Замес теста — смешайте муку, воду, дрожжи и соль. Месите 10 мин.',
      'Брожение — оставьте тесто на 1 ч при комнатной температуре.',
      'Формовка багета — разделите и раскатайте в длинные батоны.',
      'Расстойка — 30 мин. под плёнкой.',
      'Выпечка при 230°C — 20-22 мин. с паром первые 5 мин.',
    ],
  },

  borodino: {
    name: 'Бородинский',
    origin: 'Россия · Традиционный',
    desc: 'Легендарный советский хлеб с неповторимым пряным ароматом тмина и кориандра. Плотный, чуть кисловатый — идеален с маслом, сёмгой или бородинским же маслом.',
    image: 'images/borodino.png',
    imageSvg: null,
    difficulty: 'Средний',
    diffClass: 'badge--medium',
    chars: [
      { label: 'Страна', value: '🇷🇺 Россия' },
      { label: 'Время', value: '⏱ 5 ч' },
      { label: 'Сложность', value: '★★ Средний' },
      { label: 'Калории', value: '207 ккал / 100г' },
    ],
    ingredients: ['Мука ржаная', 'Мука пшеничная', 'Закваска', 'Патока', 'Тмин', 'Кориандр', 'Соль'],
    steps: [
      'Подготовка заварки — заварите часть муки кипятком с кориандром.',
      'Замес теста — смешайте все ингредиенты с закваской.',
      'Брожение — 3-4 часа при 28°C.',
      'Формовка — уложите в смазанную форму.',
      'Расстойка — 1 ч. Смажьте патокой, посыпьте кориандром.',
      'Выпечка при 210°C — 50-55 мин.',
    ],
  },

  sourdough: {
    name: 'Закваска',
    origin: 'Международный · Артизанский',
    desc: 'Хлеб на натуральной закваске — вершина домашнего хлебопечения. Долгое холодное брожение (12–18 ч) формирует сложный вкус: лёгкая кислинка, хрустящая корка и воздушный мякиш с крупными порами.',
    image: 'images/sourdough.png',
    imageSvg: null,
    difficulty: 'Сложный',
    diffClass: 'badge--hard',
    chars: [
      { label: 'Страна', value: '🌍 Весь мир' },
      { label: 'Время', value: '⏱ 24–48 ч' },
      { label: 'Сложность', value: '★★★ Сложный' },
      { label: 'Калории', value: '233 ккал / 100г' },
    ],
    ingredients: ['Мука пшеничная в/с', 'Вода — 75%', 'Соль — 2%', 'Закваска (левен) — 20%'],
    steps: [
      'Левен — освежите закваску за 8–12 ч до замеса.',
      'Аутолиз — смешайте муку и воду, оставьте на 30–60 мин.',
      'Замес — добавьте закваску и соль, сложите тесто 4–6 раз за 3 ч.',
      'Предформовка — округлите заготовки.',
      'Формовка и холодная расстойка — 12–18 ч в холодильнике.',
      'Выпечка при 260°C — 20 мин. под крышкой, затем 25 мин. открыто.',
    ],
  },

  ciabatta: {
    name: 'Чиабатта',
    origin: 'Италия · Классический',
    desc: 'Итальянская лепёшка с пористым мякишем и хрустящей корочкой. Высокое содержание воды (около 80%) создаёт характерные крупные поры. Идеальна для брускетт, сэндвичей и соусов.',
    image: 'images/ciabatta.png',
    imageSvg: null,
    difficulty: 'Средний',
    diffClass: 'badge--medium',
    chars: [
      { label: 'Страна', value: '🇮🇹 Италия' },
      { label: 'Время', value: '⏱ 18 ч' },
      { label: 'Сложность', value: '★★ Средний' },
      { label: 'Калории', value: '240 ккал / 100г' },
    ],
    ingredients: ['Мука 00', 'Вода — 80%', 'Оливковое масло', 'Соль — 2%', 'Дрожжи', 'Бига (опара)'],
    steps: [
      'Бига — замесите опару из муки, воды и дрожжей, оставьте на 12–16 ч.',
      'Замес — добавьте оставшуюся воду, масло, соль.',
      'Складывания — каждые 30 мин, 4 раза.',
      'Брожение — 1 ч при комнатной температуре.',
      'Формовка — аккуратно разделите тесто, не выпуская газ.',
      'Выпечка при 250°C — 22–25 мин. с паром.',
    ],
  },

  rye: {
    name: 'Ржаной',
    origin: 'Россия · Традиционный',
    desc: 'Плотный, питательный хлеб из 100% ржаной муки. Тёмный цвет, насыщенный землистый вкус. Богат клетчаткой и медленными углеводами — один из самых полезных видов хлеба.',
    image: 'images/rye.png',
    imageSvg: null,
    difficulty: 'Лёгкий',
    diffClass: 'badge--easy',
    chars: [
      { label: 'Страна', value: '🇷🇺 Россия' },
      { label: 'Время', value: '⏱ 4 ч' },
      { label: 'Сложность', value: '★ Лёгкий' },
      { label: 'Калории', value: '200 ккал / 100г' },
    ],
    ingredients: ['Мука ржаная', 'Вода — 70%', 'Соль — 2%', 'Ржаная закваска', 'Тмин (опц.)', 'Мёд — 1 ст.л.'],
    steps: [
      'Активируйте закваску за 6–8 ч.',
      'Замес — смешайте муку, воду, закваску, соль и мёд до однородности.',
      'Брожение — 2 ч при 26°C.',
      'Формовка — в смазанную форму, разровняйте мокрой рукой.',
      'Расстойка — 1 ч. Посыпьте тмином.',
      'Выпечка при 220°C — 45–50 мин.',
    ],
  },

  brioche: {
    name: 'Бриошь',
    origin: 'Франция · Сдобный',
    desc: 'Нежная сдобная французская выпечка с высоким содержанием масла и яиц. Мягкая, чуть сладкая, с золотистой корочкой. Тает во рту — идеальна к завтраку, для французских тостов или как основа для бургеров.',
    image: 'images/brioche.png',
    imageSvg: null,
    difficulty: 'Средний',
    diffClass: 'badge--medium',
    chars: [
      { label: 'Страна', value: '🇫🇷 Франция' },
      { label: 'Время', value: '⏱ 6 ч' },
      { label: 'Сложность', value: '★★ Средний' },
      { label: 'Калории', value: '350 ккал / 100г' },
    ],
    ingredients: ['Мука пшеничная', 'Масло — 50%', 'Яйца — 3 шт', 'Молоко', 'Сахар — 6%', 'Дрожжи', 'Соль'],
    steps: [
      'Замес — смешайте муку, дрожжи, сахар, яйца и молоко.',
      'Добавление масла — вмешайте холодное масло кусочками, 15 мин.',
      'Холодное брожение — ночь в холодильнике.',
      'Формовка — разделите на шарики, уложите в форму.',
      'Расстойка — 2–3 ч при комнатной температуре.',
      'Смажьте яичным желтком. Выпечка при 180°C — 30–35 мин.',
    ],
  },

  pita: {
    name: 'Пита',
    origin: 'Ближний Восток · Традиционный',
    desc: 'Плоский хлеб-лепёшка с характерным «кармашком» — воздушным пузырём внутри. Универсальная основа для шаурмы, фалафеля, хумуса и любых начинок. Готовится очень быстро.',
    image: null,
    imageSvg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <ellipse cx="100" cy="90" rx="85" ry="55" fill="#F5E6C8" stroke="#E8C878" stroke-width="3"/>
      <ellipse cx="100" cy="85" rx="82" ry="52" fill="#F9EDD5"/>
      <ellipse cx="100" cy="80" rx="60" ry="32" fill="#F5E6C8" opacity="0.5"/>
    </svg>`,
    difficulty: 'Лёгкий',
    diffClass: 'badge--easy',
    chars: [
      { label: 'Страна', value: '🌍 Ближний Восток' },
      { label: 'Время', value: '⏱ 1.5 ч' },
      { label: 'Сложность', value: '★ Лёгкий' },
      { label: 'Калории', value: '270 ккал / 100г' },
    ],
    ingredients: ['Мука пшеничная', 'Вода — 60%', 'Дрожжи', 'Соль — 1.5%', 'Оливковое масло', 'Сахар — 1%'],
    steps: [
      'Замес — смешайте все ингредиенты, месите 8 мин. до гладкости.',
      'Брожение — 1 ч при комнатной температуре.',
      'Разделите тесто на 6–8 шариков.',
      'Раскатайте каждый в тонкий круг (3–4 мм).',
      'Выпекайте на раскалённом противне при 250°C — 4–5 мин.',
      'Пита надуется и создаст кармашек. Заверните в полотенце.',
    ],
  },

  focaccia: {
    name: 'Фокачча',
    origin: 'Италия · Региональный',
    desc: 'Итальянская пышная лепёшка, пропитанная оливковым маслом. Мягкая внутри, золотистая снаружи. Ямочки на поверхности задерживают масло и аромат розмарина. Популярна по всей Италии.',
    image: null,
    imageSvg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <rect x="15" y="35" width="170" height="100" rx="20" fill="#E8C87A" stroke="#D4A83C" stroke-width="3"/>
      <rect x="15" y="35" width="170" height="90" rx="20" fill="#F2D680"/>
      <circle cx="50" cy="68" r="7" fill="#D4A83C"/>
      <circle cx="100" cy="55" r="7" fill="#D4A83C"/>
      <circle cx="150" cy="68" r="7" fill="#D4A83C"/>
      <circle cx="68" cy="95" r="7" fill="#D4A83C"/>
      <circle cx="130" cy="90" r="7" fill="#D4A83C"/>
      <line x1="44" y1="52" x2="58" y2="44" stroke="#6B8C42" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="142" y1="52" x2="158" y2="44" stroke="#6B8C42" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    difficulty: 'Лёгкий',
    diffClass: 'badge--easy',
    chars: [
      { label: 'Страна', value: '🇮🇹 Италия' },
      { label: 'Время', value: '⏱ 3 ч' },
      { label: 'Сложность', value: '★ Лёгкий' },
      { label: 'Калории', value: '295 ккал / 100г' },
    ],
    ingredients: ['Мука пшеничная', 'Вода — 70%', 'Оливковое масло — щедро', 'Соль — 2%', 'Дрожжи', 'Розмарин', 'Морская соль'],
    steps: [
      'Замес — смешайте муку, воду, дрожжи, масло, соль.',
      'Брожение — 1–1.5 ч до удвоения объёма.',
      'Переложите в форму, обильно смажьте оливковым маслом.',
      'Расстойка — 30 мин. в форме.',
      'Сделайте ямочки пальцами, посыпьте розмарином и солью.',
      'Выпечка при 220°C — 25–30 мин. до золотистой корочки.',
    ],
  },
};

// ============================================================
// THREE.JS — Cartoon 3D Bread
// ============================================================
(function initThreeJS() {
  const canvas = document.getElementById('bread-canvas');
  const container = canvas.parentElement;

  const W = container.clientWidth;
  const H = container.clientHeight;

  // Scene
  const scene    = new THREE.Scene();
  scene.background = null; // transparent, CSS handles bg

  // Camera
  const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
  camera.position.set(0, 0.8, 4.5);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xFFF5E0, 0.7);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xFFE0A0, 1.2);
  sunLight.position.set(3, 5, 4);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(1024, 1024);
  scene.add(sunLight);

  const fillLight = new THREE.DirectionalLight(0xFFD080, 0.4);
  fillLight.position.set(-2, 2, -2);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xFFFFFF, 0.2);
  rimLight.position.set(0, -3, -3);
  scene.add(rimLight);

  // ── Materials ──
  const crustMat = new THREE.MeshToonMaterial({
    color: 0xC8822A,
    gradientMap: createGradientTex([0.3, 0.6, 1.0], [0x8A4A10, 0xC8822A, 0xF0B050]),
  });
  const crustTopMat = new THREE.MeshToonMaterial({
    color: 0xD4922A,
    gradientMap: createGradientTex([0.4, 1.0], [0xA06020, 0xE8C060]),
  });
  const cuttingMat = new THREE.MeshToonMaterial({ color: 0xEDD58A });
  const scoreMat   = new THREE.MeshToonMaterial({ color: 0x8A4A10 });
  const shadowMat  = new THREE.MeshBasicMaterial({ color: 0xC07020, transparent: true, opacity: 0.18 });

  function createGradientTex(stops, colors) {
    const size = 256;
    const data = new Uint8Array(size * 4);
    for (let i = 0; i < size; i++) {
      const t = i / (size - 1);
      let r, g, b;
      let idx = 0;
      while (idx < stops.length - 1 && t > stops[idx + 1]) idx++;
      const c1 = colors[idx];
      const c2 = colors[Math.min(idx + 1, colors.length - 1)];
      const range = (stops[idx + 1] || 1) - stops[idx];
      const lf = range > 0 ? Math.min((t - stops[idx]) / range, 1) : 0;
      r = ((c1 >> 16 & 255) * (1 - lf) + (c2 >> 16 & 255) * lf) | 0;
      g = ((c1 >>  8 & 255) * (1 - lf) + (c2 >>  8 & 255) * lf) | 0;
      b = ((c1       & 255) * (1 - lf) + (c2       & 255) * lf) | 0;
      data[i * 4 + 0] = r;
      data[i * 4 + 1] = g;
      data[i * 4 + 2] = b;
      data[i * 4 + 3] = 255;
    }
    const tex = new THREE.DataTexture(data, size, 1, THREE.RGBAFormat);
    tex.needsUpdate = true;
    return tex;
  }

  // ── Build Bread Group ──
  const breadGroup = new THREE.Group();
  scene.add(breadGroup);

  // Body — rounded cylinder (the main loaf)
  const bodyGeo = new THREE.CylinderGeometry(1.1, 1.0, 0.7, 64, 1);
  const body    = new THREE.Mesh(bodyGeo, crustMat);
  body.castShadow = true;
  breadGroup.add(body);

  // Domed top using a sphere segment
  const domGeo  = new THREE.SphereGeometry(1.15, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.55);
  const dome    = new THREE.Mesh(domGeo, crustTopMat);
  dome.position.y = 0.35;
  dome.castShadow = true;
  breadGroup.add(dome);

  // Flat bottom cap
  const botGeo = new THREE.CircleGeometry(1.0, 64);
  const bot    = new THREE.Mesh(botGeo, cuttingMat);
  bot.rotation.x = -Math.PI / 2;
  bot.position.y = -0.36;
  breadGroup.add(bot);

  // Score lines (decorative cuts on top, curved)
  function addScoreLine(angle, radiusInner, radiusOuter, depth) {
    const pts = [];
    const steps = 24;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const r = radiusInner + (radiusOuter - radiusInner) * Math.sin(t * Math.PI);
      const theta = angle + (t - 0.5) * 1.4;
      const x = r * Math.cos(theta);
      const z = r * Math.sin(theta);
      // height follows the dome curvature
      const distFromCenter = Math.sqrt(x * x + z * z);
      const domeH = Math.sqrt(Math.max(0, 1.15 * 1.15 - distFromCenter * distFromCenter));
      const y = 0.35 + domeH * Math.cos(0) - 1.15 * 0.5 + depth;
      pts.push(new THREE.Vector3(x, y, z));
    }
    const curve   = new THREE.CatmullRomCurve3(pts);
    const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.03, 8, false);
    const tube    = new THREE.Mesh(tubeGeo, scoreMat);
    breadGroup.add(tube);
  }
  addScoreLine(0,           0.15, 0.8, 0.05);
  addScoreLine(Math.PI / 3, 0.15, 0.8, 0.05);
  addScoreLine(-Math.PI / 3, 0.15, 0.8, 0.05);

  // Flour dust (small white bumps on surface)
  for (let i = 0; i < 12; i++) {
    const angle  = Math.random() * Math.PI * 2;
    const radius = 0.2 + Math.random() * 0.7;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    const distC = Math.sqrt(x * x + z * z);
    const dH    = Math.sqrt(Math.max(0, 1.15 * 1.15 - distC * distC));
    const y     = 0.35 + dH * Math.cos(0) - 1.15 * 0.5 + 0.06;
    const bumpGeo = new THREE.SphereGeometry(0.04 + Math.random() * 0.03, 8, 8);
    const bumpMat = new THREE.MeshToonMaterial({ color: 0xF5ECD0, transparent: true, opacity: 0.65 });
    const bump    = new THREE.Mesh(bumpGeo, bumpMat);
    bump.position.set(x, y, z);
    breadGroup.add(bump);
  }

  // Shadow under bread
  const shadowGeo  = new THREE.CircleGeometry(1.25, 64);
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = -0.42;
  breadGroup.add(shadowMesh);

  // Position the group
  breadGroup.position.y = -0.1;

  // ── Mouse/Touch Rotation ──
  let isDragging = false;
  let prevX = 0, prevY = 0;
  let rotY = 0, rotX = -0.18;
  let velX = 0, velY = 0;
  const DAMPING = 0.92;

  function onPointerDown(e) {
    isDragging = true;
    const p = e.touches ? e.touches[0] : e;
    prevX = p.clientX;
    prevY = p.clientY;
    velX = velY = 0;
  }
  function onPointerMove(e) {
    if (!isDragging) return;
    const p = e.touches ? e.touches[0] : e;
    const dx = p.clientX - prevX;
    const dy = p.clientY - prevY;
    velY = dx * 0.008;
    velX = dy * 0.008;
    rotY += velY;
    rotX += velX;
    rotX = Math.max(-0.6, Math.min(0.6, rotX));
    prevX = p.clientX;
    prevY = p.clientY;
  }
  function onPointerUp() { isDragging = false; }

  canvas.addEventListener('mousedown',  onPointerDown);
  canvas.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('mousemove',  onPointerMove);
  window.addEventListener('touchmove',  onPointerMove, { passive: true });
  window.addEventListener('mouseup',    onPointerUp);
  window.addEventListener('touchend',   onPointerUp);

  // Hide hint after first drag
  canvas.addEventListener('mousedown', () => {
    const hint = document.getElementById('drag-hint');
    if (hint) { hint.style.opacity = '0'; setTimeout(() => { hint.style.display = 'none'; }, 400); }
  }, { once: true });

  // ── Animation Loop ──
  let autoRotate = true;
  let time = 0;
  canvas.addEventListener('mousedown', () => { autoRotate = false; });

  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    if (!isDragging) {
      if (autoRotate) {
        rotY += 0.006;
      } else {
        velX *= DAMPING;
        velY *= DAMPING;
        rotX += velX;
        rotY += velY;
      }
    }

    // Gentle bob
    breadGroup.position.y = -0.1 + Math.sin(time) * 0.04;

    breadGroup.rotation.x = rotX;
    breadGroup.rotation.y = rotY;

    renderer.render(scene, camera);
  }
  animate();

  // ── Resize ──
  window.addEventListener('resize', () => {
    const nw = container.clientWidth;
    const nh = container.clientHeight;
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
    renderer.setSize(nw, nh);
  });
})();

// ============================================================
// THEME TOGGLE
// ============================================================
(function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const body = document.body;

  const saved = localStorage.getItem('bfp-theme');
  if (saved === 'dark') {
    body.classList.replace('light-theme', 'dark-theme');
  }

  btn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('bfp-theme', 'dark');
    } else {
      body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('bfp-theme', 'light');
    }
  });
})();

// ============================================================
// MODAL
// ============================================================
(function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const closeBtn = document.getElementById('modal-close');

  function buildModal(key) {
    const b = BREAD_DATA[key];
    if (!b) return;

    const imgTag = b.image
      ? `<img src="${b.image}" alt="${b.name}" class="modal-hero__img" />`
      : `<div class="modal-hero__img-svg">${b.imageSvg}</div>`;

    const diffTag = `<span class="modal-meta__tag ${b.diffClass}">${b.difficulty}</span>`;
    const timeTag  = b.chars.find(c => c.label === 'Время');
    const cntryTag = b.chars.find(c => c.label === 'Страна');

    content.innerHTML = `
      <div class="modal-hero">
        ${imgTag}
        <div class="modal-hero__info">
          <h2 class="modal-hero__name" id="modal-title">${b.name}</h2>
          <p class="modal-hero__origin">${b.origin}</p>
          <p class="modal-hero__desc">${b.desc}</p>
          <div class="modal-meta">
            ${diffTag}
            ${cntryTag ? `<span class="modal-meta__tag" style="background:var(--surface);color:var(--text-secondary)">${cntryTag.value}</span>` : ''}
            ${timeTag  ? `<span class="modal-meta__tag" style="background:var(--surface);color:var(--text-secondary)">${timeTag.value}</span>`  : ''}
          </div>
        </div>
      </div>

      <div class="modal-section">
        <p class="modal-section__title">Характеристики</p>
        <div class="chars-table">
          ${b.chars.map(c => `<div class="char-item"><span class="char-item__label">${c.label}</span><span class="char-item__value">${c.value}</span></div>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <p class="modal-section__title">Ингредиенты</p>
        <div class="ingredients-grid">
          ${b.ingredients.map(i => `<div class="ingredient-tag">${i}</div>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <p class="modal-section__title">Приготовление</p>
        <div class="recipe-steps">
          ${b.steps.map((s, i) => `<div class="recipe-step"><div class="recipe-step__num">${i + 1}</div><p class="recipe-step__text">${s}</p></div>`).join('')}
        </div>
      </div>
    `;
  }

  function openModal(key) {
    buildModal(key);
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    document.getElementById('modal').scrollTop = 0;
  }
  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Cards click
  document.querySelectorAll('.bread-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.bread));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(card.dataset.bread); });
  });

  // Close
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
(function initScrollAnim() {
  const targets = document.querySelectorAll(
    '.bread-card, .step-card, .difficulty-card, .section-header'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
})();

// ============================================================
// SMOOTH SCROLL (nav links)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================================
// HEADER SHADOW on scroll
// ============================================================
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 20px rgba(180,120,40,0.15)';
  } else {
    header.style.boxShadow = 'none';
  }
}, { passive: true });
