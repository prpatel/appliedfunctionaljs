var _ = require('underscore');
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

console.log('example 4a');
console.log(_.first(sessions));
console.log('example 4b');
console.log(_.findWhere(sessions, {title: "Reactjs"}));
console.log('example 4c');
console.log(_.keys(sessions[0]));
console.log('example 4d');
console.log(_.values(sessions[0]));
