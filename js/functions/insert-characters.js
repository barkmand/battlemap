export function insertCharacters() {
  // #region CHARACTERS MENU

  const charactersMenu = document.querySelector(".characters-menu");
  const charactersToggleBtn = document.querySelector(".characters-btn");
  const charactersToggleBtnIcon = document.querySelector(
    ".characters-btn-icon",
  );

  charactersToggleBtn.addEventListener("click", () => {
    // TOGGLING THE OTHER MENU
    if (
      !charactersMenu.classList.contains("active") &&
      initiativeMenu.classList.contains("active")
    ) {
      initiativeMenu.classList.toggle("active");
      initiativeToggleBtn.classList.toggle("active");
      function initiativeToggleBtnInactive() {
        initiativeToggleBtn.classList.toggle("inactive");
      }
      if (!initiativeToggleBtn.classList.contains("inactive")) {
        setTimeout(initiativeToggleBtnInactive, 350);
      } else {
        initiativeToggleBtnInactive();
      }
      initiativeToggleBtnIcon.classList.toggle("fa-angle-up");
      initiativeToggleBtnIcon.classList.toggle("fa-angle-down");
    }

    // TOGGLING THE CLICKED MENU
    charactersMenu.classList.toggle("active");
    charactersToggleBtn.classList.toggle("active");
    function charactersToggleBtnInactive() {
      charactersToggleBtn.classList.toggle("inactive");
    }
    if (!charactersToggleBtn.classList.contains("inactive")) {
      setTimeout(charactersToggleBtnInactive, 350);
    } else {
      charactersToggleBtnInactive();
    }
    charactersToggleBtnIcon.classList.toggle("fa-angle-right");
    charactersToggleBtnIcon.classList.toggle("fa-angle-left");
  });

  // #endregion CHARACTERS MENU

  // #region INITIATIVE MENU

  const initiativeMenu = document.querySelector(".initiative-menu");
  const initiativeToggleBtn = document.querySelector(".initiative-btn");
  const initiativeToggleBtnIcon = document.querySelector(
    ".initiative-btn-icon",
  );

  initiativeToggleBtn.addEventListener("click", () => {
    // TOGGLING THE OTHER MENU
    if (
      charactersMenu.classList.contains("active") &&
      !initiativeMenu.classList.contains("active")
    ) {
      charactersMenu.classList.toggle("active");
      charactersToggleBtn.classList.toggle("active");
      function charactersToggleBtnInactive() {
        charactersToggleBtn.classList.toggle("inactive");
      }
      if (!charactersToggleBtn.classList.contains("inactive")) {
        setTimeout(charactersToggleBtnInactive, 350);
      } else {
        charactersToggleBtnInactive();
      }
      charactersToggleBtnIcon.classList.toggle("fa-angle-right");
      charactersToggleBtnIcon.classList.toggle("fa-angle-left");
    }

    // TOGGLING THE CLICKED MENU
    initiativeMenu.classList.toggle("active");
    initiativeToggleBtn.classList.toggle("active");
    function initiativeToggleBtnInactive() {
      initiativeToggleBtn.classList.toggle("inactive");
    }
    if (!initiativeToggleBtn.classList.contains("inactive")) {
      setTimeout(initiativeToggleBtnInactive, 350);
    } else {
      initiativeToggleBtnInactive();
    }
    initiativeToggleBtnIcon.classList.toggle("fa-angle-up");
    initiativeToggleBtnIcon.classList.toggle("fa-angle-down");
  });

  // #endregion INTITATIVE MENU

  // #region CHARACTERS INSERTION

  const characterCards = document.querySelectorAll(".character-card");
  const tiles = document.querySelectorAll(".grid-tile");
  const grid = document.querySelector(".grid");

  let entityIndex = 0

  let selectedCardId;
  let selectedCardSrc;
  let selectedCardTitle;
  let entityClassToAdd
  const body = document.querySelector("body");

  characterCards.forEach((card, index) => {
    card.addEventListener("mousedown", () => {
      selectedCardId = card.id;
      selectedCardSrc = card.querySelector(".character-img").src;
      selectedCardTitle = card.querySelector(".character-title").textContent;

      body.classList.add("placing");

      tiles.forEach((tile) => {
        tile.addEventListener("mouseup", addNewCreature);
        window.addEventListener("mouseup", () => {
          tile.removeEventListener("mouseup", addNewCreature);
          body.classList.remove("placing");
        });
        function addNewCreature() {
          if (!tile.querySelector(".grid-entity")) {

            entityIndex += 1

            entityClassToAdd = selectedCardId

            selectedCardId = selectedCardId + Number(entityIndex)


            tile.innerHTML = `
                  <div class="grid-entity ${entityClassToAdd}" id="${selectedCardId}">
                  <img class="entity-img" alt="entity" src="${selectedCardSrc}">
                  <div class="entity-info">
                      <p class="entity-title">${selectedCardTitle}</p>
                      <div class="entity-hpbar-container"><i class="fa-regular fa-heart entity-hpbar-icon"></i><p class="entity-hpbar">0</p></div>
                  </div>
                  </div>
                  `;

              let initiativeCard = 
              `
                <div class="initiative-card" id="${selectedCardId}">
                <div class="initiative-counter-container"><img class="initiative-icon" src="assets/initiative.png" alt="initiative icon"><p class="initiative-counter" contenteditable="true">0</p></div>
                <img src="${selectedCardSrc}" alt="Initiative card image" class="initiative-img">
                <p class="initiative-title">${document.getElementById(selectedCardId).querySelector(".entity-title").textContent}</p>
                </div>
              `
              initiativeMenu.insertAdjacentHTML("beforeend", initiativeCard)
              let initiativeCards = document.querySelectorAll(".initiative-card")
              initiativeCards.forEach((card) => {
                card.addEventListener("mouseover", (e) => {
                  card.classList.add("highlighted")
                  grid.querySelector(`#${card.id}`).parentNode.classList.add("highlighted")
                  card.addEventListener("mouseleave", () => {
                    card.classList.remove("highlighted")
                    grid.querySelector(`#${card.id}`).parentNode.classList.remove("highlighted")
                  })
                })
              })
          } else {
            console.log("That tile is currently occupied");
          }
        }
      });
    });
  });

  // #endregion CHARACTERS INSERTION

  // #region changing the values of the currently hovered tile
  let currentTile = false;

  let currentEntity = false;

  tiles.forEach((tile, index) => {
    tile.addEventListener("mouseover", () => {
      currentTile = tiles[index];
      if (currentTile.querySelector(".grid-entity")) {
        currentEntity = currentTile.querySelector(".grid-entity");
        currentTile.classList.add("highlighted")
        initiativeMenu.querySelector(`#${currentEntity.id}`).classList.add("highlighted")
      }
    });

    tile.addEventListener("mouseleave", () => {
      if(currentEntity){
        updateInitiativeTitle()
        currentTile.classList.remove("highlighted")
          initiativeMenu.querySelector(`#${currentEntity.id}`).classList.remove("highlighted")
      }
      currentTile = "false";
      currentEntity = false;
      if (document.querySelector(".grid-entity")) {
        let titlesToReset = document.querySelectorAll(".entity-title");
        titlesToReset.forEach((title) => {
          title.classList.remove("editable");
          title.contentEditable = "false";
        });
      }
    });
  });

  let currentEntityHealthBar;
  let currentEntityHealth = 0;

  window.addEventListener("keydown", (event) => {
    if (
      currentTile &&
      currentEntity &&
      !currentEntity
        .querySelector(".entity-title")
        .classList.contains("editable")
    ) {
      currentEntityHealthBar = currentEntity.querySelector(".entity-hpbar");
      currentEntityHealth = Number(currentEntityHealthBar.textContent);

      switch (event.key.toLowerCase()) {
        case "arrowup":
          currentEntityHealth += 1;
          break;

        case "arrowdown":
          currentEntityHealth -= 1;
          break;

        case "arrowleft":
          currentEntityHealth -= 5;
          break;

        case "arrowright":
          currentEntityHealth += 5;
          break;
        }
        
        currentEntityHealthBar.innerHTML = currentEntityHealth;
      }
    });
    
    let currentEntityTitle = false;
    
    window.addEventListener("dblclick", () => {
      if (currentTile && currentEntity) {
      currentEntityTitle = currentEntity.querySelector(".entity-title");
      currentEntityTitle.classList.add("editable");
      currentEntityTitle.contentEditable = "true";
      window.addEventListener("keydown", (keypress) => {
        if (keypress.key.toLowerCase() == "enter" || keypress.keyCode == 13) {
          currentEntityTitle.classList.remove("editable");
          currentEntityTitle.contentEditable = "false";
          updateInitiativeTitle()
          
        }
      });
    }
  });
  
  function updateInitiativeTitle() {
    initiativeMenu.querySelector(`#${currentEntity.id}`)
    .querySelector(".initiative-title").textContent = 
    currentEntity.querySelector(".entity-title").textContent
  }
  
  let selectedEntity = false
  let movingCheck = false
  
  function handleDeleteKey(keypress) {
    if(keypress.keyCode == 46 || keypress.key == "delete"){
          deleteEntity()
        }
  }
  
  function deleteEntity() {
    
    if(!selectedEntity){return}
  
    initiativeMenu.querySelector(`#${selectedEntity.id}`).remove()
    selectedEntity.remove()
  
    selectedEntity = false
    movingCheck = false

    currentTile.classList.remove("highlighted")
    currentEntity = false

    body.classList.remove("entity-interaction")

    window.removeEventListener("keydown", handleDeleteKey)
  }
  

  tiles.forEach((tile) => {
    tile.addEventListener("contextmenu", (rClick) => {
      
      if(currentEntity && !movingCheck){
        rClick.preventDefault();
        selectedEntity = currentEntity
        movingCheck = true
        body.classList.add("entity-interaction")
        
        window.addEventListener("keydown", handleDeleteKey)
        return
      }
      
      if(!currentEntity && movingCheck){
        rClick.preventDefault();
        movingCheck = false
        body.classList.remove("entity-interaction")
        
        window.removeEventListener("keydown", handleDeleteKey)
        
        if(selectedEntity){
          tile.appendChild(selectedEntity)
          selectedEntity = false
        }
        return
      }
      
      if(currentEntity && movingCheck){
        rClick.preventDefault();
        movingCheck = false
        body.classList.remove("entity-interaction")
        

        window.removeEventListener("keydown", handleDeleteKey)
        return
      }
})
})

  // #endregion changing the values of the currently hovered tile
}
