// Make all them vowels capital!

// function swap(str) {
//   const vowels = {
//     a: 'A',
//     e: 'E',
//     i: 'I',
//     o: 'O',
//     u: 'U'
//   }
//   let final = '';
//   // Iterate through the string, swap vowels.
//   for(let i = 0; i < str.length; i++) {
//     let current = str[i];
//     if(vowels[current]) {
//       current = vowels[current];
//       final += current.toUpperCase();
//     } else {
//       final += current;
//     }
//   }
//   return final;
// }

function swap(str) {
  const vowels = ['a','e','i','o','u'];
  let final = '';
  // Iterate through the string, swap vowels.
  for(let i = 0; i < str.length; i++) {
    let current = str[i];
    if(vowels.includes(current)) {
      final += current.toUpperCase();
    } else {
      final += current;
    }
  }
  return final;
}



console.log(swap('HelloWorld!'));
// console.log(swap("HelloWorld!"),"HEllOWOrld!")
// console.log(swap("Sunday"),"SUndAy")
