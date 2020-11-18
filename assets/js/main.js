//Chiedi all'utente il cognome
var cognome = prompt("Inserisci il tuo cognome.")

// Forzo l'input del cognome per avere sempre la lettera iniziale maiuscola
var primaLettera = cognome.slice(0,1);
var primaLetteraMaiuscola = primaLettera.toUpperCase();
var restoDelCognome = cognome.slice(1,cognome.length);
cognome = primaLetteraMaiuscola + restoDelCognome.toLowerCase();

//inseriscilo in un array con altri cognomi
listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"]
listaCognomi.push(cognome);

//stampa la lista ordinata alfabeticamente
var listaCognomiSorted = listaCognomi.sort();

for (var i = 0; i < listaCognomiSorted.length; i++) {
  var item = listaCognomiSorted[i];
  var contenutoLista = document.getElementById("lista-cognomi").innerHTML;
  document.getElementById("lista-cognomi").innerHTML = contenutoLista + "<li>" + item + "</li>";
}

//scrivi anche la posizione della lista in cui il nuovo utente si trova
document.getElementById("posizione").innerHTML = "La tua posizione nell'elenco è: " + (listaCognomiSorted.indexOf(cognome) + 1 );