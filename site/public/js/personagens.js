var descricoes = {
    'Ori': `Ori é o personagem principal de ambos os jogos, sendo um adorável e corajoso espírito guardião da floresta.
    Ori é retratado como um herói valente e determinado, mas também demonstra vulnerabilidade e compaixão ao longo da história.
    Sua jornada é tanto uma busca para salvar sua terra natal quanto uma jornada de auto-descoberta e crescimento pessoal.
    O personagem Ori é conhecido por sua aparência encantadora, movimentos graciosos e design visual impressionante`,
    'Tokk': `Tokk é um estranho e amigável explorador da região conhecida como Niwen, onde se passa a história do jogo.
    Tokk é um habitante da floresta e possui uma aparência única, sendo um ser com traços de pássaro em seu design. Tokk possui uma personalidade alegre e curiosa, sempre pronto para ajudar Ori em sua jornada.
    Tokk é como um guia a Ori e se torna amigo do guardião da floresta`,
    'Opher': `Opher é um comerciante misterioso que pode ser encontrado em várias áreas do jogo.
    Opher é tratado como um ser imponente, sendo conhecido por sua personalidade pragmática e focada em obter lucro.
    O comerciante desempenha o papel de fornecer habilidades e armas a Ori em troca de recursos encontrados pelo mundo.
    Opher também tem um amplo conhecimento sobre a região de Niwen e ajuda Ori a achar o caminho sempre que possível.`,
    'Lupo': `Lupo é um dos comerciantes da terra de Niwen, sendo especializado em vender mapas e fragmentos de chaves para Ori.
    Lupo é conhecido por seu visual peculiar e suas habilidades geolocalizadoras`,
    'Gumo': `Gumo é um dos personagens mais importantes para a história de Ori. 
    Inicialmente Gumo atrapalhou Ori em sua jornada por conta de sua fascinação por luzes, justamente o que Ori necessitava para concluir seus objetivos. Posteriormente Gumo se junta a Ori e Naru e apoia Ori com sua amizade e habilidades de construção`,
    'Kuro': `Kuro é a antagonista principal de Ori And The Blind Forest. É conhecida por seu design surpreendente, sendo uma coruja gigante e poderosa que sofreu grande perda com a destruição de suas crias.
    Por conta de sua grande dor, Kuro age por impulso e busca vingança contra os seres de Niwen, imaginando que a culpa do desequilíbrio da floresta seja deles.
    Mais tarde, Kuro e Ori se conectam emocionalmente e Kuro dá sua vida para salvar Ori, deixando sua única cria, Ku, a seus cuidados.`,
    'Kwolok': `Kwolok é um grande mentor para Ori. Ori ajuda Kwolok a sair de um pantano abandonado, por conta de falta de purificação nas águas de acesso a outras áreas.
    Kwolok também da a Ori habilidades especiais, como a de nadar rapidamente e respirar mais debaixo d'agua.
    Kwolok é uma imagem de paz, segurança e sabedoria na grande e complexa história de Ori.`,
    'Ku': `Ku é uma jovem coruja, filha de Kuro, deixada para viver com Ori, Naru e Gumo. Ela tem uma asa mal desenvolvida, o que a impede de voar posteriormente.
    Durante a história, Ku e Ori desenvolvem uma forte amizade e se tornam companheiros de jornada. Juntos, eles embarcam em uma aventura perigosa para encontrar uma solução para a asa ferida de Ku e ajudá-la a recuperar a capacidade de voar.
    No decorrer da história, Ku e Ori enfrentam muitos desafios, mas sua amizade e apoio mútuo são fundamentais para superar esses obstáculos.`,
    'Shriek': `Ela é uma criatura misteriosa e poderosa, geralmente referida como "a Coruja das Trevas". Shriek é retratada como uma coruja deformada e cega, que vive em solidão e dor.
    Ao longo do jogo, a história de Shriek é revelada, mostrando suas origens trágicas e sua busca por aceitação e compreensão.
    Ela é um ser ferido e solitário, cujas ações são motivadas pela dor e pela busca por um lugar onde ela se encaixe. A história de Shriek envolve temas como empatia, compaixão e reconciliação.
    Shriek é um personagem complexo que representa a luta interna e a busca por redenção.`
}

document.addEventListener('DOMContentLoaded', ()=>{
    personagens = document.querySelectorAll('.personagem')
    tituloChoose = document.getElementById('titulo_choose')
    personagens.forEach(persona => {
        persona.addEventListener('click', ()=>{
            let personaName = persona.id

            persona_choose = document.querySelector('.persona_choose')
            persona_choose.style.opacity = '0'

            setTimeout(() => {
                tituloChoose.innerText = personaName
                tituloChoose.classList.add('escolhido')
                persona_choose.style.background = `
                linear-gradient(90deg, rgba(6, 10, 22, 1) 0%, rgba(6, 10, 22, 0) 75%), url(./assets/${personaName.toLowerCase()}-bg.png)
                `
                persona_choose.style.opacity = '1'

                desc_choose.innerText = descricoes[personaName]
            }, 300);
        })
    });
})