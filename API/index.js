const express = require ('express');
const mongoose=require('mongoose');
const routes=require('.//routes');
const bodyParser=require('body-parser');
const cors=require('cors');
//crear server
const app=express();

//habilito el cors:
app.use(cors());

//conecto a mongodb;
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//habilito el routing
app.use('/',routes());

app.listen(4000,()=>{
    console.log('servidor funcionando')
});