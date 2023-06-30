const modalSearch = document.querySelector(".search-modal")



document.addEventListener("click", (e) => {
    if(e.target.matches(".box-search i")) modalSearch.classList.toggle("show")
})