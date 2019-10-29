const Atividade = require("../model/Atividade");

module.exports = class IndexController {

    static index(req, res){

        Atividade.listar()
            .then((atividades) => {
                let semana = new Array(24);
                for(let i = 0; i < semana.length; i++){
                semana[i] = new Array(7);
                }

                atividades.forEach(function(ativ){
                    //console.log(ativ);
                    let aux = new Date(ativ.data);
                    //console.log(aux);
                    
                    if(semana[aux.getHours()][aux.getDay()] !== undefined)
                        semana[aux.getHours()][aux.getDay()].push(ativ.nome);
                    else{
                         semana[aux.getHours()][aux.getDay()] = [];
                         semana[aux.getHours()][aux.getDay()].push(ativ);
                    }
                });
                res.render('Principal', {semana: semana}); 
            }).catch((err) => { throw err });
            
               
     }
 
}