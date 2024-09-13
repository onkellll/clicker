document.getElementById("score").innerText = "click to start";

let poengsum = 0;

let stor = true;

// document.getElementById("cookie").addEventListener("click", klikk);

document.getElementById("cookie").addEventListener("mousedown", musNed);
document.getElementById("cookie").addEventListener("mouseup", musOpp);

function musNed() {
    document.getElementById("cookie").style.transform = "scale(0.8)";
    poengsum = poengsum + 1;
    document.getElementById("score").innerText = "Poengsum: " + poengsum;

    if (poengsum > 49) {
        document.getElementById("cookie").src = "Hello Kitty Flowers.jpg";
    }


    if (poengsum > 99) {
        document.getElementById("cookie").src = "Hello Kitty ferdig.jpg";
    }
    

}

function musOpp() {
    document.getElementById("cookie").style.transform = "scale(1)";
}

// function klikk() {
//     document.getElementById("score").style.color = "red";

//     if (stor) {
//         document.getElementById("cookie").style.transform = "scale(0.8)";
//         stor = false;
//     }
//     else {
//         document.getElementById("cookie").style.transform = "scale(1)";
//         stor = true;
//     }

//     poengsum = poengsum + 1;

//     document.getElementById("score").innerText = "Poengsum: " + poengsum;
// }