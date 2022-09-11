var numbers = [1,2,3,4,5,6,7,8,9,3.4,56.7];
//1. get element by index
var second = numbers[1];
console.log(second);
console.log(numbers[3]);
//2. set elememnt value by index
numbers[3] = 44;
console.log(numbers);

//3. findex index of an element
var positionIndex = numbers.indexOf(8);
console.log(positionIndex);
console.log(numbers.indexOf(6));