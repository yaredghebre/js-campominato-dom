
const start = document.getElementById("start");

start.addEventListener("click", function() {
    
    // IMPLENTAZIONI
    const level = parseInt(document.querySelector("select").value);

    let numberOfCells;
    switch(level) {
    case 1:
        numberOfCells = 100;
        break;
    case 2:
        numberOfCells = 81;
        break;
    case 3: 
        numberOfCells = 49;
        break;
    default:
        numberOfCells = 100;
}
    console.log(level, numberOfCells);
    
    const numbers = generateArrayNumbers();
    console.log(generateArrayNumbers(numberOfCells));

    const grid = document.querySelector(".grid");
    
    grid.innerHTML = "";
    for (let i = 0; i < numberOfCells; i++) {
        const currentNumber = numbers[i];

        
        const newNumber = generateCell (currentNumber, Math.sqrt(numberOfCells));
        newNumber.addEventListener("click", manageCellClick);
        grid.append(newNumber);
    }
    console.log(grid);

    let score = 0;
    let safeCellsArray = []; 
    const maxScore = (numberOfCells - 16);
    console.log(maxScore);

    function manageCellClick() {
        
        const clickedCell = parseInt(this.querySelector("span").textContent);
                // CELLA NON BOMBA
            if(!bombs.includes(clickedCell)) {

                
                this.classList.add("aqua");
                this.removeEventListener("click", manageCellClick);
                // ALTERNATIVA :
                
                    safeCellsArray.push();
                    score++;
                if(maxScore === score)
                alert("Complimenti! HAI VINTO!");
                
            }// CELLA CON BOMBA - GAME OVER
            else {
                this.classList.add("red");
                console.log("BOMBA!");
                
                alert("Hai calpestato una BOMBA! Hai PERSO!")
                alert("Il tuo punteggio è: " + score + ". Clicca di nuovo Start per rigiocare!");
                
            }
            console.log(clickedCell);
    }
    // BOMBE
    const bombs = generateBombs(16, numberOfCells);
    console.log(bombs);
})

// FUNZIONI
function generateArrayNumbers() {
    const arrayNumbers = [];
    for (let i = 1; i < 101; i++) {
        arrayNumbers.push(i);
    } 
    return arrayNumbers;
}

function generateCell(value, cellSize) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.width = `calc(100% / ${cellSize})`;
    newCell.style.height = `calc(100% / ${cellSize})`;
    newCell.innerHTML = `<span>${value}</span>`;
    return newCell;
}

function generateBombs (numbersQuantity, maxNumber) {
    const numbers = [];
    while(numbers.length < numbersQuantity) {
        const rndNumber = getRndInteger(1, maxNumber);
            if(!numbers.includes(rndNumber)) {
                numbers.push(rndNumber);
            }
    }
    return numbers;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}





