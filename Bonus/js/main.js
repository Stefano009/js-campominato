// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
var mines = [0];
var userTries = [0]
var flag = false;
var rndNumber = 0;
var x = 0 //variabile livello
var max = difficultyLvl(parseInt(prompt("inserire un numero da 0 a 2 per selezionare una difficoltà"))); // variabile bonus
var m = 0; //m stands for mines index
var u = 0; //u stands for userTries index
var maxTries = max - 16;
var clicks = 0;
// var userNum = parseInt(prompt("per favore inserisca un numero da 1 a " + max));
function rndGenerator() {
return Math.floor(Math.random() * max) + 1;
}
console.log(rndGenerator());
// I numeri non possono essere duplicati.
do {1
    rndNumber = rndGenerator();
    if(!mines.includes(rndNumber)) {      
    mines[m] = rndNumber ;
    m++
    }
}
while (m < 16)
console.log(mines);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// do {
     
//     // if(!mines.includes(userNum) && !userTries.includes(userNum) && u < maxTries) {
//     // userTries[u] = userNum ;
//     // u++
//     // }
//     // else if (userTries.includes(userNum)){
//     //     var userNum = parseInt(prompt("per favore inserisca un numero da 1 a 100, il precedente numero era già stato inserito"));
//     // }
//     // else if (u == maxTries ) {
//     //     alert("hai visto hai totalizzato il punteggio Massimo: " + userTries.length);
//     //     flag = true
//     // }
//     // else{
//     // flag = true
//     // alert("mi dispiace hai perso! Hai effettuato un punteggio di: " + (userTries.length));
//     // } 
//     switch(u <= maxTries){        
//         case !mines.includes(userNum) && !userTries.includes(userNum) && u < maxTries && !isNaN(userNum):
//             userTries[u] = userNum ;
//             u++;
//             break;
//             // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//             // L’utente non può inserire più volte lo stesso numero.
//         case userTries.includes(userNum):            
//             alert("per favore inserisca un numero da 1 a " + max + ", il precedente numero era già stato inserito");
//             break;
//         case isNaN(userNum) == true:
//             alert("per favore inserisca un numero da 1 a " + max + ", il precedente numero era NaN");
//             break;
//         case userNum > 100:
//             alert("per favore inserisca un numero da 1 a " + max + ", il precedente numero non era compreso in questo range");
//             break;
//         case userNum < 1:
//             alert("per favore inserisca un numero da 1 a " + max + ", il precedente numero non era compreso in questo range");
//             break;
//             // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//         case u == maxTries:
//             alert("hai visto hai totalizzato il punteggio Massimo: " + userTries.length);
//             break;
//             // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//         default:
//             flag = true
//             alert("mi dispiace hai perso! Hai effettuato un punteggio di: " + (userTries.length));
//         }
//         if (u <= maxTries && flag == false)
//         userNum = parseInt(prompt("per favore inserisca un numero da 1 a 100"));
        
// // }
// // while (u <= maxTries && flag == false)
// console.log(userTries);
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
function difficultyLvl(x) {
    if(x == 0)
        return 100;
    else if(x == 1)
        return 80;
    else if (x == 2)
        return 50;
    else{
        alert("doveva inserire un numero da 0 a 2, la difficoltà sarà impostata a livello più basso")
        return 100;
        }   
    }
    // creo il campo minato
function minefield(cell) {
    for (let i = 1; i <= cell; i++){
        let cell = `<div id = "cell" onclick = "onClick" data-cell="${i}" class = "cell">${i}</div>`;
        let templateCell = document.createElement('DIV');
        templateCell.classList.add('square');
        templateCell.innerHTML = cell;
        document.getElementById('campo').appendChild(templateCell);
    }

}

document.getElementById('campo').addEventListener('click',
    function(e) {
        console.log(e.target.dataset.cell)
        let element = document.querySelectorAll("[data-cell='" + e.target.dataset.cell + "']");
        let cell = document.getElementById("cell");
        let userCell = e.target.dataset.cell;
        if (mines.includes(parseInt(userCell)) == true) {
        element[0].classList.add("boom");
        alert("you lost!");
        alert("il tuo score è: " + clicks);
        document.getElementById("refresh").className = "d-flex";
        }
        else {
        element[0].classList.add("go");
        onClick();
        }
    }
)
minefield(max);
function onClick() {
    clicks += 1;
    // document.getElementById("onclicks").innerHTML = clicks;
  }