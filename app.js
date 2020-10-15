const express = require("express");
const path = require("path");

const app = express();
const routes=require("./routes/auth.js")
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())
 
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/',routes);
app.get('/signup',routes);
app.post('/signup',routes);

app.get('/login',routes);
app.post('/login',routes);



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});