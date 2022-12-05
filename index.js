// Write your solution in this file!
var employee={};

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    employee.name = 'Sam';
    employee.streetAddress = '11 Broadway';
    var newEmpl={...employee};
    employee['streetAddress'];
 
    return newEmpl;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(employee, key)
{
   const newEmployee = {...employee};
   delete newEmployee.name;
   return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee.name;
    return employee;
}