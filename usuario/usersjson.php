<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


include "conexion.php";
$consulta = "SELECT name,email,pass
			 FROM users  
			 ORDER BY name ";		 

$resultado = mysql_query($consulta);
$datosjson="[";
while($fila=mysql_fetch_array($resultado)){ 
	 if ($datosjson != "[") {$datosjson .= ",";}
		$datosjson .= '{"name":"' . $fila["name"] . '",';
		$datosjson .= ' "email": "'. $fila["email"] . '",';
		$datosjson .= ' "pass": "'. $fila["pass"] . '"}';
}//while

$datosjson .="]";

echo $datosjson;
?>