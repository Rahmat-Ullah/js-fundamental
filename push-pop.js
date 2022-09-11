var numbers = [12, 23, 34, 45, 56, 67, 78, 78.89, 89.09];
// adding an element to existing array
numbers.push(43);

var friends = ['sadman', 'helal', 'santo', 'shontosh'];
friends.push('siyam');
friends.push('shabab');
friends.pop('shabab');
console.log(friends);

var element = friends.pop();
console.log(element);
console.log(friends);

friends.unshift('ratul');
console.log(friends);

friends.shift('ratul');
console.log(friends);