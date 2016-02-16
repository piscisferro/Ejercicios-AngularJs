<?php

// Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Incluimos la conexion para poder conectar a base de datos
include "conexion.php";

// Consulta SQL para la categoria
$consulta = "SELECT *
			 FROM categoria 
			 ORDER BY nombre ";	

// Resultado de la consulta
$resultado = mysql_query($consulta);

// Recorremos todas los registros del resultado y los guardamos en $fila como array
while($fila=mysql_fetch_array($resultado)) {
    
    // Segunda consulta SQL para el producto
    $consulta2 = "SELECT *
                 FROM producto
                 WHERE idcategoria=" . $fila["idcategoria"] . " 
			     ORDER BY nombre ";  
    
    // Resultado de la consulta 2
    $resultado2 = mysql_query($consulta2);
    
    // Recorremos los resultados de la consulta 2 y los guardamos en $fila2 como array
    while($fila2=mysql_fetch_array($resultado2)) {
        
        // Para crear al JSON tendremos que tener arrays dentro de arrays para que el JSON
        // tenga varios niveles, asi, en el registro actual del array $fila creamos un nuevo array
        // que contiene los registros de $fila2. En cada iteraccion del While se ira guardando en este array
        // bidimensional los registros de la consulta2
        $fila["productos"][] = $fila2;
    }
    
    // Una vez creado el subarray de $fila con los registros de $fila2, lo guardamos en el array $json.
    // En cada iteraccion del while se guardara los resultados de las consultas en el array json uno detras de otro
    $json[] = $fila;
    
}

// json_encode convierte el array u objeto de PHP a formato JSON, es por ello que hicimos lo anterior
// puesto que los arrays bidimensional (arrays dentro de arrays) hacen que podamos generar un json de 
// varios niveles.
echo json_encode($json);
