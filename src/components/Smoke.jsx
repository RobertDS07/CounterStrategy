import React from 'react'
import styled from 'styled-components'
import { positionVideo } from './A.jsx'
 
const Smoke = styled.div`
    cursor: pointer;
    position: absolute;
    width: 35px;
    height: 35px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAA0lBMVEUAAAAKn+I0PkMKV3oKJDCvsLAyS1U2REsgMzwqNDgMKzkINEmYm51tcXJWXmFPVlheZGdETlNSWV0QHiUFFRwgND0KIy4MHCMTKTMJKDesra6bnqCIi42RlZZwdHZkaWyAhYd5fX5RWl5mbnFOVlpXXmFLU1daYmYdLjY4Q0hOWV0VJi46Rk0MIy0JISwyRk8VKzUAGycYNEAJNksIQFnX19fY2NixsbHT09Osra3Q0NDMzMzJycnFxcWpqam9vb23uLizs7OlpaWam5uVlZaLjI1aAPq0AAAANXRSTlMAAlAFL/5QT0ZCIhHx69jUzb21nmdZODQrFfj08enn4t7S0M7Nv727u7epfXFlY0pIPz0lHKFSwEUAAADmSURBVDjL7dLXbsIwFIBhp3aawaalQFv23tMhTtjj/V8JAhmHYMYNEhd8d5Z+HR/JRnyCAA6v0KD7nr4OTimSQvCNqwS1mWErFowTfHVMKrbQLLPyEI/ImJekS6Z2YmTD2/ku1r9s2kvNRo/0f/limxoFjcWIY18TKLiJI6+eJ3Ll159QsfoDEzVnOgkwi6TBMkXqJpDR8JoOAwW08W77MniJTun0223q3MLS8uaY1MafIxx055zAsh44DcJh/hgaAR+AhHTOFD1EEJCI/jFRnAAiC0YTvvdKKr3PA0n6sMnJAHp7xB7g4UnVdgiyfQAAAABJRU5ErkJggg==);

    &.selected{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAA5FBMVEUAAABQM8FyHbVkALJkALJiA7NjALFxG7VvFrRkALKWYb9kArFkALJkAbJiBLN6LbeBOLmMTbyBOblkALJvFrRkALJlArJmBLJlArJkALJjALFkALKBOrl4J7ZnCbGHRbqLTbyXY8B8MLhoDq9lArGFQLqGQrtmBbJnB7JrDrNpC7JnCLFrD7NoCrJkALJjAbJkALFkALJkALJkALLW1tbY2NjBr8/T0NXArM67pszOydO9qM2EQLrMxNKxksisicfV1NbQy9TQzNPHutDEtdC5o8q0mcmujsemf8WmfsWcbcKOUb1xzPQgAAAANHRSTlMAA4B/MhIIgIAc/uSFXCP++O/v08DAoopgU0Eg/v77+vjx7evq5+PBt7CuraCVemtKOCwmUTTBvwAAAQlJREFUOMvtksdywjAUReNIJq60EEp67z1PyMYG0hPg//8HgyVLsmkzbFhwtNHMO3PnzpM2pqBJ95nO8mgr4uS0OQpGd5VbB89wTHT6HzSDbhmZWsTEBrXCFxnRLtbyT84jzmWdxnGLxFDrqON3C1dmpmzlmzBgzHvvOp2UvwTVAVrcTbV5PhEKGR/oI6W4/nDhc4UAwytXdclBg48kJcmBdoiE4u4zg0059CCppG/7Slth/u7sMefNpkpbQev8hTmvZ7HBxrJ32OC7sT/jUTbHxqIPgJLD+Yn6sG9QD/kolRO6Yo2ORSELtarynu9LHc/zmjLBX+nGVN4L1w3D2IrY5Bhu9IXWLMAQhyRMsWlbSVYAAAAASUVORK5CYII=);
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
    if (e.toElement.innerHTML === option1.innerHTML) {
        video[positionVideo].children[0].src = option1src
    } else
        if (e.toElement.innerHTML === option2.innerHTML) {
            video[positionVideo].children[0].src = option2src
        }
    options[positionVideo].classList.remove('showOptions')
    options[positionVideo].removeChild(option1)
    options[positionVideo].removeChild(option2)
}

function smoke(e){
    options = document.querySelectorAll('.options')
    video = document.querySelectorAll('.video')
    video[positionVideo].classList.add('showVideo')

    if (options[positionVideo].children.length != 0) {
        options[positionVideo].classList.remove('showOptions')
        options[positionVideo].removeChild(option1)
        options[positionVideo].removeChild(option2)
    }
    
    if(smokeClickada != undefined){
        smokeClickada.classList.remove('selected')
    }

    smokeClickada = document.getElementById(e.target.id)
    smokeClickada.classList.add('selected')    

    switch (e.target.id){
        case 'DUSTcarroB':
            video[positionVideo].children[0].src = 'https://www.youtube.com/embed/yN0UwtCpEAQ'
            
        break
        case 'DUSTaltarB':

        break
        case 'DUSTmeioDoBombB':

        break
        case 'DUSTportaB':

        break
        case 'DUSTburacoB':

        break
        case 'DUSTmeioCt':

        break
        case 'DUSTportaMeio':

        break
        case 'DUSTcaixaGordaMeio':
            if (options[positionVideo].children.length == 0) {
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

        break
        case 'DUSTbaseCtA':

        break
        case 'DUSTportaFundo':

        break
        case 'DUSTesquinaFundo':

        break
    }    
}

export default props =>
    <Smoke id={props.id} className='smoke' style={{top: props.top, left: props.left}} onClick={e => smoke(e)} ></Smoke>