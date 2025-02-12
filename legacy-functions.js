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
//Function to add event listeners, first one doesn't use event delegation, second one has been refactored
//into addMainEventListener: a function that generalizes adding callbacks into diferent events of varying types into .main