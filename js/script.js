
// Creating a responsive navigation bar
// Variables
const menu = document.querySelector('.menu i');
const nav = document.querySelector('.nav-container');
menu.addEventListener('click', () =>{
    nav.classList.toggle('active')
    if(menu.className === 'fa-solid fa-bars'){
        menu.className = "fa-solid fa-xmark";
    }else{
        menu.className = "fa-solid fa-bars" ;
    }
})



// add shadow to header on scroll
const theHeader = document.querySelector('.header');

window.addEventListener('scroll', () =>{
    theHeader.classList.toggle('scroll-shadow', window.scrollY > 0)
})
// using json to fetch data
// dark light togggle

const darkBtn = document.querySelector('.dark-light i')

darkBtn.addEventListener('click', () =>{

    document.body.classList.toggle('dark-theme');
    if(darkBtn.className === 'fa-solid fa-moon'){
        darkBtn.className = 'fa-solid fa-sun';
    }else{
        darkBtn.className = 'fa-solid fa-moon';

    }
})

// custom scroll reveal animation

const scr = ScrollReveal({
    distance : '65px',
    duration : 2600,
    delay :450,
    reset : true

});

 scr.reveal('.hero-title', {delay:200, origin:'bottom'});
 scr.reveal('.icons', {delay:300, origin:'bottom'});
 scr.reveal('.image', {delay:350, origin:'left'});
 scr.reveal('.text-reveal', {delay:450, origin:'bottom'});
 scr.reveal('.icon', {delay:200, origin:'bottom'});
 scr.reveal('.skills h1', {delay:200, origin:'bottom'});
 scr.reveal('.progress h1', {delay:200, origin:'bottom'});
 scr.reveal('.about h1', {delay:200, origin:'left'});
 scr.reveal('.item', {delay:200, origin:'bottom'});
 scr.reveal('.projects h1', {delay:200, origin:'left'});
 scr.reveal('.project', {delay:200, origin:'bottom'});
 scr.reveal('.title', {delay:200, origin:'right'});
 scr.reveal('.scroll-container', {delay:200, origin:'bottom'});





















