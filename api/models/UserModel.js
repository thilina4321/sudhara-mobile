var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserRole = require("../enums/UserRole");

const SALT = 10;

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required!'],
        maxlength: 100
    },
    email: {
        type: String,
        required: [true, 'Email field is required!'],
        unique: true
    },
    username: {
        type: String,
        required: [true, 'Username field is required!'],
        unique: true
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, 'Password field is required!'],
    },
    role: {
        type: String,
        enum: UserRole,
        default: UserRole.CUSTOMER
    },
    
    phone_number: {
        type: String,
        required: true
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

// Saving user data
UserSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('password')) {
        //checking if password field is available and modified
        bcrypt.genSalt(SALT, function (err, salt) {
            if (err) return next(err)
        
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

// For comparing the users entered password with database duing login 
UserSchema.methods.comparePassword = function (candidatePassword, callBack) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callBack(err);
        callBack(null, isMatch);
    });
};

// For generating token when loggedin
UserSchema.methods.generateToken = function (callBack) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), process.env.SECRETE);
    
    callBack(null, token);
};

// Validating token for auth routes middleware
UserSchema.statics.findByToken = function (token, callBack) {
    jwt.verify(token, process.env.SECRETE, function (err, decode) {
        // This decode must give user_id if token is valid .ie decode = user_id
        User.findById(decode, function(err, user) {
            if (err) {
                // res.json({status: false, data: "Invalid User ID"});
                // tempory start
                return res.status(404).json({
                    status: false, 
                    message: "Invalid User ID!", 
                    data: err
                });
                // temporary end
            }

            callBack(null, user);
        });
    });
};

const User = mongoose.model('User', UserSchema);
module.exports = { User }