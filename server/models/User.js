const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true},
    password: {
      type: String,
      required: true,
    },
    haikuId: { type: Schema.Types.ObjectId, ref: 'Haiku'},

    // email: {
    //   type: String,
    //   unique: true,
    //   required: true,
    //   lowercase: true,
    //   trim: true,
    // }
  }, 
  {
    timestamps: true
  }

);

const User = mongoose.model('User', userSchema);
module.exports = User;