function cadastrar() {
    let username = iusernameCad.value
    let senha = isenhaCad.value
    let confirmsenha = iconfirmSenhaCad.value

    if (senha != confirmsenha) {
        alertError.innerHTML = 'Senhas não coincidem'
    } else if (senha.length < 6) {
        alertError.innerHTML = 'Senha muito pequena. Mínimo de 6 caracteres'
    } else if (username.length < 6) {
        alertError.innerHTML = 'Nome de usuário muito pequeno. Mínimo de 6 caracteres'
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
            console.log('Resposta: ', res)
            if(res.ok){
                setTimeout(() => {
                    window.location = 'quiz.html'
                }, 2000);
            }else{
                throw('Erro')
            }
        }).catch(function(res){
            console.log('Erro: ', res)
        })
        console.log('cadastrado')
        return false;
    }

}