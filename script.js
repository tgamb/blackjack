// Lines 3-21 construct the deck of cards. 
let deck = [
    {value: "A", suit: "spades", pointValue: 11},
    {value: "A", suit: "diamonds", pointValue: 11},
    {value: "A", suit: "clubs", pointValue: 11},
    {value: "A", suit: "hearts", pointValue: 11},
    {value: "2", suit: "spades", pointValue: 2},
    {value: "2", suit: "diamonds", pointValue: 2},
    {value: "2", suit: "clubs", pointValue: 2},
    {value: "2", suit: "hearts", pointValue: 2},
    {value: "3", suit: "spades", pointValue: 3},
    {value: "3", suit: "diamonds", pointValue: 3},
    {value: "3", suit: "clubs", pointValue: 3},
    {value: "3", suit: "hearts", pointValue: 3},
    {value: "4", suit: "spades", pointValue: 4},
    {value: "4", suit: "diamonds", pointValue: 4},
    {value: "4", suit: "clubs", pointValue: 4},
    {value: "4", suit: "hearts", pointValue: 4},
    {value: "5", suit: "spades", pointValue: 5},
    {value: "5", suit: "diamonds", pointValue: 5},
    {value: "5", suit: "clubs", pointValue: 5},
    {value: "5", suit: "hearts", pointValue: 5},
    {value: "6", suit: "spades", pointValue: 6},
    {value: "6", suit: "diamonds", pointValue: 6},
    {value: "6", suit: "clubs", pointValue: 6},
    {value: "6", suit: "hearts", pointValue: 6},
    {value: "7", suit: "spades", pointValue: 7},
    {value: "7", suit: "diamonds", pointValue: 7},
    {value: "7", suit: "clubs", pointValue: 7},
    {value: "7", suit: "hearts", pointValue: 7},
    {value: "8", suit: "spades", pointValue: 8},
    {value: "8", suit: "diamonds", pointValue: 8},
    {value: "8", suit: "clubs", pointValue: 8},
    {value: "8", suit: "hearts", pointValue: 8},
    {value: "9", suit: "spades", pointValue: 9},
    {value: "9", suit: "diamonds", pointValue: 9},
    {value: "9", suit: "clubs", pointValue: 9},
    {value: "9", suit: "hearts", pointValue: 9},
    {value: "10", suit: "spades", pointValue: 10},
    {value: "10", suit: "diamonds", pointValue: 10},
    {value: "10", suit: "clubs", pointValue: 10},
    {value: "10", suit: "hearts", pointValue: 10},
    {value: "J", suit: "spades", pointValue: 10},
    {value: "J", suit: "diamonds", pointValue: 10},
    {value: "J", suit: "clubs", pointValue: 10},
    {value: "J", suit: "hearts", pointValue: 10},
    {value: "Q", suit: "spades", pointValue: 10},
    {value: "Q", suit: "diamonds", pointValue: 10},
    {value: "Q", suit: "clubs", pointValue: 10},
    {value: "Q", suit: "hearts", pointValue: 10},
    {value: "K", suit: "spades", pointValue: 10},
    {value: "K", suit: "diamonds", pointValue: 10},
    {value: "K", suit: "clubs", pointValue: 10},
    {value: "K", suit: "hearts", pointValue: 10}
]

// Lines 23-26 shuffle the deck of cards 
function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
    return deck
}

function drawCards(deck) {
    let topCard = deck.pop()
    return topCard
}

function dealHand() {
    for(let i = 0; i < 2; i++) {
        for(let j = 0; j < newPlayers.length; j++) {
            drawCards(deck)
        }
    }
}

