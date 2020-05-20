const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  text: {
   type: String,
   required: true,
   unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    require: true,
    default: Date.now()
  },
  todo: {
    items: [
     {
       todoId: {
         type: Schema.Types.ObjectId,
         ref: 'Todo',
         required: true
       }
     }
    ]
  }
})


module.exports = model("User", schema)