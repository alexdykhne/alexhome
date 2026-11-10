
const photos = [
  {id:"cakes-001",name:"Белый шоколад с малиной и розами",category:"cakes",image:"assets/photos/cakes-001.webp",thumb:"assets/photos/cakes-001-thumb.webp",group:"birthday"},
  {id:"cakes-002",name:"Вулканический торт с сахарным извержением",category:"cakes",image:"assets/photos/cakes-002.webp",thumb:"assets/photos/cakes-002-thumb.webp",group:"birthday"},
  {id:"cakes-003",name:"Глянцевый торт-гранат с кремом и зёрнами",category:"cakes",image:"assets/photos/cakes-003.webp",thumb:"assets/photos/cakes-003-thumb.webp",group:"birthday"},
  {id:"cakes-004",name:"Драконье яйцо с лазурным драконом",category:"cakes",image:"assets/photos/cakes-004.webp",thumb:"assets/photos/cakes-004-thumb.webp",group:"kids"},
  {id:"cakes-005",name:"Жираф на джунглевом торте",category:"cakes",image:"assets/photos/cakes-005.webp",thumb:"assets/photos/cakes-005-thumb.webp",group:"kids"},
  {id:"cakes-006",name:"Зелёный торт с хрустальным цветком",category:"cakes",image:"assets/photos/cakes-006.webp",thumb:"assets/photos/cakes-006-thumb.webp",group:"birthday"},
  {id:"cakes-007",name:"Зелёный торт с шоколадным танком и звёздами",category:"cakes",image:"assets/photos/cakes-007.webp",thumb:"assets/photos/cakes-007-thumb.webp",group:"birthday"},
  {id:"cakes-008",name:"Зимний торт с цифрой семь",category:"cakes",image:"assets/photos/cakes-008.webp",thumb:"assets/photos/cakes-008-thumb.webp",group:"newyear"},
  {id:"cakes-009",name:"Зимняя пряничная сказка на торте",category:"cakes",image:"assets/photos/cakes-009.webp",thumb:"assets/photos/cakes-009-thumb.webp",group:"newyear"},
  {id:"cakes-010",name:"Изумрудная хрустальная чаша с виноградом",category:"cakes",image:"assets/photos/cakes-010.webp",thumb:"assets/photos/cakes-010-thumb.webp",group:"birthday"},
  {id:"cakes-011",name:"Изумрудный торт с красным цветком",category:"cakes",image:"assets/photos/cakes-011.webp",thumb:"assets/photos/cakes-011-thumb.webp",group:"birthday"},
  {id:"cakes-012",name:"Карамельный чизкейк с миндалём и шоколадными завитками",category:"cakes",image:"assets/photos/cakes-012.webp",thumb:"assets/photos/cakes-012-thumb.webp",group:"dessert"},
  {id:"cakes-013",name:"Красный торт-цилиндр с золотым декором",category:"cakes",image:"assets/photos/cakes-013.webp",thumb:"assets/photos/cakes-013-thumb.webp",group:"birthday"},
  {id:"cakes-014",name:"Кремовый торт с шоколадной решёткой",category:"cakes",image:"assets/photos/cakes-014.webp",thumb:"assets/photos/cakes-014-thumb.webp",group:"dessert"},
  {id:"cakes-015",name:"Морковный торт с марципановыми морковками",category:"cakes",image:"assets/photos/cakes-015.webp",thumb:"assets/photos/cakes-015-thumb.webp",group:"birthday"},
  {id:"cakes-016",name:"Мятный торт с красными маками и цифрой 8",category:"cakes",image:"assets/photos/cakes-016.webp",thumb:"assets/photos/cakes-016-thumb.webp",group:"birthday"},
  {id:"cakes-017",name:"Нежный розовый торт с бабочками",category:"cakes",image:"assets/photos/cakes-017.webp",thumb:"assets/photos/cakes-017-thumb.webp",group:"birthday"},
  {id:"cakes-018",name:"Пастельный букет леденцов в горшочке",category:"cakes",image:"assets/photos/cakes-018.webp",thumb:"assets/photos/cakes-018-thumb.webp",group:"dessert"},
  {id:"cakes-019",name:"Пасхальные куличи и мраморные яйца",category:"cakes",image:"assets/photos/cakes-019.webp",thumb:"assets/photos/cakes-019-thumb.webp",group:"holiday"},
  {id:"cakes-020",name:"Пасхальный кулич с шоколадным яйцом и цыплёнком",category:"cakes",image:"assets/photos/cakes-020.webp",thumb:"assets/photos/cakes-020-thumb.webp",group:"holiday"},
  {id:"cakes-021",name:"Печенье «Уши Амана» с маковой начинкой",category:"cakes",image:"assets/photos/cakes-021.webp",thumb:"assets/photos/cakes-021-thumb.webp",group:"holiday"},
  {id:"cakes-022",name:"Пиратский корабль на волнах",category:"cakes",image:"assets/photos/cakes-022.webp",thumb:"assets/photos/cakes-022-thumb.webp",group:"kids"},
  {id:"cakes-023",name:"Подарочный набор капкейков для бабушки",category:"cakes",image:"assets/photos/cakes-023.webp",thumb:"assets/photos/cakes-023-thumb.webp",group:"dessert"},
  {id:"cakes-024",name:"Праздничный закусочный торт с лососем",category:"cakes",image:"assets/photos/cakes-024.webp",thumb:"assets/photos/cakes-024-thumb.webp",group:"birthday"},
  {id:"cakes-025",name:"Праздничный красно-белый торт со снежинками",category:"cakes",image:"assets/photos/cakes-025.webp",thumb:"assets/photos/cakes-025-thumb.webp",group:"newyear"},
  {id:"cakes-026",name:"Праздничный пряничный торт-сердце с ягодами",category:"cakes",image:"assets/photos/cakes-026.webp",thumb:"assets/photos/cakes-026-thumb.webp",group:"newyear"},
  {id:"cakes-027",name:"Праздничный торт с динозавриком в джунглях",category:"cakes",image:"assets/photos/cakes-027.webp",thumb:"assets/photos/cakes-027-thumb.webp",group:"kids"},
  {id:"cakes-028",name:"Праздничный шоколадный торт с паспортом и 14",category:"cakes",image:"assets/photos/cakes-028.webp",thumb:"assets/photos/cakes-028-thumb.webp",group:"birthday"},
  {id:"cakes-029",name:"Радужный торт с поездом на третий день рождения",category:"cakes",image:"assets/photos/cakes-029.webp",thumb:"assets/photos/cakes-029-thumb.webp",group:"kids"},
  {id:"cakes-030",name:"Радужный торт-пиньята с конфетами",category:"cakes",image:"assets/photos/cakes-030.webp",thumb:"assets/photos/cakes-030-thumb.webp",group:"kids"},
  {id:"cakes-031",name:"Сырный торт с мышонком",category:"cakes",image:"assets/photos/cakes-031.webp",thumb:"assets/photos/cakes-031-thumb.webp",group:"kids"},
  {id:"cakes-032",name:"Торт «Любимому сержанту»",category:"cakes",image:"assets/photos/cakes-032.webp",thumb:"assets/photos/cakes-032-thumb.webp",group:"birthday"},
  {id:"cakes-033",name:"Торт с машинками, клубникой и бантом",category:"cakes",image:"assets/photos/cakes-033.webp",thumb:"assets/photos/cakes-033-thumb.webp",group:"kids"},
  {id:"cakes-034",name:"Торт с сокровищами и самоцветами",category:"cakes",image:"assets/photos/cakes-034.webp",thumb:"assets/photos/cakes-034-thumb.webp",group:"birthday"},
  {id:"cakes-035",name:"Торт с шоколадными декорами и цифрами 14",category:"cakes",image:"assets/photos/cakes-035.webp",thumb:"assets/photos/cakes-035-thumb.webp",group:"birthday"},
  {id:"cakes-036",name:"Торт-«сыр» с мышонком и мангоевым желе",category:"cakes",image:"assets/photos/cakes-036.webp",thumb:"assets/photos/cakes-036-thumb.webp",group:"kids"},
  {id:"cakes-037",name:"Торт-кастрюля с пельменями и овощами",category:"cakes",image:"assets/photos/cakes-037.webp",thumb:"assets/photos/cakes-037-thumb.webp",group:"birthday"},
  {id:"cakes-038",name:"Торт-кимоно с поясом каратэ и эмблемой",category:"cakes",image:"assets/photos/cakes-038.webp",thumb:"assets/photos/cakes-038-thumb.webp",group:"birthday"},
  {id:"cakes-039",name:"Торт-путешествие с облаками и самолётом",category:"cakes",image:"assets/photos/cakes-039.webp",thumb:"assets/photos/cakes-039-thumb.webp",group:"birthday"},
  {id:"cakes-040",name:"Торт-сундук с пиратскими сокровищами",category:"cakes",image:"assets/photos/cakes-040.webp",thumb:"assets/photos/cakes-040-thumb.webp",group:"kids"},
  {id:"cakes-041",name:"Фантазийный торт с синим драконом и цифрой 6",category:"cakes",image:"assets/photos/cakes-041.webp",thumb:"assets/photos/cakes-041-thumb.webp",group:"kids"},
  {id:"cakes-042",name:"Фиолетовый зеркальный торт с физалисом",category:"cakes",image:"assets/photos/cakes-042.webp",thumb:"assets/photos/cakes-042-thumb.webp",group:"birthday"},
  {id:"cakes-043",name:"Фруктовый торт с карамельными подтёками",category:"cakes",image:"assets/photos/cakes-043.webp",thumb:"assets/photos/cakes-043-thumb.webp",group:"dessert"},
  {id:"cakes-044",name:"Чёрный торт с алой раковиной и жемчугом",category:"cakes",image:"assets/photos/cakes-044.webp",thumb:"assets/photos/cakes-044-thumb.webp",group:"birthday"},
  {id:"cakes-045",name:"Шахматный торт в деревянном стиле",category:"cakes",image:"assets/photos/cakes-045.webp",thumb:"assets/photos/cakes-045-thumb.webp",group:"birthday"},
  {id:"cakes-046",name:"Шоколадно-арахисовый торт в глазури",category:"cakes",image:"assets/photos/cakes-046.webp",thumb:"assets/photos/cakes-046-thumb.webp",group:"dessert"},
  {id:"cakes-047",name:"Шоколадно-ванильный торт с конфетным декором",category:"cakes",image:"assets/photos/cakes-047.webp",thumb:"assets/photos/cakes-047-thumb.webp",group:"dessert"},
  {id:"cakes-048",name:"Шоколадно-карамельный торт с арахисом",category:"cakes",image:"assets/photos/cakes-048.webp",thumb:"assets/photos/cakes-048-thumb.webp",group:"dessert"},
  {id:"cakes-049",name:"Шоколадно-ягодный торт с зелёным декором",category:"cakes",image:"assets/photos/cakes-049.webp",thumb:"assets/photos/cakes-049-thumb.webp",group:"dessert"},
  {id:"cakes-050",name:"Шоколадный муссовый торт с миндалём",category:"cakes",image:"assets/photos/cakes-050.webp",thumb:"assets/photos/cakes-050-thumb.webp",group:"dessert"},
  {id:"cakes-051",name:"Шоколадный стейк с чили и перцем",category:"cakes",image:"assets/photos/cakes-051.webp",thumb:"assets/photos/cakes-051-thumb.webp",group:"birthday"},
  {id:"cakes-052",name:"Шоколадный торт с вишнёвым цветком",category:"cakes",image:"assets/photos/cakes-052.webp",thumb:"assets/photos/cakes-052-thumb.webp",group:"birthday"},
  {id:"cakes-053",name:"Шоколадный торт с золотыми пряниками",category:"cakes",image:"assets/photos/cakes-053.webp",thumb:"assets/photos/cakes-053-thumb.webp",group:"birthday"},
  {id:"cakes-054",name:"Шоколадный торт с игрушечным бульдозером",category:"cakes",image:"assets/photos/cakes-054.webp",thumb:"assets/photos/cakes-054-thumb.webp",group:"kids"},
  {id:"cakes-055",name:"Шоколадный торт с клубникой и посыпкой",category:"cakes",image:"assets/photos/cakes-055.webp",thumb:"assets/photos/cakes-055-thumb.webp",group:"dessert"},
  {id:"cakes-056",name:"Шоколадный торт с красной ракушкой и жемчужиной",category:"cakes",image:"assets/photos/cakes-056.webp",thumb:"assets/photos/cakes-056-thumb.webp",group:"birthday"},
  {id:"cakes-057",name:"Шоколадный торт с кремовыми розетками",category:"cakes",image:"assets/photos/cakes-057.webp",thumb:"assets/photos/cakes-057-thumb.webp",group:"birthday"},
  {id:"cakes-058",name:"Шоколадный торт с нежным кремом",category:"cakes",image:"assets/photos/cakes-058.webp",thumb:"assets/photos/cakes-058-thumb.webp",group:"birthday"},
  {id:"cakes-059",name:"Шоколадный торт с розами и свечами",category:"cakes",image:"assets/photos/cakes-059.webp",thumb:"assets/photos/cakes-059-thumb.webp",group:"birthday"},
  {id:"cakes-060",name:"Шоколадный торт с ягодами и дракончиком",category:"cakes",image:"assets/photos/cakes-060.webp",thumb:"assets/photos/cakes-060-thumb.webp",group:"kids"},
  {id:"cakes-061",name:"Шоколадный торт с ягодной начинкой",category:"cakes",image:"assets/photos/cakes-061.webp",thumb:"assets/photos/cakes-061-thumb.webp",group:"dessert"},
  {id:"cakes-062",name:"Шоколадный торт с ягодным водопадом",category:"cakes",image:"assets/photos/cakes-062.webp",thumb:"assets/photos/cakes-062-thumb.webp",group:"dessert"},
  {id:"cakes-063",name:"Шоколадный торт со спящим малышом",category:"cakes",image:"assets/photos/cakes-063.webp",thumb:"assets/photos/cakes-063-thumb.webp",group:"kids"},
  {id:"cakes-064",name:"Ягодный торт с физалисом и сахарной пудрой",category:"cakes",image:"assets/photos/cakes-064.webp",thumb:"assets/photos/cakes-064-thumb.webp",group:"dessert"},
  {id:"cakes-065",name:"Ягодный торт с шоколадными клубниками",category:"cakes",image:"assets/photos/cakes-065.webp",thumb:"assets/photos/cakes-065-thumb.webp",group:"dessert"},
  {id:"cakes-066",name:"Яркий торт «СЕМА» на два года",category:"cakes",image:"assets/photos/cakes-066.webp",thumb:"assets/photos/cakes-066-thumb.webp",group:"kids"},
  {id:"cakes-067",name:"Красный праздничный торт с белым кремом",category:"cakes",image:"assets/photos/cakes-067.webp",thumb:"assets/photos/cakes-067.webp",group:"birthday"},
  {id:"tables-071",name:"Уютный праздничный бранч за солнечным столом",category:"tables",image:"assets/photos/tables-071.webp",thumb:"assets/photos/tables-071-thumb.webp",group:"feast"},
  {id:"tables-072",name:"Праздничный салат «Подсолнух» на кружевной скатерти",category:"tables",image:"assets/photos/tables-072.webp",thumb:"assets/photos/tables-072-thumb.webp",group:"feast"},
  {id:"tables-073",name:"Праздничный стол с домашними угощениями",category:"tables",image:"assets/photos/tables-073.webp",thumb:"assets/photos/tables-073-thumb.webp",group:"feast"},
  {id:"tables-074",name:"Праздничный стол с салатом «Подсолнух»",category:"tables",image:"assets/photos/tables-074.webp",thumb:"assets/photos/tables-074-thumb.webp",group:"feast"},
  {id:"tables-075",name:"Праздничный стол у камина в деревянном доме",category:"tables",image:"assets/photos/tables-075.webp",thumb:"assets/photos/tables-075-thumb.webp",group:"feast"},
  {id:"tables-076",name:"Уютный праздничный бранч за солнечным столом",category:"tables",image:"assets/photos/tables-076.webp",thumb:"assets/photos/tables-076-thumb.webp",group:"feast"}
];

