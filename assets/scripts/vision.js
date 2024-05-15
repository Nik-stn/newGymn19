const siteFont = document.querySelectorAll(".site-content, .site-content h1, .site-content h2, .site-content h3, .site-content h4, .site-content h5, .site-content h6");
const siteContent = document.querySelectorAll("button, a, li, h1, h2, h3, h4, h5 , h6, figcaption, footer, div, span, b, input");
const siteBorder = document.querySelectorAll("div, article, hr");
const zIndexFix = document.querySelectorAll('.header-nav, .privacy-policy-popup');
const img = document.querySelectorAll("#ya-site-form0 input.ya-site-form__submit, img,  .gymn-map, .youtube, .ya-share2__list");
const crossEyeSvg = document.getElementById("cross-eye");
const normalEyeSvg = document.getElementById("normal-eye");
const crossEyeWhiteSvg = document.getElementById("cross-eye-white");
const homeSvg = document.querySelectorAll('.home');
const homeWhiteSvg = document.querySelectorAll('.home-white');
const xMarkSvg = document.querySelector('.x-mark');
const xMarkWhiteSvg = document.querySelector('.x-mark-white');
const menuBurgerSvg = document.querySelector('.menu-burger');
const menuBurgerWhiteSvg = document.querySelector('.menu-burger-white');
const chevronSvg = document.querySelectorAll('.mobile-chevron.black');
const chevronWhiteSvg = document.querySelectorAll('.mobile-chevron.white');
const siteBody = document.querySelector('body');
const vision = document.querySelector(".vision");
const siteBackground = document.querySelector(".site-content");
const imgYes = document.getElementById("imagesYes");
const letterSpacing = document.querySelectorAll(".changeLetterSpacing");

function updateStyles() {
    siteBackground.style.background = "#fff";
    siteContent.forEach(item => {
        item.style.zIndex = 'unset';
    });
    zIndexFix.forEach(item => {
        item.style.zIndex = '20';
    });
    [crossEyeSvg, ...chevronWhiteSvg].forEach(item => {
        item.style.display = 'inline-block';
    });
    [vision, xMarkWhiteSvg, menuBurgerWhiteSvg, ...homeWhiteSvg].forEach(item => {
        item.style.display = 'block';
    });
    [xMarkSvg, crossEyeWhiteSvg, normalEyeSvg, menuBurgerSvg, ...chevronSvg, ...homeSvg].forEach(item => {
        item.style.display = 'none';
    });
}

function applyWhiteStyles() {
    updateStyles();
    siteBorder.forEach(item => {
        item.style.borderColor = '#2E3332';
    });
    siteContent.forEach(item => {
        item.style.background = '#fff';
        item.style.color = '#2E3332';
    });
    chevronSvg.forEach(item => {
        item.style.display = 'inline-block';
    });
    [xMarkWhiteSvg, menuBurgerWhiteSvg, ...homeWhiteSvg, ...chevronWhiteSvg].forEach(item => {
        item.style.display = 'none';
    });
    [menuBurgerSvg, xMarkSvg, ...homeSvg].forEach(item => {
        item.style.display = 'block';
    });
}

function applyBlueStyles() {
    updateStyles();
    siteBorder.forEach(item => {
        item.style.borderColor = '#00f';
    });
    siteContent.forEach(item => {
        item.style.background = '#9dd1ff';
        item.style.color = '#00f';
    });
}

function applyBlackStyles() {
    updateStyles();
    crossEyeSvg.style.display = "none";
    crossEyeWhiteSvg.style.display = "block";
   
    siteBorder.forEach(item => {
        item.style.borderColor = '#fff';
    });
    siteContent.forEach(item => {
        item.style.background = '#000';
        item.style.color = '#fff';
    });
}

function applyBeigeStyles() {
    updateStyles();
    siteBorder.forEach(item => {
        item.style.borderColor = 'brown';
    });
    siteContent.forEach(item => {
        item.style.background = '#f7f3d6';
        item.style.color = 'brown';
    });
}

function deleteVisionStyles() {
    imgYes.dispatchEvent(new Event("click"));
    siteContent.forEach(item => {
        item.style.removeProperty("background");
        item.style.removeProperty("color");
        item.style.removeProperty("z-index");
    });
    [...chevronWhiteSvg, ...siteFont, ...img].forEach(item => item.removeAttribute("style"));
    siteBorder.forEach(item => item.style.removeProperty("border-color"));
    siteBody.removeAttribute("class");
    [vision, crossEyeSvg, crossEyeWhiteSvg, xMarkSvg, menuBurgerSvg, ...chevronSvg, ...homeSvg].forEach(item => {
        item.style.display = 'none';
    });
    [xMarkWhiteSvg, menuBurgerWhiteSvg, ...homeWhiteSvg].forEach(item => {
        item.style.display = 'block';
    });
    normalEyeSvg.style.display = "inline-block";
    localStorage.clear();
}

function normalEye(event) {
    event.preventDefault();
    applyWhiteStyles();
    localStorage.setItem('applyWhiteStyles', applyWhiteStyles);
}

function crossEye(event) {
    event.preventDefault();
    deleteVisionStyles();
}

