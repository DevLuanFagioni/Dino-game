const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo')
let pulando = false;
let posicaoPulo = 0;

function tecla(event){
    if (event.keyCode === 32){
        if (!pulando) {
            pular();
            console.log('pulou');
        }
    }
}

function pular(){
    pulando = true;

    let intervaloCima = setInterval(() => {
        if (posicaoPulo >= 150 ) {
            clearInterval(intervaloCima)
            
            let intervalorBaixo = setInterval(() => {
                if (posicaoPulo <= 0){
                    clearInterval(intervalorBaixo)
                    pulando = false;
                } else {
                    posicaoPulo -= 20
                    dino.style.bottom = posicaoPulo + 'px'
                }
            }, 20);
        } else {
            posicaoPulo += 20;

            dino.style.bottom = posicaoPulo + 'px';
        }
    }, 20);
}

function criaCacto() {
    const cacto = document.createElement('div');
    let posicaoCacto = 1000
    let tempoRandomico = Math.random() * 6000

    cacto.classList.add('cacto');
    cacto.style.left = posicaoCacto + 'px';
    fundo.appendChild(cacto)

    let cactoEsquerda = setInterval(() => {
        if(posicaoCacto < -60){
            clearInterval(cactoEsquerda)
            background.removeChild(cacto)
        } else if (posicaoCacto > 0 && posicaoCacto < 60 && posicaoPulo < 60){
            clearInterval(cactoEsquerda)
            document.body.innerHTML = '<h1 class="game-over"> Fim de jogo </h1>'
        } else {
            posicaoCacto -= 10
            cacto.style.left = posicaoCacto + 'px'
        }
    }, 20);

    setTimeout(criaCacto, tempoRandomico)
}
criaCacto()

document.addEventListener('keyup', tecla)

