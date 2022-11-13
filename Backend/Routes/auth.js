const express = require('express');
const Users = require('../Models/Users');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "gell";
const fetchuser = require('../middleware/fetchuser');

// Route 1 : To create a user
router.post('/createuser', [
  body('email', 'Enter a valid email').isEmail(),
  body('pass', 'password should be greater than 5').isLength({ min: 5 }),

], async (req, res) => {
  // If there are errors returns bad request
  const errors = validationResult(req);
  let success = false
  if (!errors.isEmpty()) {
    success = false;
    return res.status(400).json({ success, errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.pass, salt);

  try {
    // Check whether the user exists or not
    let user = await Users.findOne({ email: req.body.email });
    // console.log(user);
    if (user) {
      success = false;
      return res.status(400).json({ error: "Sorry a user with this email already exists " })
    }
    user = await Users.create({
      name: req.body.name,
      email: req.body.email,
      pass: secPass,
      phone: req.body.phone
    })


    const data = {
      user: {
        id: user.id
      }
    }


    const authToken = jwt.sign(data, JWT_SECRET);

    success = true;
    res.json({ success, authToken, user })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some internal Error occured");

  }
})



//Route 2 : To login the user
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('pass', 'This field cannot be left blanked').exists(),

], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, pass } = req.body;
  try {
    let user = await Users.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(pass, user.pass);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })


  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some internal Error occured");

  }
})



//Route 3 : to Get user details
router.post('/getuser', fetchuser, async (req, res) => {

  try {

    let userId = req.user.id;
    const user = await Users.findById(userId).select("-password")
    res.send(user)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// Route 4 : To find a user with its phone number
var tmp;
router.post('/find', async (req, res) => {
  const { phone } = req.body
  try {
  let user = await Users.findOne({ phone });
    if(!user){
      console.log("No User Found");
      res.sendStatus(400)

    }
    else{
    res.send(user);
    tmp = user._id;
    console.log(JSON.stringify(tmp))
    res.send('User Found')
    }
  } catch (error) {
    res.status(500)
  }
})

//Router 5 : To update the password of the user
router.put('/update/:id', async (req, res) => {
  try {
      const { pass } = req.body;
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.pass, salt);    
      console.log(secPass)
      const newDetails = {};
      if (pass) { newDetails.pass = pass }
      
      detail = await Users.findByIdAndUpdate(req.params.id, { $set: newDetails }, { new: true })
      res.json(detail);

  } catch (error) {
      console.error(error)
      res.status(500).send("Some internal Error occured");

  }
})

router.put('/updatetoken/:id',fetchuser, async (req, res) => {
  try {
      const { pass } = await req.body
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(pass, salt);
      console.log("The password is changed " , secPass)
      const newDetails = {};
      if (pass) { newDetails.pass = secPass }
      detail = await Users.findByIdAndUpdate(req.params.id, { $set: newDetails }, { new: true })
      res.json(detail);

  } catch (error) {
      console.error(error)
      res.status(500).send("Some internal Error occured");

  }
})

module.exports = router 