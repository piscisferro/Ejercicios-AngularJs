(function(){
    
    var app = angular.module("musica", []);
    
    app.controller("listasController", function ($scope, $http) {
        $http.get("musicajson.php").success(function(data){
            $scope.artistas = data;
        });
    });
})();  




