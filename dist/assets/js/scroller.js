var a = $('*[data-scroll="true"]');
var offset = a.offset();
var itemwidth = a.outerWidth();
var itemheight = a.outerHeight();
var container = $(".scroller").outerHeight();
var range = 70;
var header = 90;
var sitewidth = $(".header").outerWidth();
var position = range + header;

var limit = container - itemheight + offset.top - position;

console.log(container + "container");
console.log(itemheight + "itemheight");
console.log(offset.top  + "position from top");
console.log(limit);



$(window).on('resize', function(){
	sitewidth = $(".header").outerWidth();
});




$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if(sitewidth > 768){
		if (offset.top - scroll - header <= range){
			$(a).css({"position": "fixed", "top": position, "bottom": "auto",  "margin-left": 0, "width": itemwidth});

			if (scroll >= limit) {
				$(a).css({"position": "absolute", "top": "auto", "bottom": "0px",  "margin-left": 0, "width": itemwidth});
			}
			else{

			}
		}
		else{
			$(a).css({"position": "", "top": "", "bottom": "",  "margin-left": "", "width": ""});
		}
	}
	else{
		$(a).css({"position": "", "top": "", "bottom": "",  "margin-left": "", "width": ""});
	}
});