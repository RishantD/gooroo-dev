
	    
$(window).load(function(){

	$(function() {
			//make sure body is set to black
			var body = $('body');
			var header = $('#headerwrap');
			body.css('background', '#000000');
			header.css('background', '#000000');
            var BV = new $.BigVideo();
			BV.init();
			BV.getPlayer().on('loadedmetadata',function(){
			    $('#big-video-wrap').fadeIn();
			});
			if (Modernizr.touch) {
				//$('#big-video-wrap').fadeIn();
			    //BV.show('assets/img/palm.jpg');
			    header.css('background-image', 'url("assets/img/palm.jpg")');
			} else {
				BV.show('assets/vid/people.mp4', {doLoop:true}, {ambient:true});
			}
	    });
   // jQuery methods go here...

});