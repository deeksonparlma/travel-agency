$(document).ready(function(){
  $("button").click(function(){
    $("#form").slideDown();
  });
  $("form#query").submit(function(event){
    event.preventDefault();
    var travellerName=$("input#name").val();
    var travellerEmail=$("input#email").val();
    var place=$("#where").val();
    var date=$("#when").val();
    $("#response").text(travellerName+" "+"your request to travel with us to" +" "+ place + " "+"on"+" "+date+" "+"has been received.We'll communicate through your email: "+travellerEmail);
  });
  $("#ccc").click(function(){
    $("#form").slideUp();
  });
  $("#reset").click(function(){
    $("#response").empty();
  });
});
