var database = require('../database/config')

function listar() {
    var instrucao = `
        SELECT r.*, u.username FROM Ranking as r join Usuario as u on r.fkUser = u.idUsuario order by 
        acertos desc, tempoJogo limit 5;
    `
    return database.executar(instrucao)
}

function cadastrar(user, acertos, tempoJogo) {
    return database.executar(`
        INSERT INTO Ranking (tempoJogo, acertos, fkUser) VALUES ('${tempoJogo}', ${acertos}, ${user})
    `)
}

function buscarAcertos(idUsuario) {
    return database.executar(`
        select acertos, DATE_FORMAT(dataHora, '%H:%i') as dataHora from Ranking 
            where fkUser = ${idUsuario}
                order by dataHora
                        limit 5;
    `)
}

module.exports = {
    listar,
    cadastrar,
    buscarAcertos
}