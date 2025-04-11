const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
  notes: { type: String },
});

module.exports = mongoose.model('Doctor', doctorSchema);
