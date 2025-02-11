function createGrid(gridDimesions= 16){
    let gridSize = gridDimesions**2;
    let pixelSize = 800/gridDimesions;

    for (let i = 1; i <= gridSize; i++)
        createPixelDiv(pixelSize);

}

function createPixelDiv(size){
    const grid = document.querySelector(".grid");
    const pixel = document.createElement("div");
    pixel.classList.add("grid-pixel")
    pixel.style.boxSizing = "border-box";
    pixel.style.height = `${size}px`;
    pixel.style.width = `${size}px`;
    pixel.style.border = '1px solid';
    grid.appendChild(pixel);
}

function addPixelListener(){
    let gridPixels = document.querySelectorAll(".grid-pixel");
    gridPixels.forEach(gridPixel =>{gridPixel.addEventListener("mouseenter", e => {
    gridPixel.style.backgroundColor = "black";})
});
}

function addPixelListenerWithEventDelegation(){
    const grid = document.querySelector(".grid");
    grid.addEventListener("mouseover", (e) => {
        if (e.target && e.target.classList.contains("grid-pixel")) {//is this neccesary?
            e.target.style.backgroundColor = "black";
    }
});
}


let playButton = document.querySelector(".button");
playButton.addEventListener("click", () => {
    let gridSize = prompt("choose");
    createGrid(gridSize);
//needs to destroy the old grid first
})

createGrid();
addPixelListener();
