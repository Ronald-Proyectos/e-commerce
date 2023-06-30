import obtenerProductos from "./mostrar-productos.js"

const productos = "https://db-wbw6.onrender.com/productos"

document.addEventListener("DOMContentLoaded", () => {
    obtenerProductos(productos)
})