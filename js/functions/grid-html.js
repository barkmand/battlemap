export function gridHtml() {
  const tileHtml = `<div class="grid-tile" id="grid-tile"></div>`;
  const grid = document.querySelector(".grid");

  grid.insertAdjacentHTML ("beforeend", tileHtml)

  
  const main = document.querySelector(".battlemap")
    const tile = document.querySelector(".grid-tile")
    const margin = parseFloat(getComputedStyle(tile).marginInline) * 2
    
    const mainWidth = main.getBoundingClientRect().width
    const tileWidth = tile.getBoundingClientRect().width + margin

    const tilesPerRow = Math.floor(mainWidth / tileWidth)
    

    const mainHeight = main.getBoundingClientRect().height
    const tileHeight = tile.getBoundingClientRect().height + (margin / 2)

    const tilesPerColumn = Math.round(mainHeight / tileHeight * 1.14869461354)
    
    const tilesToRemove = Math.floor(tilesPerColumn / 2) + 1

    const tilesToAdd = (tilesPerColumn * tilesPerRow) - tilesToRemove

    grid.style = `max-width: ${tilesPerRow * tileWidth}px;`
    for (let step = 0; step < tilesToAdd; step++){
        
        grid.insertAdjacentHTML(
            "beforeend",
            tileHtml
        )
    }
}