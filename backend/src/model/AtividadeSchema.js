const mongoose = require("mongoose");


const AtividadeSchema = new mongoose.Schema({
    nome:{
        type: String
    },
    data:{
        type: Date
    },
    descricao:{
        type: String
    }
});

module.exports = mongoose.model("atividades", AtividadeSchema);
