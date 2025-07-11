//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

alert('Hello, welcome to the bootcamp!');


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

// String
let name = "Ana";
let surname = "Molina";

// Number
let yearOfBirth = 1989;
let currentYear = 2025;
let age = currentYear - yearOfBirth;

// Boolean
let isAdult = age >= 18;

// Null
let favoriteColor = null;

// Undefined
let middleName;

// Object
let person = {
  name: name,
  surname: surname,
  age: age,
  isAdult: isAdult
};

// Array
let hobbies = ["leer", "viajar", "hacer senderismo"];

console.log("Nombre:", name);
console.log("Apellido:", surname);
console.log("Edad:", age);
console.log("¿Es adulto?:", isAdult);
console.log("Color favorito:", favoriteColor);
console.log("Segundo nombre:", middleName);
console.log("Datos personales:", person);
console.log("Pasatiempos:", hobbies);


//OPERADORES ARITMÉTICOS
//Ejercicio 4: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numero1 = 8;
let numero2 = 12;
let suma = numero1 + numero2;

console.log("El resultado de la suma es:", suma);


//Ejercicio 5: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numero1 = 20;
let numero2 = 7;
let resta = numero1 - numero2;

console.log("El resultado de la resta es:", resta);


//Ejercicio 6: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numero1 = 6;
let numero2 = 4;
let multiplicacion = numero1 * numero2;

console.log("El resultado de la multiplicación es:", multiplicacion);


//Ejercicio 7: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero1 = 36;
let numero2 = 6;
let division = numero1 / numero2;

console.log("El resultado de la división es:", division);



//OPERADORES DE COMPARACIÓN
// Ejercicio 8: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let valor1 = 1;
let valor2 = 2;
let comparacion = valor1 < valor2;

console.log("¿Es el primer valor menor que el segundo?:", comparacion);


// Ejercicio 9: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let valor1 = 1;
let valor2 = 2;
let comparacionCorrecta = valor2 > valor1;

console.log("¿Es el segundo valor mayor que el primero?:", comparacionCorrecta);


//Ejercicio 10: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/
let num1 = 15;
let num2 = 20;

let comparacion = num1 < num2;

console.log(comparacion); // true


//Ejercicio 11: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/
let num3 = 1;
let num3AsString = "1";

let result = num3 === num3AsString;

console.log(result); // false


//Ejercicio 12: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/
let num3 = 1;
let num3AsString = "1";

let result2 = num3 == num3AsString;

console.log(result2); // true



//OPERADORES DE CADENAS
//Ejercicio 13: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let nombre = "ana";
let apellido = "molina";
let nombreCompleto = nombre + " " + apellido;

console.log("Nombre completo:", nombreCompleto);



//OPERADORES DE LÓGICA
//Ejercicio 14: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

/* let a = 6;
let b = 3;

let res =  a < 10 __ b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 __ b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 __ b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 __ b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) */
let a = 6;
let b = 3;

let res =  a < 10 && b > 1; // true
console.log(res);

let res2 = a < 10 && b < 1; // false
console.log(res2);

let res3 = a == 5 && b == 5; // false
console.log(res3);

let res4 = a == 6 || b == 0; // true (porque a == 6)
console.log(res4);

let res5 = a == 0 || b == 3; // true (porque b == 3)
console.log(res5);

let res6 = a == 6 && b == 3; // true
console.log(res6);