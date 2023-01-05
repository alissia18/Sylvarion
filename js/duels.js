window.onload = function(){
    let playerScore = 0;
    let opponentScore = 0;
    let movesDone = 0;

    function playGame(){
        let sword = document.getElementById("sword");
        let shield = document.getElementById("shield");
        let bow = document.getElementById("bow");
        let playerOptions = [sword, shield, bow];
        let opponentOptions = ['sword', 'shield', 'bow'];
    
        playerOptions.forEach(option => {
            option.onclick = function(){
                let movesLeft = document.getElementById("moves-left");
                movesDone++;
                movesLeft.innerText = "Moves Left: " + (10-movesDone);
        
                let choiceNb = Math.floor(Math.random()*3);
                let opponentChoice = opponentOptions[choiceNb];
                checkWinner(this, opponentChoice);
                if(movesDone == 10){
                    gameOver(playerOptions,movesLeft);
                }
            }
        });
    
    }


    function checkWinner(player, opponent){
        let result = document.getElementById("result-duels");
        result.style.visibility = "visible";
        playerScoreDisplay = document.getElementById("player-count");
        opponentScoreDisplay = document.getElementById("opponent-count");
        
        if(player == shield && opponent  == 'shield') {
            result.style.color = "white";
            result.textContent = 'Both of you raise your shields to block the other attack...But no one attacks. Nothing happens.';
        }
        else if(player == sword && opponent == 'sword'){
            result.style.color = "white";
            result.textContent = 'Each of you slash at the other with your sword. The two swords clash and neither of you quite manages to hit the other.';
        }
        else if(player == bow && opponent == 'bow'){
            result.style.color = "white";
            result.textContent = 'You both draw your bows, but the two arrows collide in the middle, meaning neither of you are hit.';
        }
        else if(player == sword){
            
            if(opponent == 'bow'){
               
                result.textContent = "You attempt to slash at your opponent with your sword, but they've ducked out of reach and they hit you with a sharp arrow from their bow.";
                result.style.color = "red";
                opponentScore++;
                opponentScoreDisplay.textContent = opponentScore;
            }
            else {
                result.textContent = "You step forward to slice at your opponent with your sword, and you catch them off guard as they try to raise their shield.";
                result.style.color = "green";
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
            }
        }

        else if(player == shield) {
            if(opponent == 'sword') {
                result.textContent = "You raise your shield, but you are not quick enough to block your opponent's valiant sword strike."
                opponentScore++;
                result.style.color = "red";
                opponentScoreDisplay.textContent = opponentScore;
            }
            else {
                result.textContent = "You raise your shield just in time to block your opponent's incoming arrow projectile.";
                playerScore++;
                result.style.color = "green";
                playerScoreDisplay.textContent = playerScore;
            }
        }

        else if(player == bow) {
            if(opponent == 'shield') {
                result.textContent = "You load your bow and aim your arrow carefully, but you are unable to pierce through your opponent's shield."
                opponentScore++;
                result.style.color = "red";
                opponentScoreDisplay.textContent = opponentScore;
            } else {
                result.textContent = "You take a step back to load your bow, ducking out of the way of your opponent's sword attack. Your arrow hits your target perfectly."
                playerScore++;
                result.style.color = "green";
                playerScoreDisplay.textContent = playerScore;
            }
        }
    }

    function gameOver(playerOptions, movesLeft){
        let chooseMove = document.getElementById("choose-move");
        let result = document.getElementById("result-duels");
        let reload = document.getElementById("duel-restart");

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        movesLeft.style.display = 'none';
        chooseMove.style.display = 'none';
        result.style.fontSize = '6vh';

        if(playerScore > opponentScore) {
            result.innerText = "Congratulations, you won the duel!";
            result.style.color = "green";
        }

        else if(opponentScore > playerScore) {
            result.innerText = "Your opponent won the duel.";
            result.style.color = "red";
        }

        else {
            result.innerText = "The duel has ended in a tie.";
            result.style.color = "white";
        }

        reload.innerText = "Spar Again";
        reload.style.display = "flex";
        reload.onclick = function(){
            window.location.reload();
        }


    }
    
    playGame();
}

function hover(element){
    if(element == shield){
        element.setAttribute('src', 'images/shield_hover.png');
    } else if(element == sword){
        element.setAttribute('src', 'images/sword_hover.png');
    } else if(element == bow){
        element.setAttribute('src', 'images/bow_hover.png');
    }
    
}
    

function unhover(element){
    if(element == shield){
        element.setAttribute('src', 'images/shield.png');
    } else if(element == sword){
        element.setAttribute('src', 'images/sword.png');
    } else if(element == bow){
        element.setAttribute('src', 'images/bow.png');
    }
    
}
  