/* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/

//utente sceglie pari o dispari
let evenOrOdd = prompt('write even or odd');
console.log(evenOrOdd);

//utente sceglie un numero da 1 a 5
let userNumber = prompt('write a number from 1 to 5');
console.log(userNumber);

//generare un numero random da 1 a 5 per il computer
let pcNumber = Math.floor((Math.random()* 6)+1);
console.log(pcNumber);

//sommare il numero scelto da utente a quello random del computer

//stabilire se è pari o dispari

//dichiarare chi ha vinto