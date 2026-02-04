angular.module('appTienda').constant('ConfiguracionVisual', {
    
    tabla: {
        keyExpr: "id", 
        searchPanel: { visible: true, width: 250 },
        showBorders: true,
        showRowLines: true,
        selection: { mode: "single" },
        editing: {
            mode: "cell",          
            allowUpdating: true    
        },
        paging: { pageSize: 5 },
        columns: [
            { dataField: "nombre", caption: "Modelo", width: 170},
            { dataField: "marca", caption: "Marca", width: 120 },
            { dataField: "tipo", caption: "Tipo" },
            { dataField: "precio", caption: "Precio", dataType: "number", format: "currency" },
            { dataField: "stock", caption: "Stock", dataType: "number", allowEditing: true,
                width: 100,
                cellTemplate: function(container, options) {
                    var valor = options.value;
                    var color = valor < 15 ? 'red' : 'black';
                    var weight = valor < 15 ? 'bold' : 'normal';
                    $("<span style='color:" + color + "; font-weight:" + weight + "'>" + valor + "</span>")
                        .appendTo(container);
                }
            },
            {
                caption: "Acción",
                width: 100,
                alignment: "center",
                allowEditing: false,
                cellTemplate: function(container, options) {
                    $("<button class='btn-vender'>Vender</button>")
                        .on("click", function() {
                            var scope = angular.element(container).scope();
                            scope.vender(options.data.id);
                            scope.$apply();
                        })
                        .appendTo(container);
                }
            }
        ]
    },
    grafico: {
        legend: { visible: false},
        
        series: {
            argumentField: "nombre",
            valueField: "stock",
            type: "bar",
            
            color: "#ff7c7c"
        },
        title: { text: "Disponibilidad", font: { size: 16 } },
    }
});