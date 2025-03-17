
function getComputerChoice() {
    let compstring;
    let decidervalue = Math.floor(Math.random() * 4);
    if (decidervalue == 1) {
        compstring = "rock";
    }
    else if (decidervalue == 2) {
        compstring = "paper";
    }
    else {
        compstring = "scissors";
    }
    return (compstring); 
}

function getHumanChoice() {
    let humstring = prompt("Valid string input required: rock, paper or scissors").toLowerCase();
    return (humstring);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound (humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        console.log(`You both chose ${computerSelection} and have thus tied!`)
    }
    else if (humanSelection == "rock" && computerSelection == "paper") {
        console.log("You win! Rock beats Paper!")
        humanScore++;
    }
    else if (humanSelection == "paper" && computerSelection == "rock") {
        console.log("You lose! Your paper is beaten by Rock!")
        computerScore ++;
    }
    else if (humanSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Your scissors are beaten by Rock!")
        computerScore++;
    }
    else if (humanSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Your scissors cut through Rock!")
        humanScore++;
    }
    else if (humanSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Your paper is beaten by scissors!")
        computerScore++;
    }
    else if (humanSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Your Rock decimates scissors!")
        humanScore++;
    }
    else {
        console.log("Something went wrong, try agaim")
    }
    }






