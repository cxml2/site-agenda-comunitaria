let Atividade = require("../model/Atividade");
const valid = require('validator');


module.exports = class AtividadeController {

    
    static inserir(req, res) {
        if(req.session && req.session.login) {
            const {nome, data, descricao} = req.body;
        
            if (valid.isEmpty(nome, { useUnifiedTopology: true }) || valid.isEmpty(data, { useUnifiedTopology: true }) ||
                valid.isEmpty(descricao, { useUnifiedTopology: true })) {
                res.render('Principal', { ErroAtiv: 'Campo não pode ser vazio' })
            } 
            else{
                Atividade.verificar(req.body)
                .then(ativ => {
                    if (!ativ) {
                        Atividade.inserir(req.body);
                        res.redirect('/home/' + req.session.login)
                    } else {
                        res.render('Principal', { ErroAtiv: 'Atividade já cadastrada' })
                    }
                })
            }
        } else {
            res.redirect('/');
        }
    }

    static buscar(req, res) {
        if(req.session && req.session.login) {
            Atividade.buscar(req.query)
            .then(ativ => {
                if(valid.isEmpty(ativ.toString())) {
                    res.render('Atividade', {ErroAtiv: 'Atividade não encontrada'});
                } else {
                    res.render('Atividade', {resultado: ativ})            
                }
            })
        } else {
            res.redirect('/');
        }
        
    }   

    static view(req,res) {
        if(req.session && req.session.login) {
            Atividade.buscarId(req.params.id)
            .then(ativ => {  
                res.render('Atividade', {resultado: ativ})
                console.log(ativ);
            })
        } else {
            res.redirect('/');
        }
    }
}
