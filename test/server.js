const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/user');
const express = require('express');
const app = express();
require('dotenv').config();


mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    ()=>{
        console.log('Database Connected...')
    }
);

app.use(express.json());
app.use('/api/users', users);



app.listen(process.env.PORT, ()=>{
    console.log(`App is running on port ${process.env.PORT}`)
});