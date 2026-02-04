var aplicacion = angular.module('appTienda', ['dx']);

aplicacion.controller('controladorPrincipal', function($scope, $http) {

    $scope.listaConsolas = [];

    $scope.opcionesTabla = {
        bindingOptions: {
            dataSource: 'listaConsolas'
        },
        searchPanel: {
            visible: true,
            width: 250,
        },
        showBorders: true,
        showRowLines: true,
        columns: [
            { dataField: "nombre", caption: "Modelo" },
            { dataField: "marca", caption: "Marca", width: 120 },
            { dataField: "tipo", caption: "Tipo" },
            { 
                dataField: "precio", 
                caption: "Precio", 
                dataType: "number", 
                format: "currency" 
            },
            { dataField: "stock", caption: "Stock" }
        ],
        paging: { pageSize: 5 }
    };

    $scope.opcionesGrafico = {
        bindingOptions: {
            dataSource: 'listaConsolas'
        },
        series: {
            argumentField: "nombre",
            valueField: "stock",
            name: "Unidades",
            type: "bar",
            color: "#ff7c7c"
        },
        title: {
            text: "Disponibilidad Actual",
            font: { size: 16 }
        },
        legend: { visible: false }
    };

    $http.get('datos/consolas.json')
        .then(function(respuesta) {
            $scope.listaConsolas = respuesta.data;
        }, function(error) {
            console.log("Error cargando datos");
        });

});