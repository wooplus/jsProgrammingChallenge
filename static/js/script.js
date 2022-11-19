// Challenge 1 : Your Age in Days


// let displayAgeInDays = () => {
//     let birthYear = prompt("What is your birth year, my friend? ");

//     let ageInDays = (2022 - birthYear) * 365;

//     let h1 = document.createElement('h1');
//     let text = document.createTextNode(`You are ${ageInDays} days old!!`)
//     h1.append(text);
//     h1.setAttribute('id', 'ageInDays');
//     document.querySelector('#flex-box-result').append(h1);
// }

// function reset() {
//     document.getElementById('ageInDays').remove();
// }


// Challenge 2 : Generate an animation
// function generateCat() {
//     let img = document.createElement('img');
//         img.src = "https://lh5.googleusercontent.com/-d9lVoZNOR6SOXRyTwagthP16VTMGftuqnOyKn9VRncA5nqyaTp1DfTEqlArsUuVENGUKugCgZxbGOlMTSZDommn9Z63vmO5d0BxLQj18oCl9y8EpBjJ24yqjY021t9hQIFg0tyf";
//         let div = document.querySelector('#flex-cat-gen');
//         img.style.height = '200px'
//         div.append(img);
// }
               
// Challenge 3 : Rock Paper Scissors
let array;

function rpsGame(yourChoice) {
    console.log("img div -> " , yourChoice);
    var humanChoice , botChoice;  // return rock, paper, scissor
    humanChoice = yourChoice.id;
    console.log("human choice: " +humanChoice)

    botChoice =  numberToChoice(randToRpsInt());  // return rock, paper, or scissors

    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost| bot won

    message = finalMessage(results)  //{message:'You won', 'color':'green'}
    console.log(message);       //{message:'You won', 'color':'green'}

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);  // return value between 0 to 2
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock' : {'scissors': 1, 'rock' : 0.5, 'paper': 0},
        'paper' : {'rock' : 1, 'paper' : 0.5, 'scissors': 0},
        'scissors' : {'paper': 1, 'scissors': 0.5, 'rock' : 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice] // var yourScore = 1
    var computerScore = rpsDatabase[computerChoice][yourChoice]
    array= [yourScore,computerScore]
    console.log(array)
    return array;
}


function finalMessage([yourScore, computerScore]){
    console.log("your score => " +yourScore)
    if(yourScore === 0) {
        return {'message':'You lost!', 'color':'red'}
    } else if (yourScore === 0.5) {
        return {'message' : 'You tied', 'color' : 'yellow'}
    } else {
        return {'message' : 'You won!', 'color' : 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock' : document.getElementById("rock").src,
        'paper' : document.getElementById("paper").src,
        'scissors' : document.getElementById("scissors").src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width = 150  class='hoverEffect'>";

    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 class='hoverRedEffect'> ";

    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + '</h1>' ;
 
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4 : Change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])  
}

console.log(copyAllButtons);

let buttonColorChange = (buttonThingy) => {
    if(buttonThingy.value === 'red' ) {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if(buttonThingy.value ==='random') {
        randomColors();
    }
}

let buttonsRed = () => {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

let buttonsGreen = () => {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}

let buttonColorReset = () => {
    for(let i = 0; i< all_buttons.length; i++) {
        // copyAllButtons[1].classList[1]
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-primary', 'btn-secondary', 'btn-success', 'btn-danger', 'btn-warning']
    for (let i = 0; i < choices.length; i++) {
        var number = Math.floor(Math.random()*5);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[number]);
    }
}

// Challenge 5 : BlackJack

let blackjackGame = {
    'you' : {'scoreSpan' : '#your-black-jack-result', 'div' : '#your-box', 'score': 0},
    'dealer' : {'scoreSpan' : '#dealer-black-jack-result', 'div' : '#dealer-box', 'score': 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap' : {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8': 8, '9':9, '10':10,'J':10, 'K':10, 'Q':10, 'A':[1,11]},
    'wins' : 0,
    'losses' :0,
    'draws' : 0 ,
    'isStand' : false,
    'turnsOver' : false,
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('./blackjack_assets/sounds/cash.mp3')
const winSound = new Audio('./blackjack_assets/sounds/cash.mp3')
const lossSound = new Audio('./blackjack_assets/sounds/aww.mp3')

document.querySelector('#black-jack-hit-button').addEventListener("click", blackjackHit);

document.querySelector('#black-jack-stand-button').addEventListener("click", dealerLogic);

document.querySelector('#black-jack-deal-button').addEventListener("click", blackjackDeal);

function blackjackHit() {
    if(blackjackGame['isStand'] === false) {
        let card = returnCard();
        showCard(card, YOU) // display the chosen card on the website with a sound
        updateScore(card, YOU);  
        showScore(YOU);
    } else {

    }

}




function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `./blackjack_assets/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

function blackjackDeal() {
    // let winner = computeWinner();
    // showResult(winner);
    // computeWinner();

    if(blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;
        let yourImages = document.querySelector("#your-box").querySelectorAll('img')
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')
        console.log(yourImages)
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
    
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();        
        }
    
        YOU['score'] = 0;
        DEALER['score'] = 0;
    
        document.querySelector('#your-black-jack-result').textContent =0;
        document.querySelector('#your-black-jack-result').style.color ='rgb(76, 73, 73)';
        document.querySelector('#dealer-black-jack-result').style.color = "rgb(76,73,73)";
    
    
        document.querySelector('#dealer-black-jack-result').textContent =0;
        document.querySelector('#black-jack-result').textContent = "Let's play";
        document.querySelector('#black-jack-result').style.color = "black";

        blackjackGame['turnsOver'] = true;
    
    }

 

}

function returnCard() {
    let randomIndex = Math.floor(Math.random() * 13)
    return blackjackGame['cards'][randomIndex];  //for example - A
}

function updateScore(card, activePlayer) {
    // If adding 11 keeps me below 21, add 11. Otherwise add 1
    if(card === 'A') {
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <=21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];

    }

}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = "BUSTED!!"
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = returnCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    // let winner = computeWinner();
    // showResult(winner);

        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
        console.log(blackjackGame['isStand']);
    
}

function computeWinner() {
    let winner;
    if(YOU['score'] <= 21) {
        // condition : higher score than dealer or when dealer busts but you're 21 or under
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackjackGame['wins']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        } else if (YOU['score']== DEALER['score']) {
            blackjackGame['draws']++;
        }
    // when user busts but dealer doesn't
    } else if(YOU['score'] > 21 && DEALER['score'] <= 21){
        console.log("You lost");
        blackjackGame['losses']++;

        winner = DEALER;

    // condition
    } else if (YOU['score'] > 21 && DEALER['score'] >21) {
        console.log('You drew!');
        blackjackGame['draws']++;
    }
    console.log("winner is ", winner);
    return winner;

}

function showResult(winner) {

    if(blackjackGame['turnsOver'] === true) {
        if(winner === YOU) {
            document.querySelector('#win').textContent = blackjackGame['wins'];
            message = "You won!";
            messageColor = 'green';
            winSound.play();
        } else if (winner === DEALER) {
        document.querySelector('#loses').textContent = blackjackGame['losses'];
        message = "You lost!";
        messageColor = 'red';
        lossSound.play();
        } else {
        document.querySelector('#draw').textContent = blackjackGame['draws'];
        message = 'You drew!'
        messageColor = 'black';
        } 
    
        document.querySelector("#black-jack-result").textContent = message;
        document.querySelector("#black-jack-result").style.color = messageColor;
    }

    blackjackGame['turnsOver'] === false;


  
}