const express =require('express');
const mongoose  =require ('mongoose');
const bodyParser  =require ('body-parser');
const setupRoutes  =require('./routes/routes')
const cors =require('cors')

const start = async () => 
{
    try 
    {
        await mongoose.connect("mongodb://localhost:27017/employee-database", 
        {   useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true});
        
        const app = express()

        app.use(cors())

        app.use(bodyParser.json())

        setupRoutes(app)

        const port = process.env.PORT || 5000

        app.listen(port)
        
    } catch (error) 
    {
        console.error(error);
    }

}

start();







