var database = require('../database/config')

function listar() {
    var instrucao = `
        SELECT * FROM Ranking order by acertos desc;
    `
    return database.executar(instrucao)
}

module.exports = {
    listar
}