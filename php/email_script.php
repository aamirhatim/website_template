<?php
$to = "YOUR_EMAIL_HERE"; // Put your email here (e.g. your.email@email.com)

$name = $_POST['name'];

$address = $_POST['email'];
$message = $_POST['message'];

// The following line should follow this format: "From: Your Name <your.email@email.com>"
$headers = "From: FROM_WHO <your.email@email.com>";

// The first line below sends whatever message the visitor writes to your desired email.
// The second line is an optional message that gets sent to the visitor showing the message they sent from the website.
// The third line directs the visitor to a landing page that can link them to your home page.
mail("$to", "Website Inquiry", "$message"."\r\n\r\n".$name."\r\n".$address, $headers);
mail("$address", "To <YOUR_NAME>: Message Copy", "Thanks for reaching out! Here's a copy of your message:\r\n\r\n".$message, $headers);
print "Sent! Click <a href = 'YOUR_WEBSITE_URL'>here</a> to go back to the home page."; // Add your home page URL to redirect the user
?>
