// find all the vowels in a string.
// return an object with the number of vowels in a string.

let str = 'abcdefghijklmnopabcderfgaldfjks'
function findVowels(str) {
  let vowelObj = {};
  let strArr   = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let letter of strArr) {
    if(vowels.includes(letter)) {
      if(!vowelObj[letter]) {
        vowelObj[letter] = 1;
      } else {
        vowelObj[letter] += 1;
      }
    }
  }
  return vowelObj;
}
console.log(findVowels(str));
