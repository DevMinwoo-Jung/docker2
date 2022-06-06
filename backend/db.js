const mysql = require("mysql")
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'YES',
    database: 'myapp'
})
exports.pool = pool;

// db 생성!!  