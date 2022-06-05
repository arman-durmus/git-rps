function computerPlay(){
    let results = ["rock", "paper", "scissors"];
    return results[Math.floor(Math.random()*3)];
}

function playRps(playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    return "Draw!";
                case "paper":
                    return "You Lose! paper beats rock";
                case "scissors":
                    return "You Win! rock beats scissors";
            }
        case "paper":
            switch(computerSelection){
                case "rock":
                    return "You Win! paper beats rock";
                case "paper":
                    return "Draw!";
                case "scissors":
                    return "You Lose! scissors beat paper!";
            }
        case "scissors":
            switch(computerSelection){
                case "rock":
                    return "You Lose! rock beats scissors";
                case "paper":
                    return "You Win! scissors beat paper!";
                case "scissors":
                    return "Draw!";
            }
    }
}

function game(){
    let winCount = 0;
    for (let i = 0; i < 5; i++) {
        input = prompt("Choose rock, paper or scissors!", "rock");
        res = playRps(input, computerPlay());
        alert(res);
        if (res.includes("Win")){
            winCount += 2;
        }
        else if (res == "Draw!"){
            winCount +=1;
        }
     }
     if (winCount < 5){
         alert("You Lose the game :(");
     }
     else if (winCount == 5){
         alert("It's a Draw!");
     }
     else{
         alert("Congratulations! You win :)");
     }
}

game();