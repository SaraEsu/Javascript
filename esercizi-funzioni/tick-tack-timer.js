/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/


/* let input_number=prompt(`Inserisci un numero `);
let i=input_number-1;
while(i>=0){
  alert(i);
  i--;
}
 */

let input_number=prompt(`Inserisci un numero `);

for(let i=input_number-1;i>=0;i-- ){
  alert(i);
}


