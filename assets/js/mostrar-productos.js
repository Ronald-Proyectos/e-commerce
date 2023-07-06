export default async function obtenerProductos(dbURL){
    try{
        const containerCard = document.querySelectorAll(".products__cards")

        const res = await fetch(dbURL),
              json = await res.json()

        if(!res.ok) throw new Error(`${res.status}: los productos no se cargaron, intentelo mas tarde.`)

        containerCard.forEach((container) => {
            let card = ""

            json.forEach(({id, nombre, categoria, precio, url}) => {
                if(container.dataset.category === categoria){
                    card += `
                    <div id="${id}" class="product__card">
                        <figure class="product-img">
                            <img src="${url}" alt="${nombre}">
                        </figure>
                        <p class="product-name">${nombre}</p>
                        <p class="product-price">$ ${precio}</p>
                        <a href="../pages/ver-producto.html?id=${id}" id="${id}" class="ver-producto">Ver producto</a>
                    </div>
                `
                } 
            }) 
            container.innerHTML = card
        }) 

    }catch(err){
        alert(err)
    }
}

