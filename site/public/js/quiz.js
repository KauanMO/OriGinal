const fases = {
    pergunta: {
        1: 'Qual é o nome da cidade em ruínas que Ori visita em Ori and the Blind Fores?',
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
        1: 'Vale das Corujas',
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
        '1a': 'Caverna dos Cristais',
        '1b': 'Toca do Lobo',
        '1c': 'Cidade das Águias',
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

var seqPerg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], acertos = 0
for (let i = seqPerg.length; i;) {
    rand = Math.random() * i-- | 0
    tmp = seqPerg[rand]
    seqPerg[rand] = seqPerg[i]
    seqPerg[i] = tmp
}

function proximaFase(fase) {
    respostas = document.querySelectorAll('.resposta')

    var seqRespo = [1, 2, 3, 4]
    for (let i = seqRespo.length; i;) {
        rand = Math.random() * i-- | 0
        tmp = seqRespo[rand]
        seqRespo[rand] = seqRespo[i]
        seqRespo[i] = tmp
    }

    respostaA1 = document.querySelector('#resposta' + seqRespo[0])
    respostaA2 = document.querySelector('#resposta' + seqRespo[1])
    respostaA3 = document.querySelector('#resposta' + seqRespo[2])
    respostaA4 = document.querySelector('#resposta' + seqRespo[3])

    pergunta.innerHTML = fases.pergunta[seqPerg[fase]]
    respostaA1.innerHTML = fases.respostaCorreta[seqPerg[fase]]
    respostaA2.innerHTML = fases.respostaErrada[seqPerg[fase] + 'a']
    respostaA3.innerHTML = fases.respostaErrada[seqPerg[fase] + 'b']
    respostaA4.innerHTML = fases.respostaErrada[seqPerg[fase] + 'c']

    respostas.forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.innerHTML == fases.respostaCorreta[seqPerg[fase]]) {
                acertos++
                console.log(acertos)
                proximaFase(fase + 1)
            } else {
                console.log('incorreto')
            }
        })
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    btComecarQuiz.addEventListener('click', () => {
        btComecarQuiz.style.opacity = '0'
        setTimeout(() => {
            btComecarQuiz.style.display = 'none'
        }, 600);
    })
})