"use strict";

const imagePreloads = [];
$("#categories a").each(function (index, element) {
    const imageUrl = $(element).attr("href");
    const img = new Image();
    img.src = imageUrl;
    imagePreloads.push(img);
});

$(document).ready(() => {
    // Attach event handlers for all h2 tags
    $("#categories h2").click((evt) => {
        // Get clicked h2 tag
        const h2 = evt.currentTarget;

        // Toggle minus class for h2 tag
        $(h2).toggleClass("minus");

        // Show or hide related div
        if ($(h2).hasClass("minus")) {
            $(h2).next().show();
        } else {
            $(h2).next().hide();
        }

        evt.preventDefault();
    });

    // Attach click event handlers for book links
    $("#categories a").click((evt) => {
        evt.preventDefault(); // Prevent the default behavior of navigating to the link

        const link = evt.currentTarget;
        const imageUrl = $(link).attr("href");

        // Display the book image to the right of the list
        $("#image").attr("src", imageUrl).show();
    });

    // Set focus on the first h2 tag's <a> tag
    $("#categories").find("a:first").focus();
});
