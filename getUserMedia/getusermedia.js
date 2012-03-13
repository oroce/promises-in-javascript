var getUserMedia = function() {
    var _getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia),
        deferred = $.Deferred();
    _getUserMedia.call( navigator, "video, audio", deferred.resolve, deferred.reject);
    return deferred.promise();
};
