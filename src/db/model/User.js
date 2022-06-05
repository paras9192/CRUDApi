const validator = require('validator');
const mongoose = require('mongoose');

const employee = mongoose.model('employee',
    {
        name:
        {
            type:String,
            require: true
            
        },
        age: {
            type:Number,
            require: true,
            max:[90,"Age can't be more than 90"]
        }
    }

)

module.exports = employee