(function(){
    // Creamos la app de la web
    var app = angular.module("tiendaOnline", []);
    
    // Creamos el controlador para el listado (incluye formulario)
    app.controller("listadoController", function ($scope, $http) {
        // Traemos mediante get la respuesta en JSON de la base de datos 
        $http.get("tiendaonlineJSON.php").success(function(data){
            // Guardamos en tienda los datos recibidos para mostrarlos luego en html
            $scope.tienda = data;
        });
        
        // Creamos la funcion nuevaCategoria
        $scope.nuevaCategoria = function() {
            // Enviamos mediante post el nombre de la nueva categoria que hemos recogido del input del formulario
            $http.post("insert.php", { nombre: $scope.nuevoNombre }).success(function() {
                
                // Hacemos un push para mostrar instantaneamente la categoria sin necesidad de recargar
                $scope.tienda.push({ nombre: $scope.nuevoNombre});
                // Reiniciamos el input del formulario
                $scope.nuevoNombre = undefined;
                // le damos la clase pristine al formulario para que no se nos quede el invalid (input rojo)
                $scope.categoriaForm.$setPristine();
                
            });
        };
    });
    
    
    /////////////////////////////////////////////////////
    /////    Directiva para listado de categorias   /////
    app.directive("listadoCategorias", function(){
        return {
            restrict: "E", // Sera un elemento 
            templateUrl: "listado-categorias.html" // URL donde se encontrara el html
        };
    });
    
    
})();  




