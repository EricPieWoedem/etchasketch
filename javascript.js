
function createGrid(size) {

const parent = document.querySelector("#parent");
parent.innerHTML = '';

parent.style.display = 'flex';
parent.style.flexWrap = 'wrap';
parent.style.backgroundColor = 'grey';
parent.style.width = '960px';
parent.style.height = '960px';

const squareSize = 960 / size; 

for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");


square.style.width = `${squareSize}px`;
square.style.height = `${squareSize}px`;
square.style.border = '1px solid lightgrey';
square.style.boxSizing = 'border-box';

square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = getRandomColor();
    ;
}) 

square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'lightgrey'; 
    });
parent.appendChild(square);
}

}

createGrid(16);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const grid_size = document.querySelector("#grid-size");

grid_size.addEventListener('click', () => {
    getPrompt();
})

function getPrompt(userInput) {
    userInput = Number(prompt('Enter the number of squares per side(1-110)', '16'));

    if (userInput >= 1 && userInput<= 110) {
        createGrid(userInput)
    }
    else {
            alert('Enter a valid number between 1 and 110');
    }
        
}

const reset = document.querySelector('#reset');

function resetColor() { 

    const squares = document.querySelectorAll('.grid-square'); 
    squares.forEach(square => {
        square.style.backgroundColor = 'grey';
    })
}

reset.addEventListener('click', () => {
    resetColor();
})

