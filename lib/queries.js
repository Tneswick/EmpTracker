const viewEmpsQ = `SELECT employee.first_name AS First, employee.last_name AS Last, role.title AS Title, role.department_id, department.name AS Department, role.salary AS Salary, employee.manager_id AS Manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
JOIN role ON role.salary = role.id`

const getEmpsQ = `SELECT * FROM employee`

const addEmpQ = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES (?,?,?,?)`

const updateEmpQ = `UPDATE employee
SET role_id = ?
WHERE id = ?`

const viewRolesQ = `SELECT title AS Title, salary AS Salary, department.name AS Department
FROM role
JOIN department
ON role.department_id = department.id;`

module.exports = { 
    viewEmpsQ,
    addEmpQ,
    getEmpsQ,
    updateEmpQ,
    viewRolesQ
};