function check() {

    // Check if the browser supports media devices and getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                // Set the video source to the user's camera stream
              window.location.href="start.html";
                
            })
    }

}

check();

setInterval(function(){
    check();
},2000);
