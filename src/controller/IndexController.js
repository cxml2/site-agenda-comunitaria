const mongoose = require("mongoose");
const Atividade = require("../model/Atividade");

module.exports = class IndexController {

    static index(req, res){
        let semana = new Array(24);
        for(let i = 0; i < semana.length; i++){
            semana[i] = new Array(7);
        }
        for(let i = 0; i < semana.length; i++){
            for(let j = 0; j < semana[i].length; j++){
                semana[i][j] = 'uuu';
            }
        }
        res.render('Principal', {semana: semana});
    }
}