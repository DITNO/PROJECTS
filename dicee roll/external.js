var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceimg1 = "./images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceimg1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceimg2 = "./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceimg2);
if(randomDiceimg1 > randomDiceimg2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomDiceimg1 < randomDiceimg2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";

}
else {
    document.querySelector("h1").innerHTML = "draw";

}
