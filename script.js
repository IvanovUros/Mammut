const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('mainMenu');
const headerIcon = document.getElementById('headerIconNav')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add("main-menu-open");
    headerIcon.style.display = 'none';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove("main-menu-open");
    headerIcon.style.display = 'block';
    menuOpen = false;
  }
}); 

