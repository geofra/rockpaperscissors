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
    return console.log(compstring); 
}

getComputerChoice();
