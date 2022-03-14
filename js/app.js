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

// La función scrollingNavbarResponse le indica a los botones del Navbar cuando y como marcar qué botón está activo
function scrollingNavbarResponse() {
    home.classList.toggle('active', window.scrollY >= 0 && window.scrollY < 648);
    portfolio.classList.toggle('active', window.scrollY >= 648 && window.scrollY < 1384);
    skills.classList.toggle('active', window.scrollY >= 1384);
}

function activeFunctions() {
    scrollingNavbarFixed();
    scrollingNavbarResponse();
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