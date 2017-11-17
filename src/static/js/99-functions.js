
// MOBILE NAV


$(".nav-mobile-btn").click(function() {
	$(".header-nav").fadeToggle("fast");
});


// INFO PAGE & FAQ

$(".info-label").click(function() {
	console.log($(this).data('list'));
	$('html, body').animate({
		scrollTop: $("#" + $(this).data('list')).offset().top
	}, 1000, 'easeOutQuad');
});

$(".info-list-item").click(function() {
	$(".info-list-question").removeClass("active");
	$(".info-list-answer").hide(0);
	$(this).find(".info-list-question").addClass("active");
	$(this).find(".info-list-answer").slideToggle(500);
});

// SCROLL HEADER

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 90) {
		$(".header").addClass("scrolled");
	} else {
		$(".header").removeClass("scrolled");
	}
});

// SCROLL TO
$(".scroll").click(function() {
	var whereto = $(this).data('scroll');
	console.log(whereto);
	$('html,body').animate({scrollTop: $("#" + whereto).offset().top-90}, 1000, 'easeInOutCubic');
	return false;
});


// HIDE COOKIES

$( ".hide-cookies" ).click(function() {
	$(".cookies").fadeToggle(500);
});

// CATEGORY
// $( ".toggle-category" ).click(function() {

// 	var category = $(this).data('toggle');
// 	// console.log($(this).data('toggle'));
// 	$(".homepage-category--active").addClass("animated fadeOut");

// 	setTimeout(function() {
// 		$(".homepage-category--active").removeClass('homepage-category--active animated fadeOut');
// 		$("#" + category).addClass("homepage-category--active animated fadeIn");
// 		// alert("bla");
// 	}, 200);
// 	setTimeout(function() {
// 		$(".homepage-category--active").removeClass('animated fadeIn');
// 	}, 400);

// });

// OWL

$(document).ready(function() {
	var owl = $('.owl-offers');
	owl.owlCarousel({
		responsiveRefreshRate: 200, 
		margin: 15,
		nav: false,
		loop: false,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
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
			}
			// 4. The API will call this function when the video player is ready.
			function onPlayerReady(event) {
				event.target.setVolume(0);
				event.target.playVideo();
			}
			// 5. The API calls this function when the player's state changes.
			//    The function indicates that when playing a video (state=1),
			//    the player should play for six seconds and then stop.
			var done = false;
			function onPlayerStateChange(event) {
				if (event.data == YT.PlayerState.PLAYING && !done) {
		//      setTimeout(stopVideo, 6000);
		done = true;
	}
	event.target.setVolume(0);
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
});

// SCROLL REVEAL

// window.sr = ScrollReveal({ reset: false });
// sr.reveal('.reveal', { 
// 	duration: 500,
// 	useDelay: 'once',
// 	delay: 0,
// 	origin: 'bottom',
// 	distance: '150px',
// 	mobile: true,
// 	scale: 1,
// 	viewFactor: 0.4
// });

