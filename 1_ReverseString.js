function reverse(str){
    /*const arr = str.split('')
    arr.reverse();
    const result = arr.join('')
    return result */

    // this is another way to reverse a string
    return str.split('').reverse().join('');
}
console.log(reverse("Vinesh"))
// let arr = "Vinesh"
// console.log(reverse(arr))

