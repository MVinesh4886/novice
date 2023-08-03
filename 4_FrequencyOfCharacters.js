/*function charCount(s){
var result = {}
    for(let i=0; i<s.length; i++){
        result[s[i]]>0 ? result[s[i]]++: result[s[i]] = 1
    }
    return result
}

console.log(charCount("google")) */

function maxCharCount(str){
    let charCount = {}
    let maxChar = ""
    let maxCount = 0
    for(let i=0; i<str.length; i++){
        charCount[str[i]]>0? charCount[str[i]]++: charCount[str[i]] = 1
        if(charCount[str[i]]>maxCount){
            maxChar = str[i]
            maxCount = charCount[str[i]]
        }
    }
    return maxChar
}

console.log(maxCharCount("Apple"))

