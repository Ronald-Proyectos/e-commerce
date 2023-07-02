export default function modalSearch(selector){
    document.addEventListener("click", (e) => {
        if(e.target.matches(".box-search i")) selector.classList.toggle("show")
    })
}