const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ 
    mobileno: {
        type: Number,
        unique: true,
        required: true,
    },
    name: {
        type: String
    },
    email: {
        type: String,
    },
})
const UserModel = mongoose.model('User', UserSchema);

module.exports =  UserModel
