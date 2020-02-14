const express = require('express');
const router = express.Router();

const userModel = require('../models/user.js')

router.get('/', (req, res) => {
    User.find({}).then(users => {
        res.render('user/inex', {users})
    })
})
// router.get('/', function(req, res) {
//     let allUsers = userModel.index();
//     res.render('user/index', {users: allUsers})
// });

router.get('/new', function(req, res) {
    res.render('user/new');
});

router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        username: req.body.username
    }).then(() => {
        res.redirect('user')
    })
})

// router.post('/', function(req, res) {
//     let newUser = req.body;
//     userModel.create(newUser);
//     res.send('ok');
// });

// router.get('/:index', function(req, res) {
//     res.render(
//         'user/show',
//         {
//             user: userModel.show(req.params.index)
//         });
// });

router.delete('/', (req, res) => {
    User.findByIdAndDelete(req.params.id).then(() => {
        res.redirect('user/index')
    })
})

// router.delete('/:index', function(req, res) {
//     userModel.delete(req.params.index);
//     res.send('user deleted');

// });

module.exports = router;