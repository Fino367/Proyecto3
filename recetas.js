let recetas = [
    {
        nombre: "Costillas de cordero con puré de chirivía y salsa de grosellas",
        tiempo: "20 min",
        ingredientes: ["Costillas de cordero", "Chirivías", "Mantequilla", "Leche", "Grosellas frescas o salsa de grosellas", "Sal y pimienta"],
        preparacion: "Cocina las chirivías en agua con sal hasta que estén tiernas. Haz un puré con las chirivías, añadiendo mantequilla y leche para lograr una textura suave. Sazona las costillas de cordero con sal y pimienta y ásalas a tu gusto. Sirve las costillas sobre el puré de chirivía y acompaña con salsa de grosellas."
    },
    {
        nombre: "Ensalada César",
        tiempo: "15 min",
        ingredientes: ["Lechuga", "Pollo", "Croutones", "Queso parmesano", "Aderezo César"],
        preparacion: "Lava y corta la lechuga. Cocina y corta el pollo en tiras. Mezcla la lechuga con el pollo, los croutones y el queso parmesano. Añade el aderezo César y mezcla bien antes de servir."
    }
];

function buscar() {
    const name = document.getElementById('nombre').value.trim().toLowerCase();
    let recetaEncontrada = false;
    let receta;

    for (let i = 0; i < recetas.length; i++) {
        if (recetas[i].nombre.toLowerCase() === name) {
            receta = recetas[i];
            recetaEncontrada = true;
            break;
        }
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (recetaEncontrada) {
        const headDiv = document.createElement('div');
        headDiv.className = 'head';

        const tituloP = document.createElement('p');
        tituloP.className = 'c-tit';
        tituloP.textContent = receta.nombre;
        headDiv.appendChild(tituloP);

        const descrDiv = document.createElement('div');
        descrDiv.className = 'descr';

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = '<i class="fa-regular fa-clock"></i>';
        descrDiv.appendChild(itemDiv);

        const tiempoP = document.createElement('p');
        tiempoP.textContent = `: ${receta.tiempo}`;
        descrDiv.appendChild(tiempoP);

        headDiv.appendChild(descrDiv);
        resultadoDiv.appendChild(headDiv);

        const ingredDiv = document.createElement('div');
        ingredDiv.className = 'ingred';

        const ingredTituloP = document.createElement('p');
        ingredTituloP.className = 'c-tit';
        ingredTituloP.textContent = 'Ingredientes:';
        ingredDiv.appendChild(ingredTituloP);

        const ul = document.createElement('ul');
        ul.className = 'lista1';
        receta.ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ul.appendChild(li);
        });
        ingredDiv.appendChild(ul);
        resultadoDiv.appendChild(ingredDiv);

        const prepDiv = document.createElement('div');
        prepDiv.className = 'prep';

        const prepTituloH5 = document.createElement('h5');
        prepTituloH5.textContent = 'Preparación:';
        prepDiv.appendChild(prepTituloH5);

        const prepP = document.createElement('p');
        prepP.textContent = receta.preparacion;
        prepDiv.appendChild(prepP);
        resultadoDiv.appendChild(prepDiv);
    } else {
        const noEncontradoP = document.createElement('p');
        noEncontradoP.textContent = 'Receta no encontrada';
        resultadoDiv.appendChild(noEncontradoP);
    }
}