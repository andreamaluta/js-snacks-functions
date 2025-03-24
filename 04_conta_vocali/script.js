/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocalCount(string){
    let count = 0;
    let vocal = ["a", "e", "i", "o", "u"];
    for(let i=0; i<string.length; i++){
        for(j=0; j<vocal.length; j++){
            if(string.charAt(i)===vocal[j]){
                count++;
            }
        }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console

let counter = vocalCount(word);
console.log(counter);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)