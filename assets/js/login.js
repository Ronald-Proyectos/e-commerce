import modalSearch from "./search-modal.js"

const searchModal = document.querySelector(".search-modal")

modalSearch(searchModal)


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    const rol = "administrador"

    window.location.href = `../pages/todos-los-productos.html?rol=${rol}`
})