const obtenerTodosLosProductos = async (selector) => {
    try {
        const data = await fetch("https://db-wbw6.onrender.com/productos"),
              productos = await data.json()

        if(!data.ok) throw new Error(`${data.status}: los productos no se cargaron, intentelo mas tarde.`)

        productos.forEach(({id, nombre, precio, url}) => {
            selector.innerHTML += `
            <div id="${id}" class="product__card">
                <figure class="product-img">
                    <img src="${url}" alt="${nombre}">
                </figure>
                <p class="product-name">${nombre}</p>
                <p class="product-price">$ ${precio}</p>
                <a href="#" id="${id}" class="ver-producto">Ver producto</a>
            </div>
        `
        })
        console.log(productos)   
    } catch (error) {
        alert(error)
    }
}

const obtenerTablaProductos = () => fetch("https://db-wbw6.onrender.com/productos").then((res) => res.ok ? res.json() : Promise.reject(res))


const nuevoProducto = async (url, categoria, nombre, precio, descripcion) => {
    try {
        const data = await fetch("https://db-wbw6.onrender.com/productos", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({ url, categoria, nombre, precio, descripcion })
        })

        if(!data.ok) throw new Error(`${data.status}: no se guardo el registro.`)

        window.location.href = "../pages/registro-exitoso.html"
    

    } catch (error) {
        alert(error)
    }
}


export const adminControllers = {
    obtenerTodosLosProductos,
    obtenerTablaProductos,
    nuevoProducto
}