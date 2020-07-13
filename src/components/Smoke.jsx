import React from 'react'
import styled from 'styled-components'
import { positionVideo } from './A.jsx'

const Smoke = styled.div`
    cursor: pointer;
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAA0lBMVEUAAAAKn+I0PkMKV3oKJDCvsLAyS1U2REsgMzwqNDgMKzkINEmYm51tcXJWXmFPVlheZGdETlNSWV0QHiUFFRwgND0KIy4MHCMTKTMJKDesra6bnqCIi42RlZZwdHZkaWyAhYd5fX5RWl5mbnFOVlpXXmFLU1daYmYdLjY4Q0hOWV0VJi46Rk0MIy0JISwyRk8VKzUAGycYNEAJNksIQFnX19fY2NixsbHT09Osra3Q0NDMzMzJycnFxcWpqam9vb23uLizs7OlpaWam5uVlZaLjI1aAPq0AAAANXRSTlMAAlAFL/5QT0ZCIhHx69jUzb21nmdZODQrFfj08enn4t7S0M7Nv727u7epfXFlY0pIPz0lHKFSwEUAAADmSURBVDjL7dLXbsIwFIBhp3aawaalQFv23tMhTtjj/V8JAhmHYMYNEhd8d5Z+HR/JRnyCAA6v0KD7nr4OTimSQvCNqwS1mWErFowTfHVMKrbQLLPyEI/ImJekS6Z2YmTD2/ku1r9s2kvNRo/0f/limxoFjcWIY18TKLiJI6+eJ3Ll159QsfoDEzVnOgkwi6TBMkXqJpDR8JoOAwW08W77MniJTun0223q3MLS8uaY1MafIxx055zAsh44DcJh/hgaAR+AhHTOFD1EEJCI/jFRnAAiC0YTvvdKKr3PA0n6sMnJAHp7xB7g4UnVdgiyfQAAAABJRU5ErkJggg==);

    &.selected{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAA5FBMVEUAAABQM8FyHbVkALJkALJiA7NjALFxG7VvFrRkALKWYb9kArFkALJkAbJiBLN6LbeBOLmMTbyBOblkALJvFrRkALJlArJmBLJlArJkALJjALFkALKBOrl4J7ZnCbGHRbqLTbyXY8B8MLhoDq9lArGFQLqGQrtmBbJnB7JrDrNpC7JnCLFrD7NoCrJkALJjAbJkALFkALJkALJkALLW1tbY2NjBr8/T0NXArM67pszOydO9qM2EQLrMxNKxksisicfV1NbQy9TQzNPHutDEtdC5o8q0mcmujsemf8WmfsWcbcKOUb1xzPQgAAAANHRSTlMAA4B/MhIIgIAc/uSFXCP++O/v08DAoopgU0Eg/v77+vjx7evq5+PBt7CuraCVemtKOCwmUTTBvwAAAQlJREFUOMvtksdywjAUReNIJq60EEp67z1PyMYG0hPg//8HgyVLsmkzbFhwtNHMO3PnzpM2pqBJ95nO8mgr4uS0OQpGd5VbB89wTHT6HzSDbhmZWsTEBrXCFxnRLtbyT84jzmWdxnGLxFDrqON3C1dmpmzlmzBgzHvvOp2UvwTVAVrcTbV5PhEKGR/oI6W4/nDhc4UAwytXdclBg48kJcmBdoiE4u4zg0059CCppG/7Slth/u7sMefNpkpbQev8hTmvZ7HBxrJ32OC7sT/jUTbHxqIPgJLD+Yn6sG9QD/kolRO6Yo2ORSELtarynu9LHc/zmjLBX+nGVN4L1w3D2IrY5Bhu9IXWLMAQhyRMsWlbSVYAAAAASUVORK5CYII=);
    }

    @media (max-width: 1886px){
        background-size: 25px 25px;
        background-repeat: no-repeat;
        width: 25px;
        height: 25px;
    }
`
let options, video
let option1, option2, option1src, option2src
let smokeClickada

