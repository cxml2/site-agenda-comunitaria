let Atividade = require("../model/Atividade");
const valid = require('validator');


module.exports = class AtividadeController {


    static inserir(req, res) {
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
                    //req.session.login = nome
                    res.redirect('/home' /*+ nome*/)
                } else {
                    res.render('Principal', { ErroAtiv: 'Atividade já cadastrada' })
                }
            })
        }
    }

    static buscar(req, res) {
        Atividade.buscar(req.query)
        .then(ativ => {
            if(valid.isEmpty(ativ.toString())) {
                res.render('Atividade', {ErroAtiv: 'Atividade não encontrada'});
            } else {
                res.render('Atividade', {resultado: ativ})            
            }
        })
        
    }
}
