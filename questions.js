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



  module.exports ={menuQuestion,addDepartmentQs}