const fases = {
    pergunta: {
        1: 'Qual o nome do narrador e mentor de Ori em Ori and the Will of the Wisps?',
        2: 'Qual é o nome do novo personagem jogável introduzido em Ori and the Will of the Wisps?',
        3: 'Qual é o nome do chefe final em Ori and the Blind Forest?',
        4: 'Qual é o nome da raça de criaturas amigáveis que Ori encontra em Ori and the Will of the Wisps?',
        5: 'Qual é o nome da cidade que Ori encontra em Ori and the Will of the Wisps?',
        6: 'Qual é o nome do primeiro vilão encontrado em Ori and the Will of the Wisps?',
        7: 'Qual é o nome do amigo de Ori que ajuda a guiá-lo em Ori and the Blind Forest?',
        8: 'Qual é a habilidade especial de Ori em Ori and the Will of the Wisps?',
        9: 'Qual é o nome da floresta que é o cenário principal de Ori and the Blind Forest?',
        10: 'Qual é o nome do personagem principal em ambos os jogos?'
    }
    ,
    respostaCorreta: {
        1: 'Kwolok',
        2: 'Ku',
        3: 'Kuro',
        4: 'Moki',
        5: 'Niwen',
        6: 'Shriek',
        7: 'Sein',
        8: 'Bash',
        9: 'Floresta de Nibel',
        10: 'Ori'
    }
    ,
    respostaErrada: {
        '1a': 'Gumo',
        '1b': 'Opher',
        '1c': 'Tulei',
        '2a': 'Grom',
        '2b': 'Sein',
        '2c': 'Shriek',
        '3a': 'Gumo',
        '3b': 'Naru',
        '3c': 'The Spirit Tree',
        '4a': 'Kuro',
        '4b': 'Gumo',
        '4c': 'Sein',
        '5a': 'Sherwood',
        '5b': 'Mirkwood',
        '5c': 'Nibel',
        '6a': 'Naru',
        '6b': 'Gumo',
        '6c': 'Kuro',
        '7a': 'Tatsu',
        '7b': 'Grom',
        '7c': 'Ku',
        '8a': 'Glide',
        '8b': 'Grapple',
        '8c': 'Double Jump',
        '9a': 'Floresta de Mirkwood',
        '9b': 'Floresta Amazônica',
        '9c': 'Floresta de Sherwood',
        '10a': 'Gumo',
        '10b': 'Kuro',
        '10c': 'Naru'
    }
}

var seqPerg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], acertos = 0, fase = 0
for (let i = seqPerg.length; i;) {
    rand = Math.random() * i-- | 0
    tmp = seqPerg[rand]
    seqPerg[rand] = seqPerg[i]
    seqPerg[i] = tmp
}

document.addEventListener('DOMContentLoaded', () => {
    respostas = document.querySelectorAll('.resposta')
    btComecarQuiz.addEventListener('click', comecarErecomecar = () => {
        btComecarQuiz.style.opacity = '0'
        btVoltar.style.opacity = '0'
        if(typeof spAcertos == "object"){
            spAcertos.style.opacity = '0'
            document.getElementById('dtRecomecarQuiz').style.opacity = '0'
        }
        setTimeout(() => {
            document.querySelector('.quiz').classList.add('quizComecou')
            btComecarQuiz.style.display = 'none'
            btVoltar.style.display = 'none'
            document.querySelector('#pergunta').style.opacity = '1'
            proximaFase(fase)
            startTimer()
        }, 600);
    })
})

var seqRespo = [1, 2, 3, 4]

function proximaFase(fase) {
    for (let i = seqRespo.length; i;) {
        rand = Math.random() * i-- | 0
        tmp = seqRespo[rand]
        seqRespo[rand] = seqRespo[i]
        seqRespo[i] = tmp
    }

    document.querySelector('.respostas').innerHTML = `
    <button class="resposta" id="resposta1"></button>
    <button class="resposta" id="resposta2"></button>
    <button class="resposta" id="resposta3"></button>
    <button class="resposta" id="resposta4"></button>
    `

    respostaA1 = document.querySelector('#resposta' + seqRespo[0])
    respostaA2 = document.querySelector('#resposta' + seqRespo[1])
    respostaA3 = document.querySelector('#resposta' + seqRespo[2])
    respostaA4 = document.querySelector('#resposta' + seqRespo[3])

    pergunta.innerHTML = fases.pergunta[seqPerg[fase]]
    respostaA1.innerHTML = fases.respostaCorreta[seqPerg[fase]]
    respostaA2.innerHTML = fases.respostaErrada[seqPerg[fase] + 'a']
    respostaA3.innerHTML = fases.respostaErrada[seqPerg[fase] + 'b']
    respostaA4.innerHTML = fases.respostaErrada[seqPerg[fase] + 'c']

    document.querySelector('.respostas').style.display = 'flex'
    setTimeout(() => {
        document.querySelector('.respostas').style.opacity = '1'
    }, 500);

    respostaA1.addEventListener('click', elRespostaCorreta = () =>{
        acertos++
        respostaA1.removeEventListener('click', elRespostaCorreta)
        if(fase+1 != 10){
            proximaFase(fase+1)
        }else{
            finalizarQuiz()
        }
    })

    respostaA2.addEventListener('click', elRespostaErrada = () =>{
        respostaA2.removeEventListener('click', elRespostaErrada)
        if(fase+1 != 10){
            proximaFase(fase+1)
        }else{
            finalizarQuiz()
        }
    })

    respostaA3.addEventListener('click', elRespostaErrada1 = () =>{
        respostaA3.removeEventListener('click', elRespostaErrada1)
        if(fase+1 != 10){
            proximaFase(fase+1)
        }else{
            finalizarQuiz()
        }
    })

    respostaA4.addEventListener('click', elRespostaErrada2 = () =>{
        respostaA4.removeEventListener('click', elRespostaErrada2)
        if(fase+1 != 10){
            proximaFase(fase+1)
        }else{
            finalizarQuiz()
        }
    })
}

function startTimer() {
    spanTimer = document.getElementById('timer')
    spanTimer.style.opacity = '1'

    timerSec = 0
    timerMin = 0

    setInterval(() => {
        if (timerSec < 59) {
            timerSec++
        } else {
            timerMin++
            timerSec = 0
        }
        spanTimer.innerHTML = `${timerMin}:${timerSec}`
    }, 1000);
}

function finalizarQuiz(){
    fetch('/ranking/cadastrar', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            userServer: sessionStorage.idUsuario,
            tempoJogoServer: spanTimer.innerHTML,
            acertosServer: acertos
        })
    }).then(function(res){
        if(res.ok){
            setTimeout(() => {
                var quizElements = document.querySelector('.quiz').children
                for(let i = 0; i< quizElements.length; i++){
                    quizElements[i].style.opacity = '0'
                }
                document.querySelector('.quiz').innerHTML += `
                    <span id='spAcertos'>Você acertou ${acertos} questões!</span>
                    <button id='dtRecomecarQuiz'>Tentar novamente</button>
                `
                setTimeout(() => {
                    spAcertos.style.opacity = '1'
                    document.getElementById('dtRecomecarQuiz').addEventListener('click', comecarErecomecar)
                }, 200);
            }, 300);
            loadCharts()
        }else{
            throw(res)
        }
    }).catch(function(res){
        console.log('Erro', res)
    })
}

btSair.addEventListener('click', ()=>{
    sessionStorage.clear()
    window.location = 'index.html'
})