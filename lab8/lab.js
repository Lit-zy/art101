// Index.js - Anon Functions and Callbacks 
// Author: Litzy Mozqueda-Franyutti
// Date: May 8, 2025

//Function 

//creating a named function with a calculation 
const numArray = [5, 10, 15, 20, 25, 30]
    function changeEachElement(num){
    return num *100;
}
//include map on array so that my function is a callback 
console.log(numArray.map(changeEachElement));

//use an anonymous function as a callback with map for a new operation 
var newArray=numArray.map(function(x){
    return x +25;
})
console.log("New Array:", newArray)
//Output

//setting a variable to the results of map function and printing it out 
var mapResults = numArray.map(changeEachElement);
console.log ("results:", mapResults)

var mapResults = newArray.map(changeEachElement);
console.log ("Anonymous Results", mapResults)