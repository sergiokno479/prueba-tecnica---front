var app = angular.module('appTienda', ['dx']);

app.controller('controladorPrincipal', function($scope, InventarioService, ConfiguracionVisual) {

    $scope.listaConsolas = [];

    $scope.vender = function(consolaId) {
        var consolaEncontrada = $scope.listaConsolas.find(c => c.id === consolaId);

        if (consolaEncontrada && consolaEncontrada.stock > 0) {
            consolaEncontrada.stock--;

            DevExpress.ui.notify(consolaEncontrada.nombre + " vendida!", "success", 1000);

            var grafico = $("#graficoConsolas").dxChart("instance");
            if (grafico) grafico.refresh();
        } else {
            DevExpress.ui.notify("¡No hay stock!", "error", 2000);
        }
    };

    $scope.opcionesTabla = angular.copy(ConfiguracionVisual.tabla);
    $scope.opcionesTabla.bindingOptions = {
        dataSource: 'listaConsolas'
    };

    $scope.opcionesTabla.onRowUpdated = function() {
        var grafico = $("#graficoConsolas").dxChart("instance");
        if (grafico) grafico.refresh();
    };

    $scope.opcionesGrafico = angular.copy(ConfiguracionVisual.grafico);
    $scope.opcionesGrafico.bindingOptions = {
        dataSource: 'listaConsolas'
    };

    InventarioService.obtenerDatos()
        .then(function(respuesta) {
            $scope.listaConsolas = respuesta.data;
        }, function(error) {
            console.error("Error:", error);
        });
});