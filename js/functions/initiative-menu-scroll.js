export function initiativeMenuScroll(){
    const initiativeMenu = document.querySelector(".initiative-menu")

    initiativeMenu.addEventListener("wheel", (e) => {
        e.preventDefault()
        initiativeMenu.scrollLeft += e.deltaY;
    })
}