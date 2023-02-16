
document.addEventListener('DOMContentLoaded', () => {

// card options 

const cardArray = [
    {
        name: 'fries',  
        img: '/memorygame/fries.png'

    },
    {
        name: 'cheeseburger', 
        img: <img src="/memorygame/cheeseburger.png">

    },
    {
        name: 'hotdog', 
        img: <img src="/memorygame/hotdog.png">

    },
    {
        name: 'ice-cream', 
        img: <img src="/memorygame/ice-cream.png">

    },
    {
        name: 'milkshake', 
        img: '/memorygame/milkshake.png'

    },
    {
        name: 'pizza', 
        img: '/memorygame/pizza.png'

    },
    {
        name: 'fries', 
        img: '/memorygame/fries.png'

    },
    {
        name: 'hotdog', 
        img: '/memorygame/hotdog.png'

    },
    {
        name: 'cheeseburger', 
        img: '/memorygame/cheeseburger.png'

    },
    {
        name: 'pizza', 
        img: '/memorygame/pizza.png'

    },
    {
        name: 'ice-cream', 
        img: '/memorygame/ice-cream.png'

    },
    {
        name: 'milkshake', 
        img: '/memorygame/milkshake.png'

    }

]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

// create the board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', <img src="/memorygame/blank.png">)
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// Check for matches 
function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', '/memorygame/white.png')
        cards[optionTwoId].setAttribute('src', '/memorygame/white.png')
        cardsWon.push(cardsChosen)    
    } else {
        cards[optionOneId].setAttribute('src', '/memorygame/blank.png')
        cards[optionTwoId].setAttribute('src', '/memorygame/blank.png')
        alert('Sorry, try again')
    }
cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congradulations! You found them all!'
}


}


// Flip your card 
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}



createBoard()


})
