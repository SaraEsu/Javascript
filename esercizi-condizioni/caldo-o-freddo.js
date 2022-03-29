/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

let week=[];
/* let week=[10,-2,31,22,15,-6,7]; */


 for(let i=0;i<7;i++){
  week[i] = prompt('Temperatura');
}
/*  console.log(week); */
 alert(week);

let hottest=week[0];
let coldest=week[0];

for(let j=0;j<week.length;j++){
  if (week[j]>hottest){
    hottest=week[j]*1;
  }
  if (week[j]<coldest){
    coldest=week[j]*1;
  }
}

/* console.log(`La giornata più calda è ${hottest}`);  */
alert(`La giornata più calda è ${hottest}`);

/* console.log(`La giornata più fredda è ${coldest}`);  */
alert(`La giornata più fredda è ${coldest}`); 

