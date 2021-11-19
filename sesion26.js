/*function suma(a,b){
    resultado=a+b
    return resultado;
} 

let respuesta = suma(5,5);
alert(respuesta);*/

/*function resta(a,b){
resultado=a-b
return resultado;
}

let respuesta = resta(6,4);
alert(respuesta);*/


/*function producto(a,b){
    resultado=a*b
    return resultado;
    }
    
    let respuesta = producto(6,4);
    alert(respuesta);*/

    /*function division(a,b){
        resultado=a/b
        return resultado;
        }
        
        let respuesta = division(20,4);
        alert(respuesta);*/

       /* let agregar= a=> a+11;
        alert (agregar(2));*/

        /*let agregar= a=> a*11;
        alert (agregar(2));*/

       /* let agregar= a=> a/5;
        alert (agregar(10));

        /*function add(a){
            resultado=a+10;
            return resultado
        }
        alert(add(5));*/

        /*const medallas= function (puntaje){
            if (puntaje <3){
                return "Bronce";
            }
            if(puntaje<5){
                return "plata";
            }
                return "oro";
            }
        alert(medallas(4));*/

        let emoji=':D';
        const greet =(name) => {
            emoji =':)';
            const myGreet = () => 'Hola ${name} ${emoji}';
            return myGreet();
        };

        console.log(greet('Laboratoria'));