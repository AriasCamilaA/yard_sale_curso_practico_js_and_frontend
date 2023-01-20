const menuEmail = document.querySelector(".navbar-email");
const menuHamburguer = document.querySelector(".menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideProductDetail = document.querySelector(".product-detail-shopping");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguer.addEventListener("click", toggleMobileMenu);
menuShoppingCart.addEventListener("click", toggleShoppingCart)

function toggleDesktopMenu(){
    const isAsideProductDetailClosed = asideProductDetail.classList.contains("inactive");
    if (!isAsideProductDetailClosed) {
        asideProductDetail.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideProductDetailClosed = asideProductDetail.classList.contains("inactive");
    if (!isAsideProductDetailClosed) {
        asideProductDetail.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");        
    }
    asideProductDetail.classList.toggle("inactive");
}