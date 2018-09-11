;(function($) {
		"use strict";
		
		var slider = $('.tmp-full-slider').slick({
			  arrows:false,
			  dots:true,
			  slide:'.tmp-full-slide',
			 

			  responsive: [
				{
				  breakpoint: 480,
				  settings: {
					dots:false,
				  }
				}
			  ]


		  });
		 	
		var sliderTriple = $('.tmp-news__slider').slick({
			arrows:true,
			dots:true,
			slide: '.tmp-news__slide',
			slidesToShow:3,
			slidesToScroll:1,
			adaptiveHeight: true,
			prevArrow:('.icon-cheveron-outline-left'),
			nextArrow:('.icon-cheveron-outline-right'),
 			// autoplay: true,
			autoplaySpeed: 5000,
			 appendDots:('.ba-news'),
			 responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					  arrows:false,
					slidesToShow:2,
					slidesToScroll:1,
				  }
				},
				{
					breakpoint: 800,
					settings: {
					  slidesToShow:1,
					  slidesToScroll:1,
					}
				  }
			  ]
		});
		$(".tmp-header__nav, .tmp-scroll, #mobile-menu").on("click","a", function (event) {
					event.preventDefault();
					var id  = $(this).attr('href'),
						top = $(id).offset().top;
					
					$('body,html').animate({scrollTop: top}, 1500);
				});
				var nav = $('#mobile-menu') ,
						overlay = $('.tmp-overlay'),
				menuToggle = $('.tmp-menu-button, .tmp-overlay') ;
				menuToggle.on('click' , function (e) {
					e.preventDefault();
					nav.toggleClass('tmp-open');
					overlay.toggleClass('tmp-overlay-open');
				});
		
})(jQuery);


