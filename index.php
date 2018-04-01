<!DOCTYPE html>
<html>

  <head>
    <?php include "head.php";?>
		<title>Aamir Husain</title>
    <link rel = "stylesheet" href = "css/contact.css">
    <script src = "js/fades.js"></script>
    <script src = "js/superlatives.js"></script>
  </head>

  <body>
    <nav>
      <?php include "navbar.php";?>
    </nav>

    <main>
      <div id = "quote"><h6><i>"Every day is a prototype."</i></h6></div>

      <section id = "portfolio">
        <?php
        $project_name = "project1";
        include("projects/load_tile.php");
        ?>
      </section>
    </main>

    <div id = "scissors">
      <img src = "img/scissors.svg">
      <div id = "line"><div></div></div>
    </div>

    <section id = "contact">
      <?php include('contact.php'); ?>
    </section>

    <footer>
      <?php include "footer.php";?>
    </footer>
  </body>

</html>
