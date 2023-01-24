var zero = '0';

var one = '1';
var two = '2';
var three = '3';
var four = '4';
var five = '5';
var six = '6';
var seven = '7';
var eight = '8';

var firstNumberArray = [one, two, three, four, five, six, seven, eight];
var secondNumberArray = [one, two];

var firstNumber = document.getElementById('firstNumber');
var secondNumber = document.getElementById('secondNumber');

firstNumber.innerHTML = firstNumberArray[0];
secondNumber.innerHTML = secondNumberArray[0];

var startButton = document.getElementById('start-button');

var i = 1;

function step (event) {
    if (i === 0) {
        firstNumber.innerHTML = zero;
        secondNumber.innerHTML = zero;
        i = 1;
    }
    else if (i === 1) {
        firstNumber.innerHTML = firstNumberArray[0];
        secondNumber.innerHTML = secondNumberArray[0];
        i = 2;
    }
    else if (i === 2) {
        firstNumber.innerHTML = firstNumberArray[1];
        secondNumber.innerHTML = secondNumberArray[0];
        i = 3;
    }
    else if (i === 3) {
        firstNumber.innerHTML = firstNumberArray[2];
        secondNumber.innerHTML = secondNumberArray[0];
        i = 4;
    }
    else if (i === 4) {
        firstNumber.innerHTML = firstNumberArray[3];
        secondNumber.innerHTML = secondNumberArray[0];
        i = 5;
    }
    else if (i === 5) {
        firstNumber.innerHTML = firstNumberArray[4];
        secondNumber.innerHTML = secondNumberArray[0];
        i = 6;
    }
    else if (i === 6) {
        firstNumber.innerHTML = firstNumberArray[5];
        secondNumber.innerHTML = secondNumberArray[0];
        i = 7;
    }
    else if (i === 7) {
        firstNumber.innerHTML = firstNumberArray[6];
        secondNumber.innerHTML = secondNumberArray[0];
        i = 8;
    }
    else if (i === 8) {
        firstNumber.innerHTML = firstNumberArray[7];
        secondNumber.innerHTML = secondNumberArray[0];
        i = 9;
    }
    else if (i === 9) {
        firstNumber.innerHTML = firstNumberArray[0];
        secondNumber.innerHTML = secondNumberArray[1];
        i = 10;
    }
    else if (i === 10) {
        firstNumber.innerHTML = firstNumberArray[1];
        secondNumber.innerHTML = secondNumberArray[1];
        i = 11;
    }
    else if (i === 11) {
        firstNumber.innerHTML = firstNumberArray[2];
        secondNumber.innerHTML = secondNumberArray[1];
        i = 12;
    }
    else if (i === 12) {
        firstNumber.innerHTML = firstNumberArray[3];
        secondNumber.innerHTML = secondNumberArray[1];
        i = 13;
    }
    else if (i === 13) {
        firstNumber.innerHTML = firstNumberArray[4];
        secondNumber.innerHTML = secondNumberArray[1];
        i = 14;
    }
    else if (i === 14) {
        firstNumber.innerHTML = firstNumberArray[5];
        secondNumber.innerHTML = secondNumberArray[1];
        i = 15;
    }
    else if (i === 15) {
        firstNumber.innerHTML = firstNumberArray[6];
        secondNumber.innerHTML = secondNumberArray[1];
        i = 16;
    }
    else if (i === 16) {
        firstNumber.innerHTML = firstNumberArray[7];
        secondNumber.innerHTML = secondNumberArray[1];
        i = 1;
    }
}

setInterval(step, 800);