let section = 'cakes';
let subfilter = 'all';
let visible = 12;
let filtered = [];
let currentIndex = 0;

const gallery = document.getElementById('gallery');
const more = document.getElementById('showMore');
const count = document.getElementById('galleryCount');
const subfilters = document.getElementById('subfilters');

const categories = {
  cakes: [
    ['all','Все торты'],
    ['birthday','Дни рождения'],
    ['kids','Детские праздники'],
    ['newyear','Новый год и зима'],
    ['holiday','Другие праздники'],
    ['dessert','Десерты']
  ],
  tables: [
    ['all','Все блюда и столы'],
    ['newyear','Новый год'],
    ['feast','Праздничные блюда и застолья']
  ]
};

document.getElementById('cakesCount').textContent =
  photos.filter(p => p.category === 'cakes').length;

document.getElementById('tablesCount').textContent =
  photos.filter(p => p.category === 'tables').length;

function renderFilters() {
  subfilters.replaceChildren();

  categories[section].forEach(([id,label]) => {
    let b = document.createElement('button');
    b.className = 'filter' + (id === subfilter ? ' active' : '');
    b.textContent = label;
    b.setAttribute('aria-pressed', String(id === subfilter));

    b.onclick = () => {
      subfilter = id;
      visible = 12;
      renderFilters();
      render();
    };

    subfilters.appendChild(b);
  });
}

