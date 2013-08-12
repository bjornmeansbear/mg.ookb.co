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

	//click on title of section to hide/show
  $("section.toggle h2").click(function () {
    $(this).parent().children(".row").toggle("slow");
    });    

  //hiding/showing +/- when clicking on h2
  $(document).ready(function() {
    $(".more").hide();
    $(".past .row").hide();
    $(".past .more").show();
    $(".past .less").hide();
    });

  $("section.toggle h2").click(function () {
    $(this).parent().children(".plusminus").toggle("slow");
    });

  //expand and contract all buttons
  $("#expansion").click(function () {
    $("section.toggle .row").show("slow");
    $("section.toggle .more").hide("slow");
    $("section.toggle .less").show("slow");
    });    
  $("#contraction").click(function () {
    $("section.toggle .row").hide("slow");
    $("section.toggle .more").show("slow");
    $("section.toggle .less").hide("slow");
    });

  $("article.toggle ol p").click(function () {
    $(this).parent('ol').toggle("slow");
    });    

}(window.jQuery);