var webkitNotification = function() {
	var deferred = $.Deferred();
	webkitNotifications.requestPermission(deferred.resolve, deferred.reject);
	return deferred.promise();
};
