var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Which built-in method removes the last element from an array and returns that element?",
        choices: ["last()", "get()", "pop()", "None of the Above"],
        answer: "pop()"
    },
    {
        title: "Which built-in method returns the calling string value converted to lower case?",
        choices: ["toLowerCase()", "toLower()", "changeCase(case)", "None of the Above"],
        answer: "toLowerCase()"
    },
    {
        title: "Which of the following function of Number object returns the number's value",
        choices: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
        answer: "valueOf()"
    },
    {
        title: "Which of the following function of Array object joins all elements of an array into a string?",
        choices: ["concat()", "join()", "pop()", "map()"],
        answer: "join()"
    }
];


var highscoreBtn = $("#highscore")

var timerEl =  $("#timer")
hide(timerEl)
var scoreInput =  $("#scoreinput")
hide(scoreInput)
var nameInput = $('#nameinput')
var nameInputBtn = $('#nameinput-btn')
var finalScore = $("#userScore")

var highScoreList = $("#highscore-display")
hide(highScoreList)
var startPage = $("#startpage")
var startBtn = $("#startbtn")

var btnEl = $('.btn');

var quizEl = $("#quiz")
hide(quizEl)
var questionEl = $("#question")
var choicesEl = $("#choice")
var choice = $(".btn")

var currentQuestion = 0;
var score = 0;

var feedbackEL = $("#feedback")


function hide(element){
    element.css('display' , 'none')
}

function show(element){
    element.css('display' , 'block');
   }

  

   var timerSeconds = 61

function startQuiz() {
    hide(startPage)
    show(quizEl)
    hide(highscoreBtn)
    show(timerEl)
    renderQuestion()
    
    var timerCount = setInterval(function() {
        timerSeconds--;
        timerEl.text("Time- " + timerSeconds);
   
        if(timerSeconds <= 0) { 
          clearInterval(timerCount);
          quizEnd()
          localStorage.setItem("recentscore" , score)
          var recentScore = localStorage.getItem("recentscore")
            finalScore.text(recentScore)
        }
    
      }, 1000);
}

startBtn.on("click" , startQuiz)



function renderQuestion(){
   questionEl.text(questions[currentQuestion].title)  
    for(var i = 0; i < choice.length; i++){
        choice[i].textContent = questions[currentQuestion].choices[i]
            choice[i].setAttribute("value" , questions[currentQuestion].choices[i])
    }

   };

   





function choiceHandler(event){
var clickbtn = event.target

if(clickbtn.value !== questions[currentQuestion].answer){
    timerSeconds -= 10;
    feedbackEL.text("Wrong!");
   show(feedbackEL)
}else{
   score += 5;
feedbackEL.text("Correct!")
show(feedbackEL)
}
setTimeout(function(){
hide(feedbackEL)
},1000)
currentQuestion++;
if(currentQuestion === questions.length){
    quizEnd()
    timerSeconds = 0
    localStorage.setItem("recentscore" , score)
    var recentScore = localStorage.getItem("recentscore")
    finalScore.text(""+recentScore)
}
else{
renderQuestion()
}};


btnEl.on('click' , choiceHandler)



function quizEnd() {
    hide(quizEl)
    hide(timerEl)
    hide(highscoreBtn)
   show(scoreInput)
   
}



const highScores = JSON.parse(localStorage.getItem( "highscores")) || [];

nameInputBtn.on("click", function(){
   
    var recentScore = localStorage.getItem("recentscore")
    

    var userScores = {
        username: document.getElementById('nameinput').value,
        userscore: recentScore
        };
        
highScores.push(userScores);
localStorage.setItem("highscores" , JSON.stringify(highScores))
hide(scoreInput)
show(highScoreList)
reset()
renderHighscores()


} );

var scoresList = $("#scoreslist")
var listedScore;



function renderHighscores(){
  


    for (var i = 0; i < highScores.length; i++) {
        var listedScore = document.createElement("div");
        listedScore.textContent = highScores[i].username + " - " + highScores[i].userscore;
        scoresList.append(listedScore);
        
      }
  
      };
        
     

   
   
    
    highscoreBtn.on("click" , function(){
        hide(startPage)
        show(highScoreList)
        hide(quizEl)
        hide(timerEl)
        hide(highscoreBtn)
        hide(scoreInput)
        renderHighscores()
         reset() 
       
    })

function reset() {
    score = 0;
    currentQuestion = 0;
    timerSeconds = 61;
    nameInput.value = " "
    
}

   

    var goBackBtn = $("#goback-btn")
    goBackBtn.on("click" , function(){
        hide(highScoreList)
        show(startPage)
        hide(quizEl)
        hide(timerEl)
        show(highscoreBtn)
        hide(scoreInput)
    })