function render() {
  filtered = photos.filter(p =>
    p.category === section &&
    (subfilter === 'all' || p.group === subfilter)
  );

  gallery.replaceChildren();

  filtered.slice(0, visible).forEach((p, i) => {
    const b = document.createElement('button');
    b.className = 'gallery-card';
    b.setAttribute('aria-label', 'Открыть: ' + p.name);

    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.name;
    img.loading = 'eager';
    img.decoding = 'async';

    img.onerror = () => {
      if (img.src.endsWith(p.image)) {
        img.onerror = null;
        img.src = p.thumb;
      }
    };

    const c = document.createElement('div');
    c.className = 'caption';
    c.textContent = p.name;

    b.append(img, c);
    b.onclick = () => openLightbox(i);
    gallery.appendChild(b);
  });

  more.hidden = visible >= filtered.length;
  count.textContent =
    `Показано ${Math.min(visible,filtered.length)} из ${filtered.length}`;
}

document.querySelectorAll('.portfolio-tab').forEach(b => {
  b.onclick = () => {
    section = b.dataset.section;
    subfilter = 'all';
    visible = 12;

    document.querySelectorAll('.portfolio-tab').forEach(t => {
      const active = t === b;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
    });

    document.getElementById('portfolioHeading').textContent =
      section === 'cakes' ? 'Торты и десерты' : 'Домашняя кухня и застолья';

    document.getElementById('portfolioDescription').textContent =
      section === 'cakes'
        ? 'Авторские торты, сладкие подарки и десерты для разных поводов.'
        : 'Салаты, домашние блюда и идеи праздничной сервировки.';

    renderFilters();
    render();
  };
});

