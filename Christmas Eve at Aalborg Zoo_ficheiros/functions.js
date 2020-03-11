// FUNCTION.JS

// BURGER-MENU
var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('.menu-wrap').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('.menu-wrap').addClass('menu-open');
	}
	isActive = !isActive;
});


// PROGRESSIVE-DISCLOSURE-BURGER-MENU

 $(document).ready(function(){
  $(".trigger3").click(function(){ $(this).next(".triggered3").slideToggle("slow");
    return false;
    });
  });


// READ-MORE

             $(document).ready(function(){
              $(".trigger2").click(function(){ $(this).next(".triggered2").slideToggle("slow");
                return false;
                });
              });


	
