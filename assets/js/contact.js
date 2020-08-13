// This code is taken from the Code Institute Interactive Front End Module

// Sets alert respone for succesful submissions and an error response

function handleSuccess(response) {
    alert("Your request has been sent.", response);
    
}

function handleFailure(error) {
    alert("Couldn't send email at this time, please try again later.", error);
    
}

function sendMail(contactForm) {
    emailjs.send("gmail", "durham", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.email.value,
        "website_feature_request": contactForm.comment.value 
    }).then (
           handleSuccess,
           handleFailure
       );
}

$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    sendMail(this);
    $(this).each(function() {
         this.reset();
    });
});

//Overlay spinner created from https://jsfiddle.net/mshaker88/u41rgq3e/

$('.button').click(function(){
    $('#overlay').fadeIn().delay(1000).fadeOut();
});