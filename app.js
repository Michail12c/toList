const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')
const session = require('express-session')
const User = require('./models/User')
const authRouter = require('./routes/auth')
const todoRouter = require('./routes/addTodo')

const PORT = process.env.PORT || 5000
const config = require('./config')
const path = require('path')



app.use(express.json({extended: true}))
app.use(helmet())
app.use(compression())


app.use('/api/auth', authRouter)
app.use('/api/todo', todoRouter)

app.use(express.urlencoded({extended:true}))

async function start(){
  try{
    await mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  
  app.listen(PORT, () => {
    console.log(`App has been started on port ${PORT}...`)
  })
  }catch(e){
    console.log('Server error', e.message)
    process.exit(1)
  }
}




start()

