let computer = 0;
let player = 0;

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
        computer += 1;
        return `You lose! ${ComputerChoice} beats ${playerSelection}`;
        
    }
    if((ComputerChoice.toUpperCase() == "ROCK" && playerSelection.toUpperCase()=="PAPER") || (ComputerChoice.toUpperCase() == "PAPER" && playerSelection.toUpperCase()=="SCISSORS")||(ComputerChoice.toUpperCase() == "SCISSORS" && playerSelection.toUpperCase()=="ROCK")){
        player += 1;
        return `You WIN! ${playerSelection} beats ${ComputerChoice}`;
         
    }
    
}
do{
const btns = document.querySelectorAll("button");
btns.forEach((btn) =>{
    btn.addEventListener("click", () =>{

        const playerSelection = btn.textContent;
        const ComputerChoice = getComputerChoice();

        const body = document.querySelector("body");

const div = document.createElement("div");
div.textContent = `${GameRound(playerSelection,ComputerChoice)}
                    Your Score: ${player}
                    The Computer's Score: ${computer}`;

body.appendChild(div);
        
    })
})
}while(player < 5 || computer < 5);
if(player == 5){
    const win = document.CreateElement("div");
    win.textContent = "Congratulations You WIN!";
    const body = document.querySelector("body");
    body.appendChild(win);
}
else {
    const lose = documentCreateElement("div");
lose.textContent = "The Computer WINS! and you LOSE!";
    const body = document.querySelector("body");
    body.appendChild(lose);

}