window.onload = function(){
    var img = document.getElementById("sapphira");
    var dialogue = document.getElementById("riamneave-intro");
    var container = document.querySelector(".dialogue-container");
    var counter = 0;
    var next = document.getElementById("riamneave-next");
    var i = 0;
    var speed = 50;
    let imageOffset1 = -200;
    let imageOffset2 = -700;
    let imageOffset3 = -1000;
    let hasPlayed = sessionStorage.getItem("introPlayed-riamneave");

    if(hasPlayed){
        img.style.visibility = "hidden";
        container.style.visibility = "hidden";
        document.getElementById("skyfishing").style.visibility = "visible";
        document.getElementById("draketaming").style.visibility = "visible";
        document.getElementById("magical-research").style.visibility = "visible";
        document.getElementById("magic-rocks").style.visibility = "visible";
    } else {
        next.onclick = function(){
            counter = ++counter;
            
            if(counter == 1){
                dialogue.textContent = "";
                writeDialogue("Sorry! I got off topic again, Welcome to the Kingdom of the Skies! It’s really called Riam’Neave, but since the blue crystals of cerullium keep everything in the sky…");
            } else if(counter == 2){
               i = 0;
               dialogue.textContent = "";
               writeDialogue("Oh, yes… Sorry, I’ll stay on topic this time, but you should absolutely stop by the Archives of Trideri and they can tell you all about how the islands stay in the sky!");
               
            } else if(counter == 3){
                i = 0;
                dialogue.textContent = "";
                writeDialogue("There is soo much to explore here and I just can’t wait to show you everything… What do you mean you're only here for the day!?");
            } else if(counter == 4){
                i = 0;
                dialogue.textContent = "";
                writeDialogue("Well in that case you must check out the archives, and also the Dragon training!");
            } else if(counter == 5){
                i = 0;
                dialogue.textContent= "";
                writeDialogue("If you go to the Dragon keepers' guild around the back, you can sometimes talk the stable hands into letting you see them up close!!");
            }
            else if(counter == 6){
                i = 0;
                dialogue.textContent = "";
                writeDialogue("If you have time you should also stop by the sky fishers, their boats are sooo cool looking but sitting around in the clouds forever can be really boring.");
            } else if(counter == 7){
                i = 0;
                dialogue.textContent = "";
                writeDialogue("But you seem to be the kind of person that would enjoy that kind of thing… and the view isn’t that bad I guess… ");
            } else if(counter == 8){
                i = 0;
                dialogue.textContent = "";
                writeDialogue("Sorry! Wish I could stay longer but I gotta run! Enjoy the city!!");
                next.innerHTML = "DONE";
            }
            else if(counter == 9){
                container.style.visibility = "hidden";
                img.style.visibility = "hidden";
                next.style.visibility = "hidden";
                document.getElementById("skyfishing").style.visibility = "visible";
                document.getElementById("draketaming").style.visibility = "visible";
                document.getElementById("magical-research").style.visibility = "visible";
                document.getElementById("magic-rocks").style.visibility = "visible";
                if(!hasPlayed) {
                    sessionStorage.setItem("introPlayed-riamneave", "true")
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

    function moveClouds(){
        imageOffset1 += 0.5;
        document.getElementById("cloud1").style.left = imageOffset1 + "px";
        imageOffset2 += 0.5;
        document.getElementById("cloud2").style.left = imageOffset2 + "px";
        imageOffset3 += 0.5;
        document.getElementById("cloud3").style.left = imageOffset3 + "px";

        if(imageOffset1 >= 1500){
            imageOffset1 = -200;
        }
        if(imageOffset2 >= 1500){
            imageOffset2 = -700;
        }
        if(imageOffset3 >= 1500){
            imageOffset1 = -1000;
        }
    
    }
    
    setInterval(moveClouds,20);

  
}