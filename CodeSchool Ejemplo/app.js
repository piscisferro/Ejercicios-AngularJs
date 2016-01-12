(function(){
    // Producto y atributos del producto en formato JSON 
    var gems = [{ name: 'Azurite', price: 2.95, canPurchase: true }, 
               { name: "BloodStone", price: 5.95, canPurchase: false}, 
               { name: "Zircon", price: 3.95, canPurchase: true}];
    
    // Modulo angular de la APP 
    var app = angular.module('gemStore', []);
    
    // Controlador de la APP
    app.controller("StoreController", function(){
        // Conectamos el controlador de la app con gem a traves de producto.
        this.product = gems;
    });
  
})();