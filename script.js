let cart = [];

document.querySelectorAll('.catalog-button').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = button.dataset.price;
        const img = button.dataset.img;

        document.getElementById('product-name').textContent = name;
        document.getElementById('product-price').textContent = `Цена: ${price}₸`;
        document.getElementById('product-image').src = img;

        document.getElementById('product-modal').style.display = 'block';

        document.getElementById('add-to-cart').dataset.name = name;
        document.getElementById('add-to-cart').dataset.price = price;
        document.getElementById('add-to-cart').dataset.img = img;
    });
});

document.getElementById('add-to-cart').addEventListener('click', () => {
    const name = document.getElementById('add-to-cart').dataset.name;
    const price = document.getElementById('add-to-cart').dataset.price;
    const img = document.getElementById('add-to-cart').dataset.img;

    cart.push({ name, price, img });
    localStorage.setItem('cart', JSON.stringify(cart));

    document.getElementById('product-modal').style.display = 'none';
    alert('Товар добавлен в корзину!');
});

document.getElementById('close-product-modal').addEventListener('click', () => {
    document.getElementById('product-modal').style.display = 'none';
});
