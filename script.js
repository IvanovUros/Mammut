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
};
function genderDisplay () {
  genderContainer.style.display = 'initial';
};
function displayNone (x) {
  x.style.display = 'none';
};
function displayBlock (x) {
  x.style.display = 'block';
};
function overflowHidden (x) {
  x.style.overflow = 'hidden';
};
function overflowInitial (x) {
  x.style.overflow = 'initial';
}
function zIndexInitial (x) {
  x.style.zIndex = 'initial'
};


let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.width = 'calc(100vw/3)';
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
    overflowHidden(clothingShopByActivity);
    overflowHidden(footwearShopByActivity);
    overflowHidden(equipmentShopByActivity);
    overflowHidden(clothingMen);
    overflowHidden(clothingWomen);
    overflowHidden(footwearMen);
    overflowHidden(footwearWomen);
    extentionWidth(subSubExtentionClothing);
    extentionWidth(subSubExtentionFootwear);
    extentionWidth(subSubExtentionEquipment);
    setTimeout(extentionWidth, 300, menuSubExtentionClothing);
    setTimeout(extentionWidth, 300, menuSubExtentionFootwear);
    setTimeout(extentionWidth, 300, menuSubExtentionEquipment);
    zIndexInitial(menuSubExtentionClothing);
    zIndexInitial(menuSubExtentionFootwear);
    zIndexInitial(menuSubExtentionEquipment);
    setTimeout( function menuOverflow() {
      overflowHidden(menu);
      menu.style.width = '0%';
    },500);
    setTimeout(displayNone, 500, menuBackgroundCover);
    menuOpen = false;
  }
});
const clothingShopByActivity = document.getElementById('clothingShopByActivity');
const clothingMen = document.getElementById('clothingMen');
const clothingWomen = document.getElementById('clothingWomen');
const footwearShopByActivity = document.getElementById('footwearShopByActivity');
const footwearMen = document.getElementById('footwearMen');
const footwearWomen = document.getElementById('footwearWomen');
const equipmentShopByActivity = document.getElementById('equipmentShopByActivity');
////
const subSubExtentionClothing = document.getElementById('subSubExtentionClothing');
const subSubExtentionFootwear = document.getElementById('subSubExtentionFootwear');
const subSubExtentionEquipment = document.getElementById('subSubExtentionEquipment');

clothingShopByActivity.addEventListener('mouseover', () => {
  extentionWidthPos(subSubExtentionClothing);
  overflowInitial(clothingShopByActivity);
  overflowInitial(menuSubExtentionClothing);
  overflowHidden(menuSubExtentionFootwear);
  overflowHidden(menuSubExtentionEquipment);
});
clothingMen.addEventListener('mouseover', () => {
  extentionWidthPos(subSubExtentionClothing);
  overflowInitial(clothingMen);
  overflowInitial(menuSubExtentionClothing);
  overflowHidden(menuSubExtentionFootwear);
  overflowHidden(menuSubExtentionEquipment);
});
clothingWomen.addEventListener('mouseover', () => {
  extentionWidthPos(subSubExtentionClothing);
  overflowInitial(clothingWomen);
  overflowInitial(menuSubExtentionClothing);
  overflowHidden(menuSubExtentionFootwear);
  overflowHidden(menuSubExtentionEquipment);
});
footwearMen.addEventListener('mouseover', () => {
  extentionWidthPos(subSubExtentionFootwear);
  overflowInitial(footwearMen);
  overflowInitial(menuSubExtentionFootwear);
  overflowHidden(menuSubExtentionClothing);
  overflowHidden(menuSubExtentionEquipment);
});
footwearWomen.addEventListener('mouseover', () => {
  extentionWidthPos(subSubExtentionFootwear);
  overflowInitial(footwearWomen);
  overflowInitial(menuSubExtentionFootwear);
  overflowHidden(menuSubExtentionClothing);
  overflowHidden(menuSubExtentionEquipment);
});
footwearShopByActivity.addEventListener('mouseover', () => {
  extentionWidthPos(subSubExtentionFootwear);
  overflowInitial(footwearShopByActivity);
  overflowInitial(menuSubExtentionFootwear);
  overflowHidden(menuSubExtentionClothing);
  overflowHidden(menuSubExtentionEquipment);
});
equipmentShopByActivity.addEventListener('mouseover', () => {
  extentionWidthPos(subSubExtentionEquipment);
  overflowInitial(equipmentShopByActivity);
  overflowInitial(menuSubExtentionEquipment);
  overflowHidden(menuSubExtentionClothing);
  overflowHidden(menuSubExtentionFootwear);
});

