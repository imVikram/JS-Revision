let randomNum = parseInt(Math.random() * 100 + 1)
console.log(randomNum);

const submitbtn =document.querySelector('#subt')
const usrInput =document.querySelector('#guessField')
const guessSlot =document.querySelector('.guesses')
const lastResult =document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const startOver =document.querySelector('.resultParas')

const p = document.createElement('p');
let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submitbtn.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(usrInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //validation
    if (isNaN(guess)) {
        alert('Please add a valid number')
    }
    else if (guess<0){
        alert('Please add a valid number')
    }
    else if (guess>100){
        alert('Please add a valid number')
    }
    else{
        prevGuess.push(guess)
        if (numGuess===11) {
            displayGuess(guess)
            displayMsg(`Game over,random number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
   if (guess===randomNum) {
    displayMsg(`You guessed it right`)
    endGame()
   }
   else if (guess<randomNum){
    displayMsg(`Number is TOO low`)
   }
   else if (guess>randomNum){
    displayMsg(`Number is TOO high`)
   }
}

//display or cleanup fn or reset
function displayGuess(guess){
    usrInput.value=''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    lastResult.innerHTML = `${11-numGuess}`
}

function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    usrInput.value = ''
    usrInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame() {
    const newbutton =document.querySelector('#newGame')
    newbutton.addEventListener('click', function (e){
        randomNum = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        lastResult.innerHTML =  `${11-numGuess}`
        usrInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML =''
        playGame =true
    })
}
