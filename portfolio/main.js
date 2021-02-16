function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("project-images");
    let dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("opacity", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "opacity";
}


const displayLink = () => {
    let k = document.getElementById("github");
    k.style.display = "inline-block";
}
const displayLink1 = () => {
    let k = document.getElementById("instagram");
    k.style.display = "inline-block";
}
const displayLink2 = () => {
    let k = document.getElementById("twitter");
    k.style.display = "inline-block";
}
const displayLink3 = () => {
    let k = document.getElementById("email");
    k.style.display = "inline-block";
}

const displayNone = () => {
    let j = document.getElementsByClassName("hidden-link");
    for (let i = 0; i < j.length; i++) {
        j[i].style.display = "none";
    }
}

const displayNone2 = () => {
    let j = document.getElementById("stand-out");
    j.style.display = "none";
}

const displayInline = () => {
    let j = document.getElementById("stand-out");
    j.style.display = "inline-block";
}

// pride colors 
const pride = () => {
    let phrase = document.getElementById("header");
    phrase.style.animation = "colorChange 10s linear infinite";
}

// Working progress
// const bounce = () => {
//     let letter = document.getElementById("letterBounce");
//     letter.style.animation = "jumpUp 5s linear infinite alternate";

// }