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

function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
    return deck
}