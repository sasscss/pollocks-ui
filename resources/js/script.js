
/* .ready - it ensures that can only run after the document has been loaded */
$(document).ready(function(){
     
    $('#location--4').mouseover(function(){ 
        $(this).parent().animate({marginLeft:"-30vw"},500); 
    });
    $('#location--5').mouseover(function(){ 
        $(this).parent().animate({marginLeft:"-30vw"},500); 
    });  
    $('#location--3').mouseover(function(){
        $(this).parent().animate({marginLeft:"0px"},500);  
    }); 
    $('#location--2').mouseover(function(){
        $(this).parent().animate({marginLeft:"0px"},500);  
    });
    $('#location--1').mouseover(function(){
        $(this).parent().animate({marginLeft:"0px"},500);     
    });    
     
});