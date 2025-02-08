import { products } from "./database.js";

const main = document.querySelector('#products .grid');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    const description = product.description.length > 117 ? product.description.substring(0, 117) + "..." : product.description;

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h1>${product.name}</h1>
        <span>R$ ${product.value.toFixed(2)}</span>
        <p>${description}</p>
        <a href="product.html?id=${product.id}" class="button">Comprar</a>
    `;

    main.appendChild(card);

    const priceSpan = card.querySelector('span');
    if (priceSpan) {
        const freeShippingDiv = document.createElement('div');
        freeShippingDiv.classList.add('freesend');
        freeShippingDiv.textContent = 'Frete Grátis';
        priceSpan.insertAdjacentElement('afterend', freeShippingDiv);
    }
});