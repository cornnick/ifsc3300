$(document).ready( () => {

    $("#add_score").click( () => {
        
        const score = parseFloat($("#score").val());
                
        // Validate the user entry before calling testScores.add
        if (isNaN(score) || score < 0 || score > 100) {
            $("#add_score").next().text("Score must be from 0 to 100."); 
        } else {
            $("#add_score").next().text("");  

            // Add score to testScores object
            testScores.add(score);

            // Display all scores
            $("#all").text(testScores.toString()); // Using testScores.toString()

            // Display average score
            $("#avg").text(testScores.avg.toFixed(2)); // Using testScores.avg

            // Display last 3 scores
            $("#last").text(testScores.lastThree.join(", ")); // Using testScores.lastThree
        }
        
        // Get text box ready for next entry
        $("#score").val("");
        $("#score").focus(); 

        for (const score of testScores) { console.log(score);
        }
    });

    // Set focus on initial load
    $("#score").focus();
});
