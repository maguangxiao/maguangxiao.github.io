var videoF = (function() {
                var tmpV = {};
                var video_playing;
                function pausedVBeforeChangeLi() {
                    if (video_playing && !video_playing.ended && !video_playing.paused) {
                        video_playing.pause();
                    }
                };
                tmpV.pausedVBeforeChangeLi= pausedVBeforeChangeLi;
                function launchFullScreen(element) {
                    if (element.requestFullScreen) {
                        element.requestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    }
                };
                function cancelFullScrren(elem) {
                    elem = elem || document;
                    if (elem.cancelFullScrren) {
                        elem.cancelFullScrren();
                    } else if (elem.mozCancelFullScreen) {
                        elem.mozCancelFullScreen();
                    } else if (elem.webkitCancelFullScreen) {
                        console.log("webkitCancelFullScreen");
                        elem.webkitCancelFullScreen();
                    }
                };
                function fullscreen(elem) {
                    var prefix = 'webkit';
                    if (elem[prefix + 'EnterFullScreen']) {
                        return prefix + 'EnterFullScreen';
                    } else if (elem[prefix + 'RequestFullScreen']) {
                        return prefix + 'RequestFullScreen';
                    };
                    return false;
                };
                function videoEvent(v) {
                    var video = v,
                        doc = document;
                    video.addEventListener('play', function() {
                        if (video_playing && video_playing !== this) {
                            console.log('multi')
                            pausedVBeforeChangeLi();
                        }
                        video_playing = this;
                        console.log('play');
                        var fullscreenvideo = fullscreen(video);
                        video[fullscreenvideo]();
                    });
                    video.addEventListener('click', function() {
                        console.log('click')
                        if (this.paused) {
                            console.log('paused');
                            this.play();
                        } else {
                            var fullscreenvideo = fullscreen(video);
                            video[fullscreenvideo]();
                        }
                    })
                    video.addEventListener('pause', function(e) {
                        this.webkitExitFullScreen();
                    });
                    video.addEventListener("webkitfullscreenchange", function(e) {
                        console.log(3);
                        if (!doc.webkitIsFullScreen) {
                            video.pause();
                        };
                    }, false);
                    video.addEventListener("fullscreenchange ", function(e) {
                        console.log(31);
                        if (!doc.webkitIsFullScreen) {
                            video.pause();
                        };
                    }, false);
                    video.addEventListener('ended', function() {
                        console.log(4)
                        this.webkitExitFullScreen();
                    }, false);
                };
                tmpV.videoEvent = videoEvent;
                return tmpV;
            }());
