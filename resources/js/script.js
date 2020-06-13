
/* .ready - it ensures that can only run after the document has been loaded */
$(document).ready(function(){

    //js--wp-1 1st section after header

    $('.js--wp-1-1').waypoint(function(direction){
        $('.js--wp-1-1').addClass('animate__animated animate__fadeIn');
    },{ 
        offset:"70%"      
    });   

    $('.js--wp-1-2-1').waypoint(function(direction){
        $('.js--wp-1-2-1').addClass('animate__animated card-fade-in-right');
    },{ 
        offset:"75%"      
    }); 
    $('.js--wp-1-2-2').waypoint(function(direction){
        $('.js--wp-1-2-2').addClass('animate__animated card-fade-in-left');
    },{ 
        offset:"75%"      
    }); 
    $('.js--wp-1-2-3').waypoint(function(direction){
        $('.js--wp-1-2-3').addClass('animate__animated card-fade-in-up');
    },{ 
        offset:"75%"      
    });    


    // js--wp-2-1 2nd sec 1st component
    $('.js--wp-2-1').waypoint(function(direction){
        $('.js--wp-2-1').addClass('animate__animated animate__fadeInRight');
    },{   
        offset:"75%"           
    }); 
    
    // js--wp-2-1 2nd sec 2nd component    
    $('.js--wp-2-2').waypoint(function(direction){
        $('.js--wp-2-2').addClass('animate__animated animate__fadeIn');
    },{    
        offset:"90%"             
    }); 

    // js--wp-3-1 3rd sec 1st component        
    $('.js--wp-3-1').waypoint(function(direction){
        $('.js--wp-3-1').addClass('animate__animated animate__fadeIn');
    },{  
        offset:"65%"    
    }); 

    // js--wp-3-2-1 3rd sec 2nd component  1st item      

    $('.js--wp-3-2-1').waypoint(function(direction){
        $('.js--wp-3-2-1').addClass('animate__animated card-fade-in-right');
    },{   
        offset:"70%"     
    }); 

    // js--wp-3-2-2 3rd sec 2nd component  2nd item      

    $('.js--wp-3-2-2').waypoint(function(direction){
        $('.js--wp-3-2-2').addClass('animate__animated card-fade-in-left');
    },{   
        offset:"70%"    
    }); 

    $('.counter').counterUp({ 
        delay: 50,  
        time: 2400              
    });

    // $('#location--4').mouseover(function(){ 
    //     $(this).parent().animate({marginLeft:"-19vw"},500); 
    // }); 
    $('#location--5').mouseover(function(){ 
        $(this).parent().animate({marginLeft:"-19vw"},300);       
     });  
    // $('#location--3').mouseover(function(){
    //     $(this).parent().animate({marginLeft:"0px"},500);  
    // }); 
    $('#location--2').mouseover(function(){
        $(this).parent().animate({marginLeft:"0px"},300);  
    });
    $('#location--1').mouseover(function(){
        $(this).parent().animate({marginLeft:"0px"},300);     
    });    
       
});
