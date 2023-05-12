var rankingModel = require('../models/rankingModel')

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req,res){
    rankingModel.listar()
    .then((resultado)=>{
        if(resultado.length > 0){
            res.status(200).json(resultado)
        }else{
            res.status(204).send('Nenhum resultado encontrado')
        }
    }).catch(
        (erro)=>{
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        }
    )
}

module.exports = {
    testar,
    listar
}