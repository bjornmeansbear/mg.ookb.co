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
  // Several different hide/show events...
  
/*
  $(document).ready(function() {
    $("section.toggle > article ").hide();
    });
*/
	//click on title of section to hide/show
  $("section.toggle h2").click(function () {
    $(this).parent().children("article").toggle("slow");
    });    

  //expand and contract all buttons
  $("#expansion").click(function () {
    $("section.toggle article").show("slow");
    });    
  $("#contraction").click(function () {
    $("section.toggle article").hide("slow");
    });    

/*
  $("section.toggle").click(function () {
    $(this).children("article").show("slow");
    });    
*/

  $("article.toggle ol p").click(function () {
    $(this).parent('ol').toggle("slow");
    });    


}(window.jQuery);