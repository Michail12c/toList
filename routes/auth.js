const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const config = require('../config')


 router.post('/register',
[
  check('text', 'Невірний ввід данних').isLength({min: 3}),
  check('password', 'Мінімальна довжина паролю 6 символів').isLength({min: 6})
],
async (req, res) => {
   try{
     const errors = validationResult(req)
     
     if(!errors.isEmpty()){
       return res.status(400).json({
         errors: errors.array(),
         message: 'Некоректні дані при реєстрації'
       })
     }
 
     const { text, password } = req.body
     
     const candidate = await User.findOne({ text })
  
     if(candidate){
       return res.status(400).json({message: 'Такий користувач вже існує'})
     }
     const hashedPassword = await bcrypt.hash(password, 12)
     const user = new User({text, password: hashedPassword})
     await user.save()
     res.status(201).json({message: 'Користувач створений'})
    
   }catch(e){
     res.status(500).json({message: "Error..."})
   }
})


router.post('/login', 
[
  check('text', 'Введіть корректний пароль чи email').exists(),
  check('password', 'Введіть корректний пароль чи email').exists()
],
async(req, res) => {
  try{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некоректні дані при логінізації'
      })
    }
   
    const {text, password} = req.body
    const user = await User.findOne({ text })

    if(!user){
     return  res.status(400).json({message: 'Користувач не знайдений'})
    }
   
    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
      return res.status(400).json({message: 'Невірні дані'})
    }
    const token = jwt.sign(
      {userId: user.id},
       config.SESSION_SECRET, 
      {expiresIn: '1h'}
    )
    
   res.json({token, userId: user.id})
  }catch(e){
    res.status(500).json({message:"Error..."})
  }
}) 

module.exports = router