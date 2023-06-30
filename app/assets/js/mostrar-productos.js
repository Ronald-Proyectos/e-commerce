export default async function obtenerProductos(url){
    try{

        const res = await fetch(url),
              json = await res.json()

        if(!res.ok) throw new Error(`${res.status}: los productos no se cargaron, intentelo mas tarde.`)

        console.log(json)

    }catch(err){
        alert(err)
    }
}

