if( window.webkitNotifications ){
	$( "#allow-notification" ).click(function() {
		webkitNotification()
			.done(function() {
				webkitNotifications.createNotification("", "title", "content").show();
			})
			.fail(function() {
				console.error( "webkitNotifications is not allowed")
			})
			.always(function() {
			
			});
	});
}
else{
	console.log( "your browser does not support webkitNotifications" );
}
