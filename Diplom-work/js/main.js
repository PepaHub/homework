//Меню

const nav_mobile = document.querySelector('.nav__mobile');
const navi = document.getElementById('nav__ww');

if (nav_mobile && navi) {
    nav_mobile.addEventListener('click', () => {
        navi.classList.toggle('navi__mob');
    });
}

const spisok = document.querySelector(".header2__krug-spisok");
const krug = document.querySelectorAll(".header2__krug");
if (spisok && krug.length) {
    spisok.addEventListener("mouseover", (e) => {
        const target = e.target;
        if (target.classList.contains("header2__krug-active")) return;
        if (target.classList.contains("header2__krug")) {
            krug.forEach((b) => b.classList.remove("header2__krug-active"));
            target.classList.add("header2__krug-active");
        }
    });
}

// Фильтры
const btnFilter = document.getElementById('btn-filter');
const filtersActive = document.getElementById('filters-active');
const btnSort = document.getElementById('btn-sort');
const sortActive = document.getElementById('sort-active');

if (btnFilter && filtersActive) {
    btnFilter.addEventListener("click", () => {
        filtersActive.classList.toggle('section1__filters-vibor--active');
    });
    document.addEventListener("click", function closefilters(event) {
        if (!filtersActive.contains(event.target) && !btnFilter.contains(event.target)) {
            filtersActive.classList.remove("section1__filters-vibor--active");
        }
    });
}
if (btnSort && sortActive) {
    btnSort.addEventListener("click", () => {
        sortActive.classList.toggle('section1__spisok-sort--show');
    });
    document.addEventListener("click", function closeSort(e) {
        if (!sortActive.contains(e.target) && !btnSort.contains(e.target)) {
            sortActive.classList.remove("section1__spisok-sort--show");
        }
    });
}

// Слайдер
if (typeof Swiper !== "undefined") {
    new Swiper('.kros__slider', {
        spaceBetween: 40,
        slidesPerView: 1,
        navigation: {
            nextEl: '.button__right',
            prevEl: '.button__left',
        },
        breakpoints: {
            1601: { slidesPerView: 4 },
            1251: { slidesPerView: 3 },
            801: { slidesPerView: 2 },
        }
    });
}

// Фильтры низ
const btnFilterBot = document.getElementById('btn-filter--bot');
const filtersActiveBot = document.getElementById('filters-active--bot');
const btnSortBot = document.getElementById('btn-sort--bot');
const sortActiveBot = document.getElementById('sort-active--bot');

if (btnFilterBot && filtersActiveBot) {
    btnFilterBot.addEventListener("click", () => {
        filtersActiveBot.classList.toggle('section1__filters-vibor--active');
    });
    document.addEventListener("click", function closefiltersBot(event) {
        if (!filtersActiveBot.contains(event.target) && !btnFilterBot.contains(event.target)) {
            filtersActiveBot.classList.remove("section1__filters-vibor--active");
        }
    });
}
if (btnSortBot && sortActiveBot) {
    btnSortBot.addEventListener("click", () => {
        sortActiveBot.classList.toggle('section1__spisok-sort--show');
    });
    document.addEventListener("click", function closeSortBot(e) {
        if (!sortActiveBot.contains(e.target) && !btnSortBot.contains(e.target)) {
            sortActiveBot.classList.remove("section1__spisok-sort--show");
        }
    });
}

// кроссовки низ
const buttonSee = document.querySelector('.section3__see');
const bottomBut = document.querySelector('.section3__bottom');
const krosNone = document.querySelectorAll('.kros__slide--none');
const krosPr = document.querySelectorAll('.kros__slide--pr');

if (buttonSee && bottomBut && krosNone.length && krosPr.length) {
    buttonSee.addEventListener('click', () => {
        krosPr.forEach((bb) => bb.classList.remove("kros__slide--pr"));
        krosNone.forEach((df) => df.classList.remove("kros__slide--none"));
        bottomBut.classList.add("section3__bottom--h");
    });
}

const column = document.querySelector('.column');
const grid = document.querySelector('.grid');
const column_path = document.getElementById('column-path');
const grid_path = document.getElementById('grid-path');
const bottom_grid = document.getElementById('bottom-grid');
const slide__bottom = bottom_grid ? bottom_grid.querySelectorAll('.kros__slide') : [];

if (column && grid && column_path && grid_path && bottom_grid && slide__bottom.length) {
    column.addEventListener('click', () => {
        if (bottom_grid.classList.contains('section3__grid-column')) return;
        column_path.setAttribute('fill', '#040404');
        grid_path.setAttribute('fill', '#808080');
        bottom_grid.classList.add('section3__grid-column');
        bottom_grid.classList.remove('section3__grid');
        slide__bottom.forEach((tt) => tt.classList.add('kros__slide-row'));
    });

    grid.addEventListener('click', () => {
        if (bottom_grid.classList.contains('section3__grid')) return;
        column_path.setAttribute('fill', '#808080');
        grid_path.setAttribute('fill', '#040404');
        bottom_grid.classList.add('section3__grid');
        bottom_grid.classList.remove('section3__grid-column');
        slide__bottom.forEach((ee) => ee.classList.remove('kros__slide-row'));
    });
}
