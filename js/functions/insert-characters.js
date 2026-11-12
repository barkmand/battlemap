export function insertCharacters(){
    const charactersMenu = document.querySelector(".characters-menu")
    const toggleBtn = document.querySelector(".characters-btn")
    const toggleBtnIcon = document.querySelector(".characters-btn-icon")

    toggleBtn.addEventListener("click", () => {
        charactersMenu.classList.toggle("active")
        toggleBtn.classList.toggle("active")
        function toggleBtnInactive(){
            toggleBtn.classList.toggle("inactive")
        }
        if(!toggleBtn.classList.contains("inactive")){
            setTimeout(toggleBtnInactive, 350)
        }else{
            toggleBtnInactive()
        }
        toggleBtnIcon.classList.toggle("fa-angle-right")
        toggleBtnIcon.classList.toggle("fa-angle-left")
    })
    
    const characterCards = document.querySelectorAll(".character-card")

    characterCards.forEach((card, index) => {
        card.addEventListener("mousedown", (clickEvent) => {
            let selectedCard = document.getElementById(characterCards[index])
            console.log(selectedCard)
        })
    })
    

}