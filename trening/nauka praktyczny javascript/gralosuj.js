const randomNumber = Math.floor(Math.random()*9);
const guessButton = document.querySelector("#guess");
const guessNumberInput = document.querySelector("#userGuess");
let guessCount = 0;
console.log(randomNumber);

function writeResult(result) {
    var resultElement = document.querySelector('.feedback');
    resultElement.innerText = result;
}

function toDrawLots(event){
    event.preventDefault();
    const userGuess = Number(guessNumberInput.value);
    
    if (userGuess === randomNumber){
        
        writeResult('Trafiono');
    }
    else if(userGuess > randomNumber){
        writeResult('Za dużo');
    }
    else if(userGuess < randomNumber){
        writeResult('Za mało');
    }
}

guessButton.addEventListener("click", toDrawLots);