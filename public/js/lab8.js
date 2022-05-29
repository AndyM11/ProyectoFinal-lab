window.onload = () => {
    const formulario = document.querySelector('#formulario');
    let nombre = [];
    let cantidad = [];

    const comprobarNombre = () => {
        if (formulario.nombre.value === "") {
            formulario.nombre.classList.add('error');
            return false;
        } else {
            formulario.nombre.classList.remove('error');
            return true;
        }
    }

    const comprobarCantidad = () => {
        if (formulario.cantidad.value === "") {
            formulario.cantidad.classList.add('error');
            return false;
        } else {
            formulario.cantidad.classList.remove('error');
            return true;
        }
    }

    const enviar = (e) => {
        comprobarNombre();
        comprobarCantidad();
        if (formulario.nombre.value === "" || formulario.cantidad.value === "") {
            e.preventDefault();
            alert('Tienes que rellenar todos los campos los campos obligatorios');
        } else {

            e.preventDefault();
            nombre.push(formulario.nombre.value);
            cantidad.push(formulario.cantidad.value);
            console.log(nombre);
            console.log(cantidad);
            formulario.nombre.value = "";
            formulario.cantidad.value = "";


        }

    }

    const otraEntidad = document.querySelector('#otraEntidad');
    otraEntidad.addEventListener('click', () => {
        grafico(nombre, cantidad);
    });


    formulario.addEventListener('submit', enviar);

    


    const grafico = (nombre, cantidad) => {

        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Grafico  de entidades', 'Cantidad'],
                [nombre[0], parseFloat( cantidad[0])],
                [nombre[1], parseFloat( cantidad[1])],
                [nombre[2], parseFloat( cantidad[2])]
            ]);
            var options = {
                title: 'Entidades',
                pieHole: 0.4,
            };
        console.log(data);

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
        }
    }
}