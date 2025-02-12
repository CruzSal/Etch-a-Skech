const DEFAULT_COLOR = "black";
const DEFAULT_SIZE = "16";

let paintColor = DEFAULT_COLOR;


function createGrid(gridDimesions= DEFAULT_SIZE){
    let gridSize = gridDimesions**2;
    let pixelSize = 800/gridDimesions;

    document.querySelector(".grid").innerHTML = "";

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
function resetGrid(){
    const gridPixels = document.querySelectorAll(".grid-pixel");
    gridPixels.forEach(element =>  element.style.backgroundColor = "white");
}

function updateGridSizeMessage(e){
    const gridSizeMessage = document.querySelector("#grid-size");
    gridSizeMessage.innerHTML = `Grid Size: ${e.target.value} x ${e.target.value}`;

}


createGrid();

addMainEventListener("change", "#grid-slider", e => createGrid(e.target.value));
addMainEventListener("mousemove", "#grid-slider", (e) => updateGridSizeMessage(e));
addMainEventListener("mouseover", ".grid-pixel", e => e.target.style.backgroundColor = paintColor);
addMainEventListener("input", "#paint-color", (e) => paintColor = e.target.value);
addMainEventListener("click", "#reset-button", () => resetGrid());

