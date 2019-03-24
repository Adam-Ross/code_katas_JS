// square every number in an array.
let numbers = '9119';
function squareNumbers(number) {
  let numberArr = number.split('');
  let intArr    = [];
  let final     = '';
  let num;
  numberArr.forEach(number => {
    intArr.push(parseInt(number));
  });
  intArr.forEach(number => {
    num = number**2
    final += num.toString();
  });
  return final;
}

console.log(squareNumbers(numbers));
