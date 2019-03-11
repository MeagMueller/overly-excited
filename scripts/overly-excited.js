// Create an array that contains the words in the sentence


/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/


// Stacked Words
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
        

//         function addExcitement (theWordArray) {
//             let buildMeUp = ""
        
//             for (let i = 0; i < theWordArray.length; i++) {
//                 buildMeUp += theWordArray[i] + " "
//                 console.log(buildMeUp)
//             }
//         }
        
// addExcitement(sentence)



// Some Words Are More Excited Than Others

 /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        // Print buildMeUp to the console

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
        

//         function addExcitement (theWordArray) {
//             let buildMeUp = ""
        
//             for (let i = 0; i < theWordArray.length; i++) {
//                 if((i + 1) % 3 === 0) {
//                     buildMeUp += theWordArray[i] + "! "
//                 } else {
//                     buildMeUp += theWordArray[i] + " "
//                 }
//                 console.log(buildMeUp)
//             }
//         }

// addExcitement(sentence)

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
        

        function addExcitement (theWordArray, symbol) {
            let buildMeUp = ""
        
            for (let i = 0; i < theWordArray.length; i++) {
                if((i + 1) % 3 === 0) {
                    buildMeUp += theWordArray[i] + symbol + " "; 
                } else {
                    buildMeUp += theWordArray[i] + " "
                }
                console.log(buildMeUp)
            }
        }

addExcitement(sentence, "?")

// Add a new argument to the function so that a developer can specify how many times the special character should be added.

