let deck = new Array()
let suits = ['spades', 'diamonds', 'clubs', 'hearts']
let faceValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

function buildDeck() {
    deck = new Array() 

    for(let i = 0; i < faceValues.length; i++) {
        for(let i = 0; i < suits.length; i++) {
            let cardValue = parseInt(values[i])
            if (faceValues[i] === 'J' || faceValues[i] === 'Q' || faceValues[i] === 'K')
                cardValue = 10
            if (faceValues[i] === 'A')
                cardValue = 11
            var card = {value: cardValue[i], suit: suits[i], pointValue: cardValue}
            deck.push(card)
        }
    }
}