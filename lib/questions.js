const db = require('../db/connection')

function getRoles() {
    db.query('SELECT * FROM role', (err, rows) => {
        let roles = [];
        for (let i = 0; i < rows.length; i++) {
            const role = rows[i].title;
            roles.push(role)
        }
        return roles;
    })
}

function getEmps() {
    db.query('SELECT * FROM employee', (err, rows) => {
        let emps = []
        for (let i = 0; i < rows.length; i++) {
            const first = rows[i].first_name;
            const last = rows[i].last_name;
            const fullName = first + ' ' + last;
            emps.push(fullName)
        }
        return emps;
    })
}

const menu = [{
    type: 'list',
    name: 'res',
    message: "What would you like to do?",
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
}]

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
        choices: getRoles()
    },
    {
       type: 'list',
       name: 'manager',
       message: "Who is the employee's manager (if they have one)?",
       choices: getEmps()
    }
]

// getRoles();
module.exports = {
    menu,
    addEmp
};