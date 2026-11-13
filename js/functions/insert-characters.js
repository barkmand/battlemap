export function insertCharacters() {
  // #region MENUTOGGLE

  const charactersMenu = document.querySelector(".characters-menu");
  const toggleBtn = document.querySelector(".characters-btn");
  const toggleBtnIcon = document.querySelector(".characters-btn-icon");

  toggleBtn.addEventListener("click", () => {
    charactersMenu.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    function toggleBtnInactive() {
      toggleBtn.classList.toggle("inactive");
    }
    if (!toggleBtn.classList.contains("inactive")) {
      setTimeout(toggleBtnInactive, 350);
    } else {
      toggleBtnInactive();
    }
    toggleBtnIcon.classList.toggle("fa-angle-right");
    toggleBtnIcon.classList.toggle("fa-angle-left");
  });

  // #endregion MENUTOGGLE

  const characterCards = document.querySelectorAll(".character-card");
  const characterImages = document.querySelectorAll(".character-img");
  const characterTitles = document.querySelectorAll(".character-title");
  const tiles = document.querySelectorAll(".grid-tile");
  const grid = document.querySelector(".grid")

  let selectedCardId
let selectedCardSrc
let selectedCardTitle
const body = document.querySelector("body")

let entitiesExist = false
  
  characterCards.forEach((card, index) => {
    card.addEventListener("mousedown", () => {
      selectedCardId = card.id;
      selectedCardSrc = card.querySelector(".character-img").src
      selectedCardTitle = card.querySelector(".character-title").textContent

      /* MAKE A VISIBLE ELEMENT ON THE CURSOR THAT REPRESENTS A DRAG-&-DROP FUNCTIONALITY */

        body.classList.add("placing")

      tiles.forEach((tile) => {
          tile.addEventListener("mouseup", tileMouseup, () =>{
            entitiesExist = true
          });
          window.addEventListener("mouseup", () => {
            tile.removeEventListener("mouseup", tileMouseup)
            body.classList.remove("placing")
          });
          function tileMouseup() {
              if (tile.innerHTML == "") {
                  tile.innerHTML = `
                  <div class="grid-entity" id="${selectedCardId}">
                  <img class="entity-img" alt="entity" src="${selectedCardSrc}">
                  <div class="entity-info">
                      <p class="entity-title">${selectedCardTitle}</p>
                      <p class="entity-hpbar">0</p>
                  </div>
                  </div>
                  `;
                }
          }
          
      });
    });
  });

  let entityList

  /* if mouse is hovering over an entity */
  grid.addEventListener("mouseout", updateEntityList)


        /* MAN F THIS IM GOING HOME I WANNA PLAY CYBERPUNK */


  function updateEntityList(){
    if (document.querySelector("grid-entity")){
        /* entityList = document.querySelectorAll(".grid-entity")
        entityList.forEach((entity, index) => {
            entity.addEventListener("mouseover", () => {
                entityList.forEach((entity) => {
                    entity.addEventListener("mouseout", () => {

                    })
                })
            })
        }) */
    }
      /* let hoveredEntity = Element.matches(".grid-entity:hover") */

  }
  

}
