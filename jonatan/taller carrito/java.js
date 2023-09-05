document.addEventListener("DOMContentLoaded", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const listaCursos = document.getElementById("lista-cursos");
    const carritoContainer = document.getElementById("lista-carrito");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
    const cantidadTotalContainer = document.getElementById("cantidad-total");
    const precioTotalContainer = document.getElementById("precio-total");

    // Llamar a mostrarCarrito al cargar la página
    mostrarCarrito();

    // Agregar evento para agregar al carrito
    listaCursos.addEventListener("click", agregarAlCarrito);

    // Agregar evento para vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    // Agregar evento para eliminar un curso del carrito
    carritoContainer.addEventListener("click", e => {
        if (e.target.classList.contains("borrar-curso")) {
            const cursoId = e.target.getAttribute("data-id");
            eliminarCurso(cursoId);
        }
    });

    function agregarAlCarrito(e) {
        e.preventDefault();
        if (e.target.classList.contains("agregar-carrito")) {
            const cursoSeleccionado = e.target.parentElement.parentElement;
            obtenerInfoCurso(cursoSeleccionado);
        }
    }

    function obtenerInfoCurso(curso) {
        const cursoInfo = {
            imagen: curso.querySelector(".imagen-curso").src,
            nombre: curso.querySelector("h4").textContent,
            precio: parseFloat(curso.querySelector(".precio span").textContent),
            id: curso.querySelector(".agregar-carrito").getAttribute("data-id"),
        };
        agregarCursoACarrito(cursoInfo);
    }

    function agregarCursoACarrito(curso) {
        const cursoExistente = carrito.find(item => item.id === curso.id);
        if (cursoExistente) {
            cursoExistente.cantidad++;
        } else {
            curso.cantidad = 1;
            carrito.push(curso);
        }
        guardarCarritoEnLocalStorage();
        mostrarCarrito();
    }

    function mostrarCarrito() {
        carritoContainer.innerHTML = "";

        let cantidadTotal = 0;
        let precioTotal = 0;

        carrito.forEach(curso => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${curso.imagen}" width="100"></td>
                <td>${curso.nombre}</td>
                <td>${curso.precio}</td>
                <td>${curso.cantidad}</td>
                <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
            `;
            carritoContainer.appendChild(row);

            cantidadTotal += curso.cantidad;
            precioTotal += curso.precio * curso.cantidad;
        });

        cantidadTotalContainer.textContent = cantidadTotal;
        precioTotalContainer.textContent = `$${precioTotal.toFixed(2)}`;
    }

    function eliminarCurso(id) {
        carrito = carrito.filter(curso => curso.id !== id);
        guardarCarritoEnLocalStorage();
        mostrarCarrito();
    }

    function vaciarCarrito() {
        carrito.length = 0;
        guardarCarritoEnLocalStorage();
        mostrarCarrito();
    }

    function guardarCarritoEnLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
});
