const menuQuestion = [{
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Exit"
    ],
  }]

  const addDepartmentQs = [{
    type: "input",
    name: "dept_name",
    message: "What is the name of the department?"
  }]

  const addRoleQs =[{
    type: "input",
    name: "role_title",
    message: "What is the title of the role?"
  },
  {
    type: "input",
    name: "role_salary",
    message: "What is the salary of this role? (Please enter a numerical value)"
  }]

  const addEmployeeQs =[{
    type: "input",
    name: "employee_first_name",
    message: "What is the employee's first name?"
  },
  {
    type: "input",
    name: "employee_last_name",
    message: "What is the employee's last name?"
  }]

  const updateEmployeeRoleQs =[{
    type: "input",
    name: "select_employee",
    message: "Select employee:"
  },
{
    type: "input",
    name: "new_role",
    message: "What is this employee's new role?"
}]

module.exports ={menuQuestion,addDepartmentQs, addRoleQs, addEmployeeQs, updateEmployeeRoleQs}