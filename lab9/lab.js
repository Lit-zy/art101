// Index.js - Libraries and jQuery
// Author: Litzy Mozqueda-Franyutti
// Date: May 12, 2025



//add button to challenge section 
$("#Challenge").append("<button id='button-challenge'>Click If You Want</button>");
//add a click listener to the challenge button 
$("#button-challenge").click(function(){
//now add (or subtract) the "special" class to the section 
$("#Challenge").toggleClass("special");
});


//hide the cat image when the page loads
$("#imageOne").hide();
//add a click listener to the challenge button for cat photo
$("#button-challenge").click(function(){
//toggle whether or not it is shown
$("#imageOne").toggle();
});

//add button to problem section 
$("#Problems").append("<button id='button-problems'>Click For A Surprise</button>");
//add a click listener to the challenge button 
$("#button-problems").click(function(){
 //now add (or subtract) the "special" class to the section 
$("#Problems").toggleClass("special");
});

//hide the capybara image when the page loads
$("#imageTwo").hide();
//add a click listener to the challenge button for cat photo
$("#button-problems").click(function(){
//toggle whether or not it is shown
$("#imageTwo").toggle();
});


//add button to results section 
$("#Results").append("<button id='button-results'>Click For Fun</button>");
//add a click listener to the challenge button 
$("#button-results").click(function(){
    //now add (or subtract) the "special" class to the section 
    $("#Results").toggleClass("special");
});

//hide the capybara image when the page loads
$("#imageThree").hide();
//add a click listener to the challenge button for cat photo
$("#button-results").click(function(){
//toggle whether or not it is shown
$("#imageThree").toggle();
});
