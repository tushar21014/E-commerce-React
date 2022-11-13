const express = require('express');
const Users = require('../Models/Users');
const router = express.Router();
// const Product = require("../Models")


router.get('/',async(req,res) => {
    try {
        console.log("Its working")
        res.status(200).send("Kya kar raha h tu")
    } catch (error) {
        console.error(error)
    }
})
module.exports = router 