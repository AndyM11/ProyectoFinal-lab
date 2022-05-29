const cedula = document.querySelector('#cedula'),
    enviar = document.querySelector('#enviar'),
    error = document.querySelector('.error'),
    success = document.querySelector('.success');

// solo permite ingrea numeros
cedula.addEventListener('keypress', (e) => {
    if(e.keyCode < 48 || e.keyCode > 57) {
        e.preventDefault();
    }
});


// solo me permite ingresar 11 numeros
cedula.addEventListener('keyup', (e) => {
    if(cedula.value.length > 11) {
        cedula.value = cedula.value.substring(0, 11);
    }
});

// algoritmo de luhn
const validarCedula = (cedula) => {
 //consumir un api para hacer un post con la cedula
    const url = 'https://server-modulo10.vercel.app/comprobar';
    const data = {
        cedula: cedula
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(url, options)
        .then(response => response.json())
        .then(response => { // si la cedula es valida
            if(response) {
                success.style.display = 'block';
                error.style.display = 'none';
            } else {
                error.style.display = 'block';
                success.style.display = 'none';
            }
        });
}

// validar cedula
enviar.addEventListener('click', (e) => {
    e.preventDefault();
    if(validarCedula(cedula.value)) {
        success.classList.remove('active');
        error.classList.add('active');
    } else {
        error.classList.remove('active');
        success.classList.add('active');
    }
}
);