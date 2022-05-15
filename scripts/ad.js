let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let timeBtn = document.getElementById("timeBtn");
let startText = document.getElementById("start");

const audioWrong = new Audio('audio/negative_beeps-6008.mp3');
const audioCorrect = new Audio('audio/correct-6033.mp3');

let timer;
let timeLeft = 100;
let timerInterval;
let score = -1;
let answer = 0;
let firstNumber;
let secretNum1;
let secondNumber;
let secretNum2;

startText.hidden = false;

document.getElementById('option1').disabled = true;
document.getElementById('option2').disabled = true;
document.getElementById('option3').disabled = true;


function startGame() {
    generate_equation();
    document.getElementById('option1').disabled = false;
    document.getElementById('option2').disabled = false;
    document.getElementById('option3').disabled = false;
    document.getElementById("timeBtn").disabled = true;
    startText.style.fontSize = "20px";
    timeBtn.style.backgroundColor = "#f3ae20";

    let timeDisplay = document.getElementById("timeDisplay");
    timerInterval = setInterval(function () {
        timeLeft -= 1;
        timeDisplay.innerHTML = "Time Left:<br>" + timeLeft;
        timeDisplay.hidden = false;
        startText.hidden = true;
        if (timeLeft == 0) {
            clearInterval(timerInterval);
            document.getElementById('option1').disabled = true;
            document.getElementById('option2').disabled = true;
            document.getElementById('option3').disabled = true;
            document.getElementById("timeBtn").disabled = false;
            startText.innerHTML = "RESTART";
            startText.style.fontSize = "20px";
            startText.style.fontColor = "black";
            startText.style.border = "none";
            timeBtn.style.backgroundColor = "darkorange";

            timeDisplay.hidden = true;
            startText.hidden = false;
            timeLeft = 100;
            score = 0;
        }
    }, 1500)
}

function generate_equation() {
    secretNum1 = Math.floor(Math.random() * 6);
    firstNumber = document.getElementById("num1");
    firstNumber.innerHTML = secretNum1;

    secretNum2 = Math.floor(Math.random() * 6);
    secondNumber = document.getElementById("num2");
    secondNumber.innerHTML = secretNum2;

    //secretNum1
    if (secretNum1 == 1) {
        document.getElementById("frogImg").src = '../img/frog_1.png';
    }
    if (secretNum1 == 2) {
        document.getElementById("frogImg").src = '../img/frog_2.png';
    }
    if (secretNum1 == 3) {
        document.getElementById("frogImg").src = '../img/frog_3.png';
    }
    if (secretNum1 == 4) {
        document.getElementById("frogImg").src = '../img/frog_4.png';
    }
    if (secretNum1 == 5) {
        document.getElementById("frogImg").src = '../img/frog_5.png';
    }
    if (secretNum1 == 6) {
        document.getElementById("frogImg").src = '../img/frog_6.png';
    }
    if (secretNum1 == 7) {
        document.getElementById("frogImg").src = '../img/frog_7.png';
    }
    if (secretNum1 == 8) {
        document.getElementById("frogImg").src = '../img/frog_8.png';
    }
    if (secretNum1 == 9) {
        document.getElementById("frogImg").src = '../img/frog_9.png';
    }
    if (secretNum1 == 0) {
        document.getElementById("frogImg").src = '../img/frog_0.png';
    }

    //secretNum2
    if (secretNum2 == 1) {
        document.getElementById("frogImg2").src = '../img/frog_1.png';
    }
    if (secretNum2 == 2) {
        document.getElementById("frogImg2").src = '../img/frog_2.png';
    }
    if (secretNum2 == 3) {
        document.getElementById("frogImg2").src = '../img/frog_3.png';
    }
    if (secretNum2 == 4) {
        document.getElementById("frogImg2").src = '../img/frog_4.png';
    }
    if (secretNum2 == 5) {
        document.getElementById("frogImg2").src = '../img/frog_5.png';
    }
    if (secretNum2 == 6) {
        document.getElementById("frogImg2").src = '../img/frog_6.png';
    }
    if (secretNum2 == 7) {
        document.getElementById("frogImg2").src = '../img/frog_7.png';
    }
    if (secretNum2 == 8) {
        document.getElementById("frogImg2").src = '../img/frog_8.png';
    }
    if (secretNum2 == 9) {
        document.getElementById("frogImg2").src = '../img/frog_9.png';
    }
    if (secretNum2 == 0) {
        document.getElementById("frogImg2").src = '../img/frog_0.png';
    }


    // answer-options
    let dummyAnswer1 = Math.floor(Math.random() * 6) + 1;
    let dummyAnswer2 = Math.floor(Math.random() * 6)
    let allAnswers = [];
    let switchAnswers = [];


    //adding score
    if (answer = secretNum1 + secretNum2) {
        document.getElementById("scoreText").innerHTML = score++;
        console.log(score)
    }

    if (score < 2) {
        document.getElementById("scoreImg").src = '../img/score_0.png';
    }
    if (score > 2) {
        document.getElementById("scoreImg").src = '../img/score_2.png';
    }
    if (score > 4) {
        document.getElementById("scoreImg").src = '../img/score_4.png';
    }
    if (score > 6) {
        document.getElementById("scoreImg").src = '../img/score_6.png';
    }
    if (score > 8) {
        document.getElementById("scoreImg").src = '../img/score_8.png';
    }
    if (score > 10) {
        document.getElementById("scoreImg").src = '../img/score_10.png';
    }
    if (score > 12) {
        document.getElementById("scoreImg").src = '../img/score_12.png';
    }
    if (score > 14) {
        document.getElementById("scoreImg").src = '../img/score_14.png';
    }


    document.getElementById("num1").innerHTML = firstNumber;
    document.getElementById("num2").innerHTML = secondNumber;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for (i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
    option1.innerHTML = switchAnswers[0];
}

option1.addEventListener('click', function () {
    if (option1.innerHTML == answer) {
        audioCorrect.play();
        generate_equation();
    } else {
        audioWrong.play();
    }
})

option2.addEventListener('click', function () {
    if (option2.innerHTML == answer) {
        audioCorrect.play();
        generate_equation();
    } else {
        audioWrong.play();
    }
})

option3.addEventListener('click', function () {
    if (option3.innerHTML == answer) {
        audioCorrect.play();
        generate_equation();
    } else {
        audioWrong.play();
    }
})

generate_equation();