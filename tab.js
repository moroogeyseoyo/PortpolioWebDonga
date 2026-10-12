$(".button_area li").click(function () {
    var i = $(this).index();

    $(".tab").css("opacity", "0");
    $(".tab").eq(i).css("opacity", "1");

    $(".button_area li").css("background-color", "none")
        .css("color", "#555");

    $(this).css("background-color", "none")
        .css("color", "rgba(0, 142, 170, 1)");
})
