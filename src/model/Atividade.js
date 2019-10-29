let client = require('mongodb').MongoClient;

module.exports = class Usuario{

    static inserir(q){

        return client.connect('mongodb://localhost:27017/Agenda',
        {useNewUrlParser: true})
        .then((client) => {
            let db = client.db('Agenda');
            return db.collection('atividades')
                .insertOne({
                nome: q.nome,
                data: q.data,
                descricao: q.descricao
                })
        }).catch((err) => {throw err})
        
    }

    static deletar(q){

        return client.connect('mongodb://localhost:27017/Agenda',
        {useNewUrlParser: true})
        .then((client) => {
            let db = client.db('Agenda');
            return db.collection('atividades')
                .deleteOne({
                nome: q.nome,
                data: q.data,
                descricao: q.descricao
                })
        }).catch((err) => {throw err})
        
    }

    static verificar(q){
        return client.connect('mongodb://localhost:27017/Agenda',
        {useNewUrlParser: true})
        .then((client) => {
            let db = client.db('Agenda');
            return db.collection('atividades')
                .findOne({ $or: [ {nome: q.nome},
                                  {data: q.data},
                                  {descricao: q.descricao }
                                ]})
        }).catch((err) => {throw err})
    }

    static buscar(q){
        return client.connect('mongodb://localhost:27017/Agenda',
            { useNewUrlParser: true })
            .then((client) => {
                let db = client.db('Agenda');
                return db.collection('atividades')
                    .find(  {nome : new RegExp(`^${q.nomeBusca}`, 'i')                                       
                }).toArray();
                
            }).catch((err) => { throw err })
    }
}