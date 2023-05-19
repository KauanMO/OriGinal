var database = require('../database/config')

function listar() {
    var instrucao = `
        SELECT r.*, u.username FROM Ranking as r join Usuario as u on r.fkUser = u.idUsuario order by 
        acertos desc, tempoJogo limit 5;
    `
    return database.executar(instrucao)
}

function cadastrar(user, acertos, tempoJogo){
    return database.executar(`
        INSERT INTO Ranking (tempoJogo, acertos, fkUser) VALUES ('${tempoJogo}', ${acertos}, ${user})
    `)
}

module.exports = {
    listar,
    cadastrar
}