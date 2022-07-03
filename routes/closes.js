var express = require('express');
var router = express.Router();

router.get('/sinseo', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/balance', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.route('/users')
    .get(function(req, next){
    res.send('sdf');
})
    .post((req, res, next) => {
        res.send('sfd');
});

router.get('/sinseo', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;