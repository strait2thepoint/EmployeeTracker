const inquirer = require('inquirer');
const { menuQuestion, addDepartmentQs } = require("./questions")
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
    var { action } = await inquirer.prompt(menuQuestion)
    console.log(action)
    switch (action) {
        case "View all departments":
            viewDepartments()
            break;
        case "View all roles":
            viewRoles()
            break;
        case "Add a department":
            addDepartment()
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

``
const viewRoles = async () => {
    console.log("viewing roles")
    menu()
}

const addDepartment = async () => {
    try {
        const answers = await inquirer.prompt(addDepartmentQs)
        const [results, metadata] = await sequelize.query(`INSERT INTO department (department_name) VALUES ("${answers.dept_name}")`);
        viewDepartments()
    } catch (error) {
        console.log(error)
    }
}



































menu()