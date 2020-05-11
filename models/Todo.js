const {Schema, model} = require('mongoose')

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
  priority: {
    type: String,
    required: true
  }
})

model.exports = model('Todo', todoList )