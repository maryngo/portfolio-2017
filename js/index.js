onload =  function() {

var colors = ['#56AA82', '#F39A7C', '#7D5AA5', '#333', '#56AA82', '#F39A7C', '#7D5AA5'];
 	var i = 0;

	$(window).scroll(function() {
	  if ($(this).scrollTop()> 300) {
	    $('.nav-appear').fadeIn();
	   } else {
	    $('.nav-appear').fadeOut();
	   }

	   /*$('.home-project').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},300);
                    
            }
        });*/

	 });

	function change() {
    	var x = document.getElementById('nav-logo');
    	x.style.color = colors[i++ % colors.length];
    	$('#nav-logo').css('transition','all ease-in-out 0.3s','-moz-transition','all ease-in-out 0.3s','-webkit-transition','all ease-in-out 0.3s');
	}

	$('#nav-logo').mouseover(function(){
   		change();
		}); 

	$('#nav-logo').mouseout(function(){
   		change();
		}); 

}