document.addEventListener('DOMContentLoaded', () => {
    fetch('/ranking/listar', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            console.log(resposta)
            resposta.json().then((resJson) => {
                posicao = 1
                resJson.forEach(res => {
                    userAtual = document.getElementById(`user${posicao}User`)
                    acertosAtual = document.getElementById(`user${posicao}Acertos`)
                    tempoAtual = document.getElementById(`user${posicao}Tempo`)
                    
                    userAtual.innerHTML = res.username
                    acertosAtual.innerHTML = res.acertos
                    tempoAtual.innerHTML = res.tempoJogo

                    posicao++
                });
            })
        }
    })
})