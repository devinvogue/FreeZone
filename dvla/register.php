<?php  
$server = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'dvla';
$con = mysql_connect($server,$user,$pass) or die("Can't connect");
mysql_select_db($dbname);

?>