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
            gridSquare.style.backgroundColor = 'black'
        });
    }
}

function clearGrid(){
    const centering = document.querySelector(".centering");

    while(centering.firstChild){
        centering.removeChild(centering.firstChild);
    }
    
}

drawGrid(16);