let Usuario = require('../model/Usuario')
var valid = require('validator')

module.exports = class UsuarioController {

    static cadastro(req, res) {
        const{nome, login, email, senha, senha1} = req.body;

        if (valid.isEmpty(nome, { ignore_whitespace: true }) || valid.isEmpty(email, { ignore_whitespace: true }) ||
            valid.isEmpty(login, { ignore_whitespace: true }) || valid.isEmpty(senha, { ignore_whitespace: true }) ||
            valid.isEmpty(senha1, { ignore_whitespace: true })) {
            res.render('Login', { ErroCadastro: 'Nenhum campo pode estar vazio'})
        } else if (!valid.isEmail(email)) {
            res.render('Login', { ErroCadastro: 'E-mail invalido' })
        } else if (senha !== senha1) {
            res.render('Login', { ErroCadastro: 'E-mail invalido' })
        } 
        else if (senha === senha1) {
            Usuario.verificar(req.body)
                .then(user => {
                    if (!user) {
                        Usuario.inserir(req.body);
                        //req.session.login = nome
                        res.redirect('/home' /*+ nome*/)
                    } else {
                        res.render('Login', { ErroCadastro: 'Usuário já cadastrado' })
                    }
                })
        }
    }

    static login(req, res) {

        let { login, senha } = req.query;
        console.log(req.query);

        Usuario.logar(login, senha)
            .then(user => {
                if (valid.isEmpty(login, { ignore_whitespace: true }) || valid.isEmpty(senha,{ ignore_whitespace: true })){
                    res.render('Login', { MensagemErroLogin: 'Campo Vazio' })
                } else if (senha === user.senha) {
                    //req.session.login = user.nome
                    res.redirect('/home' /*+ user.nome*/);
                } else
                    res.render('Login', { MensagemErroLogin: 'Senha errada' })
            })
    }
}