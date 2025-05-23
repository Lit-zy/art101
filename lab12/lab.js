//Lab J.S. - Conditionals 
//Requirements: create a function that depends on conditionals 
//Author: Litzy M. Franyutti 
//Date: May 22, 2025

//given a number return Avatar: The Last Airbender nations 

//create a function 
function sortingHat(num) {
    let mod = num % 4;

  //Assign Avatar The Last Airbender elements based on the remainder 
  if (mod==0){
      return "Air Nomads💨";
    } else if (mod == 1){
      return "Water Tribe💧 ";
    } else if (mod == 2){
      return "Earth Kingdom🌎";
    } else {
      return "Fire Nation🔥";
    } 
    }

  //attach click handler to submit button 
const button = document.getElementById('button');

button.addEventListener('click', function() {
  //get the value in the #input text box, asign to a variable name 
  let name = $("#input").val()
  console.log(name); 

  //get the length of the name 
  let namelength = name.length;
  console.log(namelength);

  //get the elements
  let element = sortingHat (namelength);
  console.log(element);

  //add element to output div
  $("#output").html("<h1> The Sorting Hat has sorted your name into the "+ element + "</h1>");
    
  
  console.log ("button clicked");


});
//credit to Wesbot for helping me debug this code!


