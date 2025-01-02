const express = require('express');

const app = express();

app.get("/", (req,res) => {
   return res.end("Hello from the home page!")
});

app.get("/about", (req,res) => {
    return res.end("Hello from the about page" + 'hey' + req.query.name)
});

app.listen(8000,()=>{
    console.log("server started")
});