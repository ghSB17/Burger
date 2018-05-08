//setup MYSQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    port:3306,
    host: "localhost",
    user:"new_user",
    password:'',
    database:'burgers_db'
});

//Make connection
connection.connect( function(err) {
    if(err) {
        console.error("error connecting: "+err.stack);
        return;
    }
    console.log('connect as id '+connection.threadId )
});

//Export connection for our ORM to use
module.exports = connection;