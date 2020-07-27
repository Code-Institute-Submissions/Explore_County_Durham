function sendMail(contactForm) {
    emailjs.send("gmail", "durham", {
        "from_name": contactForm.name.value, //This is the name that we gave for the name input field in the contact.html form //
        "from_email": contactForm.email.value, //This is the name that we gave for the email input field in the contact.html form 
        "website_feature_request": contactForm.comment.value //This is the name that we gave for the text area field in the contact.html form 
    })
        .then (
        function(response) {
            console.log("SUCCESS", response); //If sending an email has been a success we consoole.log the word success.
        },
       function(error) {
           console.log("FAILED", error)
       }
       );
       return false; //To block from loading a new page
}