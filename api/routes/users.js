var express = require('express');
var router = express.Router();

const User = require('../models/User.model');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
    .then((userfromDB)=>{
      return res.status(200).json(userfromDB);
    })
    .catch(err => console.log(err));
});

/* Create User. */
router.post('/', function(req, res, next) {
  const { name, surname } = req.body;
  User.create({name, surname})
    .then((user) =>{
      return res.status(200).json(user)
    })
    .catch(err => console.log(err))
});

/* Edit User. */
router.get('/edit/:id', function(req, res, next) {
  const { id } = req.params;
  User.findById(id)
    .then((user) =>{
      return res.status(200).json(user)
    })
    .catch(err => console.log(`Error while editing new user:`, err))
});


router.post('/edit/:id', function(req, res, next) {
  const { id } = req.params;
  User.findByIdAndUpdate(id, req.body , { new : true })
    .then((user) =>{
      return res.status(200).json(user)
    })
    .catch(err => console.log(`Error while editing new user:`, err))
});

/*Delete User*/
router.delete('/:id/', async (req, res, next) => {
  const { id } = req.params;
  try{ 
    const deletePatient = await User.findByIdAndDelete(id)
    return res.status(200).json('patient deleted')
  }
  catch(error){
      next(error)
  } 
})

module.exports = router;
