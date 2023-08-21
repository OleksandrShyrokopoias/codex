const buttonMenu = document.querySelector('.button__togle');
const navMenu = document.querySelector('.menu__list');

buttonMenu.addEventListener('click', () => {
  navMenu.classList.toggle('menu-list-active');
});







var swiper = new Swiper('.swiper__startups', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

tabsTitle.forEach(item => item.addEventListener('click', event => {
    
    const tabsTitleTarget = event.target.getAttribute('data-tab');

    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    item.classList.add('active-tab');

    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));

document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');



