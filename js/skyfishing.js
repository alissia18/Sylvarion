let airship = null;
let catchOptions = ["A Wyrm!", "A Flying Boot!", "A Dreamwalker...Oops!", "A Duck!"];
let catchRandomizer = null;
let catchChooser = null;
let imageOffset1 = 200;
let imageOffset2 = -700;
let imageOffset3 = -800;
let imageOffset4 = -300;
let imageOffset5 = -500;


alert("Use the arrow keys to move and press 'go fishing' when you're ready to reel in!");

window.onload = function(){
    
    airship = document.getElementById("airship");
    airship.style.left="50px";
    airship.style.top = "50px";
    airship.style.visibility = "visible";
    document.getElementById("result-container").style.visibility = "hidden";
    document.getElementById("cloud1-skyfish").style.left = imageOffset1 + "px";
    document.getElementById("cloud2-skyfish").style.left = imageOffset2 + "px";
    document.getElementById("cloud3-skyfish").style.left = imageOffset3 + "px";
   
    
}

function move(e){
    var code = e.which || e.keyCode;
    switch(code){
        case 37:
            airship.style.left = parseInt(airship.style.left) - 5 + "px";
            break;
        case 39:
            airship.style.left = parseInt(airship.style.left) + 5 + "px";
            break;
    }

}

function goFishing(){
    var img = document.getElementById("skyfish-img");
    catchRandomizer = Math.random()*10;
    airship.style.visibility = "hidden";
    document.getElementById("result-container").style.visibility = "visible";
    document.getElementById("result-container").style.display = "flex";
    if(catchRandomizer > 4){
        catchChooser = Math.floor(Math.random()*4);
        result = catchOptions[catchChooser];
        switch(catchChooser){
            case 0:
                img.src = "images/skyfishing/wyrm.png";
                break;
            case 1:
                img.src = "images/skyfishing/boot.png";
                break;
            case 2:
                img.src = "images/skyfishing/dreamwalker.png";
                break;
            case 3:
                img.src = "images/skyfishing/duck.png"
            default: 
                break;
        }
    } else {
        result = "You didn't catch anything.";
        img.src = "images/skyfishing/nothing.png";
    }
    document.getElementById("skyfishing-container").style.display = "none";
    document.getElementById("result").textContent = result;

}

function reset(){
    document.getElementById("result-container").style.visibility = "hidden";
    document.getElementById("skyfishing-container").style.visibility = "visible";
    document.getElementById("skyfishing-container").style.display = "flex";
    airship.style.visibility = "visible";
    document.getElementById("result-container").style.display = "none";
}

function moveClouds(){
    imageOffset1 += 0.5;
    document.getElementById("cloud1-skyfish").style.left = imageOffset1 + "px";
    imageOffset2 += 0.5;
    document.getElementById("cloud2-skyfish").style.left = imageOffset2 + "px";
    imageOffset3 += 0.5;
    document.getElementById("cloud3-skyfish").style.left = imageOffset3 + "px";
    imageOffset4 += 0.5;
    document.getElementById("cloud4-skyfish").style.left = imageOffset4 + "px";
    imageOffset5 += 0.5;
    document.getElementById("cloud5-skyfish").style.left = imageOffset5 + "px";

    if(imageOffset1 >= 1200){
        imageOffset1 = -200;
    }
    if(imageOffset2 >= 1200){
        imageOffset2 = -700;
    }
    if(imageOffset3 >= 1200){
        imageOffset3 = -1000;
    }

    if(imageOffset4 >= 1200){
        imageOffset4 = -300;
    }
    if(imageOffset5 >= 1200){
        imageOffset5 = -500;
    }
}

setInterval(moveClouds,20);


