var result = detect.parse(navigator.userAgent);

var pcVideo = document.getElementById("videoPC");
var mobVideo = document.getElementById("videoMOB");

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
//if (result.device.family === "iPhone" || result.device.family === "iPad" || result.device.family === "iPod" || result.device.family === "Mac") {
if(getOS() === 'Mac OS' || getOS() === 'iOS'){
    pcVideo.innerHTML = '<img src="assets/img/home/1920x624novi.gif" alt="" width="100%"></img>';
    mobVideo.innerHTML = '<img src="assets/img/home/1024x515.gif" alt="" width="100%"></img>';
    console.log(result.os.family);
} else {
    pcVideo.innerHTML = '<video autoplay muted playsinline width="100%">' +
        '<source src="assets/img/GOTOVO_VP9_2pass.webm" type="video/webm">' +
        '</video>';
    mobVideo.innerHTML = '<video autoplay muted playsinline width="100%">' +
        '<source src="assets/img/home/5124r_VP9_2pass.webm">' +
        '</video>';
    console.log(result.os.family);
}