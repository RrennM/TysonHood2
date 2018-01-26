$(document).ready(function() {

	// Cache the window object
	var $window = $(window);

	// Parallax background effect
	$('section[data-type="background"]').each(function() {
		
		var $bgobj = $(this); //assigning the object

		$window.scroll(function() {

			// Determine the amount of scroll from the top
			// Divide this by the data-speed
			// yPos is the final value position of the backhround and it negative 
			// because it's opposing the user's scroll
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Coords for final background position
			var coords = '50% ' + yPos + 'px';

			// Move the background
			$bgobj.css({backgroundPosition: coords });

		}) // End window scroll
	}) // end each



	// Shrinking Header
	$(function(){
    $('#navbar').data('size','big');
		});

	$(window).scroll(function(){
    if($(document).scrollTop() > 100) {

      if($('#navbar').data('size') == 'big') {

        $('#navbar').data('size','small');

        $('#navbar').css("backgroundColor", "rgba(0,0,0,0.8)");

        // Animates the navbar
        $('#navbar').stop().animate({
          height:'80px',
          borderRadius:'0'
        }, 200);
        
        // Animates the logo
        $('#brand-logo').stop().animate({
          height:'250%'
        }, 800);

        // Animates the nav-links
        $('#nav-links').stop().animate({
          height:'80px'
        }, 600);
      }
    } else {

      if($('#navbar').data('size') == 'small') {

        $('#navbar').data('size','big');

        $('#navbar').css("backgroundColor", "rgba(0,0,0,0)");

        $('#navbar').stop().animate({
          height:'150px'
        }, 200);
        
        // Animates the logo
        $('#brand-logo').stop().animate({
          height:'112px'
        }, 800);

        // Animates the nav-links
        $('#nav-links').stop().animate({
          height:'149px'
        }, 600);
      }  
    }
	});
});