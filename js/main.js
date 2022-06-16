let total = 0;
let cantidad = 0;
let fecha = new Date();

// array productos
const productos = [
  { id: 1, producto: "AGUA", precio: 200, stock: 50 },
  { id: 2, producto: "YERBA", precio: 450, stock: 50 },
  { id: 3, producto: "LECHE", precio: 100, stock: 50 },
];

// funcion buscar
function buscarProd() {
  let buscar = prompt("Ingrese Producto a Buscar").toUpperCase();
  const resultado = productos.find((p) => p.producto === buscar);
  if (resultado == undefined) {
    alert("El producto no existe");
  } else {
    alert(
      "Se encontró " +
        resultado.producto +
        " El precio es de $" +
        resultado.precio
    );
  }
}

// funcion calcular precio de unidades
function CalcularIva(subTotal) {
  ivaInc = subTotal * 1.21;
  return ivaInc;
}

// funcion registrar pedido
function registrarPedido() {
  cantidad = parseInt(prompt("Ingrese Cantidad"));
  if (cantidad <= productos[pedido - 1].stock) {
    alert(
      "Usted pidió " +
        cantidad +
        " unidades " +
        "El precio por unidad es de $" +
        productos[pedido - 1].precio
    );
    productos[pedido - 1].stock = productos[pedido - 1].stock - cantidad;
    let subTotal = productos[pedido - 1].precio * cantidad;
    CalcularIva(subTotal);
    alert("El total de la compra con IVA es de $" + ivaInc);
    total = total + ivaInc;
  } else {
    alert(
      "No tenemos esa cantidad en stcok. Stock disponible " +
        productos[pedido - 1].stock
    );
  }
}

// Clase clientes
class Clientes {
  constructor(nombre, edad) {
    (this.nombre = nombre), (this.edad = edad);
  }
}

//Función de registro de cliente
function registroCliente() {
  nombre = prompt("Ingrese su Nombre");
  edad = prompt("Ingrese su Edad");
  clientenuevo = new Clientes(nombre, edad);
}

// Llamo a la funcion registro cliente
registroCliente();

let pedido = parseInt(
  prompt("Ingrese su Pedido\n1.Leche\n2.Yerba\n3Agua\n4.Salir\n5.Buscar")
);
while (pedido != 4) {
  switch (pedido) {
    case 1:
      registrarPedido();
      break;
    case 2:
      registrarPedido();
      break;
    case 3:
      registrarPedido();
      break;
    case 4:
      registrarPedido();
      break;
    case 5:
      buscarProd();
      break;
    default:
      alert("No se reconoce la opción");
      break;
  }
  pedido = parseInt(
    prompt("Ingrese su Pedido\n1.Leche\n2.Yerba\n3Agua\n4.Salir\n5.Buscar")
  );
}
alert(
  "Fecha de entrega del pedido: " +
    fecha.toLocaleDateString() +
    "\n" +
    nombre +
    " Gracias por su compra.\nEl total del ticket es de $" +
    total
);
