"use strict";

const scores = [];

let highestScore = 0;
let lowestScore = 101;

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

        if (scores[i] > highestScore) {
            highestScore = scores[i];
        }

        if (scores[i] < lowestScore) {
            lowestScore = scores[i];
        }
    }

    //calculates average and writes the average, highest, and lowest score to html
    const average = parseInt(total/scores.length);
    document.write(`<p>The average score is ${average}.</p>`);
    document.write(`<p>The highest score score is ${highestScore}.</p>`);
    document.write(`<p>The lowest score is ${lowestScore}.</p>`);

    /*separate for-loop for highest and lowest scores
    //goes through the scores array 
    //asks if the score is greater than the last score score
    //then changes the value of the highestScore variable

    for (const score of scores) {
        if (score > highestScore) {
            highestScore = score;
        }
    }

    for (const score of scores) {
        if (score < lowestScore) {
            lowestScore = score;
        }
    }

    document.write(`<p>The highest score is ${highestScore}.</p>`);
    document.write(`<p>The lowest score is ${lowestScore}.</p>`); */

    /* figures and displays the highest score
    const maxScore = Math.max(...scores);
    document.write(`<p>The highest score is ${maxScore}.</p>`);
    
    //figures and displays the lowest score
    const minScore = Math.min(...scores);
    document.write(`<p>The lowest score is ${minScore}.</p>`); */
   
}