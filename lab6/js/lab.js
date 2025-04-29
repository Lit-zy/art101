// index.js - Arrays and Objects
// Author: Litzy Mozqueda-Franyutti
// Date: April 28,2025

// Constants
//Define Variables 
let myTransport = ["Toyota Camry", "Metro Bus", "Loop Bus"];

//create an object for my main ride
let myMainride = {
   make:"Camry",
  year:2014,
  age:11,
  color:"Gray",
};


// Functions
//Output
document.writeln("My Main transportation as a commuting student:" + " " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainride, null, '\t'),"</pre>");

