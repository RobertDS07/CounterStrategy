const nav = document.querySelectorAll('nav')[1]
const options = document.querySelectorAll('.options')
let showMe = document.querySelectorAll('.showMe')
let video = document.querySelectorAll('.video')
let smoke = document.querySelectorAll('.smoke')
let circle = document.querySelectorAll('.circle')
let containerMap = document.querySelectorAll('.containerMap')
showMe = Array.from(showMe)
video = Array.from(video)
smoke = Array.from(smoke)
circle = Array.from(circle)
containerMap = Array.from(containerMap)

let videoPosition = 0

let option1 = ''
let option2 = ''

let option1src, option2src = ''

window.addEventListener('load', e => {
    const loader = document.querySelector('.bodyLoader')
    loader.classList.add('hidden')
})

for (let i = 0; i < smoke.length; i++) {
    smoke[i].addEventListener('click', e => {
        removeBorderOfSmoke()
        smoke[i].classList.add('selected')
        video[videoPosition].classList.add('showVideo')
        if (options[videoPosition].children.length != 0) {
            options[videoPosition].classList.remove('showOptions')
            options[videoPosition].removeChild(option1)
            options[videoPosition].removeChild(option2)
        }

        switch (smoke[i].classList[1]) {
            case 'baseCt':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/34OUz71_qRE'
                break
            case 'buraco':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/plGZYc4I9dQ'
                break
            case 'carroB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/yN0UwtCpEAQ'
                break
            case 'altar':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/fCbRyTvmAmg'
                break
            case 'caixaMeio':
                if (options[videoPosition].children.length == 0) {
                    video[videoPosition].children[0].src = ''
                    createOptions()
                    option1src = 'https://www.youtube.com/embed/q5N1gJ3IEYE'
                    option2src = 'https://www.youtube.com/embed/e5WuvJzrAN8'
                    option1.innerHTML = 'TR (mais dificil de acertar)'
                    option2.innerHTML = 'TR'
                    options[videoPosition].addEventListener('click', (e) => optionsFunction(e))
                }
                break
            case 'varanda':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/ZVxPyR0N1g4'
                break
            case 'ct':
                if (options[videoPosition].children.length == 0) {
                    video[videoPosition].children[0].src = ''
                    createOptions()
                    option1src = 'https://www.youtube.com/embed/MvR46nr55zc'
                    option2src = 'https://www.youtube.com/embed/NdpXS2-O4dY'
                    option1.innerHTML = 'VARANDA'
                    option2.innerHTML = 'FUNDO'
                    options[videoPosition].addEventListener('click', (e) => optionsFunction(e))
                }
                break
            case 'portaFundo':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/tmHxdwx2a0k'
                break
            case 'meioFer':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/JeFlhrBNCU4'
                break
            case 'fundo':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/UDUpiDxzVSI'
                break
            case 'meioDaB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/PPlEFrXqI1Y'
                break
            case 'portaB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/ldEN_ZttjGg'
                break
            case 'cabecinha':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/1vfSET2IlA4'
                break
            case 'ctA':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/ZCSeJZaZ51Y'
                break
            case 'passagemA':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/93uxca9VTnI'
                break
            case 'janelao':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/-8DVxlnTTwI'
                break
            case 'liga':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/AESjEiv4Mv4'
                break
            case 'l':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/yeJNGOwMjIc'
                break
            case 'tapete':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/YmtuCdK4xvI'
                break
            case 'van':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/mRkbto0bO40'
                break
            case 'janelaB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/J-7cToY4Dug'
                break
            case 'bombB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/AAODlcVzNS8'
                break
            case 'forest':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/1wGMTCX_CW4'
                break
            case 'meioTr':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/l9lZawjGuio'
                break
            case 'portaGaragem':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/GOTbVsn9kDM'
                break
            case 'baixoB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/IF432qyCBYE'
                break
            case 'portaMeio':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/Emd0XOhZCAY'
                break
            case 'entradaA':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/TC6aevjHSBY'
                break
            case 'dentroB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/ijXg1FcFRSs'
                break
            case 'ceuB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/KuhYAuCRqvM'
                break
            case 'estreitoB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/XP-ifrLoZz8'
                break
            case 'entradaB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/l3FCk5u2Jmo'
                break
            case 'ladoDaAzul':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/xqqvxeLjSuI'
                break
            case 'toxico':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/yu7G6rVzeak'
                break
            case 'caixaMeioCache':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/Tj4i58keATs'
                break
            case 'lixeiraA':
                if (options[videoPosition].children.length == 0) {
                    video[videoPosition].children[0].src = ''
                    createOptions()
                    option1src = 'https://www.youtube.com/embed/zykCYK83kH4'
                    option2src = 'https://www.youtube.com/embed/8XbhtWw3yJA'
                    option1.innerHTML = 'RUA'
                    option2.innerHTML = 'FUNDO'
                    options[videoPosition].addEventListener('click', (e) => optionsFunction(e))
                }
                break
            case 'banco':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/60LGXONecnU'
                break
            case 'ceu':
                if (options[videoPosition].children.length == 0) {
                    video[videoPosition].children[0].src = ''
                    createOptions()
                    option1src = 'https://www.youtube.com/embed/YiGopEMa7Io'
                    option2src = 'https://www.youtube.com/embed/WM4j46YyNW4'
                    option1.innerHTML = 'BECO (MAIS COMPLICADA)'
                    option2.innerHTML = 'ESGOTO (FACIL)'
                    options[videoPosition].addEventListener('click', (e) => optionsFunction(e))
                }
                break
            case 'sapao':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/-ZIc1XpjfJY'
                break
            case 'toxicoB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/DGTd0pWJuq8'
                break
            case 'entradaDoComSaida':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/CRmwIr86y3I'
                break
            case 'dentroBombA':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/wOVRGvc0tE4'
                break
            case 'dentroBombB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/4RDugtzmhlk'
                break
            case 'antesDoSapao':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/kdVSWH3q7O4'
                break
            case 'portaDoBanheiro':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/Q6vEXYhZ-eY'
                break
            case 'portaDoBanheiro':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/3KCgCV9swZE'
                break
            case 'rua':
                if (options[videoPosition].children.length == 0) {
                    video[videoPosition].children[0].src = ''
                    createOptions()
                    option1src = 'https://www.youtube.com/embed/3KCgCV9swZE'
                    option2src = 'https://www.youtube.com/embed/vdOMczVrxUs'
                    option1.innerHTML = 'BANCO'
                    option2.innerHTML = 'PRACINHA'
                    options[videoPosition].addEventListener('click', (e) => optionsFunction(e))
                }
            case 'caixao':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/pOPSapEpfyY'
                break
            case 'dentroDoBombB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/Ha4scAurntQ'
                break
            case 'dentroDoBombBMarota':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/Jijc3LigU_Q'
                break
            case 'entradaDoBombB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/ZIgXVgz3b7Y'
                break
            case 'CtEntradaB':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/vFPjYg1Xp88'
                break
            case 'carro':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/OHlE1iSDkQs'
                break
            case 'nip':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/Abf9mlAxFKg'
                break
            case 'varandaTapete':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/VI5dQND7FIo'
                break
            case 'biblioteca':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/5VtfqHXSAKc'
                break
            case 'arco':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/sBFnioQQbPc'
                break
            case 'B':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/ufLw04WszSI'
                break
            case 'areia':
                video[videoPosition].children[0].src = 'https://www.youtube.com/embed/ygzRBokti1k'
                break
        }
    })
}

