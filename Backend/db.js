const mongoose = require('mongoose');

const mongooseURI = "mongodb://localhost:27017/awaizon";

const connectToMongo = ()=>{
    mongoose.connect(mongooseURI , ()=>{
        console.log("Mongoose connection is successfull");
    })
}

module.exports = connectToMongo;