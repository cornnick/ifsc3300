"use strict";

const scores = [];

const highestScore = 0;
const lowestScore = 0;

// use do-while loop to get the scores from the user
let score = 0;
do {
    score = parseInt(
        prompt("Enter a test score, or enter -1 to end scores", -1));

    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1){
        alert("Score must by a valid number from 0 through 100");
    }
}
while(score != -1);

if (scores.length > 0) {
    // use a for-in loop to add each score to total, and display score
    let total = 0;
    for (let i in scores) {
        total = total + scores[i];
        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }

    //calculate and display the average
    const average = parseInt(total/scores.length);
    document.write(`<p>The average score is ${average}.</p>`);

    /* figures and displays the highest score
    const maxScore = Math.max(...scores);
    document.write(`<p>The highest score is ${maxScore}.</p>`);
    
    //figures and displays the lowest score
    const minScore = Math.min(...scores);
    document.write(`<p>The lowest score is ${minScore}.</p>`); */
   
}