////
const menuClothing = document.getElementById('menuClothing');
const menuFootwear = document.getElementById('menuFootwear');
const menuEquipment = document.getElementById('menuEquipment');
const menuSubExtentionClothing = document.getElementById('menuSubExtentionClothing');
const menuSubExtentionFootwear = document.getElementById('menuSubExtentionFootwear');
const menuSubExtentionEquipment = document.getElementById('menuSubExtentionEquipment');




menuClothing.addEventListener('mouseover', () => {
  overflowInitial(menu);
  overflowHidden(menuSubExtentionFootwear);
  overflowHidden(menuSubExtentionEquipment);
  extentionWidth(subSubExtentionFootwear);
  extentionWidth(subSubExtentionEquipment);
  extentionWidth(menuSubExtentionFootwear);
  extentionWidth(menuSubExtentionEquipment);
  menuSubExtentionClothing.style.zIndex = '5';
  menuSubExtentionClothing.style.width = 'calc(100vw/3)';
});
menuFootwear.addEventListener('mouseover', () => {
  overflowInitial(menu);
  overflowHidden(menuSubExtentionClothing);
  overflowHidden(menuSubExtentionEquipment);
  extentionWidth(subSubExtentionClothing);
  extentionWidth(subSubExtentionEquipment);
  extentionWidth(menuSubExtentionClothing);
  extentionWidth(menuSubExtentionEquipment);
  menuSubExtentionFootwear.style.zIndex = '5'
  menuSubExtentionFootwear.style.width = 'calc(100vw/3)';
});
menuEquipment.addEventListener('mouseover', () => {
  overflowInitial(menu);
  overflowHidden(menuSubExtentionClothing);
  overflowHidden(menuSubExtentionFootwear);
  extentionWidth(subSubExtentionClothing);
  extentionWidth(subSubExtentionFootwear);
  extentionWidth(menuSubExtentionClothing);
  extentionWidth(menuSubExtentionFootwear);
  menuSubExtentionEquipment.style.zIndex = '5'
  menuSubExtentionEquipment.style.width = 'calc(100vw/3)';
});
const clothingShopByActivityNav = document.getElementById('clothingShopByActivityNav');
const clothingMenNav = document.getElementById('clothingMenNav');
const clothingWomenNav = document.getElementById('clothingWomenNav');
//
const footwearShopByActivityNav = document.getElementById('footwearShopByActivityNav');
const footwearMenNav = document.getElementById('footwearMenNav');
const footwearWomenNav = document.getElementById('footwearWomenNav');
//
const equipmentShopByActivityNav = document.getElementById('equipmentShopByActivityNav');


clothingShopByActivity.addEventListener('mouseover', () => {
  setTimeout(displayBlock, 200, clothingShopByActivityNav);
  setTimeout(displayNone, 200, clothingMenNav);
  setTimeout(displayNone, 200, clothingWomenNav);
});
clothingMen.addEventListener('mouseover', () => {
  setTimeout(displayBlock, 200, clothingMenNav);
  setTimeout(displayNone, 200, clothingShopByActivityNav);
  setTimeout(displayNone, 200, clothingWomenNav);
});
clothingWomen.addEventListener('mouseover', () => {
  setTimeout(displayBlock, 200, clothingWomenNav);
  setTimeout(displayNone, 200, clothingShopByActivityNav);
  setTimeout(displayNone, 200, clothingMenNav);
});
footwearShopByActivity.addEventListener('mouseover', () => {
  setTimeout(displayBlock, 200, footwearShopByActivityNav);
  setTimeout(displayNone, 200, footwearMenNav);
  setTimeout(displayNone, 200, footwearWomenNav);
});
footwearMen.addEventListener('mouseover', () => {
  setTimeout(displayNone, 200, footwearShopByActivityNav);
  setTimeout(displayBlock, 200, footwearMenNav);
  setTimeout(displayNone, 200, footwearWomenNav);
});
footwearWomen.addEventListener('mouseover', () => {
  setTimeout(displayNone, 200, footwearShopByActivityNav);
  setTimeout(displayNone, 200, footwearMenNav);
  setTimeout(displayBlock, 200, footwearWomenNav);
});
equipmentShopByActivity.addEventListener('mouseover', () => {
  overflowInitial(equipmentShopByActivity);
  setTimeout(displayBlock, 200, equipmentShopByActivityNav);
});
























