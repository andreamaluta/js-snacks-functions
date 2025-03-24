/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function timeGreeting(word){
    const hour = new Date().getHours();
    let message;
    if(hour>=0 && hour<=13){
        message = "buongiorno " + word;
    }else if(hour>13 && hour<=17){
        message = "buon pomeriggio " + word;
    }else{
        message = "buonasera " + word;
    }
    return message;
}

// Invoca la funzione qui e stampa il risultato in console

let timeGreet = timeGreeting(name);
console.log(timeGreet);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.