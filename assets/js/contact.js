// This codes used from the Code Institute Interactove Front End Module

function sendMail(contactForm) {
    emailjs.send("gmail", "durham", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.email.value,
        "website_feature_request": contactForm.comment.value 
    })
        .then (
        function(response) {
            alert("Your request has been sent.", response); 
        },
       function(error) {
           alert("FAILED", error)
       }
       );
       return false; 
}