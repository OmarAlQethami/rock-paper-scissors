const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "paper") {
        return("You Lose! Paper beats Rock");
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors");
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return("You Win! Paper beats Rock");
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return("You Lose! Scissors beats Paper");
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return("You Lose! Rock beats Scissors");
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return("You Win! Scissors beats Paper");
    }
    else {
        return("Oh No, It's a Draw! Try Again");
    }
}

rock.addEventListener('click', () => {
    result.textContent= playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    result.textContent = playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    result.textContent = playRound('scissors', getComputerChoice());
});



function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}




/*function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}


const div = document.createElement('div');
div.classList.add('result');
document.body.appendChild(result);*/