const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

// Connect MongoDB
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true},() => 
    console.log("Connection to Database Established!")
);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'Database connection error:'));

//Middleware
// app.use(express.json());
//Route Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log("IIP Api Server is Running"));