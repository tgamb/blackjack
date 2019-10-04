// This array represents a deck of cards 
let deck = [
    {value: "A", suit: "spades", pointValue: 11, img: "images.3/ace_of_spades.svg",},
    {value: "A", suit: "diamonds", pointValue: 11, img: "images.3/ace_of_diamonds.svg"},
    {value: "A", suit: "clubs", pointValue: 11, img: "images.3/ace_of_clubs.svg"},
    {value: "A", suit: "hearts", pointValue: 11, img: "images.3/ace_of_hearts.svg"},
    {value: "2", suit: "spades", pointValue: 2, img: "images.3/2_of_spades.svg"},
    {value: "2", suit: "diamonds", pointValue: 2, img: "images.3/2_of_diamonds.svg"},
    {value: "2", suit: "clubs", pointValue: 2, img: "images.3/2_of_clubs.svg"},
    {value: "2", suit: "hearts", pointValue: 2, img: "images.3/2_of_hearts.svg"},
    {value: "3", suit: "spades", pointValue: 3, img: "images.3/3_of_spades.svg"},
    {value: "3", suit: "diamonds", pointValue: 3, img: "images.3/3_of_diamonds.svg"},
    {value: "3", suit: "clubs", pointValue: 3, img: "images.3/3_of_clubs.svg"},
    {value: "3", suit: "hearts", pointValue: 3, img: "images.3/3_of_hearts.svg"},
    {value: "4", suit: "spades", pointValue: 4, img: "images.3/4_of_spades.svg"},
    {value: "4", suit: "diamonds", pointValue: 4, img: "images.3/4_of_diamonds.svg"},
    {value: "4", suit: "clubs", pointValue: 4, img: "images.3/4_of_clubs.svg"},
    {value: "4", suit: "hearts", pointValue: 4, img: "images.3/4_of_hearts.svg"},
    {value: "5", suit: "spades", pointValue: 5, img: "images.3/5_of_spades.svg"},
    {value: "5", suit: "diamonds", pointValue: 5, img: "images.3/5_of_diamonds.svg"},
    {value: "5", suit: "clubs", pointValue: 5, img: "images.3/5_of_clubs.svg"},
    {value: "5", suit: "hearts", pointValue: 5, img: "images.3/5_of_hearts.svg"},
    {value: "6", suit: "spades", pointValue: 6, img: "images.3/6_of_spades.svg"},
    {value: "6", suit: "diamonds", pointValue: 6, img: "images.3/6_of_diamonds.svg"},
    {value: "6", suit: "clubs", pointValue: 6, img: "images.3/6_of_clubs.svg"},
    {value: "6", suit: "hearts", pointValue: 6, img: "images.3/6_of_hearts.svg"},
    {value: "7", suit: "spades", pointValue: 7, img: "images.3/7_of_spades.svg"},
    {value: "7", suit: "diamonds", pointValue: 7, img: "images.3/7_of_diamonds.svg"},
    {value: "7", suit: "clubs", pointValue: 7, img: "images.3/7_of_clubs.svg"},
    {value: "7", suit: "hearts", pointValue: 7, img: "images.3/7_of_hearts.svg"},
    {value: "8", suit: "spades", pointValue: 8, img: "images.3/8_of_spades.svg"},
    {value: "8", suit: "diamonds", pointValue: 8, img: "images.3/8_of_diamonds.svg"},
    {value: "8", suit: "clubs", pointValue: 8, img: "images.3/8_of_clubs.svg"},
    {value: "8", suit: "hearts", pointValue: 8, img: "images.3/8_of_hearts.svg"},
    {value: "9", suit: "spades", pointValue: 9, img: "images.3/9_of_spades.svg"},
    {value: "9", suit: "diamonds", pointValue: 9, img: "images.3/9_of_diamonds.svg"},
    {value: "9", suit: "clubs", pointValue: 9, img: "images.3/9_of_clubs.svg"},
    {value: "9", suit: "hearts", pointValue: 9, img: "images.3/9_of_hearts.svg"},
    {value: "10", suit: "spades", pointValue: 10, img: "images.3/10_of_spades.svg"},
    {value: "10", suit: "diamonds", pointValue: 10, img: "images.3/10_of_diamonds.svg"},
    {value: "10", suit: "clubs", pointValue: 10, img: "images.3/10_of_clubs.svg"},
    {value: "10", suit: "hearts", pointValue: 10, img: "images.3/10_of_hearts.svg"},
    {value: "J", suit: "spades", pointValue: 10, img: "images.3/jack_of_spades.svg"},
    {value: "J", suit: "diamonds", pointValue: 10, img: "images.3/jack_of_diamonds.svg"},
    {value: "J", suit: "clubs", pointValue: 10, img: "images.3/jack_of_clubs.svg"},
    {value: "J", suit: "hearts", pointValue: 10, img: "images.3/jack_of_hearts.svg"},
    {value: "Q", suit: "spades", pointValue: 10, img: "images.3/queen_of_spades.svg"},
    {value: "Q", suit: "diamonds", pointValue: 10, img: "images.3/queen_of_diamonds.svg"},
    {value: "Q", suit: "clubs", pointValue: 10, img: "images.3/queen_of_clubs.svg"},
    {value: "Q", suit: "hearts", pointValue: 10, img: "images.3/queen_of_hearts.svg"},
    {value: "K", suit: "spades", pointValue: 10, img: "images.3/king_of_spades.svg"},
    {value: "K", suit: "diamonds", pointValue: 10, img: "images.3/king_of_diamonds.svg"},
    {value: "K", suit: "clubs", pointValue: 10, img: "images.3/king_of_clubs.svg"},
    {value: "K", suit: "hearts", pointValue: 10, img: "images.3/king_of_hearts.svg"}
]

