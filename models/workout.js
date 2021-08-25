const { model, Schema } = require('mongoose');

const workoutSchema = new Schema({
  name: String,
  subject: String,
  timeCap: Number || String
}, {
  timestamps: true
})


module.exports = model('Workout', workoutSchema)
