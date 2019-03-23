// write a function that finds the sum of the two lowest integers in an
// array
let arr = [40, 100, 1, 5, 25, 10];

// Sorted approach
// function sum(arr) {
//   let final;
//   let sorted = arr.sort(function(a, b){return a-b});
//   final = arr[0] + arr[1];
//   return final;
// }
//
// // Iterative approach
// function smallestSum(arr) {
//   let smallest;
//   let second;
//   if(arr[0] < arr[1]) {
//     smallest = arr[0];
//     second   = arr[1];
//   } else {
//     smallest = arr[1];
//     second   = arr[0];
//   }
//   for(let i = 2; i < arr.length; i++) {
//     let current = arr[i];
//     if(current < smallest) {
//       second = smallest;
//       smallest = current;
//     } else if(current < second) {
//       second = current;
//     }
//   }
//   return smallest + second;
// }

// Built in methods approach
function builtInSmallest(arr) {
  let smallest = Math.min(...arr);
  let second = Math.min.apply(null, arr.filter(number => number > smallest));
  return smallest + second;
}

console.log(builtInSmallest(arr));
