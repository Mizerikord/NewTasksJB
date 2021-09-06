'use strict';

const products = [
    {id:1, img:'./img/Notebook.jpg', title: 'Notebook', price: 1000},
    {id:2, img:'./img/mouse.jpg', title: 'Mouse', price: 100},
    {id:3, img:'./img/keyboard.jpg', title: 'Keyboard', price: 250},
    {id:4, img:'./img/gamepad.jpg', title: 'Gamepad', price: 150},
];

var renderProduct = (img = './img/error.jpg', title = "Void", price = 0) => `<div class="product-item">
                <img src="${img}" alt="Notebook" />
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
            </div>`;

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.img, item.title, item.price));
    document.querySelector('div.products').innerHTML = productList;
};
renderProducts(products);