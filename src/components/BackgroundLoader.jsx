import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0%{
        opacity: 1;
        visibility: hidden;
        display: flex;
    }
`

const BackgroundLoader = styled.div`
        opacity: 1;
        visibility: visible;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 3;
        background-image: linear-gradient(147deg, #000000 0%, #434343 100%);
        top: 5px;
        transition: .5s !important;
    &.loadingEnd{
        opacity: 0;
        visibility: hidden;
        animation: ${animation} 1s;
        display: none;
    }
    & i{
        margin-bottom: 100px;
    }
`

window.addEventListener('load', e => {
    const backgroundLoader = document.querySelector('#backgroundLoader')
    backgroundLoader.classList.add('loadingEnd')

    const loader = document.querySelector('#loader')
    loader.classList.add('nonee')

    const navLoader = document.querySelector('#navLoader')
    navLoader.classList.add('none')

    const mensagem = document.querySelector('#mensagem')
    mensagem.classList.add('visible')

    let background = document.querySelectorAll('.none')
    background = Array.from(background)
    background.forEach(e => e.classList.remove('none'))
})

export default props =>
    <BackgroundLoader id='backgroundLoader'>
        {props.children}
    </BackgroundLoader>