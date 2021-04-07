var startBtn = document.getElementById('startGame');



startBtn.addEventListener('click', function(){

var bombList = []


while ( bombList.length < 16 ){
    var bombNumber = getRndInteger(1, 100);

    if (bombList.includes(bombNumber) == false){
        bombList.push(bombNumber);
    }
}

console.log(bombList);


var userPlaysList = [];

var bombFound = false;

while( bombFound == false && userPlaysList.length < 84){
     var userPlay = parseInt( prompt("inserisci un numero da 1 a 100") );

    console.log("entrato");
    if (bombList.includes(userPlay)){
        bombFound = true;
    } else if ( userPlaysList.includes(userPlay) == false){
        userPlaysList.push(userPlay);
    }
    console.log(userPlaysList);
}

console.log("il tuo punteggio e' " + userPlaysList.length);
})
// funzioni 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }