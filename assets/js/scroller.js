var a = $('*[data-scroll="true"]');
var offset = a.offset();
var itemwidth = a.outerWidth();
var itemheight = a.outerHeight();
var container = $(".scroller").outerHeight();
var range = 70;

var limit = container - itemheight;

console.log(container + "container");
console.log(itemheight + "itemheight");
console.log(offset.top  + "position from top");
console.log(limit);



$(window).on('resize', function(){
	offset = a.offset();
	itemwidth = a.outerWidth();
	itemheight = a.outerHeight();
	container = $(".scroller").outerHeight();
	limit = container - itemheight;
});


$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	$(a).css({"position": "fixed", "top": offset.top, "bottom": "auto",  "margin-left": 0, "width": itemwidth});

	if (scroll >= limit) {
		$(a).css({"position": "absolute", "top": "auto", "bottom": "0px",  "margin-left": 0, "width": itemwidth});
	}
	else{
		$(a).css({"position": "fixed", "top": offset.top, "bottom": "auto",  "margin-left": 0, "width": itemwidth});
	}
	// if (scroll >= checkoutheight) {
	// 	$( ".fixedcart" ).css({"position": "fixed", "top": offset.top - checkoutheight, "bottom": "auto",  "margin-left": 0, "width": cartwitdh});

	// 	if (scroll >= slc) {
	// 		$( ".fixedcart" ).css({"position": "absolute", "bottom": "0px", "top": "auto", "margin-left": 0, "width": cartwitdh});
	// 	} else {

	// 	}
	// }
	// else{
	// 	$( ".fixedcart" ).css({"position": "", "top": "", "bottom": "",  "margin-left": "", "width": ""});
	// }
});