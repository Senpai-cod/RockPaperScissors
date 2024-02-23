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