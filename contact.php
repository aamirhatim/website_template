<div class = "contact" id = "contact-text">
  <h1>ASK ME ANYTHING!</h1>
  <p>Questions? Need to see my resume? Just stopping by to say hi? I'd love to hear from you! Fill out the form and I'll get back to you as soon as I can.</p>
</div>

<form class = "contact" id = "contact-form" action = "/php/email_script.php" method = POST>
  <input type = "text" name = "name" placeholder = "name." required/>
  <input type = "text" name = "email" placeholder = "email." required/>
  <textarea name = "message" placeholder = "message." autocomplete = "off" required></textarea>
  <input type = "submit" name = "submit" value = "send"/>
</form>
