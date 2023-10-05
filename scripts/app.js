let $ = document
const navBtn = $.querySelector('.nav__btn')
const navMenu = $.querySelector('.nav-menu')
const overlay = $.querySelector('.overlay')
let isNavOpen = false;

// Menu Logic
navBtn.addEventListener('click', function () {
    if (isNavOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")
        overlay.style.opacity = '0'
        overlay.style.display = 'none'
        isNavOpen = false;
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        setTimeout(() => {
            overlay.style.opacity = '1'
        }, 0)
        overlay.style.display = 'block'
        isNavOpen = true;
    }
})


// disable responsive for devices under 300px width
function disableResponsive() {
    if (window.innerWidth < 300) {
        $.body.classList.add('disableResponsive');
    } else {
        $.body.classList.remove('disableResponsive');
    }
}
window.addEventListener('resize', disableResponsive);