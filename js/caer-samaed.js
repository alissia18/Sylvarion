window.onload = function(){
    var img = document.getElementById("alden");
    var dialogue = document.getElementById("samaed-intro");
    var container = document.querySelector(".dialogue-container");
    var counter = 0;
    var next = document.getElementById("samaed-next");
    var i = 0;
    var speed = 50;
    let hasPlayed = sessionStorage.getItem("introPlayed-samaed");
   
    if(hasPlayed){
        img.style.visibility = "hidden";
        container.style.visibility = "hidden";
        next.style.visibility = "hidden";
        document.getElementById("utopia").style.visibility = "visible";
        document.getElementById("cathedral").style.visibility = "visible";
        document.getElementById("execution").style.visibility = "visible";
        document.getElementById("tree-towers").style.visibility = "visible";
   } else {
        next.onclick = function(){
            counter = ++counter;
            
            if(counter == 1){
                dialogue.textContent = "";
                writeDialogue("It may look much nicer here than in the borderlands, but I assure you, it's not.");
            } else if(counter == 2){
               i = 0;
               dialogue.textContent = "";
               writeDialogue("Be careful while you're here. You're a tourist, so they might give you a second chance, but don’t risk it.");
               
            } else if(counter == 3){
                i = 0;
                dialogue.textContent = "";
               writeDialogue(" I mean, my family’s high up in the military… they might be able to sway the church if I speak on your behalf…");
            } else if(counter == 4){
                i = 0;
                dialogue.textContent = "";
                writeDialogue("It’s not good to run afoul of the empire. Enjoy your visit but, especially if you are a mage, tread carefully.");
                next.innerHTML = "DONE";
            }
            else if(counter == 5){
                container.style.visibility = "hidden";
                img.style.visibility = "hidden";
                next.style.visibility = "hidden";
                document.getElementById("utopia").style.visibility = "visible";
                document.getElementById("cathedral").style.visibility = "visible";
                document.getElementById("execution").style.visibility = "visible";
                document.getElementById("tree-towers").style.visibility = "visible";
            
            if(!hasPlayed) {
                sessionStorage.setItem("introPlayed-samaed", "true")
            } 
                
            }
            
        }

    }

    function writeDialogue(text){
         if(i < text.length){
            dialogue.textContent += text.charAt(i);
            i++;
            setTimeout(writeDialogue, speed, text);
        }
        
    }

}