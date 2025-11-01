function sendEmail(event) {
    event.preventDefault();

    const data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        number: document.getElementById("number").value.trim(),
        message: document.getElementById("message").value.trim(),
    };

    // Check for empty fields
    if (!data.name || !data.email || !data.number || !data.message) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate name: must have at least 3 letters
    if (data.name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return;
    }

    // Validate mobile number: must be 10 digits only
    const numberPattern = /^[0-9]{10}$/;
    if (!numberPattern.test(data.number)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_rl68sdf", "template_pvy7d9c", data)
        .then((res) => {
            alert("Success! Your message has been sent.");
            document.getElementById("formcontact").reset();
            console.log("SUCCESS!", res.status, res.text);
        })
        .catch((err) => {
            alert("Failed to send email. Check console for details.");
            console.error("FAILED...", err);
        });
}
