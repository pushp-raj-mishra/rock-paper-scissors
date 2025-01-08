function getComupterChoice() {
    let x = Math.floor(Math.random() * 100) + 1;
    if (x <= 33) {
        return "rock";
    } else if (x <= 66) {
        return "paper";
    } else {
        return "scissor";
    }
}


let userChoice = '';
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const verdict = document.querySelector(".verdictSpan");
const uScore = document.querySelector(".userScore");
const cScore = document.querySelector(".computerScore");

rock.addEventListener("click",function() {
    userChoice = 'rock';
    playRound();
})

paper.addEventListener("click",function() {
    userChoice = 'paper';
    playRound();
})

scissor.addEventListener("click",function() {
    userChoice = 'scissor';
    playRound();
})


function playRound() {
    
    let computerChoice = getComupterChoice();
    if (userChoice == computerChoice) {
        verdict.textContent = "Tie";
        console.log("Tie");
        userScore++;
        computerScore++;
        uScore.textContent = `User Score: ${userScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
    } else if (((userChoice=="rock")&&(computerChoice=="paper")) || ((userChoice=="paper")&&(computerChoice=="scissor")) || ((userChoice=="scissor")&&(computerChoice=="rock"))) {
        verdict.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
        console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
        computerScore++;
        uScore.textContent = `User Score: ${userScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
    } else {
        verdict.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
        console.log(`You Win! ${userChoice} beats ${computerChoice}`);
        userScore++;
        uScore.textContent = `User Score: ${userScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
    }
    if ((userScore==5)||(computerScore==5)) {
        if (userScore>computerScore) {
            verdict.textContent = "Game Over!! You Win!!";
        } else if (computerScore>userScore) {
            verdict.textContent = "Game Over!! Computer Wins!!";
        } else {
            verdict.textContent = "Game Over!! It was a tie!!";
        }
        userScore = 0;
        computerScore = 0;
    }
}

let userScore = 0;
let computerScore = 0;




