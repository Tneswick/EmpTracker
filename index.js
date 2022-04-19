const inq = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

const { menu, addEmp, updateEmp, addRole, addDepartment } = require('./lib/questions');
const { viewEmpsQ, addEmpQ, getEmpsQ, updateEmpQ, viewRolesQ, addRoleQ, viewDepartmentsQ, addDepartmentQ } = require('./lib/queries')
const { parseManager, parseRole } = require('./lib/functions')

console.log(`
/ $$$$$$$$                      /$$$$$$$$                           /$$                          
| $$_____/                     |__  $$__/                          | $$                          
| $$       /$$$$$$/$$$$   /$$$$$$ | $$  /$$$$$$  /$$$$$$   /$$$$$$$| $$   /$$  /$$$$$$   /$$$$$$ 
| $$$$$   | $$_  $$_  $$ /$$__  $$| $$ /$$__  $$|____  $$ /$$_____/| $$  /$$/ /$$__  $$ /$$__  $$
| $$__/   | $$   $$   $$| $$    $$| $$| $$  __/  /$$$$$$$| $$      | $$$$$$/ | $$$$$$$$| $$  __/
| $$      | $$ | $$ | $$| $$  | $$| $$| $$      /$$__  $$| $$      | $$_  $$ | $$_____/| $$      
| $$$$$$$$| $$ | $$ | $$| $$$$$$$/| $$| $$     |  $$$$$$$|  $$$$$$$| $$   $$|  $$$$$$$| $$      
|________/|__/ |__/ |__/| $$____/ |__/|__/       _______/  _______/|__/   __/  _______/|__/      
                       | $$                                                                     
                       | $$                                                                     
                       |__/                                                                     
`)

function start() {
  inq.prompt(menu).then(result => {
    
    if(result.res === 'View All Employees') {
      db.query(viewEmpsQ, (err, rows) => {
        console.table(rows);
        start();
      })
    }
    if(result.res === 'Add Employee') {
      inq.prompt(addEmp).then(res => {
        console.log(res);
        const managerId = parseManager(res.manager)
        const params = [res.firstName, res.lastName, res.role, managerId]

        db.query(addEmpQ, params, (err, result) => {
          if (err) throw err;
          console.log('Employee Added!');
          start();
        })
      })
    }
    if(result.res === 'Update Employee Role') {
      db.query(getEmpsQ, (err, data) => {
        if (err) throw err;
        console.log('--------------------------------------------')
        console.table(data)
      })
      setTimeout(()=> {
        inq.prompt(updateEmp).then(res => {
          const empId = res.empId
          const roleId = parseRole(res.roleName)
          db.query(updateEmpQ, [roleId, empId], (err, res) => {
            if (err) throw err;
            console.log('Employee Role Updated!');
            start();
          })
        })
      }, 1000)
    }
    if(result.res === 'View All Roles') {
      db.query(viewRolesQ, (err, res) => {
        if (err) throw err;
        console.log('--------------------------------------------')
        console.table(res);
        start();
      })
    }
    if(result.res === 'Add Role') {
      inq.prompt(addRole).then(res => {
        const role = res.name
        const salary = res.salary
        const department = res.department

        db.query(addRoleQ, [role, salary, department], (err, res) => {
          if (err) throw err;
          console.log('Role added!')
          start();
        })
      })
    }
    if(result.res === 'View All Departments') {
      db.query(viewDepartmentsQ, (err, res) => {
        if (err) throw err;
        console.log('--------------------------------------------')
        console.table(res);
        start();
      })
    }
    if(result.res === 'Add Department') {
      inq.prompt(addDepartment).then(res => {
        db.query(addDepartmentQ, res.name, (err, res) => {
          if (err) throw err;
          console.log('Department added!');
          start();
        })
      })
    }
    if(result.res === 'Quit') {
      console.log(`----------------------------------
      Thanks for using EmpTracker!
      ----------------------------------`);
    }
  }
)}

start();