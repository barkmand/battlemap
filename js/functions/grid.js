export function grid(){
    const tiles = document.querySelectorAll(".grid-tile")

    tiles.forEach((tile) => {
        tile.addEventListener("mousedown", () => {
            tile.classList.toggle("active")
        })
    })
    let toggleTilesConfirmation = false
    window.addEventListener("keydown", (e) => {
        if(e.key == "Escape"){
            if(toggleTilesConfirmation){
                tiles.forEach((tile) => {
                    tile.classList.remove("active")
                })
                toggleTilesConfirmation = false
            }else{
                toggleTilesConfirmation = true
                function resetToggle(){
                    toggleTilesConfirmation = false
                }
                setTimeout(resetToggle, 300)
            }
    }
    })
}