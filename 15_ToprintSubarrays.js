// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     const subarray = arr.slice(i, j + 1);
//     console.log(subarray);
//   }
// }

function printSubarrays(array) {
  const subarrays = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      const subarray = array.slice(i, j + 1);
      subarrays.push(subarray);
    }
  }
  return subarrays;
}
const array = [1, 2, 3];
const subarrays = printSubarrays(array);
console.log(subarrays);

