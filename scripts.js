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

function getUserChoice() {
    return prompt("Enter Your Choice: (rock, paper, scissor)");
}

function playRound() {
    let userChoice = getUserChoice().toLowerCase();
    let computerChoice = getComupterChoice();
    if (userChoice == computerChoice) {
        console.log("Tie");
    } else if (((userChoice=="rock")&&(computerChoice=="paper")) || ((userChoice=="paper")&&(computerChoice=="scissor")) || ((userChoice=="scissor")&&(computerChoice=="rock"))) {
        console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
    } else {
        console.log(`You Win! ${userChoice} beats ${computerChoice}`);
    }
    }

