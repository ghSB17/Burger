//setup MYSQL connection
var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "new_user",
        password: '',
        database: 'burgers_db'
    });
}

//Make connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('connect as id ' + connection.threadId)
});

//Export connection for our ORM to use
module.exports = connection;