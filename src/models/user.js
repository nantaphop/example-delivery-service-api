const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  email: { type: String },
  disabled: { type: Boolean }
})
const model = mongoose.model('User', schema)
module.exports = model
