eventListener 
document.getElementById("StartButton").addEventListener("click", startgame); 
function startgame (){


}

/* TIMER CODE */
let remainingTime= 90;
const minutes = Math.floor(remainingTimeInSeconds / 60);
const seconds = remainingTimeInSeconds % 60;

console.log("Remaining Time: ${minutes} minutes ${seconds} seconds");

remainingTimeInSeconds =-10;

const updatedSeconds = remainingTimeInSeconds % 60;
console.log("Updated Remaining Time: ${updatedMinutes} minutes ${updatedSeconds} seconds"); 

/* HIGH SCORES CODE */
const playerName = prompt('Congratulations! You achived a high Score! Please to be entering your name:')
const playerScore = {
    name: playerName, 
    score: playerScore
};
 /*retrieve high scores from local strage */
const highScores = JSON.parse(localStorage.getItem('highScores')) || []; 
// Add players score to array
highScores.push(playerScore);
// sort scores in descending order
highScores.sort((a, b) => b.score - a.score); 
//update high scores
localStorage.setItem('highScores', JSON.stringify(highScores)); 
//display high scores to user 
console.log('High Scores');
highScores.forEach((score, index) => {
    ('${index + 1}. ${score.name}: ${score.score}'); 
}); 


