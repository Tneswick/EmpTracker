const viewEmpsQ = `SELECT * FROM employee`

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

const addRoleQ = `INSERT INTO role(title, salary, department_id)
VALUES (?,?,?)`

const viewDepartmentsQ = `SELECT * FROM department`

const addDepartmentQ = `INSERT INTO department
VALUES (?)`

module.exports = { 
    viewEmpsQ,
    addEmpQ,
    getEmpsQ,
    updateEmpQ,
    viewRolesQ,
    addRoleQ,
    viewDepartmentsQ,
    addDepartmentQ
};