function createOptions() {
    option1 = document.createElement('div')
    option2 = document.createElement('div')
    option1.setAttribute('class', 'option1')
    option2.setAttribute('class', 'option1')
    options[positionVideo].appendChild(option1)
    options[positionVideo].appendChild(option2)
    options[positionVideo].classList.add('showOptions')
}

function optionsFunction(e) {
    let optionschild = document.querySelectorAll('.option1')
    optionschild = Array.from(optionschild)

    if (e.toElement.innerHTML === option1.innerHTML) {
        video[positionVideo].children[0].src = option1src
    } else
        if (e.toElement.innerHTML === option2.innerHTML) {
            video[positionVideo].children[0].src = option2src
        }
    options[positionVideo].classList.remove('showOptions')
    optionschild.forEach(e => e.remove())
}

function smoke(e) {
    options = document.querySelectorAll('.options')
    video = document.querySelectorAll('.video')
    video[positionVideo].classList.add('showVideo')

    if (options[positionVideo].children.length !== 0) {
        options[positionVideo].classList.remove('showOptions')
        options[positionVideo].removeChild(option1)
        options[positionVideo].removeChild(option2)
    }

    if (smokeClickada !== undefined) {
        smokeClickada.classList.remove('selected')
    }

    smokeClickada = document.getElementById(e.target.id)
    smokeClickada.classList.add('selected')

    switch (e.target.id) {
        case 'DUSTcarroB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/yN0UwtCpEAQ'
            break
        case 'DUSTaltarB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/fCbRyTvmAmg'
            break
        case 'DUSTmeioDoBombB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/PPlEFrXqI1Y'
            break
        case 'DUSTportaB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/ldEN_ZttjGg'
            break
        case 'DUSTburacoB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/plGZYc4I9dQ'
            break
        case 'DUSTmeioCt':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/34OUz71_qRE'
            break
        case 'DUSTportaMeio':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/JeFlhrBNCU4'
            break
        case 'DUSTcaixaGordaMeio':
            if (options[positionVideo].children.length === 0) {
                video[positionVideo].children[0].src = ''
                createOptions()
                option1src = 'https://www.youtube.com/embed/q5N1gJ3IEYE'
                option2src = 'https://www.youtube.com/embed/e5WuvJzrAN8'
                option1.innerHTML = 'TR (mais dificil de acertar)'
                option2.innerHTML = 'TR'
                options[positionVideo].addEventListener('click', (e) => optionsFunction(e))
            }
            break
        case 'DUSTvaranda':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/ZVxPyR0N1g4'
            break
        case 'DUSTbaseCtA':
            if (options[positionVideo].children.length === 0) {
                video[positionVideo].children[0].src = ''
                createOptions()
                option1src = 'https://www.youtube.com/embed/MvR46nr55zc'
                option2src = 'https://www.youtube.com/embed/NdpXS2-O4dY'
                option1.innerHTML = 'VARANDA'
                option2.innerHTML = 'FUNDO'
                options[positionVideo].addEventListener('click', (e) => optionsFunction(e))
            }
            break
        case 'DUSTportaFundo':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/tmHxdwx2a0k'
            break
        case 'DUSTesquinaFundo':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/UDUpiDxzVSI'
            break

        case 'MIRAGEcabecinha':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/1vfSET2IlA4'
            break
        case 'MIRAGEctA':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/ZCSeJZaZ51Y'
            break
        case 'MIRAGEpassagemA':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/93uxca9VTnI'
            break
        case 'MIRAGEjanelao':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/-8DVxlnTTwI'
            break
        case 'MIRAGEliga':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/AESjEiv4Mv4'
            break
        case 'MIRAGEl':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/yeJNGOwMjIc'
            break
        case 'MIRAGEtapete':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/YmtuCdK4xvI'
            break
        case 'MIRAGEvan':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/mRkbto0bO40'
            break
        case 'MIRAGEjanelaB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/J-7cToY4Dug'
            break
        case 'MIRAGEbombB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/AAODlcVzNS8'
            break
        case 'MIRAGEforest':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/1wGMTCX_CW4'
            break

        case 'CACHEmeioTr':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/l9lZawjGuio'
            break
        case 'CACHEportaGaragem':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/GOTbVsn9kDM'
            break
        case 'CACHEbaixoB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/IF432qyCBYE'
            break
        case 'CACHEportaMeio':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/Emd0XOhZCAY'
            break
        case 'CACHEentradaA':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/TC6aevjHSBY'
            break
        case 'CACHEdentroB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/ijXg1FcFRSs'
            break
        case 'CACHEceuB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/KuhYAuCRqvM'
            break
        case 'CACHEestreitoB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/XP-ifrLoZz8'
            break
        case 'CACHEentradaB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/l3FCk5u2Jmo'
            break
        case 'CACHEladoDaAzul':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/xqqvxeLjSuI'
            break
        case 'CACHEtoxico':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/yu7G6rVzeak'
            break
        case 'CACHEcaixaMeioCache':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/Tj4i58keATs'
            break

        case 'OVERPASSlixeiraA':
            if (options[positionVideo].children.length === 0) {
                video[positionVideo].children[0].src = ''
                createOptions()
                option1src = 'https://www.youtube.com/embed/zykCYK83kH4'
                option2src = 'https://www.youtube.com/embed/8XbhtWw3yJA'
                option1.innerHTML = 'RUA'
                option2.innerHTML = 'FUNDO'
                options[positionVideo].addEventListener('click', (e) => optionsFunction(e))
            }
            break
        case 'OVERPASSbanco':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/60LGXONecnU'
            break
        case 'OVERPASSceu':
            if (options[positionVideo].children.length === 0) {
                video[positionVideo].children[0].src = ''
                createOptions()
                option1src = 'https://www.youtube.com/embed/YiGopEMa7Io'
                option2src = 'https://www.youtube.com/embed/WM4j46YyNW4'
                option1.innerHTML = 'BECO (MAIS COMPLICADA)'
                option2.innerHTML = 'ESGOTO (FACIL)'
                options[positionVideo].addEventListener('click', (e) => optionsFunction(e))
            }
            break
        case 'OVERPASSsapao':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/-ZIc1XpjfJY'
            break
        case 'OVERPASStoxicoB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/DGTd0pWJuq8'
            break
        case 'OVERPASSentradaDoComSaida':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/CRmwIr86y3I'
            break
        case 'OVERPASSdentroBombA':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/wOVRGvc0tE4'
            break
        case 'OVERPASSdentroBombB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/4RDugtzmhlk'
            break
        case 'OVERPASSantesDoSapao':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/kdVSWH3q7O4'
            break
        case 'OVERPASSbanheiroMarota':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/Q6vEXYhZ-eY'
            break
        case 'OVERPASSportaBanheiro':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/QxZ3regLXmA'
            break
        case 'OVERPASSrua':
            if (options[positionVideo].children.length === 0) {
                video[positionVideo].children[0].src = ''
                createOptions()
                option1src = 'https://www.youtube.com/embed/3KCgCV9swZE'
                option2src = 'https://www.youtube.com/embed/vdOMczVrxUs'
                option1.innerHTML = 'BANCO'
                option2.innerHTML = 'PRACINHA'
                options[positionVideo].addEventListener('click', (e) => optionsFunction(e))
            }
            break

        case 'INFERNOcaixao':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/pOPSapEpfyY'
            break
        case 'INFERNOdentroDoBombB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/Ha4scAurntQ'
            break
        case 'INFERNOdentroDoBombBMarota':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/Jijc3LigU_Q'
            break
        case 'INFERNOentradaDoBombB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/ZIgXVgz3b7Y'
            break
        case 'INFERNOCtEntradaB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/vFPjYg1Xp88'
            break
        case 'INFERNOcarro':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/OHlE1iSDkQs'
            break
        case 'INFERNOnip':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/Abf9mlAxFKg'
            break
        case 'INFERNOvarandaTapete':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/VI5dQND7FIo'
            break
        case 'INFERNObiblioteca':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/5VtfqHXSAKc'
            break
        case 'INFERNOarco':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/sBFnioQQbPc'
            break
        case 'INFERNOB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/ufLw04WszSI'
            break
        case 'INFERNOareia':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/ygzRBokti1k'
            break
    }
}

export default props =>
    <Smoke id={props.id} className='smoke' style={{ top: props.top, left: props.left }} onClick={e => smoke(e)} ></Smoke>