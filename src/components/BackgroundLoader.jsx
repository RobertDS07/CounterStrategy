import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    80%{
        opacity: 0;
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
        background-color: black;
        top: 5px;
    &.loadingEnd{
        opacity: 0;
        visibility: hidden;
        animation: ${animation} 1s;
        display: none;
    }
    & i{
        margin-bottom: 100px;
        color: rgba(75, 75, 75, 0.404);
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