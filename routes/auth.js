var express=require("express");
var routes=express.Router();
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
//const bcrypt=require('bcyptjs');
routes.use(bodyparser.urlencoded({extended:true}));


mongoose.connect('mongodb://localhost:27017/ju', {useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("connected"));


const Schema = mongoose.Schema;

const juschema = new Schema({
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   }
}, { timestamps: true });

const Signup = mongoose.model('Signup', juschema);

routes.get('/',(req,res)=>{
   const params={}
   res.status(200).render('home.pug',params); 
})
routes.get('/signup',(req,res)=>{
   const params={}
   res.status(200).render('signup.pug',params);
})
routes.post('/signup',(req,res)=>{
   var mydata = new Signup(req.body);
   mydata.save().then(() => {
      res.render('/login')
   }).catch(() => {
      res.send("not saved")
   })
   //res.render("login");
})
routes.get('/login',(req,res)=>{
   const params={}
   res.status(200).render('login.pug',params);
})
routes.post('/login',(req,res)=>{
   
   res.render("front");
})
module.exports=routes;