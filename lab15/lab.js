//Lab J.S. - AJAX
//Requirements: experiment with jQuery and AJAX
//Author: Litzy M. Franyutti 
//Date: June 2, 2025

//go to TheCatAPI 
const ajaxObj = {
    url: "https://api.thecatapi.com/v1/images/search",
    //data: {},
    type: "GET",
    dataType: "json"   
}
    //when user click
    $(function() {
    $("#active").click(function() {
    console.log("click");
    $("#output").empty();   
    //use a jQuery AJAX call to fetch output
      $.ajax(ajaxObj)
      //callback for sucess- chained to ajax 
      .done(function(data){
        console.log("sucess!");
        console.log(data);  
      
    for (let i= 0; i < data.length; i++){
      let imageURL = data [i].url;
      console.log("image:" + imageURL);  
      //build image html
      let imageHTML = "<img src='" + imageURL + "'>";
      //Insert the output in the output div 
      $("#output").append(imageHTML);
    }
 })
         //callback for failure - chained to ajax
      .fail(function( xhr, status, errorThrown) {
        console.log(errorThrown + "Status:" + status);  
      });
    });
 });

 

