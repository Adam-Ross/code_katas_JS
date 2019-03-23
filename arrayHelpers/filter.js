// filter helper method.

let numbers = ['1234865483268754689653465624397868572675423687687697824563'];

let numArr = numbers[0].split('');

let numberOfFives = numArr.filter(number => {
  return number.match('5');
}).length;

console.log(numberOfFives);

// plucking from an object.

let cars = [
  {make: 'Ford', model: 'F150'},
  {make: 'Chevy', model: 'Silverado'},
  {make: 'Ford', model: 'F250'}
];

let fordCount = cars.filter(car => {
  return car.make = 'Ford';
}).length; 
