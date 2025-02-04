import { products } from "./database.js";

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (isNaN(productId)) {
        console.error("ID do produto inválido na URL.");
        return;
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
        console.error(`Produto com ID ${productId} não encontrado.`);
        return;
    }

    const imageElement = document.querySelector('.card.cw-66 img');
    if (imageElement) {
        imageElement.src = product.image;
        imageElement.alt = product.name;
    }

    const nameElement = document.querySelector('.card.cw-33 h1');
    if (nameElement) {
        nameElement.textContent = product.name;
    }

    const priceElement = document.querySelector('.card.cw-33 span');
    let currentPrice = product.value;
    if (priceElement) {
        priceElement.textContent = `R$ ${currentPrice.toFixed(2)}`;
    }

    const descriptionElement = document.querySelector('.card.cw-33 p');
    if (descriptionElement) {
        descriptionElement.textContent = product.description;
    }

    const colorSelect = document.querySelector('.card.cw-33 select#color');
    if (colorSelect) {
        const defaultColorOption = document.createElement('option');
        defaultColorOption.value = "";
        defaultColorOption.textContent = "Selecione";
        defaultColorOption.disabled = true;
        defaultColorOption.selected = true;
        colorSelect.appendChild(defaultColorOption);

            product.colors.forEach(color => {
                const option = document.createElement('option');
                option.value = color;
                option.textContent = color;
                colorSelect.appendChild(option);
            });
    }

    const quantitySelect = document.querySelector('.card.cw-33 select#quantity');
    if (quantitySelect) {
        const defaultQuantityOption = document.createElement('option');
        defaultQuantityOption.value = "";
        defaultQuantityOption.textContent = "Selecione";
        defaultQuantityOption.disabled = true;
        defaultQuantityOption.selected = true;
        quantitySelect.appendChild(defaultQuantityOption);

        for (let i = 1; i <= product.quantity; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            quantitySelect.appendChild(option);
        }
    }

    const paymentLink = document.querySelector('.card.cw-33 a.button');
    if (colorSelect && quantitySelect && paymentLink && priceElement) {
        let newPrice = currentPrice;

        const updatePaymentLink = () => {
            const selectedColor = colorSelect.value;
            const quantity = quantitySelect.value;
            const model = document.getElementById('model').innerText;
            paymentLink.href = `payment.html?id=${productId}&model=${model}&quantity=${quantity}&color=${selectedColor}&price=${newPrice}`;
        };

        colorSelect.addEventListener('change', () => {
            updatePaymentLink();
        });

        quantitySelect.addEventListener('change', () => {
            const quantity = quantitySelect.value;
            newPrice = currentPrice * quantity;
            priceElement.textContent = `R$ ${newPrice.toFixed(2)}`;
            updatePaymentLink();
        });

        paymentLink.addEventListener('click', (event) => {
            if (!colorSelect.value || !quantitySelect.value) { 
                event.preventDefault();
                if (!colorSelect.value) colorSelect.classList.add('error'); else colorSelect.classList.remove('error');
                if (!quantitySelect.value) quantitySelect.classList.add('error'); else quantitySelect.classList.remove('error');
            }
        });
    }
});