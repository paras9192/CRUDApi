const express = require('express');
const helmet = require('helmet');
require('./src/db/conn')
const employee = require('./src/db/model/User');

const app = express();
const port = process.env.PORT|| 5000;

app.use(express.json())
app.use(helmet())



app.get('/',(req,res)=>
{
    res.send("Hello from the server")
})


app.post("/employee", async(req,res)=>
{
    const new_employee = new employee(req.body);
    try{
             
        await new_employee.save()
        res.status(200).send(new_employee);
        console.log(new_employee);
    }
    catch(e)
    {
        console.log(e);
        res.status(400).send(e);
    }
})

app.get('/employee',async(req,res)=>
{
    try{
        const all_employee = await employee.find();
        res.status(200).send(all_employee);
        }
    catch(e)
    {
       res.status(400).send(e);
    }
})

app.get('/employee/:id',async (req,res)=>
{
    const ids = req.params.id;
    console.log(ids)
    try{
        const s_employee = await employee.find({_id:ids})
        res.status(200).send(s_employee)
    }
    catch(e)
    {
        res.status(404).send(e);

    }
})

app.patch('/employee/:id',async (req,res)=>
{
    const ids = req.params.id;
    console.log(req.body)
    console.log(ids)
    try{

        if(!updated_e)
        {
            res.send("not found")
        }
        else
        {
            const updated_e = await employee.findByIdAndUpdate(ids,{name:req.body.name})
            res.status(200).send(updated_e)
        }
        

    }
    catch(e)
    {
       res.status(400).send(e)
    }
})
app.delete('/employee/:id',async(req,res)=>
{
    const ids = req.params.id
    const deleted = await employee.findByIdAndDelete(ids)
    
    if(!deleted)
    {
        res.send("user not found")
    }
    else{
        res.send("successfully deleted");
    }
})

app.listen(port,()=>
{
    console.log("Listening to the server",{port});
});
