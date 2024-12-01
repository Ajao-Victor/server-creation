const express = require('express');
const bodyParser = require('body-parser');
const { log } = require('console');
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.get('/path:id' , (req,res) => {
    // console.log(req.query);
    // console.log(req.header);
    // ':id' will be added for the param method to function and if consoled the parameter of the url(inside postman url) will be displayed
    console.log(req.params);
    res.status(404).send('not found')

})
app.listen(3040)
// most used properties of request are
//req.param
//req.query...just like the search in the url
//req.header
//req.body