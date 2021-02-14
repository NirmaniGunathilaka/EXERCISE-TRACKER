const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {//get all users get request
  User.find() //mongoose method
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
}); //first router or endpoint

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});//create new user using new username

  newUser.save() //save to db 
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; //exporing routers