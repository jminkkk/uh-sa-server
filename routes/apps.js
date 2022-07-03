var express = require('express');
var router = express.Router();

router.get('/know', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/close', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
