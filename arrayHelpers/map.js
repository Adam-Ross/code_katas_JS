//Map helper function

let numbers = [1,2,3,4,5];

let squared = numbers.map(number => {
  return number * number;
});

let x3 = numbers.map(number => {
  return number * 3;
});

let x4 = numbers.map(number => {
  return number * 4;
});

console.log(squared);
console.log(x3);
console.log(x4);
