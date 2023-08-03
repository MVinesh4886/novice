function palindrome(str){
    str = str.toLowerCase();
    
    /*const reversed = str.split('').reverse().join('')
    if(str=== reversed){
        return true
    }else{
        return false 
    }*/
    
    // another way to reverse the string 
    return str === str.split('').reverse().join('')
}
console.log(palindrome('racecar'))
console.log(palindrome('Madam'))
console.log(palindrome('Hello'))