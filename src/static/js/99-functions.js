
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

// HIDE COOKIES

$( ".hide-cookies" ).click(function() {
	$(".cookies").fadeToggle(500);
});


// HERO VIDEO

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
  w = $('.video-background').outerWidth()+200;
  h = $('.video-background').outerHeight()+200;
  vidRescale();
});
