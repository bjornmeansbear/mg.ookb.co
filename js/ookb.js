!function ($) {

  "use strict"; // jshint ;_;

  // Some Custom JS for the site
  // scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
  $(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
	});
	
}(window.jQuery);

!function ($) {

  "use strict"; // jshint ;_;

  // Some Custom JS for the site
  // scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
  $(document).ready(function() {
    $("section.toggle > article ").hide();
    });
	
  $("section.toggle h2").click(function () {
    $(this).parent().children("article").toggle("slow");
    });    

/*
  $("section.toggle").click(function () {
    $(this).children("article").show("slow");
    });    
*/

}(window.jQuery);