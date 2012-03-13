if( !! (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia) ) {
	getUserMedia()
		.done(function( localMediaStream ) {
			var video = document.querySelector( "video" );
			video.src = window.webkitURL.createObjectURL( localMediaStream );
		}).fail(function() {
			console.error( "failed to get usermedia");
		}).always(function() {
	});
} else {
	console.error( "your browser does not support getUserMedia" );
}​
