/* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/

//utente sceglie pari o dispari
let evenOrOdd = ('pari'); //prompt('write even or odd');
console.log(evenOrOdd);

//utente sceglie un numero da 1 a 5
let userNumber = (4); //prompt('write a number from 1 to 5');
console.log(userNumber);

//generare un numero random da 1 a 5 per il computer

let pcNumber = randomNumberGenerator(5);

/**
 * Genera un numero casuanle da 0 a random
 */
function randomNumberGenerator(random) {
    let  randomNumber = Math.floor((Math.random() * random) + 1);

    return randomNumber;
}

//let pcNumber = Math.floor((Math.random()* 5)+1);
console.log(pcNumber);

//sommare il numero scelto da utente a quello random del computer
let somNumber = userNumber + pcNumber;
console.log(somNumber);

//stabilire se è pari o dispari
let numberEvenOdd = (somNumber % 2 === 0);

if (numberEvenOdd) {
    result = 'pari';
    console.log('la somma è pari');
    
} else {
    result = 'dispari';
    console.log('la somma è dispari');
}


if(evenOrOdd == result) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}

//dichiarare chi ha vinto