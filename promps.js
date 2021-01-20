module.exports = {
firstPrompt: {
    type: "list",
    name: "task",
    message: "Make a selection:",
    choices: [
        /* === || VIEW || === */
        "View Employees", // viewEmployee();
        "View Employees by Manager", // viewEmployeeByManager();
        "View Employees by Department", // viewEmployeeByDepartment();
        "View Departments", // viewDepartments();
        "View Roles", // viewRoles();
        "View Department Budget", // viewDepartmentBudget();
        /* === || ADD || === */
        "Add Employee", // addEmployee();
        "Add Department", // addDepartment();
        "Add Role", // addRole();
        /* === || UPDATE || === */
        "Update Employee Role", // updateEmployeeRole();
        "Update Employee Manager", // updateEmployeeManager();
        /* === || REMOVE || === */
        "Remove Employee", // removeEmployees();
        "Remove Department", // removeDepartment();
        "Remove Role", // removeRole();
        /* === || EXIT || === */
        "Exit",