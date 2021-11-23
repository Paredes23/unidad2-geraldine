/// validacion de tarjeta de credito//
//dato mayoria tiene 16 digitos//
function validarTarjeta(){
  let alerta = document.getElementById("alerta");
  alerta.innerText="";
  alerta.className="";

  let numero = document.getElementById("numero-tarjeta");
  let digitosTC = numero.value;
  if (digitosTC.length == 0){
      alerta.innerText = "Tarjeta Invalida";
      alerta.className = "alerta-error"; 
          return false;
   }

  //PASO 1: ALMACENAR EN UN ARREGLO LOS DIGITOS EN ORDEN INVERSO
   let arrTC = Array.from(digitosTC);//Almacena cada caracter de los numeros de la tarjeta de credito///
   let arrInverso = arrTC.reverse();//Invertir el orden de los elementos del arreglos//
   //PASO 2:MULTIPLICAR LOS ELEMENTOS EN POSICIONES PARES8contando desde el ultimo)
   //si el numero resultante es de 2 digitos, se debe sumar los digitos


   let digitoPar = -1;
    for(let i = 1;i<= arrInverso.length; i+=2){
    digitoPar = parseInt(arrInverso[i]);
    digitoPar *= 2;

    if (digitoPar >= 10){
        digitoPar = digitoPar.toString();
        digitoPar = parseInt(digitoPar[1]) + parseInt(digitoPar[0]);
    }
    arrInverso[i]= digitoPar.toString();
    
  }
//Paso 3: Sumar todos los digitos de las tarjeta

  let suma = 0;
  for (let j =0;j<arrInverso.length; j++)
      if (typeof arrInverso[j] == "string"){
        suma += parseInt(arrInverso[j]);     
    } else {
      suma += arrInverso[j];
    }
}

//PASO 4: VERIFICAR SI EL RESULTADO ES DIVISIBLE POR 10

    if (suma %10 == 0){
    alerta.innerText = "Tarjeta valida";
    alerta.className = "alerta-valida";
    return true; 
}   else {
  alerta.innerText = "Tarjeta Invalida";
  alerta.className = "alerta-error";
  return false;
}

//enmascarar los digitos

function enmascarar(){
  let numero = document.getElementById("numero-tarjeta");
  let digitosTC = numero.value;
  let cantidadDigitos = digitosTC.length;

  if(cantidadDigitos > 4){
    let digitosAEnmascarar = cantidadDigitos -4 ;
    for(let i=0 ; i< digitosEnmascarar; i++){
      digitosTC = digitosTC.replace(digitosTC[i], "*");
    }
  }
  document.getElementById("svgnumber").innerHTML = digitosTC;
}

document.getElementById("btn-validar").addEventListener("click", function(){
   let valida = validartarjeta();
  if(valida){
     enmascarar();
     document.getElementById("numero-tarjeta").value = "";
     this.hidden = true;
   }
})
