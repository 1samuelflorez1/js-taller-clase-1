
// c significa calificacion
let c1= parseInt(prompt("ingrese la primera calificacion"));
let c2= parseInt(prompt("ingrese la segunda calificacion"));
let c3= parseInt(prompt("ingrese la tercera calificacion"));
let c4= parseInt(prompt("ingrese la cuarta calificacion"));
let c5= parseInt(prompt("ingrese la quinta calificacion"));

let promedio = (c1+c2+c3+c4+c5)/5;

console.log(promedio);

if(promedio >= 3){
    console.log("Es estudiante aprobo");
} else {
    console.log("El estudiante no aprobo")
}