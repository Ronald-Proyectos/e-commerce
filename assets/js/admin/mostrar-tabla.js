import { adminControllers } from "./controller.js"

const tabla = document.getElementById("tabla")
const template = document.getElementById("template").content
const fragmento = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
    adminControllers.obtenerTablaProductos().then((data) => {
        console.log(data)
        data.forEach((element) => {
            // Mostrar los productos en la tabla
            template.querySelector(".imagen img").src = element.url
            template.querySelector(".imagen img").alt = element.nombre
            template.querySelector(".categoria").textContent = element.categoria
            template.querySelector(".nombre").textContent = element.nombre
            template.querySelector(".precio").textContent = element.precio
            template.querySelector(".descripcion").textContent = element.descripcion

            // Agregar dat atributos a los botones de edit y delete
            template.querySelector(".edit").dataset.id = element.id
            template.querySelector(".edit").dataset.url = element.url
            template.querySelector(".edit").dataset.categoria = element.categoria
            template.querySelector(".edit").dataset.nombre = element.nombre
            template.querySelector(".edit").dataset.precio = element.precio
            template.querySelector(".edit").dataset.descripcion = element.descripcion
            template.querySelector(".delete").dataset.id = element.id
            template.querySelector(".delete").dataset.url = element.url
            template.querySelector(".delete").dataset.categoria = element.categoria
            template.querySelector(".delete").dataset.nombre = element.nombre
            template.querySelector(".delete").dataset.precio = element.precio
            template.querySelector(".delete").dataset.descripcion = element.descripcion

            // Clonando el template, el true es para que se clone con su contenido
            let clonar = document.importNode(template, true)
            fragmento.appendChild(clonar)
        })
        tabla.querySelector("tbody").appendChild(fragmento)
        
    })
    .catch((err) => console.log(err))
})