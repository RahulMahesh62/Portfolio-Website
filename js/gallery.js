$(document).ready(function() {
    $(".sbtn").click(function() {
        var name = $(this).attr("data-filter");
        if (name == "all") {
            $(".filter").show("2000");
        } else {
            $(".filter").not("." + name).hide("2000");
            $(".filter").filter("." + name).show("2000");
        }
    });
    $(".snav a").click(function() {
        $(this).addClass("actv").siblings().removeClass("actv");
    });
});