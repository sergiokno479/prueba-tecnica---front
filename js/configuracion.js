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
            { dataField: "stock", caption: "Stock", dataType: "number", allowEditing: true }
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