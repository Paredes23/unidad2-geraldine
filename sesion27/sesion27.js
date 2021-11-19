/*
function areaCircunferencia(r){
    const pi =3.14;
    area = pi*r*r
    return area
}

let radio = prompt ("ingresa el radio");
resultado = areaCircunferencia(radio);
console.log(resultado);
*/

/*let nota = prompt ("Introduce la nota:");
if (nota<=10){
    alert("Te recomendamos estudiar mas.");
}else if (nota>10{
  alert("Aprobaste");
}
*/

function estaEsTuNota(n){
    if(n<=8){
        alert("Debes estudiar mas");
    }else if (n>=14){
        alert("Haz estudiado mucho");
}
}
let nota=prompt("coloca tu nota");
resultado=estaEsTuNota(nota);