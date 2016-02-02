(function(){

    var gems = [{
        "name": "Azurite",
        "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        "canPurchase": true,
        "shine": 8,
        "price": 110.50,
        "rarity": 7,
        "color": "#CCC",
        "faces": 14,
        "images": [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        "reviews": [{
            "stars": 5,
            "body": "I love this gem!",
            "author": "joe@example.org",
            "createdOn": 1397490980837
        }, {
            "stars": 1,
            "body": "This gem sucks.",
            "author": "tim@example.org",
            "createdOn": 1397490980837
        }]
    }, {
        "name": "Bloodstone",
        "description": "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        "canPurchase": false,
        "shine": 9,
        "price": 22.90,
        "rarity": 6,
        "color": "#EEE",
        "faces": 12,
        "images": [
            "images/gem-01.gif",
            "images/gem-03.gif",
            "images/gem-04.gif"
        ],
        "reviews": [{
            "stars": 3,
            "body": "I think this gem was just OK, could honestly use more shine, IMO.",
            "author": "JimmyDean@example.org",
            "createdOn": 1397490980837
        }, {
            "stars": 4,
            "body": "Any gem with 12 faces is for me!",
            "author": "gemsRock@example.org",
            "createdOn": 1397490980837
        }]
    }, {
        "name": "Zircon",
        "description": "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        "canPurchase": true,
        "shine": 70,
        "price": 1100,
        "rarity": 2,
        "color": "#000",
        "faces": 6,
        "images": [
            "images/gem-06.gif",
            "images/gem-07.gif",
            "images/gem-08.gif"
        ],
        "reviews": [{
            "stars": 1,
            "body": "This gem is WAY too expensive for its rarity value.",
            "author": "turtleguyy@example.org",
            "createdOn": 1397490980837
        }, {
            "stars": 1,
            "body": "BBW: High Shine != High Quality.",
            "author": "LouisW407@example.org",
            "createdOn": 1397490980837
        }, {
            "stars": 1,
            "body": "Don't waste your rubles!",
            "author": "nat@example.org",
            "createdOn": 1397490980837
        }]
    }];
    
    
    /////////////////////////////////////////
    /////    Modulo angular de la APP   ///// 
    var app = angular.module('gemStore', ["storeProducts"]);
    
    
    /////////////////////////////////////
    /////   Controlador de la APP   /////
    app.controller("StoreController", function() {
        // Guardamos this en store
        this.product = gems;
        
        /*
        // Inicializamos el array products sino la web se vera rara mientras carga
        store.products = gems;
       
        // Usamos $http.get para recoger el json y, si lo recoge bien, lo cargamos en store
        // Solo funciona en servidor web, no funciona en local
        
        $http.get("store-products.json").success(function (data) {
            store.products = data;
        });*/
    });
    
    /////////////////////////////////////////////
    /////    Controlador para la Galeria    /////
    app.controller ("GalleryController", function() {
        // Inicializamos el valor a 0
        this.current= 0;
        
        // Metodo setCurrent para cambiar el valor de current
        this.setCurrent = function(value) {
            // Si es nulo current = 0, sino coge el valor de value
            this.current = value || 0;
        };
    
    });
    
    
    //////////////////////////////////////////////
    /////    Controlador para las Reviews    /////
    app.controller("ReviewController", function(){
        // Inicializamos la review, tomara su valor del formulario HTML de ng-model
        this.review = {};
        
        // Creamos el metodo addReview param product que pasaremos por HTML 
        this.addReview = function(product) {
            // Añadimos la propiedad createdOn a review
            this.review.createdOn = Date.now();
            
            // En product(que en realidad es el json Gems) -> review, añadimos la review al array
            product.reviews.push(this.review);
            
            // Reinicializamos a 0 para reiniciar los campos del formulario
            this.review = {};
        };
    });
})();