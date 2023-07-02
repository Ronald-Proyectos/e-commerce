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


export const adminControllers = {
    obtenerTodosLosProductos
}