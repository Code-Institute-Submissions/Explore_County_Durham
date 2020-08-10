$(document).ready(function () {
    
    // There are 6 images in the reviews page, the class is : reviews_image_X
    for (var i=1; i <= 6; i++){
        mouseOverEffect(i);
    };

// Elements removed from home page when the learn more button is clicked    
    
	$("#learn-more-btn").on("click", () => {
		$(".page-header").toggle("slow");
		$("#learn-more-btn").toggle("slow");
		$(".site-info").fadeToggle("slow");
		$(".menu-nav-bar").toggle("slow");
	});
});

//Mouseover effect to toggle reviews when an image is hovered over

function mouseOverEffect(imageNumber){
    $(`.reviews_image_${imageNumber}`).mouseover(function () {
        $(`.review_toggle_${imageNumber}`).slideToggle('slow');
        $(`.review_${imageNumber}`).slideToggle('slow');
    });
}
