/* const now = new Date();
const birthday = new Date(1996, 10, 25); 


// time in milliseconds
const timeSince = now.getTime() - birthday.getTime();
let message = "Your age in MS is " + timeSince;

document.write(message); */

// Function to calculate age in milliseconds
function calculateAgeInMS() {
    const birthdateInput = document.getElementById("birthdate");
    const resultElement = document.getElementById("result");

    if (!birthdateInput.value) {
        resultElement.textContent = "Please enter your birthdate.";
        return;
    }

    const birthdate = new Date(birthdateInput.value);
    const now = new Date();

    // Calculate age in milliseconds
    const timeSince = now.getTime() - birthdate.getTime();
    const message = "Your age in MS is " + timeSince;

    resultElement.textContent = message;
}

// Add an event listener to the "Calculate Age in MS" button
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", calculateAgeInMS);
