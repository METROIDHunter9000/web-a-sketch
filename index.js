frame = document.querySelector("#frame");
btn_new = document.querySelector("#btn_new");
btn_reset = document.querySelector("#btn_reset");

// mouseover events from tiles bubble up to the frame
frame.addEventListener("mouseover", (event) => {
  event.target.classList.add("burned");
});

function newGrid(extent) {
  frame.replaceChildren();
  for(let i = 0; i < extent; ++i){
    row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < extent; ++j){
      tile = document.createElement("div");
      tile.classList.add("tile");
      row.appendChild(tile);
    }
    frame.appendChild(row);
  }
}

btn_new.addEventListener("click", () => {
  new_extent = prompt("Enter the extent to be used for the new grid (between 2 and 100)");
  while(isNaN(new_extent) || +new_extent < 2 || +new_extent > 100){
    new_extent = prompt("That extent was invalid! It must be a number between 2 and 100!");
  }
  newGrid(new_extent);
});

btn_reset.addEventListener("click", () => {
  frame.childNodes.forEach(row => {
    row.childNodes.forEach(tile => {
      tile.classList.remove("burned");
    });
  });
});

newGrid(50);
