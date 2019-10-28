const express = require('express');
const app = express();
const path = require('path');
const UsuarioController = require('./src/controller/UsuarioController');
const AtividadeController = require('./src/controller/AtividadeController');

app.set('views', path.join(__dirname, 'src/view'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'src/static')));

app.get('/', function(req, res){
    res.render('Principal');
});

app.get('/inserirAtividade', function(req, res){
    res.render('AdicionarAtividade');
});

app.post('/inseriu', (resq,res) => AtividadeController.inserir(req,res));

// app.post('/cadastrou', (req, res) => UsuarioController.cadastro(req, res))

// app.get('/logou', (req, res) => UsuarioController.login(req, res))

// app.get('/agenda', function(req, res){
//     res.render('Atividade');
// });

app.listen(3000);
