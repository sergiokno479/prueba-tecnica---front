var app = angular.module('appTienda', ['dx']);

app.controller('controladorPrincipal', function($scope, InventarioService, ConfiguracionVisual) {

    $scope.listaConsolas = [];
    $scope.opcionesTabla = angular.copy(ConfiguracionVisual.tabla);
    $scope.opcionesTabla.bindingOptions = { dataSource: 'listaConsolas' };

    $scope.opcionesTabla.onRowUpdated = function(e) {

        var grafico = $("#graficoConsolas").dxChart("instance");
        if (grafico) {
            grafico.refresh();
        }
    };
    
    $scope.opcionesGrafico = angular.copy(ConfiguracionVisual.grafico);
    $scope.opcionesGrafico.bindingOptions = { dataSource: 'listaConsolas' };
    
    InventarioService.obtenerDatos()
        .then(function(respuesta) {
            $scope.listaConsolas = respuesta.data;
        }, function(error) {
            console.error("Error cargando datos:", error);
        });

});