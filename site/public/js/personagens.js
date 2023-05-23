var descricoes = {
    'Ori': 'Ori é o personagem principal de ambos os jogos.'
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
            }, 300);
        })
    });
})