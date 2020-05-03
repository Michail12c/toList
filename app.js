const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const config = require('./config')


/* app.use(express.urlencoded({extended:true})) */

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

