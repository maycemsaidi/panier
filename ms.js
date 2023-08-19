document.addEventListener('DOMContentLoaded', function () {
    const cartBtn = document.getElementById('cart-btn');
    const favBtn = document.getElementById('fav-btn');
    const cartList = document.getElementById('cart-list');
    const favList = document.getElementById('fav-list');
    const cartCountSpan = document.getElementById('cart-count');
    const favCountSpan = document.getElementById('fav-count');

    let cartCount = 0;
    let favCount = 0;

    cartBtn.addEventListener('click', () => {
        cartList.classList.toggle('hidden');
        favList.classList.add('hidden');
    });

    favBtn.addEventListener('click', () => {
        favList.classList.toggle('hidden');
        cartList.classList.add('hidden');
    });

    // "Ajouter au panier" button click event
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountSpan.textContent = cartCount;
        });
    });

    // "Ajouter au Favoris" button click event
    const addToFavButtons = document.querySelectorAll('.add-to-fav');

    addToFavButtons.forEach((button) => {
        button.addEventListener('click', () => {
            favCount++;
            favCountSpan.textContent = favCount;
        });
    });

    // Quantity interaction code
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card) => {
        const quantityValue = card.querySelector('.quantity-value');
        const decreaseBtn = card.querySelector('.quantity-btn.minus');
        const increaseBtn = card.querySelector('.quantity-btn.plus');

        let currentQuantity = 1;

        decreaseBtn.addEventListener('click', () => {
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityValue.textContent = currentQuantity;
            }
        });

        increaseBtn.addEventListener('click', () => {
            currentQuantity++;
            quantityValue.textContent = currentQuantity;
        });
    });
});
