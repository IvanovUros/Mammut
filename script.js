const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('mainMenu');
const headerIcon = document.getElementById('headerIconNav');
const logo = document.querySelector('.logo-wrapper'); 
const navItem = document.querySelector('.header-nav');
const extentionOne = document.getElementById('extentionOne');
const extentionTwo = document.getElementById('extentionTwo');
const menuClothing = document.getElementById('menuClothing');


let test = false;
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add("main-menu-open");
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
    test = true;
    menuOpen = false;
    if (test) {
      menu.classList.remove("main-menu-open");
      test = false;
    }
  }
}); 





menuClothing.addEventListener('mouseover', () => {
  extentionOne.style.width = '100%';
});







