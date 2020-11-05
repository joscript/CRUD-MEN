const express = require('express');
const mongoose = require('mongoose');

const app = express();


//connect to db
mongoose.connect('mongodb+srv://joscript:password099@rest.q1rui.mongodb.net/rest?retryWrites=true&w=majority', 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB!')
);


app.listen(3000, () => console.log('Listening on port: 3000'))