
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


const numberOfKms = prompt('Inserisci il numero di km da percorrere');
const age = prompt('Inserisci l\'età');

// prompt mi restituisce la stringa, per questo uso il metodo parsInt che 
// trasforma la stringa/numero in Number type, però utente puo inserire anche una lettera....per questo faccio questo contollino

// isNnan() --> is Not a Number...it will check if an inserted data type is number or not, so u can use it as a condition

if(isNaN(numberOfKms) && isNaN(age)){
  alert('Inserisci solo i numeri')
}

const kmPrice = 0.21;

const prezzoDefinito = kmPrice * numberOfKms;

//applicare lo sconto al prezzoSenzaSconto a base dell'età;
//qua creo una variabile, che lo uso dopo nelle condizioni,così in base dell'età discount sara quello con la condizione vera;

let discount = 0

if (age > 65) {
  discount = 40;        
}           
else if (age < 18){
  discount = 20;
}

const prezzoScontato = prezzoDefinito - (prezzoDefinito * discount / 100);



// document.getElementById('output').innerHTML = 'Il prezzo del biglietto è: ' + prezzoScontatoArrotondato + '€ (il prezzo è già scontato). ';

const output = 'Il prezzo del biglietto è ' + prezzoScontato.toFixed(2) + '£';

document.getElementById('output').innerHTML = output;



// -------------------------------------------------

const age2 = 17;

const distance = 150;
const priceXKm = 0.21;

let price = distance * priceXKm;

if(age2 < 18 ){
  price = price - ((price * 20) / 100)
  //price *= .8  ( price = price * 0.8) ---> procentis gamokleba
  //price *= 1.22 ----> 22% is mimateba
}else if(age2 > 65){
  price = price - ((price * 40) / 100)
  //price *= .8  ( price = price * 0.6)
}



