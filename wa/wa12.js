// Problem 1

var employees = [
    {"firstName":"Sam", "department":"Tech", "designation":"Manager", "salary":"40000", "raiseEligible":"true"},
    {"firstName":"Mary", "department":"Finance", "designation":"Trainee", "salary":"18500", "raiseEligible":"true"},
    {"firstName":"Bill", "department":"HR", "designation":"Executive", "salary":"21200", "raiseEligible":"false"},
    {"firstName":"Anna", "department":"Tech", "designation":"Executive", "salary":"25600", "raiseEligible":"false"} // Problem 3
];

console.log(employees);

// Problem 2

var company = {
    "companyName":"Tech Stars", "website":"www.techstars.site", "employees": employees
};

console.log(company);

// Problem 4

function calculateTotalSalary(company) {
    var totalSalary = 0;
    for (var i = 0; i < company.employees.length; i++) {
    totalSalary += parseInt(company.employees[i].salary);
    }

    return totalSalary;
}
    var companyTotalSalary = calculateTotalSalary(company);
    console.log(companyTotalSalary);

// Problem 5

function giveRaise(company) {
    for (var i = 0; i < company.employees.length; i++) {
      var employee = company.employees[i];
      if (employee.raiseEligible === "true") {
        employee.salary *= 1.1;
        employee.raiseEligible = "false";
      }
    }
  }
  
  giveRaise(company);

// Problem 6

var workingFromHome =  ['Anna', 'Sam'];

for (var i = 0; i < company.employees.length; i++) {
    var employee = company.employees[i];

    if (workingFromHome.includes(employee.firstName)) 
        {employee.wfh = true;
    }  else {
        employee.wfh = false;
    }
}
    
console.log(company);