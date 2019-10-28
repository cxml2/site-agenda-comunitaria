const mongoose = require("mongoose");
const Atividade = require("../model/Atividade");

module.exports = class AtividadeController {

    static inserir(req, res) {
        const { nome, data, descricao } = req.body;

        if (valid.isEmpty(nome, { ignore_whitespace: true }) || valid.isEmpty(data, { ignore_whitespace: true }) ||
            valid.isEmpty(descricao, { ignore_whitespace: true })) {
            alert("Nenhum campo pode estar vazio");
        }else{
            Atividade.verificar(req.body)
            .then(ativ => {
                if (!ativ) {
                    Atividade.inserir(req.body);
                    req.session.login = nome
                    res.redirect('/' + nome)
                } else {
                    res.render('Principal', { Erro: 'Atividade já cadastrada' })
                }
            })
        }
    }
}
