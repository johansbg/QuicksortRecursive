var numeroDeOrdenamiento = 1;

function quicksort(array) {

    var randomPlace = Math.floor(Math.random() * array.length),
        pivot = array[randomPlace],
        left = [],
        right = [],
        i;

    for (i = 0; i < array.length; i++) {
        (array[i] < pivot ? left : right).push(array[i]);
    }
    console.log(pivot, JSON.stringify(array), JSON.stringify(left), JSON.stringify(right));
 
    //Insert HTML

    var newDiv = document.createElement("div");// div creado.
    var newP = document.createElement("p");//p creado.
    newP.className="resultados"//añade className al p creado.
    newDiv.appendChild(newP);
    var newContent = document.createTextNode("Vector: "+JSON.stringify(array));//añade texto al p creado.
    //Se repite el proceso en forma de mostrar los resultados
    newP.appendChild(newContent); 
    var newP = document.createElement("p");
    newP.className="resultados"
    newDiv.appendChild(newP);
    var newContent = document.createTextNode("Pivote: "+pivot);
    newP.appendChild(newContent); 
    var newP = document.createElement("p");
    newP.className="resultados"
    newDiv.appendChild(newP);
    var newContent = document.createTextNode("Vector de la Izquierda: "+JSON.stringify(left)+"   |    Vector de la derecha: "+JSON.stringify(right));
    newP.appendChild(newContent); 
    var currentDiv = document.getElementById("js");
    var parentDiv = document.getElementById("padre");
    //Se inserta todo el bloque creado encima de la etiqueta div con ID = js
    parentDiv.insertBefore(newDiv, currentDiv);


    // prevent looping forever
    if (!left.length && right.every(function (v) { return v === pivot; })) {
        return right;
    }

    if (left.length <= 1 && right.length <= 1) {
        return left.concat(right);
    }
    if (left.length <= 1) {
        return left.concat(quicksort(right));
    }
    if (right.length <= 1) {
        return quicksort(left).concat(right);
    }
    
    return quicksort(left).concat(quicksort(right));
}

function startQuicksort(){
    //Titulo de la busqueda
    var newDiv = document.createElement("div");//añade div .
    newDiv.className = "tituloBusqueda"
    var newContent = document.createTextNode("ORDENAMIENTO NUMERO "+numeroDeOrdenamiento);//añade texto al div creado.
    newDiv.appendChild(newContent); 
    
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("js");
    var parentDiv = document.getElementById("padre");
    //Se inserta todo el bloque creado encima de la etiqueta div con ID = js
    parentDiv.insertBefore(newDiv, currentDiv);


    var inputVal = document.getElementById("array").value;
    var arr = inputVal.split`,`.map(x=>+x)
    var resultado = quicksort(arr)
    console.log(resultado)

    //Añadimos el resultado
    var newDiv = document.createElement("div");
    var newP = document.createElement("p");
    newP.className="resultadosFinales"
    newDiv.appendChild(newP);
    var newContent = document.createTextNode("Vector Ordenado:");
    newP.appendChild(newContent); 
    var newP = document.createElement("p");
    newP.className="resultadosFinales"
    newDiv.appendChild(newP);
    var newContent = document.createTextNode("["+resultado+"]");
    newP.appendChild(newContent);
    
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("js");
    var parentDiv = document.getElementById("padre");
    parentDiv.insertBefore(newDiv, currentDiv);
    numeroDeOrdenamiento++;
}
