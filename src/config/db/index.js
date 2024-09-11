const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1/demo_web_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect thanh cong')
    }catch(error){
        console.log('Connect khong thanh cong')
        
    }
}
module.exports = {connect}
