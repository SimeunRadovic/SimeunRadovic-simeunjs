$(document).ready(function () {
  /*--------------------------
      preloader
    ---------------------------- */
  $(window).on("load", function () {
    var pre_loader = $("#preloader");
    pre_loader.fadeOut(2950, function () {
      $(this).remove();
    });
  });

  var windowHeight = window.innerHeight;
  var height = windowHeight + "px";
  $(".section").height(height);
});
