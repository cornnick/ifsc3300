"use strict";

const $ = selector => document.querySelector(selector);

// Function to calculate future value
const calculateFV = (investmentAmount, interestRate, numberOfYears) => {
    // Convert interest rate to decimal
    const decimalInterestRate = interestRate / 100;

    // Calculate future value using compound interest formula
    const futureValue = investmentAmount * Math.pow(1 + decimalInterestRate, numberOfYears);

    // Round result to two decimal places
    const roundedFutureValue = futureValue.toFixed(2);

    return roundedFutureValue;
};

// Process user input and calculate future value
const processEntries = () => {
    
    // Declare a variable to store an error message
    let errorMessage = '';

    // Get user entries from input fields
    const investmentAmount = parseFloat($('#investment').value);
    const interestRate = parseFloat($('#rate').value);
    const numberOfYears = parseInt($('#years').value);

    // Data validation for investment amount
    if (isNaN(investmentAmount) || investmentAmount <= 0 || investmentAmount > 100000) {
        errorMessage = 'Investment must be a number between 1 and 100,000.';
        $('#investment').focus();
    }
    
    // Data validation for interest rate
    else if (isNaN(interestRate) || interestRate <= 0 || interestRate > 15) {
        errorMessage = 'Interest rate must be a number between 1 and 15.';
        $('#rate').focus();
    }
    
    // Data validation for years
    else if (isNaN(numberOfYears) || numberOfYears <= 0 || numberOfYears > 50) {
        errorMessage = 'Number of years must be a number between 1 and 50.';
        $('#years').focus();
    }

    // If no error, calculate and display future value
    if (errorMessage === '') {
        const futureValue = calculateFV(investmentAmount, interestRate, numberOfYears);
        $('#future_value').value = futureValue; // Display futureValue

        $('#investment').focus();
    } else {
        // If there is an error, display the error message
        alert(errorMessage);
    }
};

// Event handler for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Attach processEntries() function to click event of the button
    $('#calculate').addEventListener('click', processEntries);

    // Move focus to first text box
    $('#investment').focus();
});

