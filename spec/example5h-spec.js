var _ = require('underscore');
function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

function Department(employees) {
  this.works = function(employee){
    return _.contains(employees, employee);
  };
}

function and(predicates){
  return function(e){
    return _.every(predicates, function(p){return p(e)});
  };
}

function average(nums){
  var total = _.reduce(nums, function(a,b){return a + b}, 0);
  return (nums.length == 0) ? 0 : total / nums.length;
}

function employeeSalaries(employees, conditions){
  var filtered = _.filter(employees, and(conditions));
  return _.pluck(filtered, 'salary');
}

function averageSalary(employees, conditions){
  return average(employeeSalaries(employees, conditions));
}

describe("average salary", function () {
  var empls = [
    new Employee("Jim", 100),
    new Employee("John", 200),
    new Employee("Liz", 120),
    new Employee("Penny", 30)
  ];

  var sales = new Department([empls[0], empls[1]]);

  it("calculates the average salary", function(){
    expect(averageSalary(empls, [function(e){return e.salary > 50}, sales.works])).toEqual(150);
  });
});
