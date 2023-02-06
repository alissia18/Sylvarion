window.onload = function(){
 var scale = 1,
 panning = false,
 pointX = 0,
 pointY = 0,
 startX = 0,
 startY = 0,
 map = document.getElementById("map");
 // for the character and dialogue 
 var next = document.getElementById("map-continue");
 var i = 0;
 var counter = 0;
 var speed = 25;
 var img = document.getElementById("sapphira-map");
 let hasPlayed = sessionStorage.getItem("introPlayed");
 var dialogue = document.getElementById("map-intro");
 var container = document.querySelector(".dialogue-container");

if(hasPlayed){
  hideElements();
} else {
 
  document.getElementById("map-skip").onclick = function(){
    hideElements();
  }
 next.onclick = function(){
  counter = ++counter;
  
  if(counter == 1){
      dialogue.textContent = "";
      writeDialogue("My friend Isaac back home, he’s the cartographer who painted this map and enchanted it himself with teleportation magic! Isn’t it amazing?");
  } else if(counter == 2){
     i = 0;
     dialogue.textContent = "";
     writeDialogue("Oh, right, you’re new here, sorry, I should be telling you about the continent, not about my mapmaker friend! Anyway, this is Sylvarion’s main continent, Kartyrea.");
  } else if(counter == 3){
    i = 0;
    dialogue.textContent = "";
    writeDialogue("There’s so many vibrant countries here but you said you didn’t have much time so I’ve just marked out three... It was so hard to choose!");
  } else if(counter == 4){
    i = 0;
    dialogue.textContent = "";
    writeDialogue("Ugh, I wish you could’ve seen Chromaria, I haven’t visited yet but I’ve heard the pastries at Sylvia’s bakery are unmatched.");
  } else if(counter == 5){
    i = 0;
    dialogue.textContent = "";
    writeDialogue("Oh no, I’ve gotten off track again, haven’t I? I don’t even think I’ve told you my name yet…well, it’s Imena! And I’ll be guiding you throughout your visit alongside my friends Alden and E'lys.");
  } else if(counter == 6){
    i = 0;
    dialogue.textContent = "";
    writeDialogue("There’s my home kingdom – the floating city of Riam’Neave, and also Caer Samaed and way over there is Mount Raenmora!");
  } else if(counter == 7){
    i = 0;
    dialogue.textContent = "";
    writeDialogue("…Well I’ll head off to my post at Riam’Neave, see you there! But remember to check out the other places too!");
    next.innerHTML = "DONE";
  } else if(counter == 8){
   hideElements();
  }
  
}
}

function hideElements(){
  container.style.visibility = "hidden";
  img.style.visibility = "hidden";
  next.style.visibility = "hidden";
  document.getElementById("map-skip").style.visibility = "hidden";
  document.getElementById("riam-neave").style.visibility = "visible";
  document.getElementById("mount-raenmora").style.visibility = "visible";
  document.getElementById("caer-samaed").style.visibility = "visible";
  if(!hasPlayed) {
    sessionStorage.setItem("introPlayed", "true")
  } 
}

function writeDialogue(text){
  document.getElementById("map-continue").disabled = true;
  if(i < text.length){
    dialogue.textContent += text.charAt(i);
    i++;
    setTimeout(writeDialogue, speed, text);
  } else {
    document.getElementById("map-continue").disabled = false;
  }
  
}
}


 