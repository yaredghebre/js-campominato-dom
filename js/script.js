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
        const newNumber = generateCell (currentNumber);
        newNumber.addEventListener("click", manageCellClick);
        grid.append(newNumber);
    }
    console.log(grid);

})

// FUNZIONI
function generateArrayNumbers() {
    const arrayNumbers = [];
    for (let i = 1; i < 101; i++) {
        arrayNumbers.push(i);
    } 
    return arrayNumbers;
}

function generateCell(value) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = `<span>${value}</span>`;
    return newCell;
}

function manageCellClick() {
    const clickedCell = parseInt(this.querySelector("span").textContent);
        this.classList.add("aqua");
        console.log(clickedCell);
    
}


