var connection = require('../config/connection');

var orm = {

    selectAll: function (tableInput, cbResult) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput],
            function (err, result) {
                if (err) throw err;
                console.log(result);
                console.log('%%%%%%%%%%%%%%%%');
                cbResult(result);
            });

    },

    insertOne: function (tableInput, colName1, colName2, colValue1, colValue2, cbResult) {
        var queryString = 'INSERT INTO ?? (??,??) VALUES (?,?)';
        connection.query(queryString, [tableInput, colName1, colName2, colValue1, colValue2], function (err, result) {
            if (err) throw err;
            console.log(result);
            cbResult(result);
        });
    },

    updateOne: function (tableInput, colName, colValue, conditionCol, conditionVal, cbResult) {
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ??=?;';
        connection.query(queryString, [tableInput, colName, colValue, conditionCol,conditionVal], function (err, result) {
            if (err) throw err;
            console.log(result);
            cbResult(result);
        });

    }

}

module.exports = orm;