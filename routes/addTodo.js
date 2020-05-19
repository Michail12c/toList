const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const Todo = require('../models/Todo') 
const {check, validationResult} = require('express-validator')

router.get('/:id', async (req, res) => {
  try{
    const todo = await Todo.find({userId: req.params.id})
    res.status(201).json({todo})
  }catch(e){
    res.status(500).json({message: "Error..."})
  }
})

router.post('/add/:id',
[
  check('todo', 'Введіть завдання').isLength({min: 1})
],
async (req, res) => {
  try{
    const {todo, comment, typeTodo, priority} = req.body 
    
    const candidateTodo = await Todo.findOne({todo})
    if(candidateTodo){
      return res.status(400).json({message: 'Таке завдання вже існує'})
    }

    const userId = req.params.id
    const prevPriority = priority 
    const newTodo = new Todo({todo, comment, typeTodo, priority, prevPriority, userId})
    await newTodo.save()
    res.status(201).json({message: 'Завдання додано'})
  }catch(e){
    res.status(500).json({message: "Error..."})
  }
})

router.put('/update', async (req, res) => {
  try{
    const {name, priority} = req.body 
     if(priority === '4'){
      const prevPriority = await Todo.findOne({todo: name}) 
      const todo = await Todo.updateOne({todo: name}, {priority: prevPriority.prevPriority})
      return res.status(200).json({message: 'Зміну відміненно'})
     }
    const todo = await Todo.updateOne({todo: name}, {priority: '4'})
    res.status(200).json({message: 'Завдання зміненно'})
  }catch(e){
    res.status(500).json({message: "Error..."})
  }
})

router.delete('/:todo', async(req, res) => {
  try{
    const todo = await Todo.findOne({todo: req.params.todo})
    todo.remove()
    res.status(200).json({message: 'Завдання видалено'})
  }catch(e){
    res.status(500).json({message: "Error..."})
  }
})

module.exports = router