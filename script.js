// Lines 3-21 construct the deck of cards. 
// Function was taken from https://www.thatsoftwaredude.com
let deck = new Array()
let suits = ['spades', 'diamonds', 'clubs', 'hearts']
let faceValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

function buildDeck() {
    deck = new Array() 

    for(let i = 0; i < faceValues.length; i++) {
        for(let j = 0; j < suits.length; j++) {
            let cardValue = parseInt(faceValues[i])
            if (faceValues[i] === 'J' || faceValues[i] === 'Q' || faceValues[i] === 'K')
                cardValue = 10
            if (faceValues[i] === 'A')
                cardValue = 11
            var card = {value: faceValues[i], suit: suits[j], pointValue: cardValue}
            deck.push(card)
        }
    }
}

// Lines 23-26 shuffle the deck of cards 
function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
    return deck
}

// Lines 31-39 create players that will go on the gameboard. 
// Function was taken from https://www.thatsoftwaredude.com
var newPlayers = new Array()
function createPlayers(num) {
    newPlayers = new Array() 
    for(let i = 1; i <= num; i++) {
        var hand = new Array() 
        var player = {name: 'Player' + i, id: i, points: 0, hand: hand}
        newPlayers.push(player)
    }
}

