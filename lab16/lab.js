//Lab J.S. - JSON and APIs
//Requirements: experiment with processing JSON from an API
//Author: Litzy M. Franyutti 
//Date: June 5, 2025


//comic obj 
const ajaxObj ={
    url: "https://corsproxy.io/?https://xkcd.com/info.0.json", //credit to Syd on discord for providing a working URL 
    type: "GET",
    dataType: "json"
  };
   // button listener 
   $("button").click(function(){
    //call ajax
    $.ajax(ajaxObj)
    //success callback
    .done(function(data) {
      console.log(data);
      //pull out relevant data from results
      let title = data.title;
      let num = data.num;
      let desc = data.transcript;
      let imageUrl = data.img;
      let alt = data.alt;
      //but data in output 
      $("#output").html(`<h2>${title}</h2>`);
      $("#output").append(`<p class='alt'>${alt}</p>`);
      $("#output").append(`<img src='${imageUrl}'/>`);
      $("#output").append(`<p class='date'>Comic: #${num}</p>`);
      $("#output").append(`<p class='desc'>${desc}</p>`);
    })
    //fail callback
    .fail(function (xhr, status, error) {
      //error handler 
      console.error(error)
    })
})
