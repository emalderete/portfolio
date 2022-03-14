let navbar = document.querySelector("#navbar");
let phantomContainer = document.querySelector(".phantom-container");
let brand = document.querySelector(".navigation-brand");
let miniName = document.querySelector(".mini-name");
let headerSmall = document.querySelector(".header-container-s");
let codeLogo = document.querySelector(".code-minilogo");
let home = document.querySelector(".item-home");
let portfolio = document.querySelector(".item-port");
let skills = document.querySelector(".item-skill");
let about = document.querySelector(".item-about");
let contact = document.querySelector(".item-contact");


// Evento escuchador del scroll
window.addEventListener('scroll', scrollingNavbar);

// Definiciones de funciones:
// La función scrollingNavbar sirve para indicarle al navbar del documento como debe comportarse de acuerdo al scrolling del mouse.
function scrollingNavbar() {
    navbar.classList.toggle('fixed-top', window.scrollY > 290);
    home.classList.toggle('active', window.scrollY >= 0 && window.scrollY < 648);
    portfolio.classList.toggle('active', window.scrollY >= 648 && window.scrollY < 1384);
    skills.classList.toggle('active', window.scrollY >= 1384);
    // about.classList.toggle('active', window.scrollY >= 0);  ESTABAS INTENTANDO QUE EL SCROLL COLOQUE 'ACTIVE' EN LOS BOTONES DE LA PAGINA ABOUT
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

// Esta función improvisada sirve unicamente para mostrar en consola las coordenadas sobre el eje Y del scroll del sitio.
window.onscroll = () => {
    let scrollY = window.scrollY;
    console.log(scrollY);
};