//alert("Hi!");

$(document).ready(function(){

  $('.list').hover(function(){
   $(this).fadeToggle(0.25);
   //$(this).backgroundcolor()
  });

  $('.list').click(function() {
  	$(this).css("background-color", "black");
    });


});