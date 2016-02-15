(function(){
	var app= angular.module("usuariosapp",[]);
		
	app.controller('usuariosController',function ($scope,$http) {
			//Inicializar array de usuarios
			$scope.usuarios = [];
			
			//Mediante ajax angularjs obteniendo en JSON los 
			//datos de la tabla users
			$http.get("usersjson.php").success(function(data) {
				$scope.usuarios = data;
			});
	
           //Funcion de nuevo usuario    
           $scope.nuevoUsuario = function() {

                //Creo en una variable el objeto JSON usuario 
				//del formulario   
				var usuarioNuevo= {'name': $scope.username, 'email': $scope.useremail, 'pass': $scope.userpassword};
					
				//MEdiante Ajax AngularJS POST
				//Mandamos el objeto JSON usuario a un PHP
                $http.post('post_es.php', usuarioNuevo
                    ).success(function() {
						//Añado al array el nuevo objeto 
						//json usuario
                  		$scope.usuarios.push(usuarioNuevo);
						//Limpiar los datos del formulario
						$scope.username="";
						$scope.useremail="";
						$scope.userpassword="";
						
						//Reiniciar formulario
						$scope.formularioUsuario.$setPristine();
						
						
					 });
                }
        });
	
	
	
})();