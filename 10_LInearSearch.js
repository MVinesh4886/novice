/*function linearSearchIndexOf(arr,target){
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]===target){
    //         return i;
    //     }
    // }
    // return -1;
    return arr.indexOf(target);
}
const arr = ["pizza", "cheese", "burger", "cutlet"]
console.log(linearSearchIndexOf(arr,'cheese'));*/

/*function linearSearchIncludes(arr,target){
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]===target){
    //         return true
    //     }
    // }
    // return false
    return arr.includes(target)
}
const arr = ["pizza", "cheese", "burger", "cutlet"]
console.log(linearSearchIncludes(arr,'cheese'))*/

function linearSearchFind(arr,target){
    // for(let i=0; i<arr.length; i++){
    //     if(target(arr[i])===true){
    //         return arr[i]
    //     }
    // }
    // return undefined
    return arr.find(target)
}
const arr = ["pizza", "cheese", "burger", "cutlet"]
console.log(linearSearchFind(arr, arr=> arr==="curd"))