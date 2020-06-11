const Employee = require('../models/employee');


exports.getAllEmployee =  async  function (req,res) {

    const employee = await Employee.find()

    res.send(employee)
}

exports.getEmployeeById =  async  function (req,res) {

    const {id} = req.params

    const employee = await Employee.findById(id)

    if(!employee){
        res.status(404).send("Employee Is Not Found !")
    }
    else
    {
        res.send(employee)
    }
}

exports.addEmployee  =  async  function (req,res) {
    try 
    {
        const {name,email,adress,phone} = req.body
        const newEmployee = new Employee({name,email,adress,phone});

        await newEmployee.save();

        res.status(201).send(newEmployee)

    }
    catch (error) 
    {
        res.status(400).send(error.message)
    }

}

exports.updateEmployee  =  async  function (req,res) {
    try 
    {
        const {id} = req.params

        let employee = await Employee.findById(id)
        
        if(!employee){
            res.status(404).send("Employee Is Not Found !")
        }
        else
        {
            
            employee = await Employee.findOneAndUpdate({_id:id},req.body,{ new: true })
            res.send(employee)

        }   
    }
    catch (error) 
    {
        res.status(400).send(error.message)
    }
}

exports.deleteEmployee  =  async  function (req,res) {

    try 
    {
        const {id} = req.params

        const employee = await Employee.findById(id)
        
        if(!employee){
            res.status(404).send("Employee Is Not Found !")
        }
        else
        {
            await Employee.findOneAndDelete({_id:id})
            res.send({state:true});
        }   
    }
    catch (error) 
    {
        res.status(400).send(error.message)
    }
}