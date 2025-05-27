//Lab J.S. - Loops
//Requirements: experiment with loops
//Author: Litzy M. Franyutti 
//Date: May 26, 2025

//Credit to WesBot fir helping me through this lab

let oneLongString ="";
//Use a for loop to print all the numbers from 1 to 200
for (let i =1; i <=200; i++){
    //If the number is a multiple of more than one 3, 5, or 7, it should combine Fizz, Buzz, and Boom. 
if (i % 15 ==0){
    oneLongString += i + "FizzBuzzBoom!<br>";
}
//If the number is a multiple of 3, if should print "Fizz"!
else if(i % 3 == 0) {
    oneLongString += i + "Fizz!<br>";
}
//If the number is a multiple of 5, it should print "Buzz!"
else if (i % 5 ==0) {
    oneLongString += i + "Buzz!<br>";
}
//If the number is a multiple of 7, it should print "Boom!"
else if (i % 7 ==0){
    oneLongString += i + "Boom!<br>";
}

else {
    oneLongString += i + "<br>";
}

}
$("#output").html(oneLongString);

//Show Results Button 
$("#toggleButton").click(function () {
    $("#output").toggle();

    if ($("#output").is(":visible")){
        $("#toggleButton").text("Hide Results");
    } else {
        $("#toggleButton").text("Show Results");
    }
    });
