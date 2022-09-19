const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('mainMenu');
const headerIcon = document.getElementById('headerIconNav');
const logo = document.querySelector('.logo-wrapper'); 
const navItem = document.querySelector('.header-nav');
const menuBackgroundCover = document.getElementById('mainMenuBackgroundCover');


function extentionWidth (x) {
  x.style.width = '0%';
};
function extentionWidthPos (x) {
  x.style.width = '100%';
}
function genderDisplay () {
  genderContainer.style.display = 'initial';
}
function displayNone (x) {
  x.style.display = 'none';
}
function displayBlock (x) {
  x.style.display = 'block';
}


let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.width = 'calc(100%/3)';
    displayNone(headerIcon);
    displayNone(logo);
    displayNone(navItem);
    displayBlock(menuBackgroundCover);
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    displayBlock(headerIcon);
    displayBlock(logo);
    displayBlock(navItem);
    extentionWidth(extentionMenuTwo);
    setTimeout(extentionWidth, 250, extentionClothingOne);
    setTimeout(extentionWidth, 250, extentionFootwearOne);
    setTimeout(genderDisplay,250);
    setTimeout( function menuOverflow() {
      menu.style.overflow = 'hidden';
      menu.style.width = '0%';
    },500);
    setTimeout(displayNone, 500, menuBackgroundCover);
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
const extentionClothingShopByActivity = document.getElementById('extentionClothingShopByActivity');
const extentionFootwearShopByActivity = document.getElementById('extentionFootwearShopByActivity');
const extentionFootwearMen = document.getElementById('extentionFootwearMen');
const extentionFootwearWomen = document.getElementById('extentionFootwearWomen');
const extentionClothingMen = document.getElementById('extentionClothingMen');
const extentionClothingWomen = document.getElementById('extentionClothingWomen');
const extentionClothingOne = document.getElementById('extentionClothingOne');
const extentionMenuTwo = document.getElementById('extentionMenuTwo');
const extentionFootwearOne = document.getElementById('extentionFootwearOne');
const extentionEquipmentOne = document.getElementById('extentionEquipmentOne');
const shopByActivityEquipment = document.getElementById('shopByActivityEquipment');
const extentionTwoNavEquipment = document.getElementById('extentionTwoNavEquipment');
const shopByActivityFootwear = document.getElementById('shopByActivityFootwear');
const menFootwear = document.getElementById('menFootwear');
const womenFootwear = document.getElementById('womenFootwear');





menuClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionClothingOne);
  extentionWidth(extentionFootwearOne);
  extentionWidth(extentionEquipmentOne);
  extentionWidth(extentionMenuTwo);
  displayNone(extentionFootwearShopByActivity);
  displayNone(extentionFootwearMen);
  displayNone(extentionFootwearWomen);
});
menuFootwear.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidth(extentionMenuTwo);
  extentionWidth(extentionClothingOne);
  extentionWidth(extentionEquipmentOne);
  extentionWidthPos(extentionFootwearOne);
});
menuEquipment.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidth(extentionMenuTwo);
  extentionWidth(extentionClothingOne);
  extentionWidth(extentionFootwearOne);
  extentionWidthPos(extentionEquipmentOne);
  displayNone(extentionFootwearShopByActivity);
  displayNone(extentionFootwearMen);
  displayNone(extentionFootwearWomen);
});
shopByActivityClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionMenuTwo);
  displayNone(genderContainer);
  displayBlock(extentionClothingShopByActivity);
  displayNone(extentionClothingMen);
  displayNone(extentionClothingWomen);
  displayNone(extentionTwoNavEquipment);
});
menClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionMenuTwo);
  displayNone(genderContainer);
  displayNone(extentionClothingShopByActivity);
  displayBlock(extentionClothingMen);
  displayNone(extentionClothingWomen);
  displayNone(extentionTwoNavEquipment);
});
womenClothing.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionMenuTwo);
  displayNone(genderContainer);
  displayBlock(extentionClothingWomen);
  displayNone(extentionClothingMen);
  displayNone(extentionClothingShopByActivity);
  displayNone(extentionTwoNavEquipment);
});
shopByActivityEquipment.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionMenuTwo);
  displayNone(genderContainer);
  displayBlock(extentionTwoNavEquipment);
  displayNone(extentionClothingWomen);
  displayNone(extentionClothingMen);
  displayNone(extentionClothingShopByActivity);
});
shopByActivityFootwear.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionMenuTwo);
  displayNone(genderContainer);
  displayBlock(extentionFootwearShopByActivity);
  displayNone(extentionFootwearMen);
  displayNone(extentionFootwearWomen);
  displayNone(extentionTwoNavEquipment);
  displayNone(extentionClothingShopByActivity);
  displayNone(extentionClothingMen);
  displayNone(extentionClothingWomen);
});
menFootwear.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionMenuTwo);
  displayNone(genderContainer);
  displayNone(extentionFootwearShopByActivity);
  displayBlock(extentionFootwearMen);
  displayNone(extentionFootwearWomen);
  displayNone(extentionTwoNavEquipment);
  displayNone(extentionClothingShopByActivity);
  displayNone(extentionClothingMen);
  displayNone(extentionClothingWomen);
});
womenFootwear.addEventListener('mouseover', () => {
  menu.style.overflow = 'initial';
  extentionWidthPos(extentionMenuTwo);
  displayNone(genderContainer);
  displayNone(extentionFootwearShopByActivity);
  displayNone(extentionFootwearMen);
  displayBlock(extentionFootwearWomen);
  displayNone(extentionTwoNavEquipment);
  displayNone(extentionClothingShopByActivity);
  displayNone(extentionClothingMen);
  displayNone(extentionClothingWomen);
});










