"use strict";

const isPrimeNumber = (number) => {
    let isPrime = number < 2 ? false : true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
};

$(document).ready(() => {
    $("#calculate").click(() => {
        const number = parseInt($("#number").val());

        if (isNaN(number)) {
            $("#message").text("Please enter a number.");
        } else {
            $("#message").text("");

            
            /*
            const isPrime = isPrimeNumber(number);

            if (isPrime === true) {
                $("#message").text(number + " is a prime number.");
            } else {
                $("#message").text(number + " is NOT a prime number.");
            }
            */

           
            let primeNumbers = [];

            for (let i = 1; i <= number; i++) {
                if (isPrimeNumber(i)) {
                    primeNumbers.push(i);
                }
            }

            if (primeNumbers.length > 0) {
                const primeNumbersText = primeNumbers.join(', ');
                $("#message").text(`Prime numbers up to ${number}: ${primeNumbersText}`);
            } else {
                $("#message").text(`There are no prime numbers up to ${number}.`);
            }
        }

        $("#number").focus();
        $("#number").select();
    });

    $("#number").focus();
});
