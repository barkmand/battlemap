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


    const sortBtn = document.querySelector(".sort-btn")

    sortBtn.addEventListener("click", sortCards)
    
    function sortCards(){
        if(document.querySelector(".initiative-card")){
            
            const cards = Array.from(
                document.querySelectorAll(".initiative-card")
            )

            cards.sort((a, b) => {
                const countA = Number(a.querySelector(".initiative-counter").textContent);
                const countB = Number(b.querySelector(".initiative-counter").textContent);
                    
                return countB - countA;
            });
            
            
            cards.forEach((card) => {initiativeMenu.appendChild(card)})

        }
    }
}