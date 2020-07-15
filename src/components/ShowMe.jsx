import React from 'react'
import styled from 'styled-components'

const ShowMe = styled.div`
    margin-left: 500px;
    margin-top: 380px;
    width: 100px;
    height: 50px;
    border: 1px solid #6400B2;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;
    cursor: pointer;
    position: absolute;
    color: white;
    &.removeShowMe {
    display: none;
}
    &:hover{
    box-shadow: 0px 0px 10px rgb(0, 0, 0);
    box-shadow: 0px 0px 20px rgb(0, 0, 0);
    box-shadow: 0px 0px 30px rgb(0, 0, 0);
    box-shadow: 0px 0px 40px rgb(0, 0, 0);
}
@media (max-width: 1886px){
    margin-left: 324px;
    margin-top: 400px;
}
@media (min-height: 1600px){
    margin: 500px 500px;
}
`

function ShowMap(e) {
    let showMebtn = document.querySelectorAll('.showMap')
    showMebtn = Array.from(showMebtn)
    let mapa = document.querySelectorAll('.containerMap')
    mapa = Array.from(mapa)

    smokePosition()

    function showMap(posicao) {
        mapa.map(p => p.classList.remove('show'))
        showMebtn.map(p => p.classList.remove('removeShowMe'))
        mapa[posicao].classList.add('show')
        showMebtn[posicao].classList.add('removeShowMe')
    }
    switch (e.target.id) {
        case 'dust':
            showMap(0)
            break
        case 'mirage':
            showMap(1)
            break
        case 'cache':
            showMap(2)
            break
        case 'inferno':
            showMap(3)
            break
        case 'overpass':
            showMap(4)
            break
    }
}

let containerSize

function pegandoContainerSize() {
    let showMebtn = document.querySelectorAll('.showMap')
    showMebtn = Array.from(showMebtn)
    let mapa = document.querySelectorAll('.containerMap')
    mapa = Array.from(mapa)

    showMebtn.forEach(e => e.classList.remove('removeShowMe'))
    mapa.forEach(e => e.classList.remove('show'))
    if (window.innerWidth > 1886) {
        containerSize = 800
    } else {
        containerSize = 550
    }
}

function smokePosition() {
    let smoke = document.querySelectorAll('.smoke')
    smoke = Array.from(smoke)
    if (containerSize === 550) {
        if (smoke[0].style.top !== '163.625px')
            smoke.forEach(e => {
                let top = e.style.top
                let left = e.style.left

                let newTop = (550 * top.split('px')[0]) / 800 + 'px'
                let newLeft = (550 * left.split('px')[0]) / 800 + 'px'

                e.style.top = `${newTop}`
                e.style.left = `${newLeft}`
            })
    }
    else {
        if (smoke[0].style.top !== '238px') {
            smoke.forEach(e => {
                let top = e.style.top
                let left = e.style.left

                let newTop = (800 * top.split('px')[0]) / 550 + 'px'
                let newLeft = (800 * left.split('px')[0]) / 550 + 'px'

                e.style.top = `${newTop}`
                e.style.left = `${newLeft}`
            })
        }
    }
}


window.addEventListener('load', pegandoContainerSize())
window.addEventListener('resize', e => pegandoContainerSize())

export default props =>
    <ShowMe className='showMap' id={props.id} onClick={e => ShowMap(e)}>Show Map</ShowMe>