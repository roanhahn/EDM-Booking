
var headerheight = $(".header").outerHeight();
var sitewidth = $(".header").outerWidth();

// MOBILE NAV


$(".nav-mobile-btn").click(function() {
	$(".header-nav").slideToggle("fast");
});

// Tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//  LANGUAGE

// WOW JS

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       70,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


// INFO PAGE & FAQ

$(".info-label").click(function() {
	console.log($(this).data('list'));
	$('html, body').animate({
		scrollTop: $("#" + $(this).data('list')).offset().top-headerheight
	}, 1000, 'easeInOutCubic');
});

$(".info-list-item").click(function() {

	var question = $(this);
	var question_active = $(question).find(".info-list-answer");

	if( $(question).find(".info-list-question").hasClass("active") ){
		$(".info-list-answer").slideUp(500, 'easeOutCubic');
		$(".info-list-question").removeClass("active");
	} else{
		$(".info-list-question").removeClass("active");
		$(".info-list-answer").slideUp(500, 'easeOutCubic');
		$(question_active).slideDown(500, 'easeOutCubic');
		$(question).find(".info-list-question").addClass("active");
	}
});

// Toggle

$('*[data-type="toggle"]').click(function()
{
	var toggletarget = $(this).data('target');
	$(toggletarget).fadeToggle("fast");
});

$('*[data-type="dropdown"]').hover(function()
{
	var toggletarget = $(this).data('target');
	$(toggletarget).fadeToggle("fast");
});


// Dropdown

// $('*[data-toggle="dropdown"]').click(function()
// {
// 	var dropdowntarget = $(this).data('target');
// 	// console.log(dropdowntarget);
// 	$(this).toggleClass('active');
// 	$(dropdowntarget).fadeToggle();
// });


// EXTRA CART INFO
$(".show-extra").click(function() {
	var target = $(this).data('target');

	$("#" + target).slideToggle();
});


// SCROLL HEADER

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	

	if (scroll >= 90) {
		$(".header").addClass("scrolled");
		// $(".site-background").addClass("scrolled");
	} else {
		$(".header").removeClass("scrolled");
		// $(".site-background").removeClass("scrolled");
	}



	if(sitewidth < 768){
		if (scroll >= 200) {
			$(".mobile-book").fadeIn(200);
		}
		else {
			$(".mobile-book").fadeOut(200);
		}
	}
	
});

// SCROLL TO
$(".scroll").click(function() {
	var whereto = $(this).data('scroll');
	console.log(whereto);

	if(sitewidth >= 768){
		$('html,body').animate({scrollTop: $(whereto).offset().top-headerheight}, 1000, 'easeInOutCubic');
	}
	else{
		$('html,body').animate({scrollTop: $(whereto).offset().top}, 1000, 'easeInOutCubic');
		// alert("Blaat");
	}
	return false;
});


// HIDE COOKIES

$( ".hide-cookies" ).click(function() {
	$(".cookies").fadeToggle(500);
});

// DATEPICKER

$('.input-group.arrival').datepicker({
	format: "dd/mm/yyyy",
	autoclose: true,
	todayHighlight: true
});

// CATEGORY
$( ".toggle-category" ).click(function() {

	var category = $(this).data('toggle');
	console.log($(this).data('toggle'));
	
	$(".toggle-category").removeClass("active");
	$(".homepage-category--active").addClass("animated fadeOut");
	$(this).addClass("active");
	setTimeout(function() {
		$(".homepage-category--active").removeClass('homepage-category--active animated fadeOut');
		$("#" + category).addClass("homepage-category--active animated fadeIn");
		// alert("bla");
	}, 200);
	setTimeout(function() {
		$(".homepage-category--active").removeClass('animated fadeIn');
	}, 400);

});

// CUSTOM SELECT

$(function() {
	$('select').selectric();
});

// OWL

$(document).ready(function() {
	var owl = $('.owl-offers');
	owl.owlCarousel({
		responsiveRefreshRate: 200, 
		margin: 15,
		nav: false,
		loop: false,
		animateOut: 'slideOutLeft',
		animateIn: 'slideInRight',
		autoplay:true,
		autoplayTimeout:5000,
		loop: true,
		autoplayHoverPause:true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	})

	var owl = $('.owl-pictures');
	owl.owlCarousel({
		responsiveRefreshRate: 200, 
		margin: 15,
		nav: false,
		loop: false,
		dots: true,
		animateOut: 'slideOutLeft',
		animateIn: 'slideInRight',
		autoplay:false,
		autoplayTimeout:5000,
		loop: true,
		autoplayHoverPause:true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1000: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	})

	var owlReviews = $('.owl-reviews');
	owlReviews.owlCarousel({
		items:1,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		loop: true,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
	})
});




// YOUTUBE VIDEO

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			// 3. This function creates an <iframe> (and YouTube player)
			//    after the API code downloads.
			var starttime = 103;
			var endtime = 133;

			var player;

			function onYouTubeIframeAPIReady() {
				player = new YT.Player('videoplayer', {
					videoId: '4witGyaCtqk',
					playerVars: {
						controls: '0',
						playlist: '4witGyaCtqk',
						loop: 1
					},
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					}
				});
				player = new YT.Player('hero-video', {
					videoId: '1ujOdLRl-Ac',
					playerVars: {
						controls: '0',
						start: starttime,
						end: endtime,
						playlist: '1ujOdLRl-Ac',
						// loop: 1
					},
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					}
				});
			}
			// 4. The API will call this function when the video player is ready.
			function onPlayerReady(event) {
				event.target.seekTo(starttime);
				event.target.setVolume(0);
				event.target.playVideo();
				// player.playVideo();
			}
			function restartVideoSection() {
				player.seekTo(starttime);
				// alert("bla");
			}
			// 5. The API calls this function when the player's state changes.
			//    The function indicates that when playing a video (state=1),
			//    the player should play for six seconds and then stop.
			var done = false;
			function onPlayerStateChange(event) {
				
				if (event.data == YT.PlayerState.PLAYING && !done) {
					// alert("bla");
					done = true;
				}
				if (event.data == YT.PlayerState.ENDED && done){
					restartVideoSection();
				}
	// event.target.setVolume(0);
}

function vidRescale(){

	var w = $('.videowrapper').outerWidth()+200;
	var h = $('.videowrapper').outerHeight()+200;

	if (w/h > 16/9){
		$('.videoplayer').css({
			'width': w +'px',
			'height': w/16*9 +'px'
		})
		// $('.video-background .videoplayer').css({'left': '0px'});
	} else {
		$('.videoplayer').css({
			'width': h/9*16 +'px',
			'height': h +'px'
		})
		// $('.video-background .videoplayer').css({'left': -($('.video-background').outerWidth()-w)/2});
	}
}

vidRescale();

$( window ).resize(function() {
	vidRescale();
	headerheight = $(".header").outerHeight();
});

// FADEIN VIDEO
setTimeout(function() {
	$('#hero-video').addClass('animated fadeIn');
}, 2500);


// FANCYBOX

// Options for the first group
$('[data-fancybox="images"]').fancybox({
	thumbs : {
		autoStart : true
	},
	buttons : [
	'zoom',
	'close'
	]
});

// SCROLL REVEAL

// window.sr = ScrollReveal({ reset: false });
// sr.reveal('.reveal', { 
// 	duration: 600,
// 	useDelay: 'always',
// 	delay: 0,
// 	origin: 'bottom',
// 	distance: '150px',
// 	mobile: true,
// 	scale: 1,
// 	easing: 'ease-in-out',
// 	viewFactor: 0.3
// });

