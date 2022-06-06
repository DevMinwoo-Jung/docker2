const mysql = require("mysql")
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'minwoo',
    database: 'myapp'
})
exports.pool = pool

// db 생성!! 