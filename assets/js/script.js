$(document).ready(function () {
    $("#learn-more-btn").on("click", () => {
        $(".page-header").toggle("slow");
        $("#learn-more-btn").toggle("slow");
        $(".site-info").fadeToggle("slow");
        $(".menu-nav-bar").toggle("slow");
    });
});