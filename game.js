function getComputerChoice(){
    let Rock = Math.round(Math.random());
    if(Rock){
        return "Rock";
    }
    let Paper = Math.round(Math.random());
    if(Paper){
        return "Paper";
    }
    let Scissors = Math.round(Math.random());
    if(Scissors){
        return "Scissors";
    }
    else return "Paper";
}
console.log(getComputerChoice());

function GameRound(function1 ,function2 ){
    if(getComputerChoice().toUpperCase() == playerSelection().toUpperCase()){
        return `it,s a tie! ${getComputerChoice()} can not beat itself`
    }
    if((getComputerChoice().toUpperCase() == "PAPER" && playerSelection().toUpperCase()=="ROCK") || (getComputerChoice().toUpperCase() == "SCISSORS" && playerSelection().toUpperCase()=="PAPER")){
        return `You lose! ${getComputerChoice()} beats ${playerSelection()}`
    }
    if((getComputerChoice().toUpperCase() == "ROCK" && playerSelection().toUpperCase()=="PAPER") || (getComputerChoice().toUpperCase() == "PAPER" && playerSelection().toUpperCase()=="SCISSORS")){
        return `You WIN! ${playerSelection()} beats ${getComputerChoice()}`
    }
    
}

