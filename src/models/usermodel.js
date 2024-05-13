const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    fullname:{
        type:String
    },
    officeNo:[{
        type:Number
    }],
    homeNo:[{
        type:Number
    }],
    city:{
        type:String
    }
})


module.exports = mongoose.model('contact',userschema);