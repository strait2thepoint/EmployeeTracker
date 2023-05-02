const inquirer = require('inquirer');
const { menuQuestion, addDepartmentQs, addRoleQs, addEmployeeQs, updateEmployeeRoleQs } = require("./questions")
const sequelize = require("./config/connection")
const asciiArt = `
╔═══╗─────╔╗──────────────╔═╗╔═╗─────────────────
║╔══╝─────║║──────────────║║╚╝║║─────────────────
║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║─
╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝─
───────║║──────╔═╝║─────────────────────╔═╝║─────
───────╚╝──────╚══╝─────────────────────╚══╝─────`;
console.log(asciiArt);

async function menu() {
    var { action } = await inquirer.prompt(menuQuestion, addDepartmentQs, addRoleQs, addEmployeeQs, updateEmployeeRoleQs)
    console.log(action)
    switch (action) {
        case "View all departments":
            viewDepartments()
            break;
        case "View all roles":
            viewRoles()
            break;
        case "View all employees":
            viewEmployees()
            break;
        case "Add a department":
            addDepartment()
            break;
        case "Add a role":
            addRole()
            break;
        case "Add an employee":
            addEmployee()
            break;
        case "Update an employee role":
            updateEmployeeRole()
            break;
        default:
            process.exit(0)
            break;
    }
}

const viewDepartments = async () => {
    console.log("viewDepartments")
    const [results, metadata] = await sequelize.query("SELECT * FROM department");
    console.log(results)
    menu()
}

const viewRoles = async () => {
    console.log("viewing roles")
    const [results, metadata] = await sequelize.query('SELECT * FROM role');
    console.log(results)
    menu()
}

const viewEmployees = async () => {
    console.log("viewing employees")
    const [results, metadata] = await sequelize.query('SELECT * FROM employee');
    console.log(results)
    menu()
}

const addDepartment = async () => {
    try {
        const answers = await inquirer.prompt(addDepartmentQs)
        const [results, metadata] = await sequelize.query(`INSERT INTO department (department_name) VALUES ("${answers.dept_name}")`);
        console.log(results)
        menu()
    } catch (error) {
        console.log(error)
    }
};

const addRole = async () => {
    try {
        const answers = await inquirer.prompt(addRoleQs)
        const [results, metadata] = await sequelize.query(`INSERT INTO role (title, salary) VALUES ("${answers.role_title}", "${answers.role_salary}")`);
        console.log(results)
        menu()
    } catch (error) {
        console.log(error)
    }
};

const addEmployee = async () => {
    try {
      const answers = await inquirer.prompt(addEmployeeQs)
      const [results, metadata] = await sequelize.query(`INSERT INTO employee (first_name, last_name) VALUES ("${answers.employee_first_name}", "${answers.employee_last_name}")`);
      console.log(results)
        menu()
    } catch (error) {
      console.log(error)
    }
  };
  
 async function updateEmployeeRole () {
    try {
      const answers = await inquirer.prompt(updateEmployeeRoleQs)
      const [results, metadata] = await sequelize.query(`
        UPDATE employee
        SET role_id = ${answers.new_role_id}
        WHERE employee_id = "${answers.select_employee}"
      `);
      console.log(results)
        menu()
    } catch (error) {
      console.log(error)
    }
  };
 
menu()