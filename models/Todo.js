const {Schema, model, Types} = require('mongoose')

const todoList = new Schema({
  todo: {
    type: String,
    required: true
  },
  comment: {
    type: String
  },
  typeTodo: {
    type: String,
    required: true
  },
  prevPriority: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },

  changeDate:{
    type: Date,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})



module.exports = model('Todo', todoList )