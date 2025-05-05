// Index.js - Functions 
// Author: Litzy Mozqueda-Franyutti
// Date: May 4, 2025


//Function
// trick - a function that takes user input and sorts the letters of their name//
function sortUserName() {
    let userName = window.prompt ("Please Enter Name Here ↓ ");
   console.log("userName = " , userName)

//Used W3 Schools for fixing properties with (.split)(null) https://www.w3schools.com/jsref/met_win_prompt.asp
   if (!userName) {
     console.log ("No name entered");
     document.getElementById("demo").innerHTML = "No name entered";
     return "Nothing was entered";
   }
  // split string to array
  let nameArray = userName.split('');
  console.log("nameArray =" , nameArray);
 
 // sort the array
   let nameArraySort = nameArray.sort();
   console.log("nameArraySort =" , nameArraySort);
   
 //join array back to a string
   let nameSorted = nameArraySort.join('');
   console.log("nameSorted =" , nameSorted);
   //return results
   return nameSorted;
 
 }
 //Fixed my output by referencing the work of Ari Ferreros
 //Output 
 let func = sortUserName();
 document.writeln("Ayyy this is your new sorted name:  " , func, "</br>");



  
  
                