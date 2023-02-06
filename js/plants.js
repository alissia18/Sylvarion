window.onload = function(){
    const cards = document.querySelectorAll(".memory-card");
    let hasFlippedCard = false;
    let lockBoard = false;
    let card1, card2;
    let flipCounter = 0;

    var img = document.getElementById("elise-plantgame");
    var container = document.querySelector(".dialogue-container")
    var dialogue = document.getElementById("plant-intro");
    var counter = 0;
    var next = document.getElementById("plant-next");
    var i = 0;
    var speed = 50;
    let hasPlayed = sessionStorage.getItem("introPlayed-plant");
   
    if(hasPlayed){
        hideElements();
    } else {
        document.getElementById("plant-skip").onclick = function(){
            hideElements();
          }

        next.onclick = function(){
            counter = ++counter;
            
            if(counter == 1){
                dialogue.textContent = "";
                writeDialogue("The crops that grow here are very different from those above ground. They consist of various types of floral herbs, but all of them bear the same protective bulb of light around them.");
            } else if(counter == 2){
               i = 0;
               dialogue.textContent = "";
               writeDialogue("Without a light source, the only plants that flourish here are ones that can generate their own. My people’s sensors allow us to distinguish one plant easily from the next, but our sighted peers such as yourself are not so lucky.");
            } else if(counter == 3){
                i = 0;
                dialogue.textContent = "";
                writeDialogue("To match the correct bunches of flowers together, you must peek between the petals of each protective bulb. There are six types of flowers to be harvested–see if you can collect all the pairs!");
                next.innerHTML = "DONE";
            } else if(counter == 4){
                hideElements();
            }
            
        }

    }

     
    function hideElements(){
        container.style.visibility = "hidden";
        img.style.visibility = "hidden";
        next.style.visibility = "hidden";
        document.getElementById("plant-dialogue-container").style.zIndex = "-9";
        if(!hasPlayed) {
            sessionStorage.setItem("introPlayed-plant", "true")
        } 
      }
    
    function writeDialogue(text){
        next.disabled = true;
         if(i < text.length){
            dialogue.textContent += text.charAt(i);
            i++;
            setTimeout(writeDialogue, speed, text);
        } else {
            next.disabled = false;
        }
        
    }

    function flipCard(){
        if (lockBoard) return;
        if (this === card1) return;
        this.classList.add('flip');

        if(!hasFlippedCard) {
            hasFlippedCard = true;
            card1 = this;
            return;
        }
        card2 = this;
        hasFlippedCard = false;

        checkIfMatching();
    }

    function checkIfMatching(){
        if(card1.dataset.framework == card2.dataset.framework){
            disableCards();
            return;
        }
        unflipCards();
    }

    function disableCards() {
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
        flipCounter += 2;

        if(flipCounter == 12){
            document.getElementById("plantgame-result").style.visibility = "visible";
            document.getElementById("plantgame-result").style.display = "flex";
            document.getElementById("memory-container").style.visibility = "hidden";
            document.getElementById("memory-container").style.display = "none";
        }
      }

    function unflipCards(){
        lockBoard = true;
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            lockBoard = false;
          }, 1000);
    }

    function shuffle() {
        cards.forEach(card => {
          let randomPos = Math.floor(Math.random() * 12);
          card.style.order = randomPos;
        });
    }
    shuffle();
    cards.forEach(card => card.addEventListener('click', flipCard));

    
}