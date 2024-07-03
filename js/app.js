let inventario = [];

function agregarProducto(codigo, nombre, precio){

    for (let i = 0; i < inventario.length; i++){
        if (inventario[i].codigo === codigo){
            alert("El codigo de producto ya existe en el inventario."); 
            return;
        }
    }

    let producto = {
        codigo: codigo,
        nombre: nombre,
        precio: precio
    };

    inventario.push(producto);
    alert("Producto agregado al inventario.");
}


function buscarProductoPorCodigo(codigo){
    
    for(let i = 0; i < inventario.length; i++){
        if (inventario[i].codigo === codigo){
            return inventario[i];
        }
    }

    return null;
}

let operacion = prompt("¿Que desea hacer 1)Agregar un producto al inventario o 2)Buscar un producto por codigo \n Ingrese 1 o 2 para avanzar.");

if(operacion === "1"){
    let codigo = prompt("Ingrese el codigo del producto:");
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    agregarProducto(codigo, nombre, precio);
} else if (operacion === "2"){
    let codigoBuscar = prompt("Ingrese el codigo del producto a buscar:");

    let productoEncontrado = buscarProductoPorCodigo(codigoBuscar);

    if (productoEncontrado){
        alert("Producto encontrado: \nCodigo: "+productoEncontrado.codigo+"\nNombre: "+productoEncontrado.nombre+"\nPrecio: "+productoEncontrado.precio+"");
    } else {
        alert("Producto no encontrado en el inventario.");
    }
} else {
    alert("Opcion no valida. Por favor ingrese 1 o 2.")
}




