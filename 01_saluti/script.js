/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function greeting(user){
    let greet = "Ciao " + user;
    return greet;
}

// Invoca la funzione qui e stampa il risultato in console

let hello = greeting(userName);
console.log(hello);

//Risultato atteso se si passa 'Mario': // ciao Mario
