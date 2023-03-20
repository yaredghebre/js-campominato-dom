// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// [23, 65, 1, 4,78,15,....];
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



// Implemento il tasto start per fare iniziare il gioco
// Creo il tasto Start e al suo interno le IMPLEMENTAZIONI
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
    
    // gli associo una funzione
    const numbers = generateArrayNumbers();
    console.log(generateArrayNumbers(numberOfCells));

    // Creo le caselle per ogni numero
    const grid = document.querySelector(".grid");
    // per eseguire il programma solo al primo click
    grid.innerHTML = "";
    for (let i = 0; i < numberOfCells; i++) {
        const currentNumber = numbers[i];

        // gli associo una funzione a entrambi
        const newNumber = generateCell (currentNumber, Math.sqrt(numberOfCells));
        newNumber.addEventListener("click", manageCellClick);
        grid.append(newNumber);
    }
    console.log(grid);

    // Implemento il risultato con variabile a 0, creo un array vuoto e definisco il punteggio massimo
    let score = 0;
    const safeCellsArray = [];
    const maxScore = (numberOfCells - 16);
    console.log(maxScore);

    function manageCellClick() {
        const clickedCell = parseInt(this.querySelector("span").textContent);
                // CELLA NON BOMBA
            if(!bombs.includes(clickedCell)) {

                // if cella valida gia cliccata
                this.classList.add("aqua");
                this.removeEventListener("click", manageCellClick);
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

    bombsCellsArray.push(bombs);
    console.log(bombsCellsArray);

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


