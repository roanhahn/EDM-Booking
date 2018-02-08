/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

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

