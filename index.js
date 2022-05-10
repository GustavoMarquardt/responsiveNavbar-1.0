$(function () {
    console.log('Hello World');
    $('#navbar').addClass('full-navbar');

  $(window).bind("resize", function () {
    var winWidth = $(window).width();
    var navbarWidth = $("#navbar").width();
    console.log(navbarWidth/winWidth);
    if (navbarWidth < 0) {
      if (winWidth > 1500) {
          console.log("mostrar navbar");
        if ($("#navbar").hasClass("none-navbar")) {
            $('#navbar').addClass("full-navbar");
            $("#navbar").removeClass("none-navbar");
            console.log("mostrar navbar");
          $(".bodySite").animate(
            {
                'margin-left': "20%",
            },{
              duration: 500,
              complete: function () {
                $("#conteudoNavbar").show();
                $("#navbar").animate(
                    {
                      'width': "15%",
                    },500);
              },
            }
          );
        }
      }
    }
    if (winWidth < 1500) {
        if ($("#navbar").hasClass("full-navbar")) {
            $('#navbar').addClass("none-navbar");
            $('#navbar').removeClass("full-navbar");
            console.log($('#navbar').hasClass("none-navbar"));
            $("#navbar").animate(
              {
                'width': "0%",
              },
              {
                duration: 500,
                complete: function () {  
                  $("#conteudoNavbar").hide();
                  $(".bodySite").animate({
                    'margin-left': "10%",
                  },500);
                  
                },
              }
            );
          } }
  });
});
