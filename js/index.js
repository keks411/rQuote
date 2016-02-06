$(document).ready(function(){
  $.getJSON("http://api.icndb.com/jokes/random/?", function(data)
{
var joke = data.value.joke;
    document.getElementById("lol").innerHTML=joke;
})
});
  
  

$(".twitter").hover(function(){
    $(this).css("background-image", "url(https://imageshack.com/i/p7aQidPJj)");
  $(this).html("");
    }, function(){
    $(this).css("background-image", "none")
  $(this).css("background-color", "green");
  $(this).html("Tweet this!");
}); 
 

// New quote
document.getElementById("quotebtn").addEventListener("click", function() {
  $.getJSON("http://api.icndb.com/jokes/random/?", function(data)
{
var joke = data.value.joke;
    document.getElementById("lol").innerHTML=joke;
})
 });
  

//add a blank anchor to http to go around validation
$("#content a[href^='http://']").attr("target","_blank");


//tweet
document.getElementById("tweet").addEventListener("click", function() {
  var tweet = document.getElementById("lol").innerHTML;
  //var tweet2 = tweet.replace(/\W/, "");
  
  window.open("http://twitter.com/intent/tweet?text=" + tweet);
  });