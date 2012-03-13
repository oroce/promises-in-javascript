if( navigator.geolocation ){
	geolocation()
		.done(function(pos) {
   			console.log( "[coordinates]", pos );
		})
		.fail(function() {
    			console.error( "failed to get geolocation" );
		})
		.always(function() {

		});
}
