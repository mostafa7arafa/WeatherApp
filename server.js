// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express= require('express');
// Start up an instance of app
const app= express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port=8000;
//function appears when server runs.
const server= app.listen(port, ()=> console.log(`Server is running at port: ${port}`));

//Get Route

app.get('/all',(req,res)=>{
    res.send(projectData);
})

//Post Route

app.post('/addFeel', (req,res)=>{
    newEntry={
        date: req.body.date,
        temp: req.body.temp,
        feeling: req.body.feeling
    }
    projectData={...projectData,...newEntry};
    console.log(projectData);
    res.send(projectData);
});