for (let i = 0; i < showMe.length; i++) {
    showMe[i].addEventListener('click', e => {
        removeShowOfMap()
        replaceShowMe()
        showMe[i].classList.add('removeShowMe')
        containerMap[i].classList.add('show')
    })
}

nav.addEventListener('click', (e) => {
    const verify = e.path[0].childNodes[1].classList[1]
    removeCircleOfNav()

    switch (verify) {
        case 'primeiro':
            videoPosition = 0
            circle[0].classList.add('selectedCircle')
            break
        case 'segundo':
            videoPosition = 1
            circle[1].classList.add('selectedCircle')
            break
        case 'terceiro':
            videoPosition = 2
            circle[2].classList.add('selectedCircle')
            break
        case 'quarto':
            videoPosition = 3
            circle[3].classList.add('selectedCircle')
            break
        case 'quinto':
            videoPosition = 4
            circle[4].classList.add('selectedCircle')
            break
        case 'sexto':
            videoPosition = 5
            circle[5].classList.add('selectedCircle')
            break
    }

})

function createOptions() {
    option1 = document.createElement('div')
    option2 = document.createElement('div')
    option1.setAttribute('class', 'option1')
    option2.setAttribute('class', 'option1')
    options[videoPosition].appendChild(option1)
    options[videoPosition].appendChild(option2)
    options[videoPosition].classList.add('showOptions')
}

function optionsFunction(e) {
    if (e.toElement.innerHTML === option1.innerHTML) {
        video[videoPosition].children[0].src = option1src
    } else
        if (e.toElement.innerHTML === option2.innerHTML) {
            video[videoPosition].children[0].src = option2src
        }
    options[videoPosition].classList.remove('showOptions')
    options[videoPosition].removeChild(option1)
    options[videoPosition].removeChild(option2)
}

function replaceShowMe() {
    showMe.map(p => p.classList.remove('removeShowMe'))
}

function removeVideo() {
    video.map(p => p.classList.remove('showVideo'))
}

function removeBorderOfSmoke() {
    smoke.map(p => p.classList.remove('selected'))
}

function removeShowOfMap() {
    containerMap.map(p => p.classList.remove('show'))
}

function removeCircleOfNav() {
    circle.map(p => p.classList.remove('selectedCircle'))
    removeVideo()
}