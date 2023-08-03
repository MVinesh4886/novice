/*function splitIntoChunk(arr,chunk){
    let Chunk = []
    for(let i=0; i<arr.length; i+=chunk){
        let tempArray = arr.slice(i,i+chunk)
        Chunk.push(tempArray)
    }
    return Chunk
}
let arr = [1,2,3,4,5,6,7,8,9,10]
let chunk = 2
console.log(splitIntoChunk(arr,chunk))*/

function splitIntoChunk(arr,chunk){
    let Chunk = []
    while(arr.length>0){
        let tempArray = arr.splice(0,chunk)
        Chunk.push(tempArray)
    }
    return Chunk
}
let arr = [1,2,3,4,5,6,7,8,9,10]
let chunk = 2
console.log(splitIntoChunk(arr,chunk))