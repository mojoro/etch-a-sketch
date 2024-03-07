const newGridBtn = document.querySelector('button');

newGridBtn.addEventListener('click', () => {
    const gridSize = parseInt(prompt("How many boxes to a side do you want for your grid?"));
    drawGrid(gridSize);
});


function drawGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';

        const centering = document.querySelector('.centering');
        centering.appendChild(gridSquare);
        gridSquare.addEventListener('pointerover', () => {
            gridSquare.style.backgroundColor = 'black'
        });
    }
}

drawGrid(16);