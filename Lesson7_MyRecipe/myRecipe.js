/* 
Program name: My Recipe
Author: Sharon Ballinger
Date: 03 August 2017
Filename: myRecipe.js
*/

/* global $ */

 //display next element after target
function display(event) {
    
$(event.currentTarget).next().animate({height:'toggle'}, "slow");
} //end


$("h3").click(display); // on click show h3 elements



//change color of "p" when hovering
$("p").hover(function() {
    $(this).css("background-color", "#F5F5DC");
}, function() {
    $(this).css("background-color", "#fff");
});

//when clicking on a button the children in a list are removed 
//and the button changes text

$("button").click(function() {
    $("ul").children().hide("slow");
    $("button").empty().append("LETS GET COOKING");
});

//change color of text
$("h3").hover(function() {
    $(this).css("color", "#04819E");
}, function() {
    $(this).css("color", "#404040");
});











    