function colorSiteClick(event) {
    event.preventDefault();
    siteBody.removeAttribute("class");
    let id = this.getAttribute("id");
    siteBody.classList.add(id);
    if (id === 'colorSiteBlue') {
        applyBlueStyles();
        localStorage.setItem('applyBlueStyles', applyBlueStyles);
        localStorage.removeItem('applyBlackStyles');
        localStorage.removeItem('applyWhiteStyles');
        localStorage.removeItem('applyBeigeStyles');
    } else if (id === 'colorSiteBlack') {
        applyBlackStyles();
        localStorage.setItem('applyBlackStyles', applyBlackStyles);
        localStorage.removeItem('applyBlueStyles');
        localStorage.removeItem('applyBeigeStyles');
        localStorage.removeItem('applyWhiteStyles');
    } else if (id === 'colorSiteWhite') {
        applyWhiteStyles();
        localStorage.setItem('applyWhiteStyles', applyWhiteStyles);
        localStorage.removeItem('applyBlackStyles');
        localStorage.removeItem('applyBlueStyles');
        localStorage.removeItem('applyBeigeStyles');
    } else if (id === 'colorSiteBeige') {
        applyBeigeStyles();
        localStorage.setItem('applyBeigeStyles', applyBeigeStyles);
        localStorage.removeItem('applyBlackStyles');
        localStorage.removeItem('applyWhiteStyles');
        localStorage.removeItem('applyBlueStyles');
    } else console.log('Error classlist');
}

function updateFontSizes(changeAmount) {
    let fz;
    siteFont.forEach(item => {
        fz = parseFloat(window.getComputedStyle(item).fontSize);
        fz += changeAmount;
        if (fz >= 12 && fz <= 24) item.style.fontSize = fz + "px";
        else if (fz > 24) fz = 24;
        else fz = 12;
    });
    localStorage.setItem('applyFontSize', fz);
}

function imagesNoClick(event) {
    event.preventDefault();
    const imgDelete = img.forEach(item => {
        item.style.filter = 'grayscale(0%)';
        item.style.display = "none";
    });
    localStorage.setItem('applyImgDelete', imgDelete);
    localStorage.removeItem('applyImgColor');
    localStorage.removeItem('applyImgBlackWhiteStyles');
}

function imagesYesClick(event) {
    event.preventDefault();
    const imgColor = img.forEach(item => {
        item.style.filter = 'grayscale(0%)';
        item.style.display = "inline-block";
    });
    localStorage.setItem('applyImgColor', imgColor);
    localStorage.removeItem('applyImgDelete');
    localStorage.removeItem('applyImgBlackWhiteStyles');
}

function imagesBlackWhiteClick(event) {
    event.preventDefault();
    const imgBlackWhite = img.forEach(item => {
        item.style.filter = 'grayscale(100%)';
        item.style.display = "inline-block";
    });
    localStorage.setItem('applyImgBlackWhiteStyles', imgBlackWhite);
    localStorage.removeItem('applyImgColor');
    localStorage.removeItem('applyImgDelete');
}

function spacing() {
    const data = this.getAttribute("data-letter-spacing");
    siteFont.forEach(item => item.style.letterSpacing = data + 'px');
    localStorage.setItem('applySpaceStyles', data);
}

function changeImageFontSpacing() {
    siteFont.forEach(item => item.style.letterSpacing = getSpacing + 'px');
    siteFont.forEach(item => item.style.fontSize = getFontSize + "px");
    if (getImgColor !== null) {
        img.forEach(item => {
            item.style.filter = 'grayscale(0%)';
            item.style.display = "inline-block";
        });
    } else if (getImgBlackWhite !== null) {
        img.forEach(item => {
            item.style.filter = 'grayscale(100%)';
            item.style.display = "inline-block";
        });
    } else if (getImgDelete !== null) {
        img.forEach(item => {
            item.style.filter = 'grayscale(0%)';
            item.style.display = "none";
        });
    }
}

const getWhiteStyles = localStorage.getItem('applyWhiteStyles');
const getBlackStyles = localStorage.getItem('applyBlackStyles');
const getBlueStyles = localStorage.getItem('applyBlueStyles');
const getBeigeStyles = localStorage.getItem('applyBeigeStyles');
const getSpacing = localStorage.getItem('applySpaceStyles');
const getFontSize = localStorage.getItem('applyFontSize');
const getImgBlackWhite = localStorage.getItem('applyImgBlackWhiteStyles');
const getImgDelete = localStorage.getItem('applyImgDelete');
const getImgColor = localStorage.getItem('applyImgColor');

if (getWhiteStyles !== null) {
    applyWhiteStyles();
    changeImageFontSpacing();
} 
else if (getBlackStyles !== null) {
    applyBlackStyles();
    changeImageFontSpacing();
} 
else if (getBlueStyles !== null) {
    applyBlueStyles();
    changeImageFontSpacing();
} 
else if (getBeigeStyles !== null) {
    applyBeigeStyles();
    changeImageFontSpacing();
}

function init() {
    normalEyeSvg.addEventListener("click", normalEye);
    crossEyeSvg.addEventListener("click", crossEye);
    crossEyeWhiteSvg.addEventListener("click", crossEye);
    document.getElementById("reduceFont").addEventListener("click", () => updateFontSizes(-1));
    document.getElementById("increaseFont").addEventListener("click", () => updateFontSizes(1));
    document.querySelectorAll(".colorSite").forEach(item => item.addEventListener("click", colorSiteClick));
    letterSpacing.forEach(item => item.addEventListener("click", spacing));
    document.getElementById("imagesNo").addEventListener("click", imagesNoClick);
    imgYes.addEventListener("click", imagesYesClick);
    document.getElementById("imagesBlackWhite").addEventListener("click", imagesBlackWhiteClick);
}

init();