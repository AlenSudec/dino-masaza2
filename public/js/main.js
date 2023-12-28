 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	// var sitePlusMinus = function() {
	// 	$('.js-btn-minus').on('click', function(e){
	// 		e.preventDefault();
	// 		if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
	// 			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
	// 		} else {
	// 			$(this).closest('.input-group').find('.form-control').val(parseInt(0));
	// 		}
	// 	});
	// 	$('.js-btn-plus').on('click', function(e){
	// 		e.preventDefault();
	// 		$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
	// 	});
	// };
	// sitePlusMinus();


	// var siteSliderRange = function() {
    // $( "#slider-range" ).slider({
    //   range: true,
    //   min: 0,
    //   max: 500,
    //   values: [ 75, 300 ],
    //   slide: function( event, ui ) {
    //     $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    //   }
    // });
    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	// };
	// siteSliderRange();


	// var siteMagnificPopup = function() {
	// 	$('.image-popup').magnificPopup({
	//     type: 'image',
	//     closeOnContentClick: true,
	//     closeBtnInside: false,
	//     fixedContentPos: true,
	//     mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	//      gallery: {
	//       enabled: true,
	//       navigateByImgClick: true,
	//       preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	//     },
	//     image: {
	//       verticalFit: true
	//     },
	//     zoom: {
	//       enabled: true,
	//       duration: 300 // don't foget to change the duration also in CSS
	//     }
	//   });

	//   $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	//     disableOn: 700,
	//     type: 'iframe',
	//     mainClass: 'mfp-fade',
	//     removalDelay: 160,
	//     preloader: false,

	//     fixedContentPos: false
	//   });
	// };
	// siteMagnificPopup();


	// var siteCarousel = function () {
	// 	if ( $('.owl-carousel-2').length > 0 ) {
	// 		$('.owl-carousel-2').owlCarousel({
	// 	    center: false,
	// 	    items: 1,
	// 	    loop: true,
	// 			stagePadding: 0,
	// 	    margin: 30,
	// 	    autoplay: true,
	// 	    nav: true,
	// 			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
	// 	    responsive:{
	//         600:{
	        	
	//         	nav: true,
	//           items: 1
	//         },
	//         1000:{
	        	
	//         	stagePadding: 0,
	//         	nav: true,
	//           items: 2
	//         },
	//         1200:{
	        	
	//         	stagePadding: 0,
	//         	nav: true,
	//           items: 2
	//         }
	// 	    }
	// 		});
	// 	}

	// 	$('.slide-one-item').owlCarousel({
	//     center: false,
	//     items: 1,
	//     loop: true,
	// 		stagePadding: 0,
	//     margin: 0,
	//     smartSpeed: 1000,
	//     autoplay: true,
	//     pauseOnHover: false,
	//     nav: true,
	//     navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	//   });
	// };
	// siteCarousel();

	// var siteStellar = function() {
	// 	$(window).stellar({
	//     responsive: false,
	//     parallaxBackgrounds: true,
	//     parallaxElements: true,
	//     horizontalScrolling: false,
	//     hideDistantElements: false,
	//     scrollProperty: 'scroll'
	//   });
	// };
	// siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteRangeSlider = function() {

		$('input[type="range"]').rangeslider({
	    polyfill : false,
	    onInit : function() {
	        this.output = $( '<div class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
	    },
	    onSlide : function( position, value ) {
	        this.output.html( value );
	    }
		});

	};
	siteRangeSlider();


	// var counter = function() {
		
	// 	$('.section-counter').waypoint( function( direction ) {

	// 		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

	// 			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
	// 			$('.block-counter-1-number').each(function(){
	// 				var $this = $(this),
	// 					num = $this.data('number');
	// 					console.log(num);
	// 				$this.animateNumber(
	// 				  {
	// 				    number: num,
	// 				    numberStep: comma_separator_number_step
	// 				  }, 7000
	// 				);
	// 			});
				
	// 		}

	// 	} , { offset: '95%' } );

	// }
	// counter();

	

});