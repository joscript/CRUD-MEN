const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors') 
const app = express();

require('dotenv/config');

app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB!')
);


app.listen(3000, () => console.log('Listening on port: 3000'));