more.onclick = () => {
  visible += 12;
  render();
};

const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImg');

function openLightbox(i) {
  currentIndex = i;
  updateLightbox();
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('closeLightbox').focus();
}

function updateLightbox() {
  let p = filtered[currentIndex];
  lbImg.src = p.image;
  lbImg.alt = p.name;
  document.getElementById('lightboxCaption').textContent =
    `${p.name} · ${currentIndex+1} / ${filtered.length}`;
}

function closeLightbox() {
  lb.hidden = true;
  document.body.style.overflow = '';
}

function move(n) {
  currentIndex = (currentIndex+n+filtered.length) % filtered.length;
  updateLightbox();
}

document.getElementById('closeLightbox').onclick = closeLightbox;
document.getElementById('prevImage').onclick = () => move(-1);
document.getElementById('nextImage').onclick = () => move(1);

lb.onclick = e => {
  if (e.target === lb) closeLightbox();
};

document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') move(1);
  if (e.key === 'ArrowLeft') move(-1);
});

const menu = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menu.onclick = () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '×' : '☰';
};

nav.querySelectorAll('a').forEach(a => {
  a.onclick = () => {
    nav.classList.remove('open');
    menu.textContent = '☰';
    menu.setAttribute('aria-expanded', 'false');
  };
});

document.getElementById('year').textContent =
  new Date().getFullYear();

renderFilters();
render();
