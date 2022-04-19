const menu = {
    type: 'list',
    name: 'res',
    message: "What would you like to do?",
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
}

const addEmp = [
    {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?"
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ["Salesperson", "Software Engineer", "Customer Service", "Legal Team Lead", "Lawyer", "Lead Engineer", "Lead Salesperson", "CEO", "Lead Manager"]
    },
    {
       type: 'list',
       name: 'manager',
       message: "Who is the employee's manager (if they have one)?",
       choices: ["James Fraser", "Jack London", "Robert Bruce", "John Doe", "Bruce Wayne", "None"]
    }
]

const updateEmp = [
    {
        type: 'number',
        name: 'empId',
        message: 'Type the number that corresponds to the employee you are trying to update:'  
    },
    {
        type: 'list',
        name: 'roleName',
        message: "Choose what the employee's new role will be:",
        choices: ['Salesperson', 'Software Engineer', 'Customer Service', 'Legal Team Lead', 'Lawyer', 'Lead Engineer', 'Lead Salesperson']
    }
]

const addRole = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this new role?'
    },
    {
        type: 'number',
        name: 'salary',
        message: 'What is the salary associated with this role? (if it was $50k, you would enter it as: 50000.00)'
    },
    {
        type: 'list',
        name: 'department',
        message: 'What department does this new role belong to?',
        choices: ['Sales', 'Engineering', 'Service', 'Legal', 'Administration']
    }
]

const addDepartment = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this new department?'
    }
]
module.exports = {
    menu,
    addEmp,
    updateEmp,
    addRole,
    addDepartment
};