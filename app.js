const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')

const PORT = 5000
const config = require('./config')
const path = require('path')

app.use(express.json())


app.use('/api/auth', authRouter)

app.use(express.urlencoded({extended:true}))

async function start(){
  try{
    await mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  /*  useFindAndModify: false */
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

