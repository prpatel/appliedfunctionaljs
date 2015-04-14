var _ = require('underscore');
var array1 = [12, 12, 14, 14, 10, 9, 16];
var array2 = [12, 13, 14, 15, 16, 17, 18];
console.log('example 3a');
console.log(_.uniq(array1));


console.log('example 3b');
console.log(_.range(0, 100, 10));
// console.log(_.range("a", "z"));

console.log('example 3c');
console.log(_.intersection(array1, array2));

console.log('example 3d');
console.log(_.contains(array1, 12));

console.log('example 3e');
console.log(_.max(array1));

console.log('example 3f');
console.log(_.first(array1, 2)); // head or take

console.log('example 3g');
console.log(_.difference(array1, array2));

console.log('example 3h');
console.log(_.rest(array1));
