const mongoose = require("mongoose");
const Atividade = require("../model/Atividade");
const valid = require('validator');
let client = require('mongodb').MongoClient;


module.exports = class AtividadeController {

    static inserir(req, res) {
        const { nome, data, descricao } = req.body;

        if (valid.isEmpty(nome, { ignore_whitespace: true }) || valid.isEmpty(data, { ignore_whitespace: true }) ||
            valid.isEmpty(descricao, { ignore_whitespace: true })) {
            window.alert("Nenhum campo pode estar vazio");
        }else{
            Atividade.verificar(req.body)
            .then(ativ => {
                if (!ativ) {
                    Atividade.inserir(req.body);
                    //req.session.login = nome
                    res.redirect('/' /*+ nome*/)
                } else {
                    res.render('Principal', { Erro: 'Atividade já cadastrada' })
                }
            })
        }
    }

    static buscar(req, res) {
        console.log(req.query + "aa");
        Atividade.buscar(req.query)
        .then(ativ => {
            if(!ativ) {
                res.render('Atividade', {Erro: 'Atividade não encontrada'});
            } else {
                //console.log(ativ);
                res.render('Atividade', {resultado: ativ})
            }
        })
        
    }


}
