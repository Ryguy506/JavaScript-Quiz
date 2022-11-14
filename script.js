var highscoreEl = document.getElementById("highscore")
var timerEl = document.getElementById("timer")
timerEl.textContent = ("Time- 0")


var startPage = document.getElementById("startpage")
var startBtn = document.getElementById("startbtn")


var quizEl = document.getElementById("quiz")
hide(quiz)
var questionEl = document.getElementById("question")
var choiceEl = document.getElementById("choice")
var currentQuestion = 0;


function hide(element){
 element.style.display = "none";
}

function show(element){
    element.style.display = "block";
   }



   var timerSeconds = 61

function startQuiz() {
    hide(startPage)
    show(quizEl)
    // randomQuestions = questions.sort(() => Math.random() - .5);
    // currentQuestionsIndex = 0;
    renderQuestion()
    questionEl.textContent = questions.question 
    var timerCount = setInterval(function() {
        timerSeconds--;
        timerEl.textContent = ("Time- " + timerSeconds);
   
        if(timerSeconds === 0) { 
          clearInterval(timerCount);
          timerEl.textContent = ("Time- 0");
          
        }
    
      }, 1000);
}


console.log(questions)
var questions = [
    {
        question1: "Commonly used data types DO NOT include",
        choices: [
            { text: "strings" , isCorrect: false},
            { text: "alerts" , isCorrect:true},
            { text: "booleans" , isCorrect:false},
            { text: "numbers" , isCorrect:false}
        ],
        
    },

    {
        question2: "The condition in an if / else statement is enclosed within ____.",
        choices: [ 
            {text:"quotes" , isCorrect:false},
            {text:"curly brackets" , isCorrect:false},
            {text:"parentheses" , isCorrect:true},
            {text:"square brackets" , isCorrect:false}
        ],
        
    },
    {
    question3: "Which built-in method removes the last element from an array and returns that element?",
        choices: [
            {text: "last()" , isCorrect:false},
            {text: "pop()" , isCorrect:true},
            {text: "get()" , isCorrect:false},
            {text: "None of the Above" , isCorrect:false}
        ],
        
    },
    {
        question4: "Which built-in method returns the calling string value converted to lower case?",
        choices: [
            {text: "toLowerCase()" , isCorrect:true},
            {text: "toLower()" , isCorrect:false},
            {text: "changeCase(case)" , isCorrect:false},
            {text: "None of the Above" , isCorrect:false}
        ],
        
    },
    {
        question5: "Which of the following function of Number object returns the number's value",
        choices: [
            {text: "toString()" , isCorrect: false},
            {text: "toLocaleString() " , isCorrect: false},
            {text: "toPrecision()" , isCorrect: false},
            {text: "valueOf()" , isCorrect: true}
        ],
        
    },
    {
        question6: "Which of the following function of Array object joins all elements of an array into a string?",
        choices: [
            {text: "join()" , isCorrect: true},
            {text: "concat()" , isCorrect: false},
            {text: "pop()" , isCorrect: false},
            {text: "map()" , isCorrect: false},
        ],
       
    }
];

  
function renderQuestion(){
   
}




startBtn.addEventListener("click" , startQuiz)



