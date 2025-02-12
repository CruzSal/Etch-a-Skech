const DEFAULT_COLOR = "black";
const DEFAULT_SIZE = "16";


function createGrid(gridDimesions= DEFAULT_SIZE){
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


function addMainEventListener(type, selector, callback){
    let main = document.querySelector(".main");//In addGlobal.. this line is not needed replace main for document below
    main.addEventListener(type, e => {
        if(e.target.matches(selector)) 
            callback(e);
    })
}


createGrid();

let paintColor = DEFAULT_COLOR;

addMainEventListener("change", "#grid-slider", e => createGrid(e.target.value));
//needs to destroy the old grid first
addMainEventListener("mouseover", ".grid-pixel", e => e.target.style.backgroundColor = paintColor);
addMainEventListener("input", "#paint-color", (e) => paintColor = e.target.value);
addMainEventListener("click", "#color-button", () => paintColor = "red");
//color changer not workking

