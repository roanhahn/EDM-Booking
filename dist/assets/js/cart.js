// FIXED CART

var sitewidth = $(".header").outerWidth();
var c = $( ".fixedcart" );
var offset = c.offset();
var checkoutheight = $( ".checkout" ).outerHeight();
var cartwitdh = $(".fixedcart").outerWidth();
var cch = $( ".section--cart" ).outerHeight();
var ch = $( ".cart" ).outerHeight();
var slc = cch - ch - 140 + checkoutheight;




// 


$(window).on('resize', function(){
	sitewidth = $(".header").outerWidth();
	if(sitewidth > 768){
		
	}
	else{
		$( ".fixedcart" ).css({"position": "", "top": "", "bottom": "",  "margin-left": "", "width": ""});
	}
});



	if(sitewidth > 768){
		// $( ".fixedcart" ).css({"position": "fixed", "top": offset.top, "margin-left": 0, "width": cartwitdh});
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();

			if (scroll >= checkoutheight) {
				$( ".fixedcart" ).css({"position": "fixed", "top": offset.top - checkoutheight, "bottom": "auto",  "margin-left": 0, "width": cartwitdh});

				if (scroll >= slc) {
					$( ".fixedcart" ).css({"position": "absolute", "bottom": "0px", "top": "auto", "margin-left": 0, "width": cartwitdh});
				} else {
					
				}
			}
			else{
				$( ".fixedcart" ).css({"position": "", "top": "", "bottom": "",  "margin-left": "", "width": ""});
			}
		});
	}
	else{
		console.log("Bla");
	}	
	


