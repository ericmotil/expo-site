/*
	* Title: Expo
	* Created: December 27th, 2014
	*
	* Author: Eric Motil (ericmotil.com)
	* Description: Expo mobile app
	* Version: v1.0
  *
*/

// If its mobile
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 1025px)");
  mq.addListener(WidthChange);
  
  // Large screen stuff
  WidthChange(mq);
}

// Media query change
function WidthChange(mq) {
  
  // Window width is at least mq
  if (mq.matches) {
    // PARALLAX STELLAR
    $(function() {
      $.stellar({
        horizontalScrolling: false
      });
    });
  }
  
  // Window width is less than mq
  else { }

}

/*---------------------
	Fade in body when ready
----------------------*/
$(document).ready(function() {
  // Introduce body once everthing is ready
  // Gets rid of flash on refresh
  setTimeout(function() {
    $('body').css('opacity', '1'); // Probably terrible to accessibility
  }, 1000);
});


/*---------------------
	Navbar bg
----------------------*/
$(window).scroll(function() {
	if ($('.navbar-trans').offset().top > 0) {
		$('.navbar-trans').addClass('navbar-bg');
	} else {
		$('.navbar-trans').removeClass('navbar-bg');
	}
});


/*---------------------
	Nav menu toggle bg
----------------------*/
$(document).ready(function() {
	$('.navbar-toggle').on('click', function () {
		$('.navbar-trans').toggleClass('nav-bg');
		$(this).toggleClass('open');
	});
});


/*---------------------
	Flexslider
----------------------*/
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
    //useCSS: false
  });
});


/*---------------------
	Fancybox
----------------------*/
$(document).ready(function() {
	$('.fancybox-media').fancybox({
		padding: 0,
		openEffect: 'elastic',
		openEasing: 'easeInOutQuint',
		openSpeed: 500,
		autoSize: true,
		autoHeight: true,
		autoWidth: true,
		autoResize: true,
		helpers : {
			media : {}
		}
	});

});


/*---------------------
	 Smooth Scroll To Anchor
----------------------*/
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.to-div').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


/*---------------------
 WOW plugin triggers animate.css on scroll
----------------------*/
var wow = new WOW(
	{
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false,        // trigger animations on mobile devices (true is default)
    live: false
	}
);
wow.init();
