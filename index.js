const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const UsuarioController = require('./src/controller/UsuarioController');
const AtividadeController = require('./src/controller/AtividadeController');
const IndexController = require('./src/controller/IndexController');

app.set('views', path.join(__dirname, 'src/view'));

app.use(session({
    secret: 'super secret session key',
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    if(req.session && req.session.login) {
        res.redirect('/home/'+ req.session.login);
    } else {
        res.render('Login')

    }         
});    

app.get('/home/:login', (req, res) => IndexController.index(req, res)); 

app.get('/atividade', (req, res) => AtividadeController.buscar(req, res));

app.post('/salvarAtividade', (req,res) => AtividadeController.inserir(req,res));

app.post('/cadastrou', (req, res) => UsuarioController.cadastro(req, res))

app.get('/logou', (req, res) => UsuarioController.login(req, res))

app.get('/sair', (req, res) => UsuarioController.sair(req, res))

app.get('/atividade/view/:id', (req, res) => AtividadeController.view(req, res));

app.listen(3000);
