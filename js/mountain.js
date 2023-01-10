window.onload = function(){
    var img = document.getElementById("elise");
    var container = document.querySelector(".dialogue-container")
    var dialogue = document.getElementById("mountain-intro");
    var counter = 0;
    var next = document.getElementById("mountain-next");
    var i = 0;
    var speed = 50;
    let hasPlayed = sessionStorage.getItem("introPlayed-mount");
   
    if(hasPlayed){
        img.style.visibility = "hidden";
        container.style.visibility = "hidden";
        next.style.visibility = "hidden";
        document.getElementById("to-plant-game").style.visibility = "visible";
        document.getElementById("tree").style.visibility = "visible";
        document.getElementById("wall-homes").style.visibility = "visible";
    } else {

        next.onclick = function(){
            counter = ++counter;
            
            if(counter == 1){
                dialogue.textContent = "";
                writeDialogue("How kind of you to stop by! My name is E'lys, and I would be happy to show you around if you’re inclined to stay awhile.");
            } else if(counter == 2){
               i = 0;
               dialogue.textContent = "";
               writeDialogue("My tribe lives a simpler life than the rest of the continent. We find luxuries such as houses and walls unnecessary and even detrimental to our well-being.");
            } else if(counter == 3){
                i = 0;
                dialogue.textContent = "";
                writeDialogue("I’ll leave you to have a look around now. Follow me to our agricultural fields when you’re ready and I can teach you about the wildlife that grows here, if you’d like.");
                next.innerHTML = "DONE";
            } else if(counter == 4){
                container.style.visibility = "hidden";
                img.style.visibility = "hidden";
                next.style.visibility = "hidden";
                document.getElementById("to-plant-game").style.visibility = "visible";
                document.getElementById("tree").style.visibility = "visible";
                document.getElementById("wall-homes").style.visibility = "visible";
                if(!hasPlayed) {
                    sessionStorage.setItem("introPlayed-mount", "true")
                } 
            }
            
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

}