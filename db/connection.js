const mysql2 = require('mysql2')


const db = mysql2.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'company_db'
    }
)

db.connect((err) => {
    if(err) throw err
    console.log("Database Connected")
})

module.exports = db;