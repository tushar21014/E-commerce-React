<?php
header('Access-Control-Allow-Origin: * ');
$servername = "localhost";
$username = "root";
$password = "";
$database = "main";

$conn = mysqli_connect($servername,$username,$password,$database);
if(!$conn)
{
    echo "Connection Error" . mysqli_connect_error();
}
else 
{
    echo "Connection Succesfull";
}


?>