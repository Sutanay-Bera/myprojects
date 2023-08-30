let bttn=document.getElementById("btn");
bttn.addEventListener("click", function(){
    let h1=document.querySelector("h1");
    let random = getRandomcolor();
    h1.innerText= random;
    document.getElementById("bgclr").style.backgroundColor=random;
});

function getRandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let colour = `rgb(${red},${green},${blue})`;
    return colour;
}

