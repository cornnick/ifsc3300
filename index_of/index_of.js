"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const wordSearch = document.getElementById('wordSearch');

    wordSearch.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get values of the word and sentence inputs
        const wordInput = document.getElementById('wordInput');
        const sentenceInput = document.getElementById('sentenceInput');
        const word = wordInput.value.trim().toLowerCase();
        const sentence = sentenceInput.value.trim().toLowerCase();

        // Checks if word is in sentence using indexOf
        if (sentence.indexOf(word) !== -1) {
            alert(`The word "${word}" is in the sentence.`);
        } else {
            alert(`The word "${word}" is not in the sentence.`);
        }

        // Clear the input fields
        wordInput.value = '';
        sentenceInput.value = '';
    });
});