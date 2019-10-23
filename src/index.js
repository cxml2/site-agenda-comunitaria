const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('Principal');
})

app.listen(3000);
