const cuotasSinInteres = 3
function calcular (cuotas,precio) {
  if (cuotas <= 3 && cuotas <= 4){
    return precio/cuotas;
  }

  else if(cuotas >= 4 && cuotas <= 8){
    return (precio /100 * 5 + precio) / cuotas;
  }
  else if (cuotas >= 8 ){
    return (precio/100*10 + precio) / cuotas;
  }
  else{
    alert("Error");
  }
}
function calcularTotal(cuotas, precio) {
  if (cuotas <= 3 && cuotas <= 4) {
    return precio;
  }

  else if (cuotas >= 4 && cuotas <= 8) {
    return precio / 100 * 5 + precio;
  }
  else if (cuotas >= 8) {
    return precio / 100 * 10 + precio;
  }
  else {
    alert("Error");
  }
}

alert(`Hola, Bienvenido al calculador de impuestos` );
let cantidad   = prompt("cuantos productos le interesa averiguar?");
for(i = 1; i <= cantidad; i++){
  do {
    var precio = parseInt(prompt(`Ingrese el valor del producto ${i}`));
    var cuotas = parseInt(prompt(`En cuantas cuotas le interesaria pagar el producto numero ${i} \nHasta ${cuotasSinInteres} sin interes, Si pagas entre 4 y 8 cuotas tenes un 5% de interes y Pagando en 8 cuotas o mas el interes es del 10%`));
    let totalInteres = calcular(cuotas,precio);
    let total = calcularTotal(cuotas,precio);
    alert(`Cada cuota te saldria ${totalInteres}\nEl precio total del producto seria de ${total}`);
}
  while (cuotas = "")
}
