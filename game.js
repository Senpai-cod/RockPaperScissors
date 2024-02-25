function getComputerChoice(){
    let Rock = Math.round(Math.random());
    let Scissors = Math.round(Math.random());
    if(Rock){
        return "Rock";
    }
    else if(Scissors){
        return "Scissors";
    }
    else return "Paper";
}

function GameRound(playerSelection ,ComputerChoice ){
    if(ComputerChoice.toUpperCase() == playerSelection.toUpperCase()){
        return `it,s a tie! ${ComputerChoice} can not beat itself`;
    }
    if((ComputerChoice.toUpperCase() == "PAPER" && playerSelection.toUpperCase()=="ROCK") || (ComputerChoice.toUpperCase() == "SCISSORS" && playerSelection.toUpperCase()=="PAPER")||(ComputerChoice.toUpperCase() == "ROCK" && playerSelection.toUpperCase()=="SCISSORS")){
        return `You lose! ${ComputerChoice} beats ${playerSelection}`;
    }
    if((ComputerChoice.toUpperCase() == "ROCK" && playerSelection.toUpperCase()=="PAPER") || (ComputerChoice.toUpperCase() == "PAPER" && playerSelection.toUpperCase()=="SCISSORS")||(ComputerChoice.toUpperCase() == "SCISSORS" && playerSelection.toUpperCase()=="ROCK")){
        return `You WIN! ${playerSelection} beats ${ComputerChoice}`;
    }
    
}
const playerSelection = "rock";
const ComputerChoice = getComputerChoice();
console.log(GameRound(playerSelection, ComputerChoice ))
