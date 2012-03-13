var geolocation = function() {
    var deferred = $.Deferred();
    navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject);
    return deferred.promise();
};
