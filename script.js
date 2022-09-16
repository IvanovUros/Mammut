const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('mainMenu');
const headerIcon = document.getElementById('headerIconNav');
const logo = document.querySelector('.logo-wrapper'); 
const navItem = document.querySelector('.header-nav');
const extentionClothingOne = document.getElementById('extentionClothingOne');
const extentionClothingTwo = document.getElementById('extentionClothingTwo');



function extentionWidth (x) {
  x.style.width = '0%';
};
function genderDisplay () {
  genderContainer.style.display = 'initial';
}


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
    extentionWidth(extentionClothingTwo);
    setTimeout(extentionWidth, 250, extentionClothingOne);
    setTimeout(genderDisplay,250);
    setTimeout( function menuOverflow() {
      menu.style.overflow = 'hidden';
      menu.style.width = '0%';
    },500);
    menuOpen = false;
  }
});


const menuClothing = document.getElementById('menuClothing');
const menuFootwear = document.getElementById('menuFootwear');
const shopByActivityClothing = document.getElementById('shopByActivityClothing');
const menClothing = document.getElementById('menClothing');
const womenClothing = document.getElementById('womenClothing');
const genderContainer = document.getElementById('genderContainerWrapper');
const extentionTwoNavShopByActivity = document.getElementById('extentionTwoNavShopByActivity');
const extentionClothingMen = document.getElementById('extentionClothingMen');
const extentionClothingWomen = document.getElementById('extentionClothingWomen');




menuClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionClothingOne.style.width = '100%';
});
shopByActivityClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionClothingTwo.style.width = '100%';
  genderContainer.style.display = 'none';
  extentionTwoNavShopByActivity.style.display = 'initial';
  extentionClothingMen.style.display = 'none';
  extentionClothingWomen.style.display = 'none';
});
menClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionClothingTwo.style.width = '100%';
  genderContainer.style.display = 'none';
  extentionTwoNavShopByActivity.style.display = 'none';
  extentionClothingMen.style.display = 'block';
  extentionClothingWomen.style.display = 'none';
});
womenClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionClothingTwo.style.width = '100%';
  genderContainer.style.display = 'none';
  extentionClothingWomen.style.display = 'block';
  extentionClothingMen.style.display = 'none';
  extentionTwoNavShopByActivity.style.display = 'none';
});










