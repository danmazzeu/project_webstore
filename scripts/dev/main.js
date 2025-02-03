import { products } from "./database.js";

const main = document.querySelector('#products .grid');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h1>${product.name}</h1>
        <span>R$ ${product.value.toFixed(2)}</span>
        <p>${product.description}</p>
        <a href="product.html?id=${product.id}" class="button">Comprar</a>
    `;

    main.appendChild(card);
});