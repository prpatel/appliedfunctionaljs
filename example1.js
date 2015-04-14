var _ = require('underscore');

var sessionStartTimes = [12, 13, 14, 8, 10, 9, 16];

console.log('example1a');
_.each(sessionStartTimes, function(sessionStartTime) {
  console.log(sessionStartTime);
});


console.log('example1b');
var beforeNoon = [], noon = 12;
beforeNoon = _.select(sessionStartTimes, function(sessionStartTime){ return sessionStartTime < noon;});
console.log(beforeNoon);
