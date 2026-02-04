Prueba Técnica solución para la prueba técnica de Front-end. La idea es armar un panel sencillo para gestionar un inventario de consolas. muestra un JSON de consolas en una tabla y un gráfico. Lo interesante es la lógica que tiene detrás:

Todo está conectado: Si editas el stock en la tabla, el gráfico de barras se actualiza solo al instante.
Si el stock baja de 15 unidades, el número se pone en rojo y negrita para avisar.
Venta Rápida: Si le das clic, descuenta el stock, te saca una alerta visual y actualiza el gráfico.
Validaciones: Si intentas vender algo que tiene 0 stock, te avisa que no se puede.
Separé la lógica en servicios y archivos de configuración para no tener un controlador gigante y desordenado.
Para correrlo en local Como es estático, solo necesitas un servidor simple:

Bájate el repo.
Abre el index.html con Live Server (o cualquier servidor http).
Y listo.