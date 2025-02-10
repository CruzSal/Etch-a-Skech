function createGrid(gridDimesions= 16){
    let gridSize = gridDimesions**2;
    let pixelSize = 800/gridDimesions;

    for (let i = 1; i <= gridSize; i++)
        createPixelDiv(pixelSize);

}

function createPixelDiv(size){
    const grid = document.querySelector(".grid");
    const pixel = document.createElement("div");
    pixel.style.boxSizing = "border-box";
    pixel.style.height = `${size}px`;
    pixel.style.width = `${size}px`;
    pixel.style.border = '1px solid';
    grid.appendChild(pixel);
}

createGrid();