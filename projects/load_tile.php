<?php
$project_info = file("projects/".$project_name."/project_info.txt");
$title = $project_info[1];
$proj_tile = $project_info[4];
$tile_loc = $project_info[7];
$tile_desc = $project_info[10];
$tile_extra = $project_info[13];

echo '<div class = "project">';
echo '<img class = "project-img" src = "'.$proj_tile.'">';
echo '<a href = "'.$tile_loc.'">';
echo '<h2>'.strtoupper($title).'</h2>';
echo '<p>'.$tile_desc;
echo '<br><br>';
echo $tile_extra.'</p></a></div>';
?>
