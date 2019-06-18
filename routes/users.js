const express = require('express');
const db = require('../models');
const router = express.Router();
const TOKEN = 'dkssudgktlqslek';
// const Op = Sequelize.Op;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async function(req, res) {
  const user = await db.User.findAll({
    where: {
      email: req.body.data.email
    }
  });
  if (user.password == req.body.data.password){
    res.json({state: 1, userId: user.id, token: TOKEN});
  } else {
    res.json({state: 0})
  }
});

router.post('/signin', async function(req, res) {
  await db.User.create({
    name: req.body.data.data.name,
    email: req.body.data.data.email,
    password: req.body.data.data.password,
    age: req.body.data.data.age,
    sex: req.body.data.data.sex,
    // avatar: req.body.data.avatar,
    intro: req.body.data.intro,
    min: req.body.data.min,
    max: req.body.data.max
  }).then( user => {
    res.json(user.toJSON(), {state: 1});
  }).catch( error => {
    console.log(error);
    if (error.name == 'SequelizeUniqueConstraintError') {
      return res.status(422).json({code: 101, message: 'username exists'});
    }
    res.json({err: error.name,state: 0});
  });
});

router.post('/configID', async function(req, res) {
  const user = await db.User.findAll({
    where: {
      email: req.body.data.email
    }
  });
  if (user == ''){
    res.json({state: 0});
  } else {
    res.json({state: 1});
  }
});



module.exports = router;
