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


app.get('/', function(req, res){
    res.render('Login');
});

app.get('/atividade', (req, res) => AtividadeController.buscar(req, res));

app.get('/inserirAtividade', function(req, res){
    res.render('AdicionarAtividade');
});

app.get('/home', function(req, res){
    IndexController.index(req, res);
}); 

app.post('/salvarAtividade', (req,res) => AtividadeController.inserir(req,res));

app.post('/cadastrou', (req, res) => UsuarioController.cadastro(req, res))

app.get('/logou', (req, res) => UsuarioController.login(req, res))

// app.get('/agenda', function(req, res){
//     res.render('Atividade');
// });

app.listen(3000);
