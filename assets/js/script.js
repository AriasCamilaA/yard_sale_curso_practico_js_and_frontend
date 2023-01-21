const menuEmail = document.querySelector(".navbar-email");
const menuHamburguer = document.querySelector(".menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer=document.querySelector('.cards-container');

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguer.addEventListener("click", toggleMobileMenu);
menuShoppingCart.addEventListener("click", toggleShoppingCart)

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: "Pen",
    price: 120,
    image: "https://images.pexels.com/photos/745760/pexels-photo-745760.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: "Sheet",
    price: 120,
    image: "https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: "Notebook",
    price: 120,
    image: "https://images.pexels.com/photos/14927354/pexels-photo-14927354.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: "Colors",
    price: 120,
    image: "https://images.pexels.com/photos/14122557/pexels-photo-14122557.jpeg?auto=compress&cs=tinysrgb&w=600",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '../assets/icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);