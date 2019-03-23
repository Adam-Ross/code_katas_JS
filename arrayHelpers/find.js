// Find is used to search through an array and look for a particular element in an array, will return as soon as found.

let arr = [
  { id: 1, name: 'Jill', weight: 120, age: 24 },
  { id: 2, name: 'Bill', weight: 140, age: 24 },
  { id: 3, name: 'Alex', weight: 150, age: 24 }
];

function getUser(id) {
  if(id > arr.length) return 'not found';
  return arr.find(user => {
    return user.id = id;
  })
}

// let getUser = arr.find(user => {
//   return user.id = 1;
// });

console.log(getUser(4));
