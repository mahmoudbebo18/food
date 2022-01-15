document.addEventListener("DOMContentLoaded", function () {
  var demo1 = new BVSelect({
    selector: "#selectbox",
    width: "100%",
    offset: true,
    placeholder: "Select Option",
    search_placeholder: "Search...",
    search_autofocus: true,
    breakpoint: 450,
  });
  demo1.SetOption({
    type: "byIndex",
    value: "1",
  });
});

$(document).ready(function () {
  $(".tabs-links .tab").click(function () {
    $("body, html").animate(
      {
        scrollTop:
          $("#" + $(this).data("target")).offset().top -
          ($(".navbar").innerHeight() + 1),
      },
      400
    );
  });
});


 //show and hode the scrolling tabs div 


$(window).scroll(function(){
    if($(window).scrollTop() >= $(".mahashi").offset().top - $(".navbar").innerHeight()){
        $(".scrolling-tabs-links").addClass("appear")
    }else{
        $(".scrolling-tabs-links").removeClass("appear")
    }
})

$(document).ready(function () {
  $(".scrolling-tabs-links a").click(function (e) {
    e.preventDefault();

    $(".scrolling-tabs-links a").removeClass('active');

    $(this).addClass('active')

    $("body, html").animate(
      {
        scrollTop:
          $("#" + $(this).data("target")).offset().top -
          ($(".navbar").innerHeight()  + $('.scrolling-tabs-links').innerHeight() + 1),
      },
      400
    );
  });
});
