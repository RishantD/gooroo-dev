$(window).load(function() {
	
	// $("body").css("display", "none");
	$('#loading').fadeOut(750);
	// ADD LOADER IN LOCATION
    $(".container").fadeIn(500);
    
	$("a.trans").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(750, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
