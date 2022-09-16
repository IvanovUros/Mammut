const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('mainMenu');
const headerIcon = document.getElementById('headerIconNav');
const logo = document.querySelector('.logo-wrapper'); 
const navItem = document.querySelector('.header-nav');


function extentionWidth (x) {
  x.style.width = '0%';
};
function extentionWidthPos (x) {
  x.style.width = '100%';
}
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
    setTimeout(extentionWidth, 250, extentionFootwearOne);
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
const menuEquipment = document.getElementById('menuEquipment');
const shopByActivityClothing = document.getElementById('shopByActivityClothing');
const menClothing = document.getElementById('menClothing');
const womenClothing = document.getElementById('womenClothing');
const genderContainer = document.getElementById('genderContainerWrapper');
const extentionTwoNavShopByActivity = document.getElementById('extentionTwoNavShopByActivity');
const extentionClothingMen = document.getElementById('extentionClothingMen');
const extentionClothingWomen = document.getElementById('extentionClothingWomen');
const extentionClothingOne = document.getElementById('extentionClothingOne');
const extentionClothingTwo = document.getElementById('extentionClothingTwo');
const extentionFootwearOne = document.getElementById('extentionFootwearOne');
const extentionEquipmentOne = document.getElementById('extentionEquipmentOne');
const shopByActivityEquipment = document.getElementById('shopByActivityEquipment');
const extemtionTwoNavEquipment =document.getElementById('extentionTwoNavEquipment');




menuClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionClothingOne);
  extentionWidth(extentionFootwearOne);
  extentionWidth(extentionEquipmentOne);
  extentionWidth(extentionEquipmentTwo);

});
menuFootwear.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidth(extentionClothingTwo);
  extentionWidth(extentionClothingOne);
  extentionWidth(extentionEquipmentOne);
  extentionWidthPos(extentionFootwearOne);
});
menuEquipment.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidth(extentionClothingTwo);
  extentionWidth(extentionClothingOne);
  extentionWidth(extentionFootwearOne);
  extentionWidthPos(extentionEquipmentOne);
});
shopByActivityClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionClothingTwo);
  genderContainer.style.display = 'none';
  extentionTwoNavShopByActivity.style.display = 'initial';
  extentionClothingMen.style.display = 'none';
  extentionClothingWomen.style.display = 'none';
  extemtionTwoNavEquipment.style.display = 'none';

});
menClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionClothingTwo);
  genderContainer.style.display = 'none';
  extentionTwoNavShopByActivity.style.display = 'none';
  extentionClothingMen.style.display = 'block';
  extentionClothingWomen.style.display = 'none';
  extemtionTwoNavEquipment.style.display = 'none';

});
womenClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionClothingTwo);
  genderContainer.style.display = 'none';
  extentionClothingWomen.style.display = 'block';
  extentionClothingMen.style.display = 'none';
  extentionTwoNavShopByActivity.style.display = 'none';
  extemtionTwoNavEquipment.style.display = 'none';
});
shopByActivityEquipment.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionClothingTwo);
  genderContainer.style.display = 'none';
  extemtionTwoNavEquipment.style.display = 'block';
  extentionClothingWomen.style.display = 'none';
  extentionClothingMen.style.display = 'none';
  extentionTwoNavShopByActivity.style.display = 'none';
});










