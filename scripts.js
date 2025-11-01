document.getElementById("inquiryForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const destination = document.getElementById("destination").value;

  if (!name || !email || !destination) {
    alert("Please fill in all required fields before submitting.");
    return;
  }

  // Create a thank-you message
  const thankYouWindow = window.open("", "ThankYou", "width=420,height=260");
  thankYouWindow.document.write(`
    <html>
      <head><title>Thank You!</title></head>
      <body style="font-family:Arial; text-align:center; padding:20px; background-color:#f9f6f0;">
        <h2 style="color:#4b3a1f;">Thank You, ${name}!</h2>
        <p>Your inquiry for <strong>${destination}</strong> has been received.</p>
        <p>Our team will reach out to you soon via email at <strong>${email}</strong>.</p>
        <p style="margin-top:20px; font-style:italic;">Kerala Heritage Travels – Experience the Essence of Kerala</p>
      </body>
    </html>
  `);
  thankYouWindow.document.close();

  // Reset the form
  document.getElementById("inquiryForm").reset();
});
