<?php

//Con Json_Decode --> recibo por http un objeto JSON 
//y se lo asigno a una variable JSON 
$usuario = json_decode(file_get_contents("php://input"));

include "conexion.php";

$qry = 'INSERT INTO users (name,pass,email) 
		values ("' . $usuario->name . '","' . 
		$usuario->pass . '","' . 
		$usuario->email . '")';

$qry_res = mysql_query($qry);

?>