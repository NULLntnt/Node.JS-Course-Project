const express = require("express");
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override");
const router = require('./routes/routes');

app.use(methodOverride('_method',{methods: ['POST', 'GET']}));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/stdManagement',
        {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', router);
    
app.listen(2000, ()=>console.log('express started'));
    