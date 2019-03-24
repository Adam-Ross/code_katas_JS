// Count the duplicates in an array. Easy enough.

let arr = [1,2,3,4,3,2,1,4,5,4,5,4,5,6,6,6,6,7,8,9,8,7,10];
function duplicates(arr) {
  let arrObj = {};
  let final = [];
  arr.forEach(elem => {
    if(!arrObj[elem]) {
      arrObj[elem] = 1;
    } else {
      arrObj[elem] += 1;
    }
  });

  for(key in arrObj) {
    if(arrObj[key] > 1)
    final.push(key);
  }
  return final;
}

// one loop, kinda messy.

function dup(arr) {
  let arrObj = {};
  let final = [];
  arr.forEach(elem => {
    if(!arrObj[elem]) {
      arrObj[elem] = true;
    } else if(!final.includes(elem)) {
      final.push(elem);
    }
  });
  return final;
}

console.log(dup(arr));
