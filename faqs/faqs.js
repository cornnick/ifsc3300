"use strict";
$(document).ready( () => {

    // set event handler for all h2 tags
    $("#faqs h2").click( evt => {
        // get clicked h2 tag
        const h2 = evt.currentTarget;

        // toggle minus class for h2 tag

        $(h2).toggleClass("minus");
        $(h2).next().slideToggle(1000);


        // show or hide related div
        if ($(h2).attr("class") !== "minus") {
            $(h2).next().fadeOut(1000);
        }
        else {
           $(h2).next().show();
        }

        evt.preventDefault();
    });

    $("#faqs h1").animate(
        { fontSize: "275%", opacity: 1, left: "+=175" }, 2000,
        () => $("#faqs h2").next().fadeIn(1000).fadeOut(1000) // callback 
        );

    // set focus on first h2 tag's <a> tag
    $("#faqs").find("a:first").focus();
});