// Global variables 
let players = [
    {id: playerOne, isActive: true},
    {id: playerTwo, isActive: false}
]
let playerOneHand = []
let playerTwoHand = []
let playerOnePoints = 0 
let playerTwoPoints = 0
let topCard = null

// This function shuffles the deck 
function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
    return deck
}

// This function draws the top card of the deck
function drawCards(deck) {
    topCard = deck.pop()
}

// This function will deal a starting hand to player one 
function dealHandOne() {
    for(i = 0; i < 2; i++) {
        drawCards(deck)
        playerOneHand.push(topCard)
    }
}

// This function will deal a starting hand to player two 
function dealHandTwo() {
    for(i = 0; i < 2; i++) {
        drawCards(deck)
        playerTwoHand.push(topCard)
    }
}

// Logic for Start Game button 
document.getElementById("startGame").addEventListener("click", function() {
    shuffle(deck) 
    dealHandOne() 
    dealHandTwo()
    calculateScores()
    renderCardsPlayerOne()
    renderCardsPlayerTwo()
})

// Logic for calculating scores
function calculateScores() {
    for(let i = 0; i < playerOneHand.length; i++) {
        playerOnePoints = playerOnePoints + playerOneHand[i].pointValue
    }
    for(let j = 0; j < playerTwoHand.length; j++) {
        playerTwoPoints = playerTwoPoints + playerTwoHand[j].pointValue
    }
}

// Logic for Hit Me button 
document.getElementById("hitMe").addEventListener("click", function() {
    if (players[0].isActive === true) {
        drawCards(deck)
        playerOneHand.push(topCard)
        calculateScores()
        renderCardsPlayerOne()
        if(playerOnePoints > 21) {
            alert("Player 2 Wins!")
        }
    }
    else if(players[1].isActive === true) {
        drawCards(deck)
        playerTwoHand.push(topCard)
        calculateScores()
        renderCardsPlayerTwo()
        if(playerTwoPoints > 21) {
            alert("Player 1 Wins!")
        }
    }
})

// Logic for Stay button 
document.getElementById("stay").addEventListener("click", function() {
    if (players[0].isActive === true) {
        players[0].isActive = false 
        players[1].isActive = true
    }
    else if (players[1] === true) {
    }
})

function whoWins() {
    if(playerOnePoints > playerTwoPoints) {
        alert("Player 1 Wins!")
    }
    else if(playerTwoPoints > playerOnePoints) {
        alert("Player 2 Wins!")
    }
}

function renderCardsPlayerOne() {
    for(let i = 0; i < playerOneHand.length; i++) {
    $('#playerOneHand').append(`<img class = card src = ${playerOneHand[i].img}>`)
    }
}

function renderCardsPlayerTwo() {
    for(let i = 0; i < playerTwoHand.length; i++) {
        $('#playerTwoHand').append(`<img class = card src = ${playerTwoHand[i].img}>`)
    }
}