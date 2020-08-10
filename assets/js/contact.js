// This code is taken from the Code Institute Interactive Front End Module

function handleSuccess(response) {
    alert("Your request has been sent.", response);
    // Disable display of the overlay
}

function handleFailure(error) {
    alert("Couldn't send email at this time, please try again later.");
    // Disable display of the overlay
}

function sendMail(contactForm) {
    emailjs.send("gmail", "durham", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.email.value,
        "website_feature_request": contactForm.comment.value 
    }).then (
           handleSuccess,
           handleFailure,
       );
}

$('#contactForm').on('submit', function(e) {
    // Enable display of the overlay
    // Select the button and disable it, display spinner
    e.preventDefault();
    sendMail(this);
    $(this).each(function() {
         this.reset();
    });
});