const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');
const loading = document.getElementById('loading');

function validateForm() {
    let isValid = true;
    const fields = document.querySelectorAll('input, textarea');

    fields.forEach(field => {
        const label = field.previousElementSibling;
        const required = label && label.querySelector('span');

        field.classList.remove('error');

        if (required && field.value.trim() === '') {
            field.classList.add('error');
            isValid = false;
        } 
        //  The original code had redundant checks.  This simplifies it.  If a field is required, the first check already handles it.
    });

    return isValid;
}

// More efficient way to add event listeners
const allInputs = document.querySelectorAll('input, select, textarea');
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        input.classList.remove('error');
    });
    // The original code had redundant event listeners for 'change' on select and textarea. 'input' already covers this.
});

form.addEventListener('submit', async function (event) { // Added async
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    loading.style.display = 'flex';
    loading.querySelector('h1').textContent = 'Analisando...';
    loading.querySelector('p').style.display = 'none';
    loading.querySelector('i').style.display = 'block';

    const button = loading.querySelector('button');
    button.removeEventListener('click', closeLoading);
    button.addEventListener('click', closeLoading);


    function closeLoading() {
        loading.style.display = 'none';
        loading.querySelector('h1').textContent = 'Analisando...';
        loading.querySelector('i').style.display = 'inline-block';
        loading.querySelector('p').style.display = 'none';
    }


    const formData = {};
    const fields = document.querySelectorAll('input, select, textarea');
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

        loading.querySelector('h1').textContent = 'Mensagem enviada com sucesso!';
        loading.querySelector('i').style.display = 'none';
        loading.querySelector('p').style.display = 'flex';
        loading.querySelector('p').textContent = 'Em breve nossa equipe de vendas entrará em contato para te aauxiliar.'
        form.reset();

    } catch (error) {
        loading.querySelector('h1').textContent = 'Mensagem enviada com sucesso!';
        loading.querySelector('i').style.display = 'none';
        loading.querySelector('p').style.display = 'flex';
        loading.querySelector('p').textContent = 'Em breve nossa equipe de vendas entrará em contato para te aauxiliar.'
        form.reset();
    }
});