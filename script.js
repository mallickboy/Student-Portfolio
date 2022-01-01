function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
  var bigVedio = function() {
    // initialize BigVideo
    var BV = new $.BigVideo({
            container: $('.video-wrap'),
            forceAutoplay: isTouch
        }),
        V = $('.video-wrap').attr('data-video-wrap'),
        img = $('.video-wrap').attr('data-img-wrap');
    if (typeof V != typeof undefined) {
        if (!isTouch) {
            BV.init();
            BV.show(V, {
                ambient: true,
                doLoop: true
            });
        } else {
            BV.init();
            BV.show(img);
        }
    }
};