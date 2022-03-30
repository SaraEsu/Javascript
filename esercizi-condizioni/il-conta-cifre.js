/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
 


let input_number= prompt(`Inserisci un numero da 0 a 9999`);
input_number*1;


if( input_number.length ==1){
  alert(`Output:1 cifra`);

}
else if (input_number.length ==2){
  alert(`Output:2 cifre`);

}

else if( input_number.length ==3) {
  alert(`Output:3 cifre`);

}

else if( input_number.length ==4){
  alert(`Output:4 cifre`);

}

else{
  alert(`Ritenta`);
}