import React from 'react'
import styled from 'styled-components'

const NavLoader = styled.div`
    width: 213px;
    min-height: 600px;
    position: fixed;
    top: 163.5px;
    left: 0px;
    border-top: 3px solid #6400B2;
    border-right: 3px solid #6400B2;
    border-bottom: 3px solid #6400B2;
    border-radius: 0 8px 8px 0;
    overflow: hidden;
    box-shadow: 0px 4px 10px black;

    &.none{
        display: none;
    }
    @media (max-width: 1886px){
      margin-top: 5px;
      top: 0 !important;
      left:  auto;
      min-width: 1071px;
      min-height: 125px;
      border-left: 3px solid #6400B2;
      border-radius: 8px 8px 8px 8px;
      border-top: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
`

function posicionarNav(e){
    const nav = document.querySelector('#navLoader')
    const posicaoDaNav =  window.innerHeight - (window.innerHeight/2 + nav.clientHeight/2)
    nav.style.top = posicaoDaNav +'px'
}
window.addEventListener('load', e => posicionarNav() )

export default props =>
    <NavLoader id='navLoader' />