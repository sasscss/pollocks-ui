
/* .ready - it ensures that can only run after the document has been loaded */
$(document).ready(function(){
     
    $('#location--4').mouseover(function(){ 
        $(this).parent().animate({marginLeft:"-20vw"},1200);
    });
    $('#location--5').mouseover(function(){ 
        $(this).parent().animate({marginLeft:"-20vw"},1200); 
    }); 
    $('#location--3').mouseover(function(){
        $(this).parent().animate({marginLeft:"0px"},1200);  
    }); 
    $('#location--2').mouseover(function(){
        $(this).parent().animate({marginLeft:"0px"},1200);  
    });
    $('#location--1').mouseover(function(){
        $(this).parent().animate({marginLeft:"0px"},1200);  
    });
     
});
