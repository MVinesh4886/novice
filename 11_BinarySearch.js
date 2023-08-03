function BinarySearch(sortedArr, target){
    let left = 0
    let right = sortedArr.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        let midVal = sortedArr[mid]
        if(midVal===target){
            return mid
        }else if(midVal < target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return -1
}               //  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
const sortedArr = [10,22,34,43,56,61,72,82,96,100]
console.log(BinarySearch(sortedArr, 72))
