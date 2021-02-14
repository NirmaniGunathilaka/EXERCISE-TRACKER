const mongoose = require('mongoose');

const Schema = mongoose.Schema; //mongoose schema

const userSchema = new Schema({
  username: { //fieldname
    type: String, //validations
    required: true,
    unique: true,
    trim: true,//trim spaces
    minlength: 3
  },
}, {
  timestamps: true, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;