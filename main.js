// Clases de objetos -->

class cliente {
    constructor (nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni
    }

}

const nombreUsuario = prompt ("Ingrese su nombre ").toUpperCase();
const apellidoUsuario = prompt ("Ingrese su apellido").toUpperCase();
const dni = parseInt (prompt ("Ingrese su DNI"));
const dniUsuario = dni.toLocaleString("es-ES");
const usuario = new cliente (nombreUsuario, apellidoUsuario, dniUsuario);

// Array -->

const cotizaciones = [];
const historial = [];

// Funciones -->

function cotizarAPeso() {
    const cotizar = parseFloat (prompt ("Ingrese cantidad de Dólares "))
    // Validamos la entrada - Numeros positivos
    while (!isNaN (cotizar) && cotizar >= 0) {
        if (!isNaN(cotizar)) {
            // Redondeamos resultado
            const dolar = ((cotizar * 905).toFixed(2));
            alert ("Su cantidad de Dólares equivalen a $ " + (dolar)  + " Pesos");
            cotizaciones.push({ tipo: "Dólares a Pesos", cantidad: cotizar, resultado: dolar.toLocaleString("es-ES") });
            break;
        } else {
            alert ("La cantidad ingresada NO es válida");
        }
        
    }
    if (cotizar < 0) {
        alert ("Cantidad de Dólares ingresados incorrecta")
    } // Numeros negativos Fin validacion - vuelta a menú.
}

function cotizarADolar() {
    const cotizar = parseFloat (prompt ("Ingrese cantidad de pesos "))
    // Validamos la entrada - Numeros positivos
    while (!isNaN (cotizar) && cotizar >= 0){
        if (!isNaN(cotizar)) {
            // Redondeamos resultado
            const pesos = ((cotizar / 905).toFixed(2));
            alert ("Su cantidad de Pesos equivalen a $" + (pesos)  + " Dólares");
            cotizaciones.push({ tipo: "Pesos a Dólares", cantidad: cotizar, resultado: pesos });
            break;
        } else {
            alert ("La cantidad ingresada NO es válida");
        }

    }
    if (cotizar < 0) {
        alert ("Cantidad de pesos ingresados incorrecta"); 
    } // Numeros negativos Fin validacion - vuelta a menú.    
}

function buscarCotizaciones() {
    const filtro = prompt("Ingrese el tipo de cotización que desea buscar (Dolares a Pesos / Pesos a Dolares)").toLowerCase();
    const cotizacionesFiltradas = cotizaciones.filter(cotizacion => cotizacion.tipo.toLowerCase() === filtro);
    if (cotizacionesFiltradas.length > 0) {
        let mensaje = `Cotizaciones encontradas (${filtro}):\n\n`;
        cotizacionesFiltradas.forEach(cotizacion => {
            mensaje += `Tipo: ${cotizacion.tipo}\n`;
            mensaje += `Cantidad: ${cotizacion.cantidad}\n`;
            mensaje += `Resultado: ${cotizacion.resultado}\n\n`;
        });
        alert(mensaje);
    } else {
        alert("No se encontraron cotizaciones con el tipo especificado");
    }
}


alert ("BIENVENIDO/A SR/A " + usuario.nombre + " " + usuario.apellido + "\n" + "DNI: " + usuario.dni + `\n\n` + "COTIZADOR DE DOLAR A PESO"  + "\n" + "COTIZADOR PESO A DOLAR");

let menu = parseInt (prompt("Ingrese 1 para cotizar sus Dólares a Pesos" + "\n" + "Ingrese 2 para cotizar sus Pesos a Dólares" + "\n" + "Ingrese 3 para buscar cotizaciones" + "\n" + "Ingrese 4 para Salir").toLowerCase()); 
while (menu!= "4") {
    switch (menu ) {
        case 1 :
            cotizarAPeso ();
            break;

        case 2 :
            cotizarADolar ();
            break;
        case 3 : 
            buscarCotizaciones ();
            break;
        default :
            alert ("No ingreso ninguna de las opciones habilitadas");
            break;
    }
    menu = parseInt (prompt("Ingrese 1 para cotizar sus Dólares a Pesos" + "\n" + "Ingrese 2 para cotizar sus Pesos a Dólares" + "\n" + "Ingrese 3 para buscar cotizaciones" + "\n" + "Ingrese 4 para Salir"));
}

alert ("Gracias por elegirnos!"); //Mensaje de salida

