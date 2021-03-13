//My questions array ref:https://www.w3schools.com/js/js_arrays.asp
let myQuestions = [
    {
        questionNum: 1,
        question: "try to anser the following to the best of your ablities in the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!",
        answer: "Start",
        option: [
            "Start",
        ]
    },
    {
        questionNum: 2,
        question: "Commonly used data type DO NOT include",
        answer: "1. alerts",
        option: [
            "1. alerts",
            "2. booleans",
            "3. strings",
            "4. functions"
        ]
    },
    {
        questionNum: 3,
        question: "The condition an if / else statement is enclosed within ______.",
        answer: "1. curly brackets",
        option: [
            "1. curly brackets",
            "2. quotes",
            "3. parenthesis",
            "4. square brackets"
        ]
    },
    {
        questionNum: 4,
        question: "Arrays in JavaScript can be used to store",
        answer: "1. all of the above",
        option: [
            "1. all of the above",
            "2. other arrays",
            "3. booleans",
            "4. numbers and strings"
        ]
    },
    {
        questionNum: 5,
        question: "Strings values be enclosed within ______ when being assinged to variables",
        answer: "1. parentheses",
        option: [
            "1. parentheses",
            "2. curly brackets",
            "3. quotes",
            "4. commas"
        ]
    },
    {
        questionNum: 6,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "1. console.log",
        option: [
            "1. console.log",
            "2. terminal",
            "3. for loops",
            "4. JavaScript"
        ]
    },
    {
        questionNum: 7,
        question: "Game Over",
        answer: "Reset",
        option: [
            "Reset"
        ]
    },
];

let qs = 0; //stores the current question number in the array your on
let score = 0; // store the score of user
let btn = document.createElement("button");
let correctOrWrong = document.getElementById("correctOrWrong");
let options = document.getElementById("option");
let textInputName = document.createElement("input");
let questions = document.getElementById("question")
let scores = document.getElementById("scores")
const initialsEl = $('#initials');
const highscoreBtn = $('#highscores');
const highscorelist = $('#highscorelist');
let scoreSaved;
let secondsSaved;
// invocation of funtion eleId by x
function eleId(x) {
    return document.getElementById(x);
}

// Add event listner to DOM element
document.addEventListener("DOMContentLoaded", ()=>{ // Anonymous Function
    loadQuestions(); // Run the function after loading the dom
})

function loadQuestions() {
    //populating the H2 section questions with the first question from the array
    eleId("question").innerHTML = myQuestions[qs].question;

    eleId("option").innerHTML = ""; // set it clear at first to avoid data 

    myQuestions[qs].option.forEach(option => {
        eleId("option").innerHTML += `<button id="btn" class="btn">${option}</button>`
    });


    document.querySelectorAll("#btn").forEach(btn => { // Select all rendered options and listen for events
        btn.onclick = function () {
            console.log(btn.textContent);
            console.log(myQuestions[qs].answer);
            console.log(myQuestions.length);
            console.log(myQuestions[qs].questionNum);
            console.log(myQuestions[qs].questionNum === (myQuestions.length - 1));
            console.log(myQuestions[6].option[0]);
            correctOrWrong.style.display = "block";
            if (qs === 0) {
                setTime();
            }
            if (btn.textContent === myQuestions[qs].answer && myQuestions[qs].questionNum === 1) {
                correctOrWrong.innerHTML = " ";
            }
            if (btn.textContent === myQuestions[qs].answer && myQuestions[qs].questionNum !== 1) {
                correctOrWrong.innerHTML = "Correct!";
                timeout()
            }
            if (btn.textContent !== myQuestions[qs].answer){
                correctOrWrong.innerHTML = "Wrong!";
                timeout()
            }
            if (btn.textContent !== myQuestions[qs].answer) {
                secondsLeft = secondsLeft - 10;
                console.log(btn.textContent !== myQuestions[qs].answer);
            }
            if (myQuestions[qs].questionNum === (myQuestions.length - 1)) {
                storeTime()
                textbox()
                storeinitials()
            }
            if (qs >= (myQuestions.length - 1)) {
                location.reload();
            }
            else
                qs++;
            loadQuestions();
        }
    });
}

// Selects element by class
let timeEl = document.getElementById("time");

let secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
        clearInterval(timerInterval);
        clearout()
      };
      if (myQuestions[qs].questionNum > (myQuestions.length - 1)) {
        clearInterval(timerInterval);
    }

  }, 1000);
}

function timeout() {
    setTimeout(function () {
        correctOrWrong.style.display = "none";
    }, 700);
}

function clearout() {
    eleId("question").innerHTML = "";
    eleId("option").innerHTML = "";
}

function textbox() {
    scores.style.display = "block";
    // scores.innerHTML += `<label id="initial" for="fname">Initials: </label><input type="text" id="initials" name="initials"><button id="highscores" class="btn">highscore</button>`;
}

function storeTime(secondsSaved) {
    localStorage.setItem("time", JSON.stringify(secondsLeft));
    secondsSaved = JSON.parse(localStorage.getItem("time"));
    timeEl = secondsSaved;
    return secondsSaved;
}

function storeinitials(scoreSaved) {
    initialsText = $('#initials').val();
    localStorage.setItem("initials", JSON.stringify(initialsText));
    scoreSaved = JSON.parse(localStorage.getItem("initials"));
    return scoreSaved;
}

$("#scores").submit(function (e) {
    e.preventDefault();
    initialsText = $('#initials').val();
    if (initialsText.length <= 0 ) {
        alert("Please put in something");
    }
    else {
        storeinitials();
        clearout();
        scores.style.display = "none";
        document.getElementById("time").style.display = "none";
        $("#highscorelist").append(`<h3>High Score</h3>`);
        $("#highscorelist").append(`<p>Initials: ${storeinitials(scoreSaved)} Score: ${storeTime(secondsSaved)}</p>`);
        
    }
});



// highscoreslist.innerHTML = scoreSaved
//     .map(score => {
//         return `<p class="high-scores"> ${scoredSaved}`
//     })
//     .join("");