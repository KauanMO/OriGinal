var rankingModel = require('../models/rankingModel')

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    rankingModel.listar()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(204).send('Nenhum resultado encontrado')
            }
        }).catch(
            (erro) => {
                console.log(erro)
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function cadastrar(req, res) {
    var user = req.body.userServer
    var acertos = req.body.acertosServer
    var tempoJogo = req.body.tempoJogoServer

    rankingModel.cadastrar(user, acertos, tempoJogo)
        .then((resultado) => {
            res.json(resultado)
        }).catch(
            function (erro) {
                console.log(erro)
                console.log('Erro ao cadastrar. erro: ', erro.sqlMessage)
                res.status(500).json(erro.sqlMessage)
            }

        )
}

function buscarAcertos(req, res) {
    var idUsuario = req.params.idUsuario

    rankingModel.buscarAcertos(idUsuario)
        .then(resultado => {
            res.json(resultado)
        }).catch(erro => {
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        })
}

module.exports = {
    testar,
    listar,
    cadastrar,
    buscarAcertos
}