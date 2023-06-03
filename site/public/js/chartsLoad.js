let primeiroPlot = true
let acertosUser = []
let grafico, chart

document.addEventListener('DOMContentLoaded', () => {
    chart = document.getElementById('acertosChart')

    grafico = new Chart(chart, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Acertos',
                data: [],
            }]
        }
    })

    loadCharts()
})

function loadCharts(){
    fetch('/ranking/listar', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            resposta.json().then((resJson) => {
                posicao = 1
                resJson.forEach(res => {
                    userAtual = document.getElementById(`user${posicao}User`)
                    acertosAtual = document.getElementById(`user${posicao}Acertos`)
                    tempoAtual = document.getElementById(`user${posicao}Tempo`)

                    userAtual.innerHTML = res.username
                    acertosAtual.innerHTML = res.acertos
                    tempoAtual.innerHTML = res.tempoJogo

                    if (res.username == sessionStorage.usuario) {
                        userAtual.parentElement.classList.add('userNoRanking')
                    }

                    posicao++
                });
            })
        }
    })

    fetch(`/ranking/buscarAcertos/${sessionStorage.idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(resposta => {
        if (resposta.ok) {
            resposta.json().then(acertos => {
                acertos.forEach((acerto, index) => {
                    if (acertos.length > 5) {
                        acertosUser.shift()
                    }
                    acertosUser.push({ acertos: acerto.acertos, horario: acerto.dataHora })
                    grafico.data.labels.push(acertosUser[index].horario)
                    grafico.data.datasets[0].data.push(acertos[index].acertos)
                    grafico.update()
                })
            })
        }
    })
}