function computerPlay(){
    let results = ["rock", "paper", "scissors"];
    return results[Math.floor(Math.random()*3)];
}

function playRps(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
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
    let loseCount = 0;
    const buttons = document.querySelectorAll('button');
    const div = document.querySelector('div');

    function bestOfFive(){
        let res = playRps(this.textContent, computerPlay());
        if (res.includes('W')){
            winCount += 1;
        }
        else if (res.includes('L')){
            loseCount += 1;
        }
        div.textContent = res.concat(` You: ${winCount}, Computer: ${loseCount}`);
        if (winCount == 5){
            div.textContent = "Congratulations! You win :)";
            buttons.forEach(btn => btn.removeEventListener('click', bestOfFive));
            return;
        }
        else if (loseCount == 5){
            div.textContent = "You Lose the game :(";
            buttons.forEach(btn => btn.removeEventListener('click', bestOfFive));
            return;
        }
    }

    buttons.forEach(btn => btn.addEventListener('click', bestOfFive));
}

game();