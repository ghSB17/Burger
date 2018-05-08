var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.get("/", function( req, res) {
    burger.all(function(data){
        var hbsObject = {
            burgers : data,
        };
        console.log( hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
    burger.create('burger_name', 'devoured',req.body.name, 0,function(result){
        res.json({id:result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    burger.update('devoured', req.body.devoured, 'id',parseInt(req.params.id),  function(result){
        if(result.changedRows===0)
            return res.status(404).end();
        res.status(200).end();
    });
});

module.exports=router;