const mongoose = require('mongoose');

const { Schema } = mongoose;


const userSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'product'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const user = mongoose.model('user', userSchema)
module.exports = user;