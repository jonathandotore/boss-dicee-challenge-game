function randomNumber() {
    let number1 = Math.ceil(Math.random() * 6);
    let number2 = Math.ceil(Math.random() * 6);
    let text = document.querySelector('button').textContent;
    text === ' Play! ' ? ' Re-roll! ' : 'Try Again!';

    return number1, number2;
}


