var randomNumber1 = Math.floor(Math.random()*6)+1;//1-6 randomNumbers;
var randomDiceImage = "dice"+randomNumber1+".png";//dice1.png--dice6.png(6 randomDiceImages);random
var randomImageSource = "images/"+randomDiceImage;//images/dice1.png--images/dice6.png;random
var image1 = document.querySelectorAll("img")[0];//it selects first image 
image1.setAttribute("src",randomImageSource);//it changes real src to randomImageSource = which gives random diceImages;


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2= "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}