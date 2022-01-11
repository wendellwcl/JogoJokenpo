//Array das opcões
let maos = ["pedra", "papel", "tesoura"]

//Variaveis gerais
let mao = ""
let pontosJogador = 0
let pontosAdversario = 0

function jogar(opcao){

    //Registrar opcao selecionada
    mao = opcao

    //sortear mão do adversário
    let maoAdversario = opcaoAdversario()

    //Criar elemento
    let selecionarElementoAdversario = document.getElementById("item-adversario")
    selecionarElementoAdversario.innerHTML = `<img src="img/${maoAdversario}.png" id="item-adversario-img">`

    //Animar
    animar()

    //jogo
    if(mao === maoAdversario){

    } else if(mao === "pedra"){
        if(maoAdversario === "papel"){
            pontosAdversario++
        } else {
            pontosJogador++
        }
    } else if(mao === "papel"){
        if(maoAdversario === "tesoura"){
            pontosAdversario++
        } else {
            pontosJogador++
        }
    } else if(mao === "tesoura"){
        if(maoAdversario === "pedra"){
            pontosAdversario++
        } else {
            pontosJogador++
        }
    }

    //Atualizar placar
    placar()

    //Resetar valor de mao
    mao = ""
}

//sortear mão do adversário
function opcaoAdversario(){
    let x = parseInt(Math.random()*3)
    let opcaoAdversario = maos[x]
    return opcaoAdversario
}

//Criar elemento
function criarElemento(maoAdversario){
    
}

//Placar
function placar(){
    let placarJogador = document.getElementById("pontosJogador")
    placarJogador.innerHTML = pontosJogador
    let placarAdversario = document.getElementById("pontosAdversario")
    placarAdversario.innerHTML = pontosAdversario
}

//Zerar placar
function zerar(){
    pontosJogador = 0
    pontosAdversario = 0
    placar()
}

//Animação
function animar(){
    const itemAdversario = document.getElementById("item-adversario")
    const itemAdversarioImg = document.getElementById("item-adversario-img")
    let deg = 0
    let animation = setInterval(girar, 5);
    function girar(){
        if(deg == 180){
            clearInterval(animation)
            setTimeout(animationDelay, 1000)
        } else {
            deg += 10
            itemAdversario.style.transform = `rotateY(${deg}deg)`
            if(deg > 90){
                itemAdversarioImg.style.opacity = "1"
            }
        }
    }
    function animationDelay(){
        let opacidade = 1
        let animation2 = setInterval(fade, 30)
        function fade(){
            if(opacidade == 0.0){
                clearInterval(animation2)
            } else {
                opacidade -= 0.1
                itemAdversarioImg.style.opacity = opacidade
            }
        }
    } 
}