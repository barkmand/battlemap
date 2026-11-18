export function initiativeMenu(){
    const initiativeMenu = document.querySelector(".initiative-menu")

    initiativeMenu.addEventListener("wheel", (e) => {
        e.preventDefault()
        initiativeMenu.scrollLeft += e.deltaY;
    })

    const menuBtn = document.querySelector(".initiative-btn")
    const smallerBtn = document.querySelector(".smaller-btn")
    const smallerBtnIcon = document.querySelector(".smaller-btn-icon")

    smallerBtn.addEventListener("click", toggleSmaller)

    function toggleSmaller() {
        smallerBtnIcon.classList.toggle("fa-eye")
        smallerBtnIcon.classList.toggle("fa-eye-slash")

        menuBtn.classList.toggle("smaller")
        initiativeMenu.classList.toggle("smaller")
    }
}