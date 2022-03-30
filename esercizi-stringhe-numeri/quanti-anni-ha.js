/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

let year=prompt (`In che anno siamo? `)
let born=prompt(`In che anno sei nat*?` );
let age=year-born;
let num=100-age;


alert(`Età: ${age} `);
alert(`Anni mancanti ai 100: ${num}`);