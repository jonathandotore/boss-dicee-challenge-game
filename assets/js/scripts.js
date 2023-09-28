let number1 = Math.ceil(Math.random() * 6);
let number2 = Math.ceil(Math.random() * 6);
let randomDiceImage = "dice" + number1 + '.png';
let randomDiceImage2 = "dice" + number2 + '.png';
let randomImageSource = "./assets/images/" + randomDiceImage;
let randomImageSource2 = "./assets/images/" + randomDiceImage2;
let image1 = document.querySelector('.dice1').setAttribute('src', randomImageSource);
let image2 = document.querySelector('.dice2').setAttribute('src', randomImageSource2);

if (number1 > number2) {
    document.querySelector('h1').innerHTML = '🚩 Player 1 Wins!'
} else if (number2 > number1) {
    document.querySelector('h1').innerHTML = '🚩 Player 2 Wins!'
} else if (number1 === number2) {
    '🙅🏼‍♂️ Game Tied!'
}