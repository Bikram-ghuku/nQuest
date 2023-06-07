<?php
    include("./mysql.php");
    $info_id=mysqli_real_escape_string($db,$_GET["info_id"]);
    $quer = "SELECT * FROM information_data WHERE Info_id=$info_id";
    $data = mysqli_query($db, $quer);
    $data = mysqli_fetch_array($data);
    echo json_encode($data);

?>