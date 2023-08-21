// Navigation menu Toggle/Close

const navMenu = document.getElementById("menu"),
    menuToggle = document.getElementById("toggle"),
    menuClose = document.getElementById("close");

if(menuToggle){
    menuToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu');
    })
}

if(menuClose){
    menuClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu');
    })
}

// Navigation menu Toggle/Close by Menu options

const opts = document.querySelectorAll(".nav_opt");

function linkAction(){
    const navMenu = document.getElementById("menu");
    navMenu.classList.remove("show-menu");
}
opts.forEach(n => n.addEventListener('click', linkAction));

// Background header on scroll

function scrollHeader(){
    const header = document.getElementById("nav");
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// SCroll Up Function

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// Scroll Reveal

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-head, .section-title`, {delay: 600})
sr.reveal(`.home-foot`, {delay: 700})
sr.reveal(`.home_image`, {delay: 900, origin: 'top'})

sr.reveal(`.sponsor-image, .products-card, .footer-logo, .footer-content, .footer-copy`, {origin: 'top', interval: 100})
sr.reveal(`.specs-data, .discount-animate`, {origin: 'left', interval: 100})
sr.reveal(`.specs-img, .discount-img`, {origin: 'right'})
sr.reveal(`.case-img`, {origin: 'top'})
sr.reveal(`.case-data`)