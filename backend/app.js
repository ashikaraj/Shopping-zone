const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv');


const errorMiddleware = require('./middlewares/errors')

dotenv.config({path:'backend/config/config.env'})

app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use(cookieParser())
app.use(fileUpload());

// Setting up cloudinary configuration:


// Import all routes
const products=require('./routes/product');
const auth =require('./routes/auth');
const payment =require('./routes/payment');
const order =require('./routes/order')

app.use('/api/v1',products)
app.use('/api/v1',auth)
app.use('/api/v1',payment)
app.use('/api/v1',order)

// Middleware to handle errors
app.use(errorMiddleware);

module.exports=app;