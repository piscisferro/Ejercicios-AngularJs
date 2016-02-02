(function() {
    var app = angular.module('ejemplo', [ ]);
    
    var listaColores = [
        {
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
    ];
    
    app.directive('coloresElem', function() {
        return {
            restrict: 'E', //Element
            templateUrl: 'colores.html',
            controller: function() {
                this.colorines = listaColores;
            }, 
            controllerAs: 'controlColores'
        };
    });
})();