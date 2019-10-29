const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const UsuarioController = require('./src/controller/UsuarioController');
const AtividadeController = require('./src/controller/AtividadeController');
const IndexController = require('./src/controller/IndexController');

app.set('views', path.join(__dirname, 'src/view'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());


app.get('/', (req, res) => res.render('Login'));

app.get('/home', (req, res) => IndexController.index(req, res)); 

app.get('/atividade', (req, res) => AtividadeController.buscar(req, res));

app.post('/salvarAtividade', (req,res) => AtividadeController.inserir(req,res));

app.post('/cadastrou', (req, res) => UsuarioController.cadastro(req, res))

app.get('/logou', (req, res) => UsuarioController.login(req, res))

app.get('/atividade/view/:id', (req, res) => AtividadeController.view(req, res));

app.get('/usuario/view/:id', (req, res) => UsuarioController.view(req, res));

app.listen(3000);
