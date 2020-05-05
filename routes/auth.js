const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const config = require('../config')



router.post('/register',
[
  check('email', 'Невірний ввід данних').isEmail(),
  check('pasword', 'Ьінімальна довжина паролю 6 символів').isLength({min: 6})
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
     
     const {email, password} = req.body
     const candidate = await User.findOne(email)

     if(candidate){
       return res.status(400).json({message: 'Такий користувач вже існує'})
     }

     const hashedPassword = await bcrypt.hash(password, 12)
     const user = new User({email, password: hashedPassword})
     await user.save()
     res.status(201).json({message: 'Користувач створений'})

   }catch(e){
     res.status(500).json({message: "Error..."})
   }
})


router.post('/login', 
[
  check('email', 'Введіть корректний пароль чи email').normalizeEmail().isEmail(),
  check('pasword', 'Введіть корректний пароль чи email').exists()
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
   
    const {email, pasword} = req.body
    const user = await User.findOne({ email })

    if(!user){
     return  res.status(400).json({message: 'Користувач не знайдений'})
    }
   
    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
      return res.status(400).json({message: 'Невірні дані'})
    }
     
    const token = jwt.sign(
      {userId: user.id},
       config.jwtSecret, 
      {expiresIn: '1h'}
    )

    res.json({token, userId: user.id})
  
  }catch(e){
    res.status(500).json({message:"Error..."})
  }
})

module.exports = router