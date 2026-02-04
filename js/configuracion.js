
angular.module('appTienda').constant('ConfiguracionVisual', {
    
    tabla: {
        searchPanel: { visible: true, width: 250 },
        showBorders: true,
        showRowLines: true,
        paging: { pageSize: 5 },
        columns: [
            { dataField: "nombre", caption: "Modelo" },
            { dataField: "marca", caption: "Marca", width: 120 },
            { dataField: "tipo", caption: "Tipo" },
            { dataField: "precio", caption: "Precio", dataType: "number", format: "currency" },
            { dataField: "stock", caption: "Stock" }
        ]
    },
    grafico: {
        series: {
            argumentField: "nombre",
            valueField: "stock",
            type: "bar",
            color: "#ff7c7c"
        },
        title: { text: "Disponibilidad", font: { size: 16 } },
    }
});