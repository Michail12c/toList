const {Router} = require('express')
const router = Router()
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')
const User = require('../models/User')
const config = require('../config')
const Todo = require('../models/Todo') 
const {check, validationResult} = require('express-validator')

const transporter = nodemailer.createTransport(sendgrid({
  auth: { api_key: config.SENDGRID_API_KEY }
}))

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
  check('todo', 'Введіть завдання').isLength({min: 1, max: 30}).withMessage('Довжина назви мінімально 1, максимально 30 символів'),
  check('comment').isLength({ max: 30}).withMessage('Довжина коментара мінімально 1, максимально 30 символів')
],
async (req, res) => {
  try{
   const errors = validationResult(req)
   if(!errors.isEmpty()){
     return res.status(422).json({message: errors.array()[0].msg})
   }

    const {todo, comment, typeTodo, priority} = req.body 
    const candidateTodo = await Todo.findOne({todo})
    if(candidateTodo){
      return res.status(400).json({message: 'Таке завдання вже існує'})
    }

    const userId = req.params.id
    const prevPriority = priority 
    const newTodo = new Todo({todo, comment, typeTodo, priority, prevPriority, userId, date: Date.now()})
    await newTodo.save()
    res.status(201).json({message: 'Завдання додано'})
  }catch(e){
    res.status(500).json({message: "Error..."})
  }
})


router.post('/send', 
 [
   check('first_name').isLength({min: 1, max: 15}).withMessage('Мінімальна довжина імені 1 а максимальна 15 символів.'), 
   check('last_name').isLength({min: 1, max: 15}).withMessage('Мінімальна довжина імені 1 а максимальна 15 символів.'),
   check('email').isEmail().withMessage('Введіть email.'),
   check('text').isLength({min: 1, max: 150}).withMessage('Мінімальна довжина повідомлення 1 а максимальна 150 символів.')

 ] ,
 async (req, res) => {
  const {first_name, last_name, email, text} = req.body; 
  try {
    const errors = validationResult(req); 
    if(!errors.isEmpty()){
      return res.status(422).json({message: errors.array()[0].msg})
    }
    await transporter.sendMail({
      to: config.EMAIL_TO,
      from: config.EMAIL_FROM,
      subject: 'Лист від користувача',
      html: `
       <h3>Повідомлення з сайту</h3>
       <p>Від користувача: ${first_name + ' ' + last_name}</p>
       <p>${text}</p>
       <p> Електронна адреса відправника ${email}</p>
      ` 
    })
    res.status(200).json({message: 200})
  } catch (error) {
    res.status(500).json({message: error})
  }
})

router.put('/update', async (req, res) => {
  try{
    const {name, priority} = req.body 
     if(priority === '4'){
      const prevPriority = await Todo.findOne({todo: name}) 
      const todo = await Todo.updateOne({todo: name}, {priority: prevPriority.prevPriority, changeDate: ''})
      return res.status(200).json({message: 'Зміну відміненно'})
     }
    const todo = await Todo.updateOne({todo: name}, {priority: '4', changeDate: Date.now()})
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