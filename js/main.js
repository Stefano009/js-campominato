// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
var mines = [0];
var userTries = [0]
var flag = false;
var rndNumber = 0;
var m = 0; //m stands for mines index
var u = 0; //u stands for userTries index
var maxTries = 100 - 16;
function rndGenerator() {
return Math.floor(Math.random() * 100) + 1;
}
console.log(rndGenerator());
// I numeri non possono essere duplicati.
do {
    rndNumber = rndGenerator();
    if(!mines.includes(rndNumber)) {
    mines[m] = rndNumber ;
    m++
    }
}
while (m < 16)
console.log(mines);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
do {
    var userNum = parseInt(prompt("per favore inserisca un numero da 1 a 100"));
    if(!mines.includes(userNum) && !userTries.includes(userNum) && u < maxTries) {
    userTries[u] = userNum ;
    u++
    }
    else if (userTries.includes(userNum)){
        var userNum = parseInt(prompt("per favore inserisca un numero da 1 a 100, il precedente numero era già stato inserito"));
    }
    else if (u == maxTries ) {
        alert("hai visto hai totalizzato il punteggio Massimo: " + userTries.length);
        flag = true
    }
    else{
    flag = true
    alert("mi dispiace hai perso! Hai effettuato un punteggio di: " + (userTries.length));
    }
}
while (u <= maxTries && flag == false)
console.log(userTries);
// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50