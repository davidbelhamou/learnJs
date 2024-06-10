function getCard() {
    let newCard = Math.round(Math.random() * 13 + 1);
    if (10 <= newCard) {
        return 10;
    }else if (newCard === 1) {
        return 11;
    }else {
        return newCard;
    }
}

let firstCard = getCard();
let secondCard = getCard();
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];

let isAlive = true;
let hasBlackJack = false;
let messageEl = document.getElementById("message-el");
let message = "";
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
    name: "per",
    chips: 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":" + " $" + player.chips;



function startGame() {
    renderGame();
}

function newCard() {
    if (isAlive  && !hasBlackJack) {
        let newCard = getCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
}

function renderGame() {
    cardsEl.textContent = "Card: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - ";
    }
    if (isAlive) {
        if (sum <= 20) {
            message = "Do you want to draw a new card";

        } else if (sum === 21) {
            hasBlackJack = true;
            message = "You got BlackJack";
        } else {
            isAlive = false;
            message = "Game Over"
        }
        messageEl.textContent = message;
    }
    sumEl.textContent = "Sum: " + sum;
}