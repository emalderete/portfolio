let navbar = document.querySelector("#navbar");
let phantomContainer = document.querySelector(".phantom-container");
let brand = document.querySelector(".navigation-brand");
let miniName = document.querySelector(".mini-name");
let headerSmall = document.querySelector(".header-container-s");
let codeLogo = document.querySelector(".code-minilogo");
let home = document.querySelector(".item-home");
let portfolio = document.querySelector(".item-port");
let skills = document.querySelector(".item-skill");

// Evento escuchador del scroll
window.addEventListener('scroll', activeFunctions);

// Definiciones de funciones:
// La función scrollingNavbarFixed sirve para indicarle al navbar del documento como debe comportarse de acuerdo al scrolling del mouse
// y fijarse en la parte superior de la ventana.
function scrollingNavbarFixed() {
    navbar.classList.toggle('fixed-top', window.scrollY > 290);
    if (window.scrollY > 290) {
        phantomContainer.classList.remove('d-none');
        brand.classList.add('opacity');
        miniName.classList.remove('effect-spacing-letter');
    } else {
        phantomContainer.classList.add('d-none');
        brand.classList.remove('opacity');
        miniName.classList.add('effect-spacing-letter');
    }
}

function scrollingNavbarFixedSmall() {
    navbar.classList.toggle('fixed-top', window.scrollY > 224);
    if (window.scrollY > 224) {
        phantomContainer.classList.remove('d-none');
        brand.classList.add('opacity');
        miniName.classList.remove('effect-spacing-letter');
    } else {
        phantomContainer.classList.add('d-none');
        brand.classList.remove('opacity');
        miniName.classList.add('effect-spacing-letter');
    }
}

// La función scrollingNavbarResponse le indica a los botones del Navbar cuando y como marcar qué botón está activo
function scrollingNavbarResponse() {
    home.classList.toggle('actived', window.scrollY >= 0 && window.scrollY < 648);
    portfolio.classList.toggle('actived', window.scrollY >= 648 && window.scrollY < 1384);
    skills.classList.toggle('actived', window.scrollY >= 1384);
}

function scrollingNavbarResponseSmall() {
    home.classList.toggle('actived', window.scrollY >= 0 && window.scrollY < 633);
    portfolio.classList.toggle('actived', window.scrollY >= 633 && window.scrollY < 1291);
    skills.classList.toggle('actived', window.scrollY >= 1291);
}

function activeFunctions() {
    scrollingNavbarResponseMedia();
}

// Declaración y uso de funciones improvisadas para facilitar el trabajo.
function showScrollOnConsole() {
    window.onscroll = () => {
        let scrollY = window.scrollY;
        console.log(scrollY);
    }
}

function ingnoreErrors() {
    window.onerror = () => {
        return true == true;
    }
}

//showScrollOnConsole();
//ingnoreErrors();

// Declaración de funciones que trabajen en determinadas resoluciones de pantalla.

function scrollingNavbarResponseMedia() {
    if (window.matchMedia('(min-width: 1215px)').matches) {
        scrollingNavbarFixed();
        scrollingNavbarResponse();
    } else {
        scrollingNavbarFixedSmall();
        scrollingNavbarResponseSmall();
    }
}