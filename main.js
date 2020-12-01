document.addEventListener('DOMContentLoaded' , ()=> {
    const cardArry = [
        {
            name:'1',
            img :'images/1.png'
        },
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        }
    ]

    cardArry.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChosen = []
    var cardChosenId = []
    var cardsWon = []

    // create borders

    function createBorder(){
        for(let i = 0 ; i < cardArry.length ; i++){
            var card = document.createElement('img')
            card.setAttribute('src' , 'images/background.png')
            card.setAttribute('data-id' , i)
            card.addEventListener('click' , flipcard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTowid = cardChosenId[1]

        if(cardChosen[0] === cardChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src' , 'images/withe.png')
            cards[optionTowid].setAttribute('src' , 'images/withe.png')
            cardsWon.push(cardChosen)
        }else{
            cards[optionOneId].setAttribute('src' , 'images/background.png')
            cards[optionTowid].setAttribute('src' , 'images/background.png')
            alert('sorry try again')
        }
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length 
        if(cardsWon.length === cardArry.length/2){
            resultDisplay.textContent = 'Congratualtion , you find them all !'
        }
    }

    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArry[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src' , cardArry[cardId].img)
        if(cardChosen.length === 2) {
            setTimeout(checkForMatch , 500 )
        }
    }

    createBorder()
})