const mysql = require('mysql');
const db = {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'tinder42_db',
    charset  : 'utf8mb4',
    insecureAuth : true
};
var sql = mysql.createConnection(db);
sql.connect(err => {
    if (err) throw err;
});
module.exports = sql;