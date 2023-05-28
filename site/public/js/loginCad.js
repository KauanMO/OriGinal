function cadastrar() {
    let iusername = iusernameCad.value
    let username = iusername.toLowerCase()
    let senha = isenhaCad.value
    let confirmsenha = iconfirmSenhaCad.value

    if (senha != confirmsenha) {
        alertError[1].innerHTML = 'Senhas não coincidem'
    } else if (senha.length < 6) {
        alertError[1].innerHTML = 'Senha muito pequena. Mínimo de 6 caracteres'
    } else if (iusername.length < 4) {
        alertError[1].innerHTML = 'Nome de usuário muito pequeno. Mínimo de 4 caracteres'
    } else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userServer: username,
                senhaServer: senha
            })
        }).then(function(res){
            if(res.ok){
                popUp.style.right = '1rem'
                popUp.innerHTML = `
                <span>Usuario cadastrado</span>
                <span>Redirecionando...</span>
                `
                setTimeout(() => {
                    popUp.style.right = '-30rem'
                    passarLogin()
                }, 2000);
            }else{
                if(res.statusText == 'Usuario duplicado'){
                    alertError.innerHTML = 'Já existe um usuário com esse username'
                }else{
                    throw(res)
                }
                
            }
        }).catch(function(res){
            console.log('Erro: ', res)
        })

        console.log('cadastrado')
        return false;
    }

}

function entrar(){
    alertError = document.querySelectorAll('#alertError')
    var iusername = iusernameLog.value
    var username = iusername.toLowerCase()
    var senha = isenhaLog.value
    if(iusername == '' || senha == ''){
        console.log('Preencha todos os campos')
        alertError[0].innerHTML = 'Preencha todos os campos'
        return false
    }

    fetch('/usuarios/autenticar', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            userServer: username,
            senhaServer: senha
        })
    }).then((resposta)=>{
        if(resposta.ok){
            console.log(resposta)
            
            resposta.json().then(json =>{
                console.log(json)
                
                sessionStorage.usuario = json.username
                sessionStorage.idUsuario = json.idUsuario

                popUp.style.right = '1rem'
                popUp.innerHTML = `
                <span>Login realizado</span>
                <span>Redirecionando...</span>
                `

                setTimeout(function () {
                    window.location = "quiz.html";
                }, 1000);
            })
        }else{
            console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
        }
    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

let btCadastro = document.querySelector("#btCadastro")

btCadastro.addEventListener("click", passarCadastro = ()=>{
    document.querySelector('.befQuiz').style.opacity = '0'
    document.querySelector('.login').style.opacity = '0'
    setTimeout(() => {
        document.querySelector('.befQuiz').style.display = 'none'
        document.querySelector('.login').style.display = 'none'
        document.querySelector('.loginCad').style.display = 'flex'
        document.querySelector('.cadastro').style.display = 'flex'
    }, 450);
    setTimeout(() => {
        document.querySelector('.loginCad').style.opacity = '1'
    }, 500);
    setTimeout(() => {
        document.querySelector('.cadastro').style.opacity = '1'
    }, 500);
})

document.querySelector('.ri-arrow-left-line').addEventListener('click', passarCadastro)

function passarLogin() {
    document.querySelector('.cadastro').style.opacity = '0'
    document.querySelector('.befQuiz').style.opacity = '0'
    setTimeout(() => {
        document.querySelector('.befQuiz').style.display = 'none'
        document.querySelector('.cadastro').style.display = 'none'
        document.querySelector('.loginCad').style.display = 'flex'
        document.querySelector('.login').style.display = 'flex'
    }, 450);
    setTimeout(() => {
        document.querySelector('.loginCad').style.opacity = '1'
        document.querySelector('.login').style.opacity = '1'
    }, 500);
}