const boxProducto = document.querySelector(".ver-productos"),
      productosSimilares = document.querySelector(".similar-products"),
      templateProducto = document.querySelector("#template-producto").content,
      fragmentoProducto = document.createDocumentFragment(),
      templateSimilarProducto = document.querySelector("#template-similar-products").content,
      fragmentoSimilarProducto = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", async () => {
    const url = new URL(window.location.href),
          id = url.searchParams.get("id")

    try {

        const res = await fetch(`https://db-wbw6.onrender.com/productos/${id}`)
        const data = await res.json()

        if(!res.ok) throw new Error(`${res.status}: El producto no se cargo.`)
 
        // Mostrar la informacion del producto
        templateProducto.querySelector(".img img").src= data.url
        templateProducto.querySelector(".img img").alt= data.nombre
        templateProducto.querySelector(".product-name").textContent = data.nombre
        templateProducto.querySelector(".product-price").textContent = `$ ${data.precio}`
        templateProducto.querySelector(".product-description").textContent = data.descripcion

        let clonar = document.importNode(templateProducto, true)
        fragmentoProducto.appendChild(clonar)

        boxProducto.querySelector(".box-producto").appendChild(fragmentoProducto)

        // Mostrar productos similares
        const res2 = await fetch(`https://db-wbw6.onrender.com/productos`)
        const data2 = await res2.json()

        data2.forEach((producto) => {
            if(producto.id !== data.id){
                if(producto.categoria === data.categoria){
                    templateSimilarProducto.querySelector(".img img").src = producto.url
                    templateSimilarProducto.querySelector(".img img").alt = producto.nombre
                    templateSimilarProducto.querySelector(".similar-name").textContent = producto.nombre
                    templateSimilarProducto.querySelector(".similar-price").textContent = producto.precio
                    templateSimilarProducto.querySelector(".similar-product").href = `../pages/ver-producto.html?id=${producto.id}`
    
                    let clonar = document.importNode(templateSimilarProducto, true)
                    fragmentoSimilarProducto.appendChild(clonar)
                }
            }     
        })
        productosSimilares.querySelector(".box-similar-products").appendChild(fragmentoSimilarProducto)
        
    } catch (error) {
        alert(error)
    }
})