var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs');

router.get('/api', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/apidashboard', function(req, res, next) {
    console.log(res.send('respond with a resource'));
});

module.exports = router;
