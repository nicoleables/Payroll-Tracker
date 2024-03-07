const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  const employees = []; 

    let addEmployee = true;

    while (addEmployee) {
       
        const firstName = prompt('Enter employee first name:');
        const lastName = prompt('Enter employee last name:');
        let salary = prompt('Enter employee salary:');
        salary = isNaN(parseInt(salary)) ? 0 : parseInt(salary);

        const employee = {
            firstName: firstName,
            lastName: lastName,
            salary: salary
        };

        employees.push(employee);

        const continueInput = prompt('Do you want to add another employee? (yes/no)');
        addEmployee = continueInput.toLowerCase() === 'yes';
    }

    return employees; 
};


const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
    
    employeesArray.forEach(employee => {
        totalSalary += employee.salary;
    });

    const averageSalary = totalSalary / employeesArray.length;

    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is: $${averageSalary.toFixed(2)}.`);

}

const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];

    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}


const displayEmployees = function(employeesArray) {
  const employeeTable = document.querySelector('#employee-table');

  employeeTable.innerHTML = '';

  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

addEmployeesBtn.addEventListener('click', trackEmployeeData);