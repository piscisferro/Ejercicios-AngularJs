<?php

include "conexion.php";

//Con Json_Decode --> recibo por http un objeto JSON 
//y se lo asigno a una variable JSON 
$nombre = json_decode(file_get_contents("php://input"));;

var_dump($nombre);

$consulta = "INSERT INTO categoria (nombre) VALUES (\"" . $nombre->nombre . "\")";

$resultado = mysql_query($consulta);


var_dump ($resultado);
