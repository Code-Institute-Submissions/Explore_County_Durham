$(document).ready(function () {
    $("#learn-more-btn").on("click", function(){
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
    $('.reviews_image_2').mouseover(function(){
    $('.review_toggle_2').slideToggle('slow');
    $('.review_2').slideToggle('slow');
});
   $('.reviews_image_3').mouseover(function(){
    $('.review_toggle_3').slideToggle('slow');
    $('.review_3').slideToggle('slow');
});
   $('.reviews_image_4').mouseover(function(){
    $('.review_toggle_4').slideToggle('slow');
    $('.review_4').slideToggle('slow');
});
   $('.reviews_image_5').mouseover(function(){
    $('.review_toggle_5').slideToggle('slow');
    $('.review_5').slideToggle('slow');
});
   $('.reviews_image_6').mouseover(function(){
    $('.review_toggle_6').slideToggle('slow');
    $('.review_6').slideToggle('slow');
});
});