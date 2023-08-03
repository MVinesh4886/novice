/*function Anagram(stringA, stringB){
    if(stringA.length !== stringB.length){
        return false
    }

    const y = {} // we create an empty object 

    for( let i =0; i<stringA.length; i++){
        let letter = stringA[i] 
        // if letter exists, increment by 1 otherwise set it to 1
        if(y[letter]>0){
            y[letter] +=1
        }
        else{
            y[letter] = 1
        }
    }
    for (let i=0; i< stringB.length; i++){
        let letter = stringB[i]
        // if we can't find letter or letter is zero then it is not an anagram 
        if(!y[letter]){ 
            return false
        }else{
            y[letter] -=1  
        }
    }
    return true
}

let stringA = "love"
let stringB =  "live" //"vole"

console.log(Anagram(stringA, stringB))*/

/*function Anagram(stringA, stringB){
    stringA = stringA.toLowerCase().replace(/[\W_]+/g, "")
    stringB = stringB.toLowerCase().replace(/[\W_]+/g, "")
    if(stringA.length!== stringB.length){
        return false
    }

    const y = {} // we create an empty object 

    for( let i =0; i<stringA.length; i++){
        let letter = stringA[i] 
        // if letter exists, increment by 1 otherwise set it to 1
        if(y[letter]>0){
            y[letter] +=1
        }
        else{
            y[letter] = 1
        }
    }
    for (let i=0; i< stringB.length; i++){
        let letter = stringB[i]
        // if we can't find letter or letter is zero then it is not an anagram 
        if(!y[letter]){ 
            return false
        }else{
            y[letter] -=1  
        }
    }
    return true
}

let stringA = "love"
let stringB =  "/olve!"
console.log(Anagram(stringA, stringB)) */

function Anagram(stringA, stringB){
    stringA = stringA.toLowerCase().replace(/[\W_]+/g, "")
    stringB = stringB.toLowerCase().replace(/[\W_]+/g, "")
    const stringASorted = stringA.split("").sort().join("")
    const stringBSorted = stringB.split("").sort().join("")
    return stringASorted === stringBSorted
}
let stringA = "love"
let stringB =  "velo"
console.log(Anagram(stringA, stringB)) 