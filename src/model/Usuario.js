let client = require('mongodb').MongoClient;

module.exports = class Usuario {

    static inserir(q) {

        return client.connect('mongodb://localhost:27017/Agenda',
            { useNewUrlParser: true })
            .then((client) => {
                let db = client.db('Agenda');
                return db.collection('usuarios')
                    .insertOne({
                        nome: q.nome,
                        email: q.email,
                        login: q.login,
                        senha: q.senha
                    })
            }).catch((err) => { throw err })

    }

    static logar(login, senha) {
        return client.connect('mongodb://localhost:27017/Agenda',
            { useNewUrlParser: true })
            .then((client) => {
                let db = client.db('Agenda');
                return db.collection('usuarios')
                    .findOne({ $or: [
                        {login : login},
                        {senha : senha}
                    ]                        
                })
            }).catch((err) => { throw err })
    }

    static verificar(user){
        return client.connect('mongodb://localhost:27017/Agenda',
        {useNewUrlParser: true})
        .then((client) => {
            let db = client.db('Agenda');
            return db.collection('usuarios')
                .findOne({ $or: [ {nome: user.nome},
                                  {email: user.email},
                                  {login: user.login }
                                ]})
        }).catch((err) => {throw err})
    }

}