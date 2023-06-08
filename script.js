 //QUIZ PART 
$("#StartGame").on("click", startgame); 
$("#quizPartHere").hide(); 
$("#highScoresTable").hide();
$("#high-score-submit-btn").hide(); 
$("Answer").hide(); 
$(".answers").on("click", buttonclick);
$("#high-score-submit-btn").on("click", saveScores); 

var questionIndex;
var currentQuestion;
var currentScore;

// TIMER SHIT
var timer = 90;
var timerEl = document.getElementById("timerValue");  

function updateTimer() {
    timer--;
    timerEl.textContent=timer; 
    if (timer === 0) {
        clearInterval(interval);
    }
}

function startgame () {
    interval = setInterval(updateTimer, 1000); 
    $("#StartGame").hide();
    $("#quizPartHere").show(); 
    questionIndex = 0;  //display first question 
    currentScore = 0;
    currentQuestion = quizQuestions[questionIndex]; 
    Populate();
         
}
function buttonclick (){
    // get the value of the button clicked
    var input = $(this).text();

            // compare the value of the button to the currentQuestion.Answer
    if (input === currentQuestion.Answer)
    {
        $("#WereYouRight").text("correct! :D");
        currentScore = currentScore+10; 
    }
    else {
        $("#WereYouRight").text("you make me sad"); 
    }

    questionIndex++;  
    
    if (questionIndex >= quizQuestions.length){   
        
        alert("You got score of "+(timer+currentScore)+" !  Good job hoser! ")
        $("#highScoresTable").show()
        $("#quizPartHere").hide(); 
        $("#high-score-submit-btn").show();
        drawHighScoresTable();
        clearInterval(interval); 
    }

    else {
        currentQuestion = quizQuestions[questionIndex]; 
        Populate(); // Advance the questionIndex and currentquestion to the next question
    } 

} 
       
function saveScores () {
    const playerName = prompt('Congratulations, you achieved a high Score! Please to be entering your name:')
    const playerScore = 
        {
            name: playerName, 
        score: timer
    };
    
    playerScore.score += currentScore;
    drawHighScoresTable(playerScore);
        //update high scores
    localStorage.highScores= JSON.stringify(highScores); 
        console.log(playerScore.score);
    
}

function drawHighScoresTable (newScore){ //====
    var highScores = []; 
    if (localStorage.highScores){
        highScores = JSON.parse(localStorage.highScores);            
    }
    if (newScore) {
    highScores.push(newScore)};
    
    highScores.sort((a, b) => b.score - a.score); 
    $("#highScoresTable tbody").empty();
    
        for(let i=0; i<highScores.length; i++) {

        var thisScore = highScores[i]; 

        var newRow = "<tr><td>";
        
        newRow += thisScore.name;
        newRow += "</td><td>"
        newRow += thisScore.score;
        newRow += "</td></tr>"
        $("#highScoresTable tbody").append(newRow); 
        }; 
        
}

function Populate () {
    $("#Question").text(currentQuestion.Question); 
    $("#OptionA").text(currentQuestion.Options[0]);
    $("#OptionB").text(currentQuestion.Options[1]);
    $("#OptionC").text(currentQuestion.Options[2]);
    $("#OptionD").text(currentQuestion.Options[3]);

}
const quizQuestions = 
[
    {
        Question: "Commonly used data types DO NOT include...",
        Options: ["Booleans", "Alerts", "Numbers","Strings"],
        Answer: "Alerts"
       
    },
    {
        Question: "What is the condition of If/Else statements enclosed with?",
        Options: ["Quotes '\"...\"'", "Curly Braces '{...}'", "Parenthesis '(...)'","Square Brackets '[...]'"],
        Answer:  "Parenthesis '(...)'" 
    },

    {
        Question: "Arrays in JavaScript can be used to store...",
        Options: ["Numbers and Strings", "Booleans", " Other","All of the Above"],
        Answer: "All of the Above"

    },
    {
        Question: "String values must be surrounded by...",
        Options:["Quotes '\"...\"'", "Curly Braces '{...}'", "Parenthesis '(...)'","Square Brackets '[...]'"],
        Answer: "Quotes '\"...\"'"

    },
    {
        Question: "A very useful tool for debugging code is...",
        Options:["javaScript", "Terminal Bash", "Console Log","For Loops"],
        Answer: "Console Log"
    }
];