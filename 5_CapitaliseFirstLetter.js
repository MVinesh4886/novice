function capitalise(str){
    // const arrWords = str.split(" ");
    // const arrWordCased = []
    // for(let i=0; i<arrWords.length; i++){
    //     const word = arrWords[i];
    //     arrWordCased.push(word[0].toUpperCase()+word.slice(1).toLowerCase())
    // }

  // return arrWordCased.join(" ")

  /*var firstChar = str.charAt(0);

    firstChar = firstChar.toUpperCase();

    return firstChar + str.slice(1);*/
    
    var words = str.split(' ');

    // Loop through each word and capitalize the first character
    for (var i = 0; i < words.length; i++) {
       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Return the string with the first character of each word capitalized
    return words.join(' ');
}

console.log(capitalise("google is the best software ever"))