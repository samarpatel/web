;(function($) {
    'use strict';
    $(window).on( 'elementor/frontend/init', function() {


    	var GlobalJSLoad = function() {

    		/* ==================================================
            # Banner Carousel
         ===============================================*/
		 const swiperCounter = new Swiper(".banner-slide-counter", {
            // Optional parameters
            direction: "horizontal",
            loop: false,
            autoplay: false,
            speed: 1400,
			grabCursor: true,
			mousewheel: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },


            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },

			

            // And if we need scrollbar
            /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
        });

        
          
    };

    elementorFrontend.hooks.addAction('frontend/element_ready/global', GlobalJSLoad);



        // Features
        elementorFrontend.hooks.addAction('frontend/element_ready/antuxresume.default',function($scope) {
            $('.progressbar').each(function() {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 90,
						thickness: 10,
						lineCap: 'round',
						emptyFill: '#e7e7e7',
						fill: {
							gradient: ['#a7234c', '#ff014f']
						}
					}).on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});
        });

        // logo
        elementorFrontend.hooks.addAction('frontend/element_ready/antuxgalleryfilter.default',function($scope) {
            const brand5col = new Swiper(".brand5col", {
				// Optional parameters
				loop: true,
				slidesPerView: 2,
				spaceBetween: 30,
				autoplay: false,
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					992: {
						slidesPerView: 4,
						spaceBetween: 60,
					},
					1199: {
						slidesPerView: 5,
						spaceBetween: 60,
					}
				},
			});
        });

        // feedback
        elementorFrontend.hooks.addAction('frontend/element_ready/antuxtestimonials.default',function($scope) {
             const testimonial2 = new Swiper(".testimonial-style-one-carousel", {
	            // Optional parameters
	            loop: true,
	            slidesPerView: 1,
	            spaceBetween: 30,
	            autoplay: true,

	            // If we need pagination
	            pagination: {
	                el: '.swiper-pagination',
	                type: 'bullets',
	                clickable: true,
	            },

	            // Navigation arrows
	            navigation: {
	                nextEl: ".swiper-button-next",
	                prevEl: ".swiper-button-prev"
	            }

	            // And if we need scrollbar
	            /*scrollbar: {
	            el: '.swiper-scrollbar',
	          },*/
	        });
        });

        
        

    });
}(jQuery));