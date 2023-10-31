/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/*const numero1 = parseInt(prompt("inserisci un primo numero da confrontare"))
const numero2 = parseInt(prompt("inserisci un secondo numero da confrontare"))
let maggiore
if(numero1>numero2)
{
  maggiore =  `il numero maggiore  è il numero ${numero1}`
} else if(numero2>numero1) {
  maggiore = `il numero maggiore  è il numero ${numero2}`
}
else {
  maggiore = `i due numeri sono uguali`
}
window.alert(maggiore)*/


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* 
const numero1 = parseInt(prompt("inserisci un primo numero da confrontare"))
const num = 5
let ris 
if(numero1 == num)
{
ris = `i due numeri sono uguali`
}else {
ris = `not equal`
}
window.alert(ris) */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* const numero1 = parseInt(prompt("inserisci numero che secondo te e' divisibile per 5"))
const num = 5
let ris = numero1 % num
if(ris > 0.1)
{
ris = `il numero non e' divisibile per 5`
}else {
ris = `il numero e' divisibile per 5`
}
window.alert(ris) */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
 
/* const numero1 = parseInt(prompt("inserisci un primo numero"))
const numero2 = parseInt(prompt("inserisci un secondo numero"))
const num = 8
let add = numero1+numero2
let sott = numero1-numero2
let ris 
if(numero1 == num || numero2 == num)
{
ris = `uno dei due numeri e' un 8`
}else if(add == num){
ris = `l'addizione tra i due numeri e' 8`
} else if(sott == num){
ris = `la sottrazione tra i due numeri e' 8`
} else {
  ris = `nessuno dei due numeri e' 8, neanche la loro somma o differenza da 8 come risultato`
}
window.alert(ris) */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/*const spedizione = 10
const gratis = 50
let totalShoppingCart = 0 
let costo
const art1 = parseFloat(prompt("inserisci il costo del prodotto numero 1"))
const art2 = parseFloat(prompt("inserisci il costo del prodotto numero 2"))
const art3 = parseFloat(prompt("inserisci il costo del prodotto numero 3"))
const art4 = parseFloat(prompt("inserisci il costo del prodotto numero 4"))
const art5 = parseFloat(prompt("inserisci il costo del prodotto numero 5"))
totalShoppingCart = art1+art2+art3+art4+art5
if(gratis > totalShoppingCart)
{
totalShoppingCart = totalShoppingCart+spedizione
costo = `il costo totale del tuo ordine e' ${totalShoppingCart} (sono inclusi ${spedizione} euro di spedizione)`
}else {
costo = `il costo totale del tuo ordine e' ${totalShoppingCart} (spedizione gratis)`
}

window.alert(costo) */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* 
const spedizione = 10
const gratis = 50
const sconto = 0.2
let totalShoppingCart = 0 
let costo
let art1 = parseFloat(prompt("inserisci il costo del prodotto numero 1"))
let art2 = parseFloat(prompt("inserisci il costo del prodotto numero 2"))
let art3 = parseFloat(prompt("inserisci il costo del prodotto numero 3"))
let art4 = parseFloat(prompt("inserisci il costo del prodotto numero 4"))
let art5 = parseFloat(prompt("inserisci il costo del prodotto numero 5"))
art1 = art1 - (art1*sconto)
art2 = art2 - (art2*sconto)
art3 = art3 - (art3*sconto)
art4 = art4 - (art4*sconto)
art5 = art5 - (art5*sconto)
console.log(art1)
totalShoppingCart = art1+art2+art3+art4+art5
if(gratis > totalShoppingCart)
{
totalShoppingCart = totalShoppingCart+spedizione
costo = `il costo totale del tuo ordine e' ${totalShoppingCart} (sono inclusi ${spedizione} euro di spedizione)`
}else {
costo = `il costo totale del tuo ordine e' ${totalShoppingCart} (spedizione gratis)`
}

window.alert(costo) */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* const numero1 = parseInt(prompt("inserisci un primo numero da riordinare"))
const numero2 = parseInt(prompt("inserisci un secondo numero da riordinare"))
const numero3 = parseInt(prompt("inserisci un terzo numero da riordinare"))
let primo , secondo, terzo = 0 

if(numero1 > numero2)
{
  if(numero1>numero3){
    primo = numero1
    if(numero2>numero3){
      secondo = numero2
      terzo = numero3
      console.log(primo)
      console.log(secondo)
      console.log(terzo)
    } else{
      secondo = numero3
      terzo = numero2
      console.log(primo)
      console.log(secondo)
      console.log(terzo)
    }
  }
  else {
    secondo = numero1
    if(numero2>numero3){
      primo = numero2
      terzo = numero3
      console.log(primo)
      console.log(secondo)
      console.log(terzo)
    } else {
      primo = numero3
      terzo = numero2
      console.log(primo)
      console.log(secondo)
      console.log(terzo)
    }
  }
} else {
  if(numero1>numero3){
    primo = numero2
    secondo = numero1
    terzo = numero3
    console.log(primo)
    console.log(secondo)
    console.log(terzo)
  } else if(numero3>numero2){
    primo = numero3
    secondo = numero2
    terzo = numero1
    console.log(primo)
    console.log(secondo)
    console.log(terzo)
  }
}
window.alert(`l'ordine dei numeri e' ${primo}  ${secondo}  ${terzo}`)
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* let value = prompt("inserisci un valore")
let mess
let x = isNaN(value)
if (x)
{
  mess = "il valore non e' un numero"
}
else
{
  mess = "il valore e' un numero"
}
window.alert(mess) */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* const numero1 = parseInt(prompt("inserisci numero"))
const num = 2
let ris = numero1 % num
if(ris > 0.1)
{
ris = `il numero dispari`
}else {
ris = `il numero e' pari`
}
window.alert(ris) */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me) */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
delete me.lastName
console.log(me) */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
delete me.lastName
me.skills.pop()
console.log(me.skills)
console.log(me) */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* let numeri = []
console.log(numeri)
const numero1 = 1
const numero2 = 2
const numero3 = 3
const numero4 = 4
const numero5 = 5
const numero6 = 6
const numero7 = 7
const numero8 = 8
const numero9 = 9
const numero10 = 10
numeri = [numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10]
console.log(numeri)  */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* let numeri = []
console.log(numeri)
const numero1 = 1
const numero2 = 2
const numero3 = 3
const numero4 = 4
const numero5 = 5
const numero6 = 6
const numero7 = 7
const numero8 = 8
const numero9 = 9
const numero10 = 10
numeri = [numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10]
console.log(numeri)
const num = 9
numeri[num] = 100
console.log(numeri) */
