for (let i = 0; i < 16*16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.className = 'grid-square';

    const centering = document.querySelector('.centering');
    centering.appendChild(gridSquare);
}