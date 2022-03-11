let navbar = document.querySelector("#navbar");
let phantomContainer = document.querySelector(".phantom-container");

window.addEventListener('scroll', () => {
    navbar.classList.toggle('fixed-top', window.scrollY > 290);
    if (window.scrollY > 290) {
        phantomContainer.classList.remove('d-none');
    } else {
        phantomContainer.classList.add('d-none');
    }
});