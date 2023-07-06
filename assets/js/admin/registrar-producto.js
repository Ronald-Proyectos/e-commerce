import { adminControllers } from "./controller.js"

const imagePreview = document.getElementById('img-preview')
const imageUploader = document.getElementById('img-uploader')
const imageUploadbar = document.getElementById('img-upload-bar')
const form = document.querySelector("form")
const btnOK = document.querySelector(".box-response button")
const boxResponse = document.querySelector(".box-response")
const btnAgregar = document.querySelector(".btn-agregar-nuevo")

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dkpoxuxs6/image/upload`
const CLOUDINARY_UPLOAD_PRESET = 'm77txhsx'

imageUploader.addEventListener('change', async (e) => {
    try {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

        const res = await axios.post(
            CLOUDINARY_URL,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress (e) {
                    let progress = Math.round((e.loaded * 100.0) / e.total)
                    imageUploadbar.setAttribute('value', progress)        
                }
            }
        );

        imagePreview.src = res.data.secure_url
    } catch (error) {
        alert("Error " + error.message)
    }
})


form.addEventListener("submit", (e) => {
    e.preventDefault()


        const url = imagePreview.src
        const categoria = e.target.categoria.value
        const nombre = e.target.nombre.value
        const precio = e.target.precio.value
        const descripcion = e.target.descripcion.value

        adminControllers.nuevoProducto(url, categoria, nombre, precio, descripcion)

        imagePreview.src = ""
        form.reset()
})

btnOK.addEventListener("click", () => boxResponse.classList.remove("show"))