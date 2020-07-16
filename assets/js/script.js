$(document).ready(function () {
    $(".learn-more-button").on("click", () => {
        $(".page-header").toggle("slow");
        $(".learn-more-button").toggle("slow");
        $(".site-info").fadeToggle("slow");
        $(".menu-nav-bar").toggle("slow");
    });
});