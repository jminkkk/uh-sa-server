var express = require('express');
var router = express.Router();
const path = require('path');
const { Mbti } = require('../models');

router.get('/know', async(req, res, next) => {
    try {
        const mbti = await Mbti.findall();
        res.json(mbti);
    } catch (err){
        console.err(err);
        next(err);
    }
});


router.get('/close', function(req, res, next) {
 //front
});

module.exports = router;
