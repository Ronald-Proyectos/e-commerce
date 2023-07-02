const btnAgregar = document.querySelector(".btn-agregar")

const productos = "https://db-wbw6.onrender.com/productos"




const obtenerTodosLosProductos = async (dbURL) => {
    try {
        const container = document.querySelector(".box-productos")

        const data = await fetch(dbURL),
              productos = await data.json()

        if(!data.ok) throw new Error(`${data.status}: los productos no se cargaron, intentelo mas tarde.`)

        productos.forEach(({id, nombre, precio, url}) => {
            container.innerHTML += `
            <div id="${id}" class="product__card">
                <figure class="product-img">
                    <img src="${url}" alt="${nombre}">
                </figure>
                <p class="product-name">${nombre}</p>
                <p class="product-price">$ ${precio}</p>
                <a href="#" id="${id}" class="ver-producto">Ver producto</a>
                <i class="fa-solid fa-trash icon-delete"></i>
                <i class="fa-solid fa-pen icon-edit"></i>
            </div>
        `
        })
        console.log(productos)   
    } catch (error) {
        alert(error)
    }
}



document.addEventListener("DOMContentLoaded", () => {
    obtenerTodosLosProductos(productos)


    const url = new URL(window.location.href)
    const rol = url.searchParams.get("rol")
    
    if(url.searchParams.size !== 0){
        if(rol === "administrador"){
            document.querySelector(".btn-agregar").style.display = "block"
            document.querySelector(".btn-login").style.display = "none"
        }else{
            window.location.href = window.location.href = `../pages/todos-los-productos.html?rol=administrador`
        }
    }

    

})