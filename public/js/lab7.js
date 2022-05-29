window.onload = () => {
    const formulario = document.querySelector('#formulario');
    let error = "", success = "";

    //comprobar inputs
    const ComprobarNombre = () => {
        if (formulario.nombre.value === '') {
            formulario.nombre.classList.add('error');
            error += 'El nombre no puede estar vacío \n';
            return error;
        } else {
            formulario.nombre.classList.remove('error');
            success = true;
            return success;
        }
    }

    const ComprobarApellido = () => {
        if (formulario.apellido.value === '') {
            formulario.apellido.classList.add('error');
            error += 'El apellido no puede estar vacío \n';
            return error;
        } else {
            formulario.apellido.classList.remove('error');
            success = true;
            return success;
        }
    }

    const ComprobarEdad = () => {
        if (formulario.edad.value === '') {
            formulario.edad.classList.add('error');
            error += 'La edad no puede estar vacía \n';
            return error;
            //si la edad es diferente de un número
        } else if (isNaN(formulario.edad.value)) {
            formulario.edad.classList.add('error');
            error += 'La edad debe ser un número \n';
            return error;
        } else {
            formulario.edad.classList.remove('error');
            success = true;
            return success;
        }
    }

    const ComprobarEmail = () => {
        if (formulario.email.value === '') {
            formulario.email.classList.add('error');
            error += 'El email no puede estar vacío \n';
            return error;
        } else if (formulario.email.value.indexOf('@') === -1) {
            formulario.email.classList.add('error');
            error += 'El email no es válido \n';
            return error;
        } else {
            formulario.email.classList.remove('error');
            success = true;
            return success;
        }
    }

    const ComprobarTelefono = () => {
        if (formulario.telefono.value === '') {
            formulario.telefono.classList.add('error');
            error += 'El teléfono no puede estar vacío \n';
            return error;
            //si el teléfono es diferente de un número
        } else if (isNaN(formulario.telefono.value)) {
            formulario.telefono.classList.add('error');
            error += 'El teléfono debe ser un número \n';
            return error;
        } else {
            formulario.telefono.classList.remove('error');
            success = true;
            return success;
        }
    }

    const ComprobarSexo = () => {
        if (formulario.sexo.value === '' || formulario.sexo.value === 'Sexo') {
            formulario.sexo.classList.add('error');
            error += 'El sexo no puede estar vacío \n';
            return error;
        } else {
            formulario.sexo.classList.remove('error');
            success = true;
            return success;
        }
    }

    const relocacion = () => { window.location.href = 'lab7a'; }

    const almacearDatos = (nombre, apellido, edad, email, telefono, direccion, sexo) => {
        let datos = {
            nombre: formulario.nombre.value,
            apellido: formulario.apellido.value,
            edad: formulario.edad.value,
            email: formulario.email.value,
            telefono: formulario.telefono.value,
            direccion: formulario.direccion.value,
            sexo: formulario.sexo.value,
        }
        localStorage.setItem("datosPersonales", JSON.stringify(datos));


    }

    const enviar = (e) => {
        ComprobarNombre()
        ComprobarApellido()
        ComprobarEdad()
        ComprobarEmail()
        ComprobarTelefono()
        ComprobarSexo()
        e.preventDefault();
        if (error === '') {
            almacearDatos(formulario.nombre.value, formulario.apellido.value, formulario.edad.value, formulario.email.value, formulario.telefono.value, formulario.direccion.value, formulario.sexo.value);
            relocacion();
        } else {
            alert(error);
            e.preventDefault();
            error = "";
        }
    }

    formulario.addEventListener('submit', enviar);
    }



