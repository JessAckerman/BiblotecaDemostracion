/* =========================================================
   BIBLIOTECA DIGITAL - script.js
   Autora: Jess
   ---------------------------------------------------------
   Funciones principales:
   - Arreglo con los libros
   - Mostrar los libros en el catálogo
   - Calcular estadísticas
   - Registrar, buscar y filtrar libros
========================================================= */


/* =========================================================
   1. ARREGLO DE LIBROS (al menos 6)
========================================================= */
const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        categoria: "Novela",
        disponible: true
    },
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        categoria: "Clásico",
        disponible: false
    },
    {
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Infantil",
        disponible: true
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ciencia ficción",
        disponible: true
    },
    {
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        categoria: "Misterio",
        disponible: false
    },
    {
        titulo: "Rayuela",
        autor: "Julio Cortázar",
        categoria: "Novela",
        disponible: true
    }
];


/* =========================================================
   2. REFERENCIAS AL HTML (conectar JS con el HTML)
========================================================= */
const listaLibros         = document.getElementById("listaLibros");
const mensajeVacio         = document.getElementById("mensajeVacio");

const totalLibros          = document.getElementById("totalLibros");
const librosDisponibles    = document.getElementById("librosDisponibles");
const librosPrestados      = document.getElementById("librosPrestados");

const formLibro            = document.getElementById("formLibro");
const inputBusqueda        = document.getElementById("busqueda");
const filtroDisponibilidad = document.getElementById("filtroDisponibilidad");


/* =========================================================
   3. FUNCIÓN PARA MOSTRAR LOS LIBROS
   Recibe una lista y crea una tarjeta por cada libro.
========================================================= */
function mostrarLibros(lista) {

    // Limpiar el catálogo antes de volver a dibujarlo
    listaLibros.innerHTML = "";

    // Si no hay libros que mostrar, enseñamos el mensaje
    if (lista.length === 0) {
        mensajeVacio.textContent = "No se encontraron libros.";
        mensajeVacio.style.display = "block";
        return;
    }

    // Ocultar el mensaje cuando sí hay libros
    mensajeVacio.style.display = "none";

    // Crear una tarjeta por cada libro
    lista.forEach(function (libro) {

        const card = document.createElement("div");
        card.className = "cardLibro";

        // Estado disponible / prestado
        const claseEstado = libro.disponible ? "disponible" : "prestado";
        const textoEstado = libro.disponible ? "Disponible" : "Prestado";

        card.innerHTML = `
            <h3>${libro.titulo}</h3>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Categoría:</strong> ${libro.categoria}</p>
            <span class="estado ${claseEstado}">${textoEstado}</span>
        `;

        listaLibros.appendChild(card);
    });
}


/* =========================================================
   4. FUNCIÓN DE ESTADÍSTICAS
   Cuenta el total, los disponibles y los prestados.
========================================================= */
function actualizarEstadisticas() {

    const total = libros.length;

    // Contamos cuántos están disponibles
    const disponibles = libros.filter(libro => libro.disponible).length;

    // El resto están prestados
    const prestados = total - disponibles;

    // Mostramos los números en el HTML
    totalLibros.textContent       = total;
    librosDisponibles.textContent = disponibles;
    librosPrestados.textContent   = prestados;
}


/* =========================================================
   5. FILTRO + BÚSQUEDA
   Aplica lo escrito en el buscador y el filtro seleccionado.
========================================================= */
function aplicarFiltros() {

    const texto = inputBusqueda.value.toLowerCase().trim();
    const filtro = filtroDisponibilidad.value;

    const resultado = libros.filter(function (libro) {

        // Coincide con el texto en título o autor
        const coincideTexto =
            libro.titulo.toLowerCase().includes(texto) ||
            libro.autor.toLowerCase().includes(texto);

        // Coincide con el filtro de disponibilidad
        let coincideFiltro = true;
        if (filtro === "disponible") coincideFiltro = libro.disponible;
        if (filtro === "prestado")   coincideFiltro = !libro.disponible;

        return coincideTexto && coincideFiltro;
    });

    mostrarLibros(resultado);
}


/* =========================================================
   6. REGISTRAR UN NUEVO LIBRO
========================================================= */
formLibro.addEventListener("submit", function (evento) {

    evento.preventDefault(); // Evita que la página se recargue

    // Creamos el nuevo libro con los datos del formulario
    const nuevoLibro = {
        titulo: document.getElementById("titulo").value.trim(),
        autor: document.getElementById("autor").value.trim(),
        categoria: document.getElementById("categoria").value.trim(),
        disponible: true // Los libros nuevos entran como disponibles
    };

    // Lo agregamos al arreglo
    libros.push(nuevoLibro);

    // Actualizamos la vista
    actualizarEstadisticas();
    aplicarFiltros();

    // Limpiamos el formulario
    formLibro.reset();
});


/* =========================================================
   7. EVENTOS DE BÚSQUEDA Y FILTRO
========================================================= */
inputBusqueda.addEventListener("input", aplicarFiltros);
filtroDisponibilidad.addEventListener("change", aplicarFiltros);


/* =========================================================
   8. INICIO
   Mostramos el catálogo apenas carga la página.
========================================================= */
mostrarLibros(libros);
actualizarEstadisticas();
