$(document).ready(function () {
  $(".nav ul li a").click(function () {
    var wow = $(this).attr("id");
    $("html, body").animate({
      scrollTop: $("." + wow).offset().top
    });
  });
});
