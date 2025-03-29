function getComputerChoice() {
    let companswer;
    let rinteger = Math.floor(Math.random() * 3);
    if (rinteger == 1) {
        companswer = "rock";
    }
    else if (rinteger == 2) {
        companswer = "paper";
    }
    else if (rinteger == 3) {
        companswer = "scissors"
    }
    return companswer;
}

function getHumanChoice() {
    let humchoice = prompt("What's your choice human!?").toLowerCase();
    return humchoice;
}

function playGame() {
let humScore = 0;
let compScore = 0;
function playRound(humanChoice, computerChoice) {
     humanChoice = getHumanChoice();
     computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        console.log("DRAW! You both chose the same material!");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("WIN! Rock decimates scissors!");
        humScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("LOSE! Scissors cut through rock!");
        compScore++; 
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("LOSE! Rock decimates scissors");
        compScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("WIN! Paper wraps around rock and strangles it!");
        humScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("LOSE! Your rock is left gasping for air by their paper!");
        compScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("WIN! Scissors cut through paper like a cake!");
        humScore++;
    }
    return console.log(humScore);
}

playRound();
playRound();
playRound();
playRound();
playRound();
if (humScore > compScore) {
    return console.log(`WOOHOO! YOU WON ${humScore} vs ${compScore}`)
}
else {
    return console.log(`I'm sorry to be the one to break this to you...${humScore} vs ${compScore}`)
}

}
playGame();