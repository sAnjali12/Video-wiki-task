const express = require('express');
const app = express();

const registeration = require('./routes/registeration');
app.use("/",registeration)

app.listen(8000,() =>{
    console.log("listining 8000....");
});