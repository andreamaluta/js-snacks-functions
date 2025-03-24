/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// function initial(arr){
//     let firstLetter = [];
//     for(let i=0; i<arr.length; i++){
//         firstLetter.push(arr[i].charAt(0));
//     }
//     return firstLetter;
// }

let initial = (arr) =>{
    let firstLetter = [];
    for(let i=0; i<arr.length; i++){
        firstLetter.push(arr[i].charAt(0));
    }
    return firstLetter;
}

// Invoca la funzione qui e stampa il risultato in console

let initialNames = initial(names);
console.log(initialNames);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]