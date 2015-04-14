var _ = require('underscore');

console.log('example 2a');
var sessions = [
        {"id": 30431,
      		"speakerNames": "Neal",
      		"title": "Continuous Delivery Workshop",
      		"endTime": "2014-03-07T14:45:00",
      		"startTime": "2014-03-07T13:15:00",
      		"roomName": "Room 4",
      	}, {
      		"id": 30431,
      		"speakerNames": "Venkat",
      		"title": "Functional Java",
      		"endTime": "2014-03-07T15:45:00",
      		"startTime": "2014-03-07T14:15:00",
      		"roomName": "Room 4",
      	}, {
      		"id": 30431,
      		"speakerNames": "Pratik",
      		"title": "Reactjs",
      		"endTime": "2014-03-07T16:45:00",
      		"startTime": "2014-03-07T15:15:00",
      		"roomName": "Room 4",
      	}];

var names = _.pluck(sessions, 'speakerNames');
console.log(names);

console.log('example 2b');
var names = _.map(sessions, function(value){
  return "Session Name: " + value.title;
});
console.log(names);

console.log('example 2c');
var names = _.reduce(sessions, function(memory, element){
  // console.log('This memory:' + memory);
    return memory + ", " + element.title;
}, "Here is your schedule: ");

console.log(names);
