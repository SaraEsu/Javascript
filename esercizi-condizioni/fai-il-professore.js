/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

let v= prompt(`Inserisci il voto`,'');
let giudizio='';

if(v<18*1){
  giudizio='insufficiente';
}
else if(18 <= v && v < 21){
  giudizio='sufficiente';
}
else if(21 <= v && v< 24){
  giudizio='buono';
}
else if(24 <= v && v< 27){
  giudizio='distinto';
}
else if(27 <= v && v< 30){
  giudizio='ottimo';
}
else if (v==30){
  giudizio='eccellente';
  break;
}


alert(`Il giudizio è ${giudizio}`);