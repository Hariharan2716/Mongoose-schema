const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName : {type: String, required: true, unique: true}, //Required filed
  email : {type: String, required: true , unique: true },
  password : {type: String, required: true},
  roles : {type: [String], default: ['user']},

  profile: {
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number, min: 0}
  },
  lastLogin: {type: Date, default: Date.now}

});

const User = mongoose.model('User', userSchema);

module.exports = User;

