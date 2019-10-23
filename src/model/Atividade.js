const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AtividadeSchema = new AtividadeSchema({
    nome:{
        type: String
    },
    data:{
        type: Date
    },
    descriçao:{
        type: String
    }
});

module.exports = mongoose.model('Atividade', AtividadeSchema);
