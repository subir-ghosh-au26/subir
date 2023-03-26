const mongoose = require('mongoose');
const Joi = require('joi');


const User = mongoose.model('User', new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    role:{
        type: String,
        require:true
    }

}));


function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        role: Joi.string()
    })
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;