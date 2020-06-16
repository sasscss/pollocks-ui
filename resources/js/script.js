document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hiddenv";
  }
}    
/* .ready - it ensures that can only run after the document has been loaded */
$(document).ready(function(){


    //js--wp-1 1st section after header

    $('.js--wp-1-1').waypoint(function(direction){ 
        $('.js--wp-1-1').addClass('animate__animated  card-fade-in-right');
    },{ 
        offset:"40%"       
    });   

    $('.js--wp-1-2').waypoint(function(direction){
        $('.js--wp-1-2').addClass('animate__animated card-fade-in-left');
    },{ 
        offset:"70%"        
    }); 
    // $('.js--wp-1-2-2').waypoint(function(direction){
    //     $('.js--wp-1-2-2').addClass('animate__animated animate__fadeIn');
    // },{ 
    //     offset:"50%"      
    // }); 
    // $('.js--wp-1-2-3').waypoint(function(direction){
    //     $('.js--wp-1-2-3').addClass('animate__animated animate__fadeIn');
    // },{  
    //     offset:"50%"       
    // });    


    // js--wp-2-1 2nd sec 1st component
    $('.js--wp-2-1').waypoint(function(direction){
        $('.js--wp-2-1').addClass('animate__animated animate__fadeInRight');
    },{    
        offset:"70%"                 
    });  
    
    // // js--wp-2-1 2nd sec 2nd component    
    // $('.js--wp-2-2').waypoint(function(direction){
    //     $('.js--wp-2-2').addClass('animate__animated animate__fadeIn');
    // },{    
    //     offset:"70%"                  
    // }); 

    // js--wp-3-1 3rd sec 1st component        
    $('.js--wp-3-1').waypoint(function(direction){
        $('.js--wp-3-1').addClass('animate__animated animate__fadeIn');
    },{   
        offset:"75%"     
    }); 

    // js--wp-3-2-1 3rd sec 2nd component  1st item      

    $('.js--wp-3-2-1').waypoint(function(direction){
        $('.js--wp-3-2-1').addClass('animate__animated card-fade-in-right');
    },{   
        offset:"85%"      
    }); 

    // js--wp-3-2-2 3rd sec 2nd component  2nd item      

    $('.js--wp-3-2-2').waypoint(function(direction){
        $('.js--wp-3-2-2').addClass('animate__animated card-fade-in-left');
    },{   
        offset:"80%"     
    });   


    $('.js--wp-4-1').waypoint(function(direction){
        $('.js--wp-4-1').addClass('animate__animated animate__fadeInLeft');
    },{     
        offset:"70%"    
    });

    
    $('.js--wp-4-2-1').waypoint(function(direction){
        $('.js--wp-4-2-1').addClass('animate__animated  animate__fadeInRight');
    },{     
        offset:"72%"     
    });

    $('.js--wp-4-2-2').waypoint(function(direction){
        $('.js--wp-4-2-2').addClass('animate__animated  animate__fadeInRight');
    },{        
        offset:"72%"                 
    }); 

    $('.js--wp-4-2-3').waypoint(function(direction){
        $('.js--wp-4-2-3').addClass('animate__animated  animate__fadeInRight');
    },{        
        offset:"72%"                 
    }); 
    $('.js--wp-4-2-4').waypoint(function(direction){
        $('.js--wp-4-2-4').addClass('animate__animated  animate__fadeInRight');
    },{        
        offset:"73%"                  
    }); 
    $('.js--wp-5-1').waypoint(function(direction){
        $('.js--wp-5-1').addClass('animate__animated  card-fade-in-up');
    },{         
        offset:"60%"                   
    });
    $('.js--wp-5-2-1').waypoint(function(direction){ 
        $('.js--wp-5-2-1').addClass('animate__animated  animate__fadeInLeft');
    },{         
        offset:"60%"                  
    }); $('.js--wp-5-2-2').waypoint(function(direction){
        $('.js--wp-5-2-2').addClass('animate__animated  animate__fadeInRight');
    },{         
        offset:"62%"                   
    }); $('.js--wp-5-2-3').waypoint(function(direction){
        $('.js--wp-5-2-3').addClass('animate__animated  card-fade-in-up');
    },{          
        offset:"86%"                   
    }); 
    

    $('.js--wp-7-1').waypoint(function(direction){
        $('.js--wp-7-1').addClass('animate__animated  card-fade-in-up');
    },{        
        offset:"60%"                 
    }); 
    $('.js--wp-7-2').waypoint(function(direction){
        $('.js--wp-7-2').addClass('animate__animated  card-fade-in-up');
    },{        
        offset:"68%"                 
    }); 
    $('.js--wp-7-3').waypoint(function(direction){
        $('.js--wp-7-3').addClass('animate__animated  card-fade-in-up');
    },{        
        offset:"68%"                 
    }); 
    $('.js--wp-8-1').waypoint(function(direction){
        $('.js--wp-8-1').addClass('animate__animated  card-fade-in-up');
    },{        
        offset:"68%"                 
    }); 
    $('.js--wp-8-2-1').waypoint(function(direction){
        $('.js--wp-8-2-1').addClass('animate__animated  animate__fadeInLeft'); 
    },{        
        offset:"85%"                  
    }); 
    $('.js--wp-8-2-2').waypoint(function(direction){
        $('.js--wp-8-2-2').addClass('animate__animated  card-fade-in-up');
    },{        
        offset:"85%"                  
    });  
    $('.js--wp-8-2-3').waypoint(function(direction){
        $('.js--wp-8-2-3').addClass('animate__animated  animate__fadeInRight');
    },{         
        offset:"85%"                 
    }); 
    $('.js--wp-8-3').waypoint(function(direction){
        $('.js--wp-8-3').addClass('animate__animated  card-fade-in-up');
    },{        
        offset:"100%"                      
    });     
      

    $('.counter').counterUp({ 
        delay: 40,    
        time: 2000                
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
