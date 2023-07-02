import obtenerProductos from "./mostrar-productos.js"
import modalSearch from "./search-modal.js"

const searchModal = document.querySelector(".search-modal")

const productos = "https://db-wbw6.onrender.com/productos"

modalSearch(searchModal)

document.addEventListener("DOMContentLoaded", () => {
    obtenerProductos(productos)
})