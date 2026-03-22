document.querySelector("#btnenviar").addEventListener("click", function (event){
    event.preventDefault();
});

const check_or = document.querySelector("#ordenador");
const check_te = document.querySelector("#teclado");
const check_ra = document.querySelector("#raton");
const listaCesta = document.querySelector("#listaCesta");

check_or.addEventListener('change', function(event) {
    if(this.checked) {
        const li = document.createElement('li');
        li.textContent = 'Ordenador'
        li.id = 'cesta_ordenador'
        listaCesta.appendChild(li);
    }
    else {
        const existirOrdenador = document.querySelector("#cesta_ordenador");
        if(existirOrdenador) {
            listaCesta.removeChild(existirOrdenador);
        }
    }
});

check_te.addEventListener('change', function(event) {
    if(this.checked) {
        const li = document.createElement('li');
        li.textContent = 'Teclado'
        li.id = 'cesta_teclado'
        listaCesta.appendChild(li);
    }
    else {
        const existirTeclado = document.querySelector("#cesta_teclado");
        if(existirTeclado) {
            listaCesta.removeChild(existirTeclado);
        }
    }
});

check_ra.addEventListener('change', function(event) {
    if(this.checked) {
        const li = document.createElement('li');
        li.textContent = 'Ratón'
        li.id = 'cesta_raton'
        listaCesta.appendChild(li);
    }
    else {
        const existirRaton = document.querySelector("#cesta_raton");
        if(existirRaton) {
            listaCesta.removeChild(existirRaton);
        }
    }
});

const check_web = document.querySelector("#web");
const check_ges = document.querySelector("#gestion");
const check_est = document.querySelector("#estadisticas");

check_web.addEventListener('change', function(event) {
    if(this.checked) {
        const li = document.createElement('li');
        li.textContent = 'Página web'
        li.id = 'cesta_web'
        listaCesta.appendChild(li);
    }
    else {
        const existirWeb = document.querySelector("#cesta_web");
        if(existirWeb) {
            listaCesta.removeChild(existirWeb);
        }
    }
});

check_ges.addEventListener('change', function(event) {
    if(this.checked) {
        const li = document.createElement('li');
        li.textContent = 'Programa de gestión de datos'
        li.id = 'cesta_gestion'
        listaCesta.appendChild(li);
    }
    else {
        const existirGestion = document.querySelector("#cesta_gestion");
        if(existirGestion) {
            listaCesta.removeChild(existirGestion);
        }
    }
});

check_est.addEventListener('change', function(event) {
    if(this.checked) {
        const li = document.createElement('li');
        li.textContent = 'Gráficos y galerías'
        li.id = 'cesta_estadisticas'
        listaCesta.appendChild(li);
    }
    else {
        const existirEstadisticas = document.querySelector("#cesta_estadisticas");
        if(existirEstadisticas) {
            listaCesta.removeChild(existirEstadisticas);
        }
    }
});