<?php
    include("./mysql.php");
    $q_id=mysqli_real_escape_string($db,$_GET["q_id"]);
    $quer = "SELECT * FROM question_data WHERE question_id=$q_id";
    $data = mysqli_query($db, $quer);
    $data = mysqli_fetch_array($data);
    echo json_encode($data);

?>