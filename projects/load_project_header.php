<?php
echo '<div id = "project-title">';
echo '<h3>'.$title.'</h3>';
echo '<h4>'.$proj_desc.'</h4>';
echo '</div>';
if (trim($video) != "none") {
  echo '<iframe class = "header-video" src = "'.$video.'"></iframe>';
}
?>
