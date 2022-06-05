function computerPlay(){
    let results = ["Rock", "Paper", "Scissors"];
    return results[Math.floor(Math.random()*3)];
}

function playRps(playerSelection, computerSelection){
    switch(playerSelection){
        case "Rock":
            switch(computerSelection){
                case "Rock":
                    return "Draw!"
                case "Paper":
                    return "You Lose! Paper beats Rock"
                case "Scissors":
                    return "You Win! Rock beats Scissors"
            }
        case "Paper":
            switch(computerSelection){
                case "Rock":
                    return "You Win! Paper beats Rock"
                case "Paper":
                    return "Draw!"
                case "Scissors":
                    return "You Lose! Scissors beat Paper!"
            }
        case "Scissors":
            switch(computerSelection){
                case "Rock":
                    return "You Lose! Rock beats Scissors"
                case "Paper":
                    return "You Win! Scissors beat Paper!"
                case "Scissors":
                    return "Draw!"
            }
    }
}