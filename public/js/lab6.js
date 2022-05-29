window.onload = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/resources/js/countries.json', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let paises = JSON.parse(xhr.responseText);
            let contenido = "";
            for (let i = 0; i < paises.countries.length; i++) {
                contenido += `<option value="${paises.countries[i].name}"> ${paises.countries[i].name} </option>`;
            }
            document.querySelector('#pais').innerHTML = contenido;
        }
    }
    xhr.send();

    const formulario = document.querySelector('#formulario');

    const comprobarNumero = () => {
        if (formulario.telefono.value === '') {
            formulario.telefono.classList.add('error');
        } else if (isNaN(formulario.telefono.value)) {
            formulario.telefono.classList.add('error');
        } else {
            formulario.telefono.classList.remove('error');
        }
    }

    const ComprobarEmail = () => {
        if (formulario.email.value.indexOf('@') === -1) {
            formulario.email.classList.add('error');
        } else {
            formulario.email.classList.remove('error');
        }
    }

    const comprobarNombre = () => {
        if (formulario.nombre.value === '') {
            formulario.nombre.classList.add('error');
        } else {
            formulario.nombre.classList.remove('error');
        }
    }

    const contenedorQR = document.querySelector('#contenedorQR'),
        QR = new QRCode(contenedorQR);

    const generarQR = (valor) => {
        QR.makeCode(valor);
    }

    const enviar = (e) => {
        comprobarNombre()
        comprobarNumero()
        ComprobarEmail()
        if (formulario.nombre.value === '' || formulario.telefono.value === '' || formulario.email.value.indexOf('@') === -1) {
            e.preventDefault();
            alert('Tienes que rellenar todos los campos los campos obligatorios');
        } else {
            e.preventDefault();
            //generar codigo QR que abra la app de contactos
            QR.makeCode(`BEGIN:VCARD VERSION:3.0 N:${formulario.nombre.value} FN:${formulario.nombre.value} TEL;WORK;VOICE:${formulario.telefono.value} EMAIL:${formulario.email.value} END:VCARD`.trim());
            
        }
    }

    formulario.addEventListener('submit', enviar);
}