let otherColor = "#f4f4f4";
let firstColor = "red";
let horizontalOffset = 0;
let topOffset = 0;
const soundFile = new Audio("InGameMusic.mp3");
let dragging = false;

//setInterval(moveButton, 20); //20 is the time in ms for the interval

function clickFunction(){
    document.getElementById("header-p").innerHTML = "Haha! You have changed the header. Now no one will know what this website is about.";
    document.getElementById("readings-button").style.backgroundColor = otherColor;
    let swap = otherColor;
    otherColor = firstColor;
    firstColor = swap;
    soundFile.play();
}

function moveButton(){
    document.getElementById("readings-button").style.left = horizontalOffset + "px";
    document.getElementById("readings-button").style.top = topOffset + "px";

}

document.addEventListener("keydown", keyboardFunction);

function keyboardFunction(){
    if(event.keyCode == 32){
        window.alert("Hello World");
    } else if(event.keyCode == 65){
        if(horizontalOffset >= -100){
            horizontalOffset = horizontalOffset - 50;
        }
    } else if(event.keyCode == 68){
        if(horizontalOffset <=500){
            horizontalOffset = horizontalOffset + 50;
        } 
    } else if(event.keyCode == 83){
        topOffset = topOffset + 50;
    } else if(event.keyCode == 87){
        topOffset = topOffset - 50;
    }

    moveButton();
}

function mouseDown(){
    dragging = true;
}

function mouseMove(){
    if(dragging){
        horizontalOffset = horizontalOffset + event.movementX;
        moveButton();
        topOffset = topOffset + event.movementY;
    }
    
}

function mouseUp(){
    dragging = false;
}
//need position: relative for offsets to work