let client = require('mongodb').MongoClient;

module.exports = class Atividade{

    static conectar(){
        client.connect('mongodb://localhost:27017/Agenda',
        {useNewUrlParser: true})
        .then((client) => {
            let db = client.db('Agenda');
            return db.collection('atividades')
        }).catch((err) => {throw err})
    }

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

    static buscarId(q){
        return client.connect('mongodb://localhost:27017/Agenda',
            { useNewUrlParser: true })
            .then((client) => {
                let db = client.db('Agenda');
                console.log(q);
                return db.collection('atividades')
                    .findOne( {_id : q}).then((atividade) => {
                        console.log(atividade);
                    });
                                
            }).catch((err) => { throw err })
    }

    static listar(){
        return client.connect('mongodb://localhost:27017/Agenda',
            { useNewUrlParser: true })
            .then((client) => {
                let db = client.db('Agenda');
                return db.collection('atividades')
                .find({});
            }).catch((err) => { throw err })
    }
}