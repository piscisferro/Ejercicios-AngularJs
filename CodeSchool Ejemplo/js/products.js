(function(){
    /////////////////////////////////////////
    /////    Modulo angular de la APP   ///// 
    var app = angular.module('storeProducts', []);

    /////////////////////////////////////////////////////
    /////    Directiva para Descripcion producto    /////
    app.directive("productDescription", function(){
        return {
            restrict: "E",
            templateUrl: "product-description.html"
        };
    });

    //////////////////////////////////////////////////////////
    /////    Directiva de atributo para Spec producto    /////
    app.directive("productSpecs", function() {
        return {
            restrict: 'A',
            templateUrl: "product-specs.html"
        };
    });

    //////////////////////////////////////////////////////////
    /////    Directiva de elemento para las Tabs         /////
    app.directive("productTabs", function() {
        return {
            restrict: 'E',
            templateUrl: "product-tabs.html",
            controller: function() {
                // Inicializamos el valor para que nos muestre la primera pestaña al cargar
                this.tab = 1;

                // Funcion para seleccionar la pestaña, pasamos por parametro el valor que recogemos del HTML
                this.setTab = function(tab) {
                this.tab = tab;
                };

                // Funcion para saber si esta seleciconada la pestaña pasamos por parametro el valor que recogemos por HTML
                this.isSet = function(tab) {
                    return this.tab === tab;
                };
            },
            controllerAs: "tab"
        };
    });
})();