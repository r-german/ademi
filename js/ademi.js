// Слайдер (блок3)
new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    initialSlide: 1,
    spaceBetween: 40,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    speed: 600,
    keyboard: true,
    breakpoints: {
        768: {
            spaceBetween: 80
        },
        992: {
            spaceBetween: 111
        }
    }
});

// Бургер-меню
const wrapper = document.querySelector('.wrapper');
const menuIcon = document.querySelector('.menu-icon');
const menuNav = document.querySelector('nav');
menuIcon.addEventListener('click', function() {
    wrapper.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
	menuNav.classList.toggle('_active');
});
const menuLinks = document.querySelectorAll('[data-goto]');
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", clickOnLink);
});
function clickOnLink(e) {
    const menuLink = e.target;
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
    if (menuIcon.classList.contains('_active')) {
        wrapper.classList.remove('_lock');
        menuIcon.classList.remove('_active');
        menuNav.classList.remove('_active');
    }
	window.scrollTo({
		top: gotoBlockValue
	});
    e.preventDefault();
}