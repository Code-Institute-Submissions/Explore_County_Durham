$(document).ready(function () {
    $("#learn-more-btn").on("click", () => {
        $(".page-header").toggle("slow");
        $("#learn-more-btn").toggle("slow");
        $(".site-info").fadeToggle("slow");
        $(".menu-nav-bar").toggle("slow");
    });

    //The below code to reset the contact form was taken from stack overflow https://stackoverflow.com/questions/32244107/bootstrap-form-fields-not-clearing-after-submit
    $('#contactForm').on('submit', function() {
    $(this).each(function() {
         this.reset();
    });
});
$('.reviews_image_1').mouseover(function(){
    $('.review_toggle_1').slideToggle('slow');
    $('.review_1').slideToggle('slow');
})
});