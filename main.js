function cotizarAPeso() {
    const cotizar = parseFloat (prompt ("Ingrese cantidad de Dólares "))
    // Validamos entrada
    while (cotizar >= 0) {
        if (!isNaN(cotizar)) {
            // Redondeamos resultado
            const dolar = ((cotizar * 905).toFixed(2));
            alert ("Su cantidad de Dólares equivalen a $ " + (dolar)  + " Pesos");
            break;
        } else {
            alert ("La cantidad ingresada NO es válida");
        }
        
    }
    if (cotizar < 0) {
        alert ("Cantidad de Dólares ingresados incorrecta")
    }
}

function cotizarADolar() {
    const cotizar = parseFloat (prompt ("Ingrese cantidad de pesos "))
    // Validamos la entrada
    while (cotizar >= 0) {
        if (!isNaN(cotizar)) {
            // Redondeamos resultado
            const pesos = ((cotizar / 905).toFixed(2));
            alert ("Su cantidad de Pesos equivalen a $ " + (pesos)  + " Dólares");
        } else {
            alert ("La cantidad ingresada NO es válida");
        }
    }
    if (cotizar < 0) {
        alert ("Cantidad de pesos ingresados incorrecta")
    }    
}

alert ("COTIZADOR DE DOLAR A PESO"  + "\n" + "COTIZADOR PESO A DOLAR");

let menu = parseInt (prompt("Ingrese 1 para cotizar sus Dólares a Pesos" + "\n" + "Ingrese 2 para cotizar sus pesos a dólares" + "\n" + "Ingrese 3 para salir").toLowerCase()); 
while (menu!= "3") {
    switch (menu ) {
        case 1 :
            cotizarAPeso ();
            break;

        case 2 :
            cotizarADolar ();
            break;
        case 3 : // Puedo colocar boton de salir con 3 pero no con "esc"?
            break;
        default :
            alert ("No ingreso ninguna de las opciones habilitadas");
            break;
    }
    menu = parseInt (prompt("Ingrese 1 para cotizar sus Dólares a Pesos" + "\n" + "Ingrese 2 para cotizar sus pesos a dólares" + "\n" + "Ingrese 3 para salir"));
}
alert ("Gracias por elegirnos!");