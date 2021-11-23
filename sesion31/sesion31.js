// ----------------------- VALIDACIÓN DE TARJETA DE CRÉDITO -----------------------
// Dato: La mayoría de las tarjetas tienen 16 dígitos.
function validarTarjeta() {
    // Nos debemos asegurar de que la alerta no sea visible antes de terminar de validar.
    let alerta = document.getElementById("alerta");
    alerta.innerText = "";
    alerta.className = "";

    let numero = document.getElementById("numero-tarjeta");
    let digitosTC = numero.value;
    if (digitosTC.length == 0) {
        alerta.innerText = "Tarjeta Inválida";
        alerta.className = "alerta-error";
        return false;
    }

    // PASO 1: ALMACENAR EN UN ARREGLO LOS DIGITOS EN ORDEN INVERSO
    let arrTC = Array.from(digitosTC); // Almacena cada caracter de los numeros de la tarjeta
    let arrInverso = arrTC.reverse(); // Invertir el orden de los elementos del arreglo

    // PASO 2: Multiplicar los elementos en posiciones pares ( contando desde el ultimo)
    // Si el numero resultante es de 2 digitos, se debe sumar los digitos

    let digitoPar = -1;
    for (let i = 1; i <= arrInverso.length; i += 2) {
        digitoPar = parseInt(arrInverso[i]);
        digitoPar *= 2;

        if (digitoPar >= 10) {
            digitoPar = digitoPar.toString();
            digitoPar = parseInt(digitoPar[1]) + parseInt(digitoPar[0]);
        }
        arrInverso[i] = digitoPar.toString();
    }

    //PASO 3: Sumar todos los digitos de la tarjeta

    let suma =0;
    for (let j =0; j<arrInverso.length; j++){
        if(typeof arrInverso[j] == "string"){
            suma += parseInt(arrInverso[j]);

        }else {
            suma += arrInverso[j];
        }
    }
//Paso 4: Verificar si el resultado es divisible por 10

   if (suma % 10 == 0) {
        alerta.innerText = "Tarjeta Válida";
        alerta.className = "alerta-valida";
        return true;
    } else {
        alerta.innerText = "Tarjeta Inválida";
        alerta.className = "alerta-error";
        return false
        ;
    }

  }


// enmascarar los digitos

function enmascarar() {
    let numero = document.getElementById("numero-tarjeta");
    let digitosTC = numero.value;
    let cantidadDigitos = digitosTC.length;

    if (cantidadDigitos > 4) {
        let digitosAEnmascarar = cantidadDigitos - 4;
        for (let i = 0; i < digitosAEnmascarar; i++) {
            digitosTC = digitosTC.replace(digitosTC[i], "*");
        }
    }
    document.getElementById("svgnumber").innerHTML = digitosTC;
}

document.getElementById("btn-validar").addEventListener("click", function () {
    let valida = validarTarjeta();
    if (valida) {
        enmascarar();
        document.getElementById("numero-tarjeta").value = "";
        this.hidden = true;
    }
})