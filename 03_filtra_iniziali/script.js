/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// function selectLetter(arr, letter){
//     let letterArr = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i].charAt(0).toLowerCase()===letter.toLowerCase()){
//             letterArr.push(arr[i]);
//         }
//     }
//     return letterArr;
// }

let selectLetter = (arr, letter) => {
    let letterArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i].charAt(0).toLowerCase()===letter.toLowerCase()){
            letterArr.push(arr[i]);
        }
    }
    return letterArr;
}

// Invoca la funzione qui e stampa il risultato in console
let finalLetterArr = selectLetter(names, "A");
console.log(finalLetterArr);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]