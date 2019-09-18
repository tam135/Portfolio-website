$(document).ready(function() {
  $(".nav__about").click(function() {
    $("html,body").animate({ scrollTop: $("header").offset().top }, 1000);
  });

  $(".nav__projects").click(function() {
    $("html,body").animate(
      { scrollTop: $(".projects").offset().top },
      1000
    );
  });

  $(".nav__contact").click(function() {
    $("html,body").animate({ scrollTop: $(".contacts").offset().top }, 1000);
  });
});
