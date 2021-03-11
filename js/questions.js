//My questions array ref:https://www.w3schools.com/js/js_arrays.asp
let myQuestions = [
    {
        // questionNum: 1,
        question: "try to anser the following to the best of your ablities in the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!",
        answer: "Start",
        option: [
            "Start",
        ]
    },
    {
        // questionNum: 2,
        question: "Commonly used data type DO NOT include",
        answer: "3. alerts",
        option: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. functions"
        ]
    },
    {
        // questionNum: 3,
        question: "The condition an if / else statement is enclosed within ______.",
        answer: "2. curly brackets",
        option: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square brackets"
        ]
    },
    {
        // questionNum: 4,
        question: "Arrays in JavaScript can be used to store",
        answer: "4. all of the above",
        option: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"
        ]
    },
    {
        // questionNum: 5,
        question: "Strings values be enclosed within ______ when being assinged to variables",
        answer: "4. parentheses",
        option: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parentheses"
        ]
    },
    {
        // questionNum: 6,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "4. console.log",
        option: [
            "1. JavaScript",
            "2. terminal",
            "3. for loops",
            "4. console.log"
        ]
    },
    {
        // questionNum: 6,
        question: "Game Over",
        answer: "4. console.log",
        option: [
            "Reset"]
    }
];

var qs = 0; //stores the current question number in the array your on
var score = 0; // store the score of user
var btn = document.createElement("button");

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
        btn.onclick = () => {
            if (qs >= (myQuestions.length -1)) {
                location.reload();  
            }
            else
                qs++;
                loadQuestions();
        }
    });
}
