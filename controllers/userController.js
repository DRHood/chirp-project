const express = require('express');
const router = express.Router();

const userModel = require('../models/user.js')

router.get('/', function (req, res){
    res.send(userModel.index());
});
router.get('/new', function(req, res){
    res.send('Hello...')
});
router.post('/', function(req, res){
    let newUser = req.body;
    userModel.create(newUser);
    res.send('ok');
});

module.exports = router;