let arrCoresSorteadas = [],arrResposta = [], pontuacaoAtual = 0, pontuacaoGeral=0,nomeUsuario,tempo = 600,tempoClick = 300

let main = document.querySelector('main')
let red = document.querySelector('div.red')
red.addEventListener("click",function(){verificaResposta(1)
        red.classList.add("red-on")
        setTimeout(function() {
            red.classList.remove("red-on")
        }, tempoClick)
})
let blue = document.querySelector('div.blue')
blue.addEventListener("click",function(){verificaResposta(2)
        blue.classList.add("blue-on")
        setTimeout(function() {
        blue.classList.remove("blue-on")
    }, tempoClick)
})
let green = document.querySelector('div.green')
green.addEventListener("click",function(){verificaResposta(3)
        green.classList.add("green-on")
        setTimeout(function() {
            green.classList.remove("green-on")
        }, tempoClick)
})
let yellow = document.querySelector('div.yellow')
yellow.addEventListener("click",function(){verificaResposta(4)
        yellow.classList.add("yellow-on")
        setTimeout(function() {
            yellow.classList.remove("yellow-on")
        }, tempoClick)
})
let painelPlacar = document.getElementById("placar")
let textoPainel = document.createElement("p")
let buttonAvancar = document.createElement('button')

function criarModal(){
    let div = document.createElement('div')
    div.classList.add('modal')

    let label = document.createElement('label')
    label.innerText = 'Genius'
    label.classList.add('modalLabel')

    let input = document.createElement('input')
    input.placeholder = 'Digite seu nick'
    input.classList.add('modalInput')

    let button = document.createElement('button')
    button.innerText = 'Iniciar'
    button.classList.add('modalButton')

    main.appendChild(div)
    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(button)
}
criarModal()

const button = document.querySelector('.modalButton')
button.addEventListener('click', (e) => {
    const div = document.querySelector('.modal')
    const input = document.querySelector('.modalInput').value
    nomeUsuario = input
    
    if(input === ''){
        alert('Preencha o nick')
    }else{
        div.classList.add('hidden')
        criaPainel(input)
    }
    
    let buttonAvancar = document.querySelector('.buttonAvancar')
    buttonAvancar.addEventListener('click', () => {
    ligarCor()
    buttonAvancar.classList.add('hidden')
    })
    

})

function criaPainel(input){
    
    textoPainel.innerText = `Bem vindo ${input}!! \n Pontuação: ${pontuacaoGeral}`

    
    buttonAvancar.innerText = 'Começar'
    buttonAvancar.classList.add('buttonAvancar')
    
    document.querySelector(".painel").appendChild(textoPainel)
    document.querySelector(".painel").appendChild(buttonAvancar)
}
function atualizarPainel(){
    textoPainel.innerText = `Bem vindo ${nomeUsuario}!! \n Pontuação: ${pontuacaoGeral}`
}

function recomecar(btn){
    pontuacaoAtual = 0
    pontuacaoGeral = 0
    arrResposta.splice(0,arrResposta.length)
    arrCoresSorteadas.splice(0,arrCoresSorteadas.length)
    btn.remove()
    atualizarPainel()
    ligarCor()
    
}

function gameOver(){    

    let botao = document.createElement("button")
    botao.innerText = "RECOMECAR"
    botao.addEventListener("click",function(){recomecar(botao)})

    document.querySelector(".painel").appendChild(botao)
}

function verificaResposta(resp){
    
    let acertou

    arrResposta.push(resp)
    
    if(arrResposta[pontuacaoAtual] == arrCoresSorteadas[pontuacaoAtual]){
        console.log("Acertou")
        pontuacaoAtual++
        acertou = true
    }
    else{
        acertou = false
        gameOver()
    }


    if(arrResposta.length== arrCoresSorteadas.length){

            if(acertou){
                console.log("VAMOS PARA A PROXIMO")
                pontuacaoAtual=0
                pontuacaoGeral++
                arrResposta.splice(0,arrResposta.length)
                atualizarPainel()
                setTimeout(() => {
                    ligarCor()
                }, 2000)
            }
            else{
                //comando
            }
    }
}


function ligarCor(){
    corSorteada = Math.floor(Math.random() * (5 - 1)) + 1
    arrCoresSorteadas.push(corSorteada)

    for(let contador = 0; contador < arrCoresSorteadas.length; contador ++){
    setTimeout(coresSelecionadas, tempo*contador)
        function coresSelecionadas (){
            if(arrCoresSorteadas[contador] === 1){
                setTimeout(() => {
                red.classList.add("red-on")
                setTimeout(function() {
                    red.classList.remove("red-on")
                }, tempo)
            }, tempo*contador)
            }else if(arrCoresSorteadas[contador] === 2){
                setTimeout(() => {
                blue.classList.add('blue-on')
                setTimeout(function() {
                    blue.classList.remove("blue-on")
                }, tempo)
            }, tempo*contador)
            }else if(arrCoresSorteadas[contador] === 3){
                setTimeout(() => {
                green.classList.add('green-on')
                setTimeout(function() {
                    green.classList.remove("green-on")
                }, tempo)
            }, tempo*contador)
            }else if(arrCoresSorteadas[contador] === 4){
                setTimeout(() => {
                yellow.classList.add('yellow-on')
                setTimeout(function() {
                    yellow.classList.remove("yellow-on")
                }, tempo)
            }, tempo*contador)
            }
        }    
    }
} 
