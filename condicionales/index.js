/* let primerNumero = parseInt( prompt("ingrese tu numero"))
let segundoNumero = parseInt(prompt("ingrese tu numero"))

if (primerNumero > segundoNumero){
    alert(primerNumero + " es mayor quue " +segundoNumero)
    console.log(numero ," es mayor")
}else{
    alert(primerNumero + " es menor que "+ segundoNumero)
    console.log(numero, " es menor ")
} */

/* ejercicio 2

let num1 = parseInt(prompt("ingrese tu numero"))
let num2 = parseInt(prompt("ingrese tu segundo numero"))

if (num1 === num2){
    console.log(num1 + " es igual a " +num2)
}else{
    console.log(num1 + " es diferente a " + num2)} */


/* ejercicio 3  */

/* let num1 = parseInt(prompt("ingrese tu numero"))
let num2 = parseInt(prompt("ingrese tu segundo numero"))

if (num1 > num2){
    console.log(num1 , " es mas grande que " +num2)
}else if (num2 > num1){
    console.log(num2 , " es mas grande que " +num1)
}else {
    console.log(num1 +" es igual a " + num2 )
}
    
 */

/* ejercicio 4 */

/* let num1 = parseInt(prompt("ingrese tu numero"))
let num2 = parseInt(prompt("ingrese tu segundo numero"))
let num3 = parseInt(prompt("ingrese tu tercer numero"))

if (num1 <= num2 && num1 <= num3){
    console.log(num1 ," el primer numero es menor ")
}else if (num2 <= num1 && num2 <= num3){
    console.log(num2 , "el segundo numero es menor ")
} else{
    console.log(num3, "el tercer numero es menor  ")
} */


/* ejercicio 5  */

/* let persona1 = {
    nombre: "Gabriel",
    edad: 38,
    altura: 190
}

let persona2 = {
    nombre: "Thomas",
    edad: 32,
    altura: 180
}


if ( persona1.altura > persona2.altura){
    console.log(persona1.nombre + " es mas alta que " + persona2.nombre)
}else {persona1.altura < persona2.altura
    console.log(persona2.nombre + " es mas alta que " + persona1.nombre)
}


if(persona1.edad > persona2.edad){
    console.log(persona1.nombre + " es mas grande de edad que "+ persona2.nombre )
}else{
    persona1.edad < persona2.edad
    console.log(persona2.nombre + " es mas grande de edad que "+ persona1.nombre)
} */

/* ejercicio 6  */

/* let nombre = prompt("ingrese tu nombre")
let edad = parseInt(prompt("ingrese su edad"))
let altura = parseInt(prompt("ingrese su altura"))
let vision = parseInt(prompt("ingrese su vision del 1 al 10"))

if (edad >= 18 && altura > 150 && vision >=8  ){
    console.log( nombre," Usted cumple los requisitos minimos para conducir ")
} else {
    console.log(nombre," Usted no cumple con los minimos requisitos para conducir")
} */

/* ejercicio 7  */

/* const miNombre = "Gabriel"

let nombre = prompt("bienvenido, pon tu nombre")
let pase = prompt("tipo de paso (Vip o Normal)")
let tieneEntrada = prompt("¿posee entrada? . -si -no")



if (nombre === miNombre || nombre === "vip" ){
    console.log("¡Bienvenido!" +nombre)

} else if ( tieneEntrada === "si" ){
    let usarEntrada = prompt(nombre+ "Desea usar su entrada? si-no")
    if (usarEntrada === "si"){
        console.log("bienvenido!" +nombre);
    }
} else if (tieneEntrada === "no") {
    let comprarEntrada = prompt("Desea comprar una entrada ? (-si -no)")

    if( comprarEntrada === "si"){
        let dinero = parseInt(prompt("Cuanto dinero tiene disponible?"))
        if(dinero > 1000){
            console.log("Venta exitosa , Bienvenido " + nombre)
        }else{
            console.log("Lo siento, no tiene suficiente dinero")
        }
    } else {
        console.log("Gracias , ¡Hasta luego!")
    }

} */

/* ejercicio 8  */
/* let numeroIncognita = 7; 

// Primer intento
let numeroIngresado = parseInt(prompt("Primer intento: Adivina el número (entre 1 y 10):"))

if (numeroIngresado === numeroIncognita) {
    alert("Ganaste, has adivinado el número en el primer intento.")
} else {
    if (numeroIngresado > numeroIncognita) {
        alert("El número ingresado es mayor, vuelve a intentarlo.")
    } else {
        alert("El número ingresado es menor, vuelve a intentarlo.")
    }

    // Segundo intento
    numeroIngresado = parseInt(prompt("Segundo intento: Adivina el número (entre 1 y 10):"))

    if (numeroIngresado === numeroIncognita) {
        alert("Ganaste, has adivinado el número en el segundo intento.")
    } else {
        if (numeroIngresado > numeroIncognita) {
            alert("El número ingresado es mayor, último intento.")
        } else {
            alert("El número ingresado es menor, último intento.")
        }

        // Tercer intento
        numeroIngresado = parseInt(prompt("Último intento: Adivina el número (entre 1 y 10):"))

        if (numeroIngresado === numeroIncognita) {
            alert("Ganaste, has adivinado el número en el último intento.")
        } else {
            alert("Lo siento, no has adivinado. El número era " + numeroIncognita)
        }
    }
} */
/* ejercicio 9*/

/* let edad = parseInt(prompt("ingresa tu edad"))

if(edad >=0 && edad <=12){
    alert("Eres un intante")
}else if (edad >= 13 && edad <=18){
    alert("Eres un adolecente")
}else if (edad >=19 && edad <=45){
    alert("Eres mayor de edad")
}else if (edad >=45 && edad <=100){
    alert("Usted es un anciano")
}else{
    alert("Tiene usted mas de" + edad +" ?")
}
 */

/* ejercicio 10
let jugador1= prompt("elige jugador1: PIEDRA/PAPEL/TIJERAS")
let jugador2= prompt("elige jugador2: PIEDRA/PAPEL/TIJERAS")
let resultado
if(jugador1 !== "PIEDRA" && jugador1 !== "PAPEL" && jugador1 !== "TIJERAS" || (jugador2 !== "PIEDRA" && jugador2 !== "PAPEL" &&jugador2 !== "TIJERAS")){
    alert("Uno de los jugadores esta haciendo trampa")
}else {
    if (jugador1 === jugador2){
        resultado="empate"
    }else if (
        (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
        (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
        (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
    ){
        resultado ="jugador 1 gana"
    }else {
        resultado="jugador 2 gana"
    }
}

alert("jugador 1 elegio: "+jugador1+ "\n jugador2 eligio;"+jugador2 +"\n\ resultado: " + resultado)
 */

/* ejercicio 11 */
/* let color = prompt("Porfavor , ingrese un color")

    switch (color) {
        case 'blanco':
        case 'negro':
            console.log("Falta de color")
            break;
        case 'verde':
            console.log("El color de la naturaleza")
            break;
        case 'azul':
            console.log("El color del agua")
            break;
        case 'amarillo':
            console.log("El color del sol")
            break;
        case 'rojo':
            console.log("El color del fuego")
            break;
        case 'marron':
            console.log("El color de la tierra")
            break;
        default:
            console.log("Excelente elección, no lo teníamos pensado")
    }
 */


