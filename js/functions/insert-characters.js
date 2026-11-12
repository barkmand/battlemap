export function insertCharacters(){
    const charactersMenu = document.querySelector(".insert-characters")
    const toggleBtn = document.querySelector(".characters-btn")
    const toggleBtnIcon = document.querySelector(".characters-btn-icon")

    toggleBtn.addEventListener("click", () => {
        charactersMenu.classList.toggle("active")
        toggleBtn.classList.toggle(".active")
        toggleBtnIcon.classList.toggle("fa-angle-right")
        toggleBtnIcon.classList.toggle("fa-angle-left")
    })
}