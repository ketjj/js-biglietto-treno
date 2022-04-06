
/* calcolare il prezzo totale a base di km e di età.
   
a. chiedere all'utente i km da percorrere e l'età.
b. calcolare il prezzo totale del viaggio.
c. stampare il prezzo finale.


1. inizializzare/dichiarare le variabili
2. creare promt per ottenere le informazioni neccessarie.
3. definire il prezzo definito
4. applicare gli sconti 
5. stampare il prezzo finale 


*/


let numberOfKms = prompt('Inserisci il numero di km da percorrere');
let age = prompt('Inserisci l\'età');

console.log('km:' + numberOfKms);
console.log('Age:'+ age);

const kmPrice = 0.21;

const prezzoDefinito = kmPrice * numberOfKms;

console.log(prezzoDefinito + '€');

let discount = 0

if (age > 65) {
  discount = 40;        

}           
else if (age < 18){
  discount = 20;
}

const prezzoScontato = prezzoDefinito - (prezzoDefinito * discount / 100);

const prezzoScontatoArrotondato = (Math.round(prezzoScontato * 100) / 100).toFixed(2);


console.log(prezzoScontato + ' prezzo scontato');
console.log(prezzoScontatoArrotondato + ' prezzo arrotondato');

// document.getElementById('output').innerHTML = 'Il prezzo del biglietto è: ' + prezzoScontatoArrotondato + '€ (il prezzo è già scontato). ';

const output = 
`
Il prezzo del biglietto è: ${prezzoScontatoArrotondato}€ (il prezzo è già scontato). 
`;

document.getElementById('output').innerHTML = output;