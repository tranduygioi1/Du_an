const express = require('express')
const bodyParser = require('body-parser')
var app = express()
const POST = 4400

app.get('/', (req, res, next)=>{
    res.send('Hello')
})

app.get('/register', (req, res, next)=>{
    res.send('Mơi ban dang nhap')
})


app.listen(POST, () => {
    console.log('Start Server')
})