/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it

*/


const prompt=require('prompt-sync')();


/* let a=1;
let b=2;
let c=3;
let d=4;
let e=5;
let sum=(a+b+c+d+e);
let average=sum/5;

console.log(`somma= ${sum}`);
console.log(`media = ${average}`);

 */


let array=[];



 for(let i=0;i<=4;i++){
  array[i] = prompt('Inserisci un numero: ');
}
 
console.log(array);

let sum=0;

for(let j=0;j<array.length;j++){
  sum+=array[j]*1;
  console.log(sum);
  
}

console.log(`somma= ${sum}`);

let average=(sum/5);

console.log(`media = ${average}`);




