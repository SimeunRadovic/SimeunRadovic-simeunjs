$(document).ready(function() {
    /*--------------------------
      preloader
    ---------------------------- */
    $(window).on('load', function() {
        var pre_loader = $('#preloader')
        pre_loader.fadeOut(3000, function() { $(this).remove(); });
    });

    var skuter2 = document.getElementById('skuter2');
    var skuter3 = document.getElementById('skuter3');
    //skuter 
    setTimeout(function() {
        if (skuter2 != null) {
            skuter2.playbackRate = 2.0;
            skuter2.play();
        }

        if (skuter3 != null) {
            skuter3.playbackRate = 2.0;
            skuter3.play();
        }

    }, 5000);

});

var result = detect.parse(navigator.userAgent);

var pcVideo = document.getElementById("skuter");
var mobVideo = document.getElementById("skuter1");

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }

console.log(getOS());
if(getOS() === 'Mac OS' || getOS() === 'iOS'){
    mobVideo.innerHTML = '<img class="skuter" src="assets/img/Locations/1024x320_loop.gif" alt="" width="100%"></img>';
    pcVideo.innerHTML = '<img class="skuter" src="assets/img/Locations/1920x300_loop.gif" alt="" width="100%"></img>';

} else {
    if (pcVideo != null) {
        pcVideo.innerHTML = '<video class="skuter" id="skuter2"  playsinline muted width="100%" loop="true">' +
            '<source src="assets/img/Locations/Untitled-10012_1_VP9_2pass.webm"  type="video/webm" codecs="vp8, vorbis">' +
            '</video>';
    }
    if (mobVideo != null) {
        mobVideo.innerHTML = '<video class="skuter" id="skuter3"  playsinline muted width="100%" loop="true">' +
            '<source src="assets/img/Locations/1024x300_VP9_2pass.webm" type="video/webm"  codecs="vp8, vorbis">' +
            '</video>';
    }
}