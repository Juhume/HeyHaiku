const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const haikuSchema = new Schema({
  name:  String ,
  line1: String,
  line2: String,
  line3: String,
  creatorId: { type: Schema.Types.ObjectId, ref: 'User'},
}, {
  timestamps: true,
});

const Haiku = mongoose.model('Haiku', haikuSchema);

module.exports = Haiku;