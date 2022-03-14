let phantomContainer = document.querySelector(".phantom-container");
let miniName = document.querySelector(".mini-name");
let brand = document.querySelector(".navigation-brand");
let about = document.querySelector(".item-nav-about");
let contact = document.querySelector(".item-nav-contact");
let home = document.querySelector(".item-nav-home");

window.addEventListener('scroll', activeFunctions);
home.addEventListener('click', replace);

function activeFunctions() {
    scrollingNavbarFixed();
    scrollingNavbarResponse();
}

function replace() {
    location.replace = 'http://127.0.0.1:5500';
    window.scrollTo(0, 600);
}

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

function scrollingNavbarResponse() {
    about.classList.toggle('active', window.scrollY >= 0 && window.scrollY < 2463);
    contact.classList.toggle('active', window.scrollY >= 2463);
}

// window.onscroll = () => {
//     let scrollY = window.scrollY;
//     console.log(scrollY);
// }