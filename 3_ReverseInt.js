function ReverseInt(n){
    let reversed = n.toString().split('').reverse().join('')
    reversed = parseInt(reversed)

    if(n<0){
        return reversed*-1
    }
    return reversed
}
let n = -12
console.log(ReverseInt(n))