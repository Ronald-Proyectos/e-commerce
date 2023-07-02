import { adminControllers } from "./controller.js"

const container = document.querySelector(".box-productos")


document.addEventListener("DOMContentLoaded", () => {
    const url = new URL(window.location.href)
    const rol = url.searchParams.get("rol")
    
    if(url.searchParams.size !== 0){
        if(rol === "administrador"){
            document.querySelector(".btn-agregar").style.display = "block"
            document.querySelector(".btn-login").style.display = "none"
            document.querySelector(".btn-administrador").style.display = "block"
        }else{
            window.location.href = window.location.href = `../pages/todos-los-productos.html?rol=administrador`
        }
    }

    adminControllers.obtenerTodosLosProductos(container)
})