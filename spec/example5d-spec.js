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
    return _.every(predicates, function(predicate){return predicate(e)});
  };
}

function averageSalary(employees, conditions){
  var total = 0, count = 0;
  _.each(employees, function(e){
    if(and(conditions)(e)){
      total += e.salary;
      count += 1;
    }
  });
  return (count === 0) ? 0 : total / count;
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
