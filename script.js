const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('mainMenu');
const headerIcon = document.getElementById('headerIconNav');
const logo = document.querySelector('.logo-wrapper'); 
const navItem = document.querySelector('.header-nav');
const extentionOne = document.getElementById('extentionOne');
const extentionTwo = document.getElementById('extentionTwo');
const menuClothing = document.getElementById('menuClothing');

function extentionWidth () {
  extentionOne.style.width = '0%'
};


let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.width = 'calc(100%/3)';
    headerIcon.style.display = 'none';
    logo.style.display = 'none';
    navItem.style.display = 'none';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    headerIcon.style.display = 'block';
    logo.style.display = 'block';
    navItem.style.display = 'block';
    extentionOne.style.width = '0%';
    extentionWidth();
    setTimeout( function menuOverflow() {
      menu.style.overflow = 'hidden';
      menu.style.width = '0%';
    },250);
    menuOpen = false;
  }
}); 





menuClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionOne.style.width = '100%';
});






