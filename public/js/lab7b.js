window.onload = () => {
    const formulario3 = document.querySelector('#formulario3');
    let error = "", success = "";

    const ComprobarEnfermidades = () => {
        if(formulario3.enfermedad.value === '' || formulario3.enfermedad.value === 'Enfermedad'){
            formulario3.enfermedad.classList.add('error');
            error += 'La enfermedad no puede estar vacía \n';
            return error;
        }else{
            formulario3.enfermedad.classList.remove('error');
            success = true;
            return success;
        }
    }

    const ComprobarTiempoEnfermedad = () => {
        if(formulario3.tiempo.value === ''){
            formulario3.tiempo.classList.add('error');
            error += 'El tiempo no puede estar vacío \n';
            return error;
        }else{
            formulario3.tiempo.classList.remove('error');
            success = true;
            return success;
        }
    }

    const almacearDatos3 = (enfermedad,tiempo,detalles) => {
        let datos3 ={
            enfermedad: formulario3.enfermedad.value,
            tiempo: formulario3.tiempo.value,
            detalles: formulario3.detalles.value
        }
        localStorage.setItem("RegistroEnfermidad", JSON.stringify(datos3));
    }

    const relocacion3 = () => { window.location.href = 'lab7c'; }

    const enviar3 = (e) => {
        ComprobarEnfermidades()
        ComprobarTiempoEnfermedad()
        e.preventDefault();
        if (error === '') {
            almacearDatos3(formulario3.enfermedad.value, formulario3.tiempo.value, formulario3.detalles.value);
            relocacion3();
        } else {
            alert(error);
            e.preventDefault();
            error = "";
        }
    }

    formulario3.addEventListener('submit', enviar3);
}