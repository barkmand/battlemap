export function gridHtml() {
  const tileHtml = `<div class="grid-tile" id="grid-tile"></div>`;
  const grid = document.querySelector(".grid");
  grid.insertAdjacentHTML ("beforeend", tileHtml)

  for (let step = 0; step < 107; step++){

        grid.insertAdjacentHTML(
        "beforeend",
        tileHtml
        )
    }
}
