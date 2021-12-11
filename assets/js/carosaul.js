/*Carosaul*/
$(window).on("load", function () {
  var width = window.innerWidth;
  var carousel = document.getElementById("myCarousel");
  var arrows =
    ' <a class="carousel-control-prev w-auto" href="#myCarousel" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
    "</a>" +
    '<a class="carousel-control-next w-auto" href="#myCarousel" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
    "</a>";

  if (width <= 768) {
    carousel.innerHTML =
      '<div class="carousel-inner w-100" role="listbox">' +
      '<div class="carousel-item active">' +
      '<div class="row d-flex d-md-none d-lg-none justify-content-center  align-items-center ">' +
      '<img class="img-fluid" src="assets/img/home/us_logo.png">' +
      '<img class="img-fluid" src="assets/img/home/bb_logo.png">' +
      "</div>" +
      "</div>" +
      '<div class="carousel-item">' +
      '<div class="row d-flex d-md-none d-lg-none justify-content-center  align-items-center ">' +
      '<img class="img-fluid" src="assets/img/home/fc_logo.png">' +
      '<img class="img-fluid" src="assets/img/home/pc_logo.png">' +
      "</div>" +
      "</div>" +
      '<div class="carousel-item">' +
      '<div class="row d-flex d-md-none d-lg-none justify-content-center  align-items-center ">' +
      '<img class="img-fluid" src="assets/img/home/wr_logo.png">' +
      '<img class="img-fluid" src="assets/img/home/s_logo.png">' +
      "</div>" +
      "</div>" +
      '<div class="carousel-item">' +
      '<div class="row d-flex d-md-none d-lg-none justify-content-center  align-items-center ">' +
      '<img class="img-fluid" src="assets/img/home/sp_logo.png">' +
      '<img class="img-fluid" src="assets/img/home/cb_logo.png">' +
      "</div>" +
      "</div>" +
      '<div class="carousel-item">' +
      '<div class="row d-flex d-md-none d-lg-none justify-content-center  align-items-center ">' +
      '<img class="img-fluid" src="assets/img/home/ct_logo.png">' +
      '<img class="img-fluid" src="assets/img/home/4g_logo.png">' +
      "</div>" +
      "</div>" +
      '<div class="carousel-item">' +
      '<div class="row d-flex d-md-none d-lg-none justify-content-center  align-items-center ">' +
      '<img class="img-fluid" src="assets/img/home/de_logo.png">' +
      '<img class="img-fluid" src="assets/img/home/bbs_logo.png">' +
      "</div>" +
      "</div>" +
      '<div class="carousel-item">' +
      '<div class="row d-flex d-md-none d-lg-none justify-content-center  align-items-center ">' +
      '<img class="img-fluid" src="assets/img/home/cp_logo.png">' +
      '<img class="img-fluid" src="assets/img/home/spotat_logo.png">' +
      "</div>" +
      "</div>" +
      "</div>" +
      arrows;
  } else {
    if (width > 768 && width < 1200) {
      carousel.innerHTML =
        '<div class="carousel-inner w-100" role="listbox">' +
        '<div class="carousel-item active">' +
        '<div class="row d-none d-md-flex d-lg-flex d-xl-none justify-content-center align-items-center ">' +
        '<img class="img-fluid" src="assets/img/home/us_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/bb_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/fc_logo.png">' +
        "</div>" +
        "</div>" +
        '<div class="carousel-item ">' +
        '<div class="row d-none d-md-flex d-lg-flex d-xl-none justify-content-center align-items-center ">' +
        '<img class="img-fluid" src="assets/img/home/pc_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/wr_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/s_logo.png">' +
        "</div>" +
        "</div>" +
        '<div class="carousel-item ">' +
        '<div class="row d-none d-md-flex d-lg-flex d-xl-none justify-content-center align-items-center ">' +
        '<img class="img-fluid" src="assets/img/home/sp_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/cb_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/ct_logo.png">' +
        "</div>" +
        "</div>" +
        '<div class="carousel-item ">' +
        '<div class="row d-none d-md-flex d-lg-flex d-xl-none justify-content-center align-items-center ">' +
        '<img class="img-fluid" src="assets/img/home/4g_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/de_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/bbs_logo.png">' +
        "</div>" +
        "</div>" +
        '<div class="carousel-item ">' +
        '<div class="row d-none d-md-flex d-lg-flex d-xl-none justify-content-center align-items-center ">' +
        '<img class="img-fluid" src="assets/img/home/cp_logo.png">' +
        '<img class="img-fluid cetrnaesti" src="assets/img/home/spotat_logo.png">' +
        "</div>" +
        "</div>" +
        "</div>" +
        arrows;
    } else {
      carousel.innerHTML =
        '<div class="carousel-inner w-100" role="listbox">' +
        '<div class="carousel-item active">' +
        '<div class="row d-none d-xl-flex justify-content-center align-items-center">' +
        '<img class="img-fluid" src="assets/img/home/us_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/bb_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/fc_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/pc_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/wr_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/s_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/sp_logo.png">' +
        "</div>" +
        "</div>" +
        '<div class="carousel-item">' +
        '<div class="row d-none d-xl-flex justify-content-center align-items-center">' +
        '<img class="img-fluid" src="assets/img/home/cb_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/ct_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/4g_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/de_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/bbs_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/cp_logo.png">' +
        '<img class="img-fluid" src="assets/img/home/spotat_logo.png">' +
        "</div>" +
        "</div>" +
        "</div>" +
        arrows;
    }
  }
});

$("#myCarousel").carousel({
  interval: 5000,
});
