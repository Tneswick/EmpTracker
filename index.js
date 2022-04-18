const inq = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

const menu = require('./lib/questions');
const { viewEmps, addEmp }= require('./lib/queries')

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

const start = () => {
  inq.prompt(menu).then(result => {
    if(result.res === 'View All Employees') {
      db.query(viewEmps, (err, rows) => {
        console.table(rows);
        start();
      })
    }
    if(result.res === 'Add Employee') {
      inq.prompt(addEmp).then(result => {
        
      })
    }
  }
)}

start();