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
