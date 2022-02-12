//COLOCANDO FUNÇÕES NA PÁGINA FÓRUM:

//Função para alterar o texto em rosa quando passa o mouse por cima, incluindo "//" no texto de Novos Jogadores
function njOver(obj) {
    obj.innerHTML = "// Novos Jogadores"
}
//Função para alterar o texto em rosa quando tira o mouse de cima, tirando o "//" no texto de Novos Jogadores
function njOut(obj) {
    obj.innerHTML = "Novos Jogadores"
}

//Função para alterar o texto em rosa quando passa o mouse por cima, incluindo "//" no texto de Guias
function guOver(obj) {
    obj.innerHTML = "// Guias"
}
//Função para alterar o texto em rosa quando tira o mouse de cima, tirando o "//" no texto de Guias
function guOut(obj) {
    obj.innerHTML = "Guias"
}

//Função para alterar o texto em rosa quando passa o mouse por cima, incluindo "//" no texto de Preciso de Ajuda
function ajOver(obj) {
    obj.innerHTML = "// Preciso de Ajuda"
}
//Função para alterar o texto em rosa quando tira o mouse de cima, tirando o "//" no texto de Preciso de Ajuda
function ajOut(obj) {
    obj.innerHTML = "Preciso de Ajuda"
}

//Função para alterar o texto em rosa quando passa o mouse por cima, incluindo "//" no texto de Arte, Música & História
function arOver(obj) {
    obj.innerHTML = "// Arte, Música & História"
}
//Função para alterar o texto em rosa quando tira o mouse de cima, tirando o "//" no texto de Arte, Música & História
function arOut(obj) {
    obj.innerHTML = "Arte, Música & História"
}

//Função para alterar o texto em rosa quando passa o mouse por cima, incluindo "//" no texto de Criações de Fãs, Vídeos & Streams
function crOver(obj) {
    obj.innerHTML = "// Criações de Fãs, Vídeos & Streams"
}
//Função para alterar o texto em rosa quando tira o mouse de cima, tirando o "//" no texto de Criações de Fãs, Vídeos & Streams
function crOut(obj) {
    obj.innerHTML = "Criações de Fãs, Vídeos & Streams"
}

//Função para alterar o texto em rosa quando passa o mouse por cima, incluindo "//" no texto de Recrutamento
function reOver(obj) {
    obj.innerHTML = "// Recrutamento"
}
//Função para alterar o texto em rosa quando tira o mouse de cima, tirando o "//" no texto de Recrutamento
function reOut(obj) {
    obj.innerHTML = "Recrutamento"
}

//Função para alterar o texto em rosa quando passa o mouse por cima, incluindo "//" no texto de Discussão Geral
function diOver(obj) {
    obj.innerHTML = "// Discussão Geral"
}
//Função para alterar o texto em rosa quando tira o mouse de cima, tirando o "//" no texto de Discussão Geral
function diOut(obj) {
    obj.innerHTML = "Discussão Geral"
}

function validaForm() {
    //Validação do user do Valorant
    var user = formulario.user.value;
    if (user == "") {
        alert("Ei, você esqueceu de preencher o username do Valorant!");
        return false;
    }

    //Validação do E-mail
    var email = formulario.email.value;
    if (email == "") {
        alert("Ops, parece que faltou preencher o E-mail!");
        return false;
    }

    //Validação do user do Discord
    var discord = formulario.discord.value;
    if (discord == "") {
        alert("Não esqueça de informar o username do Discord!");
        return false;
    }

    //Validação do elo
    var elo = formulario.elo.value;
    if (elo == "") {
        alert("Ei, faltou dizer seu elo!");
        return false;
    }

    //Validação do campo Turno
    var total_opcoes = formulario.turno.length;
    var opcao = null;
    for (var i = 0; i < total_opcoes; i++) {
        if (formulario.turno[i].checked == true) {
            opcao = formulario.turno[i].value;
        }
    }
    if (opcao == null) {
        alert("Ops, ainda está faltando o turno que você joga!");
        return false;
    }

    var twitch = formulario.twitch.value;
    if (twitch == "") {
        alert("Não esqueça de indicar seu user na Twitch!");
        return false;
    }

    var assunto = formulario.assunto.value;
    if (assunto == "") {
        alert("Por favor, preencha o assunto da mensagem!");
        return false;
    }

    var mensagem = formulario.mensagem.value;
    if (mensagem == "") {
        alert("Não deixe de escrever uma mensagem!");
        return false;
    }

    //Validação das senhas digitadas
    var senha = formulario.senha.value;
    var rsenha = formulario.rsenha.value;
    if (senha == "") {
        alert("Ei, você precisa preencher a senha!");
        return false;
    } else if (rsenha == "") {
        alert("Faltou você preencher a repetição da senha!");
        return false;
    } else if (senha != rsenha) {
        alert("Ops, senhas incompatíveis, digite novamente!");
        return false;
    }

    //Validação do campo Declaro ser maior de 18 anos
    var maior = formulario.maior_idade.checked;
    if (maior != true) {
        alert("Ei, este conteúdo é para maiores de 14 anos! Assinale o campo da confirmação de idade, por favor!");
        return false;
    }

    //Validação do campo Digite um número entre 1 e 10
    var num = formulario.num.value;
    if (num <= 1 || num >= 10) {
        alert("Erro! O número deve ser de 1 a 10.");
        return false;
    }

    //Caso tudo esteja correto
    formulario.submit();

}