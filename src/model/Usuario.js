const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioSchema = new UsuarioSchema({
    email:{
        type: String
    },
    senha:{
        type: String
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
