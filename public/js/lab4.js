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
    let numero = cedula.substring(0, cedula.length - 1);
    numero = numero.split('').reverse().join('');
    let digito = cedula.substring(cedula.length - 1, cedula.length);
    let digito_suma = 0;
    let total = 0;
    for(let i = 0; i < numero.length; i++) {
        if(i % 2 == 0) {
            let aux = Number(numero[i]) * 2;
            if(aux >= 10) aux -= 9;
            digito_suma += aux;
        } else {
            digito_suma += Number(numero[i]);
        }
    }
    total = digito_suma * 9;
    total = total % 10;
    if(total != digito) {
        return false;
    } else {
        return true;
    }
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