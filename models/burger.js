var orm = require('../config/orm');

var burger = {

    all: function(cb){
        orm.selectAll('burgers',function(result) {
            cb(result);
        });
    },

    create: function(col1,col2,val1,val2, cb) {
        orm.insertOne('burgers', col1,col2,val1,val2, function(result){
            cb(result);
        });
    },

    update: function(cols, vals, conditioncol, conditionval, cb){
        orm.updateOne('burgers', cols, vals,  conditioncol, conditionval, function(result){
            cb(result);
        });
    }
};

module.exports = burger;