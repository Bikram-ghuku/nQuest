<?php
    $host = "localhost";
    $username = "root";
    $password = "";
    $db_name = "nQuest";
    $db=mysqli_connect($host,$username,$password,$db_name);
    $con=new mysqli($host,$username,$password,$db_name);
    $db1=new mysqli($host,$username,$password,$db_name);

?>