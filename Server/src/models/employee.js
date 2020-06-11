const {Schema,model} = require('mongoose')

const employeeSchema = new Schema({
    name:
    {
        type:String,
        unique:true
    },
    email:
    {
        type:String,
        unique:true
    },
    adress:String,
    phone:String,
})
  
module.exports = model('employee',employeeSchema)