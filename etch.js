const newGridBtn = document.querySelector('button');

newGridBtn.addEventListener('click', () => {
    const gridSize = parseInt(prompt("How many boxes to a side do you want for your grid? (max 100)"));
    clearGrid();
    if (gridSize > 100) alert("Too large! Try again.");
    else drawGrid(gridSize);
});

// I think I need to adjust the size of the grid squares based on the number of squares vs the size of the grid.
function drawGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        gridSquare.style.width = `${900/gridSize}px`;
        gridSquare.style.height = `${900/gridSize}px`;
        const centering = document.querySelector('.centering');
        centering.appendChild(gridSquare);
        gridSquare.addEventListener('pointerover', () => {
            if(!gridSquare.style.backgroundColor){
                gridSquare.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, 0.1)`
            }
            decreaseOpacity(gridSquare);
        });
    }
}

function clearGrid(){
    const centering = document.querySelector(".centering");

    while(centering.firstChild){
        centering.removeChild(centering.firstChild);
    }
    
}

function decreaseOpacity(gridSquare){
    const backgroundArray = gridSquare.style.backgroundColor.split('.');
    let opacity = parseInt(backgroundArray[1].slice(0)) + 1;
    if (opacity === 9) {
        gridSquare.style.backgroundColor = backgroundArray[0] + "1)";
    }
    else{
        gridSquare.style.backgroundColor = backgroundArray[0] + "." + opacity + ")";
    }
}

function randomRGB(){
    return Math.floor(Math.random() * 10000 % 255);
}

drawGrid(16);