// arrays, not good, just did it in like 2 minutes.

function findUniq(arr) {
  let arr1 = [];
  let arr2 = [];
  let oddValue = arr[0];
  for(let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if(current !== oddValue) {
      arr1.push(current);
    } else {
      arr2.push(current);
    }
  }
  return arr1.length > 1 ? arr2[0] : arr1[0];
}

// Sorting

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
