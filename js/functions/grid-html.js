export function gridHtml() {
  const tileHtml = `<div class="grid-tile" id="grid-tile"></div>`;
  const grid = document.querySelector(".grid");

  grid.insertAdjacentHTML ("beforeend", tileHtml)

  
  const main = document.querySelector(".battlemap")
    const tile = document.querySelector(".grid-tile")
    const margin = parseFloat(getComputedStyle(tile).marginInline) * 2
    
    let mainWidth = main.getBoundingClientRect().width
    let tileWidth = tile.getBoundingClientRect().width + margin
    let tilesPerRow = Math.floor(mainWidth / tileWidth)
    
    let mainHeight = main.getBoundingClientRect().height
    let tileHeight = tile.getBoundingClientRect().height + (margin / 2)
    let tilesPerColumn = Math.floor(mainHeight / tileHeight)
    
    let tilesToAdd = tilesPerColumn * tilesPerRow
    
    console.log(mainHeight)
    console.log(tileHeight / 1.14869461354)
    console.log(tilesPerRow)
    console.log(tilesPerColumn)
    console.log(tilesToAdd)
    grid.style = `max-width: ${tilesPerRow * tileWidth}px;`
    for (let step = 0; step < tilesToAdd; step++){
        
        grid.insertAdjacentHTML(
            "beforeend",
            tileHtml
        )
    }
    /* REMEMBER TO REMOVE ONE TILE PER OTHER ROW SO YOU DON'T GET OVERFLOW */
}