var estudiantes = [
    {
        "Codigo": "001",
        "Nombre": "Roberto Bravo",
        "Nota": 9
    },

    {
        "Codigo": "002",
        "Nombre": "María Jose Luna",
        "Nota": 8
    },

    {
        "Codigo": "003",
        "Nombre": "Bruno Bravo",
        "Nota": 9
    },

    {
        "Codigo": "004",
        "Nombre": "Emilio Bravo",
        "Nota": 8
    },

    {
        "Codigo": "005",
        "Nombre": "Nicolás Bravo",
        "Nota": 8
    },

    {
        "Codigo": "006",
        "Nombre": "Nancy Torres",
        "Nota": 7
    },

    {
        "Codigo": "007",
        "Nombre": "Alex Bravo",
        "Nota": 7
    },

    {
        "Codigo": "008",
        "Nombre": "Abby Bravo",
        "Nota": 7
    },

    {
        "Codigo": "009",
        "Nombre": "Mariuxi Cuadrado",
        "Nota": 6
    },

    {
        "Codigo": "010",
        "Nombre": "Víctor Rivera",
        "Nota": 10
    }
];


// Función para crear tabla
function crearTabla() {
    document.getElementById("tabladiv").innerHTML = "";

    var cols = [];
    for (var i = 0; i < estudiantes.length; i++) {
        for (var key in estudiantes[i]) {
            if (cols.indexOf(key) === -1) {
                cols.push(key);
            }
        }
    }

    var table = document.createElement("table");
    var tr = table.insertRow(-1);

    //Encabezado de la Tabla
    for (var i = 0; i < cols.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = cols[i];
        tr.appendChild(th);
    }

    
    for (var i = 0; i < estudiantes.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = estudiantes[i][cols[j]];
            tr.appendChild(tabCell);
        }
    }

    var divContainer = document.getElementById("tabladiv");
    divContainer.appendChild(table);

}




function CalcularPromedio(json) {
    var suma = 0;
    var res = "";

    for (var i = 0; i < json.length; i++) {
        suma += json[i].Nota;
    }
    var cant = i;
    res = suma / cant;
    document.getElementById("resultado").innerHTML = "El Promedio de las Notas es: " + res;
}

function promedio() {
    CalcularPromedio(estudiantes);
}

function mayor(json) {
    var aux;
    for (var i = 1; i <= json.length; i++) {
        for (var j = 0; j < json.length - i; j++) {
            if (json[j].Nota < json[j + 1].Nota) {
                aux = json[j];
                json[j] = json[j + 1];
                json[j + 1] = aux;
            }
        }
    }
    document.getElementById("resultado").innerHTML = `La nota mayor es ${json[0].Nota} y corresponde al estudiante ${json[0].Nombre}`;
}

function notaMayor() {
    mayor(estudiantes);
}

function menor(json) {
    var aux;
    for (var i = 1; i <= json.length; i++) {
        for (var j = 0; j < json.length - i; j++) {
            if (json[j].Nota > json[j + 1].Nota) {
                aux = json[j];
                json[j] = json[j + 1];
                json[j + 1] = aux;
            }
        }
    }
    document.getElementById("resultado").innerHTML = `La nota menor es ${json[0].Nota} y corresponde al estudiante ${json[0].Nombre}`;
}

function notaMenor() {
    menor(estudiantes);
}
