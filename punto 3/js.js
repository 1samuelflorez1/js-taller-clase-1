let sueldo = prompt("ingrese su sueldo");
let descuento = 0;

if (sueldo <= 1000 ) {
    descuento = (sueldo * 5)/100;
}

if (sueldo > 1000 && descuento <= 2000) {
    descuento = (sueldo * 10)/100;
}

if (sueldo > 2000) {
    descuento = (sueldo * 15)/100;
}

let sueldoNeto = sueldo - descuento

console.log("Sueldo Base: " + sueldo)
console.log("Descuento: " + descuento)
console.log("Sueldo Neto es de :" + sueldoNeto)