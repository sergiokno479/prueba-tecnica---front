// Servicio para manejo del inventario
angular.module('appTienda').factory('InventarioService', function($http) {
    return {
        obtenerDatos: function() {
            return $http.get('datos/consolas.json');
        }
    };
});