

function getCard() {
    return Math.round(Math.random() * 11 + 1)
}

let firstCard = getCard();
let secondCard = getCard();
let sum = firstCard + secondCard;

let isAlive = true;
let hasBlackJack = false;
let messageEl = document.getElementById("message-el");
let message = "";
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");



function startGame(){

    cardsEl.textContent = "Card: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new card";

    }else if (sum === 21){
        hasBlackJack = true;
        message= "You got BlackJack";
    }else {
        console.log("You OUT!!!!");
        isAlive = false;
    }
    messageEl.textContent = message;
}