let $ = document
var slideIndex = 0;
const navBtn = $.querySelector('.nav__btn')
const navMenu = $.querySelector('.nav-menu')
const overlay = $.querySelector('.overlay')
const placeLikeBtns = $.querySelectorAll('.place__like-icon')

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

// like button logic
placeLikeBtns.forEach((button) => {
    button.addEventListener('click', event => {
        targetElement = event.target
        targetTagName = event.target.tagName

        if (targetTagName === 'svg') {
            targetElement = event.target.lastElementChild
        }
        targetTagName = targetElement.tagName
        targetClassList = targetElement.classList

        if (targetClassList.contains('place__like-icon--active')) {
            targetClassList.remove('place__like-icon--active')
        } else {
            targetClassList.add('place__like-icon--active')
        }
    })
})

// advertise logic
carousel();

// FUNCTIONS
const findUserLikeButton = button => {
    console.log(button)
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "flex";
    setTimeout(carousel, 5000);
}

// disable responsive for devices under 300px width
function disableResponsive() {
    if (window.innerWidth < 300) {
        $.body.classList.add('disableResponsive');
    } else {
        $.body.classList.remove('disableResponsive');
    }
}
window.addEventListener('resize', disableResponsive);