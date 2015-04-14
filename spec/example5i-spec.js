var _ = require('underscore');

function and(predicates){
  return function(e){
    return _.every(predicates, function(p){return p(e)});
  };
}

function average(nums){
  var total = _.reduce(nums, function(a,b){return a + b}, 0);
  return (nums.length == 0) ? 0 : total / nums.length;
}

function pluckWhere(field, list, conditions){
  var filtered = _.filter(list, and(conditions));
  return _.pluck(filtered, field);
}

var employeeSalaries = _.partial(pluckWhere, 'salary');
var averageSalary = _.compose(average, employeeSalaries);
console.log(averageSalary);

describe("average salary", function () {
  var empls = [
    {name: "Jim", salary: 100, department: 'sales'},
    {name: "John", salary: 200, department: 'sales'},
    {name: "Liz", salary: 120, department: 'IT'},
    {name: "Penny", salary: 30, department: 'Administrative'
    }
  ];

  it("calculates the average salary", function(){
    expect(averageSalary(empls, [
      function(e){return e.salary > 50},
       function(e){return e.department == "sales"}])).toEqual(150);
  });
});
