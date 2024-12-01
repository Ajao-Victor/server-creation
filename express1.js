const express = require('express');
const bodyParser = require('body-parser');
// Body-parser is a middleware used to grab and parse the body from postman and help parse it into the application mostly so that req.body can be used

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//the first parameter is the pathname of the file
app.get('/' , (req,res) => {
    res.send('getting root')
})
app.get('/AJStackProfile' , (req,res) => {
   const user = {
        name : 'Jude',
        occupation : 'Data analyst'
    }
    // res.send('EXPRESS LEARNING')
    res.send(user);
    //in the res.send() method both text/html and application/json(such as passing an object) method can be passed into it and they'll be returned appropriately like node.js does by automatically jsin the command json.stringify() method on it without specifying the content-type in the setheader()/writeHead() method like in node 
    
})
app.post('/AJStackProfile' , (req,res) => {
    console.log(req.body);
    res.send('successful')
});
app.listen(3030); 