window.onload = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/resources/js/data.json', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            data = JSON.parse(xhr.responseText);
            contenido = "";
            for (let i = 0; i < data.rutas.length; i++) {
                contenido += `<li><a href="${data.rutas[i].url}" class="${data.rutas[i].class}">${data.rutas[i].nombre}</a></li>`;
            }
            document.querySelector('#ul').innerHTML = contenido;
        }

        let opcion = "",
            titular = "";
        titular = `<h3>${data.resumenes[0].contenido}</h3>`;

        for (i = 1; i < data.resumenes.length; i++) {
            opcion += `<li><a href="${data.resumenes[i].url}">${data.resumenes[i].nombre}</a></li>`;

        }

        document.querySelector('#submenu').innerHTML = titular + opcion;
    }
    xhr.send();

    const lista = document.querySelector("#ul"),
            submenu = document.querySelector("#submenu");
        lista.addEventListener("mouseover", (event) => {
            if(event.target.innerHTML === "Resumenes"){
            submenu.classList.toggle("active");
            event.preventDefault();
            }else{
                submenu.classList.remove("active");
                event.preventDefault();
            }
    
        });
};