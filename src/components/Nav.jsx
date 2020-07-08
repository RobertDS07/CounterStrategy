import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    width: 213px;
    min-height: 500px;
    position: fixed;
    top: 163.5px;
    left: 0px;
    background: rgba(75, 75, 75, 0.404);
    border-top: 3px solid #6400B2;
    border-right: 3px solid #6400B2;
    border-bottom: 3px solid #6400B2;
    border-radius: 0 8px 8px 0;
    overflow: hidden;
    box-shadow: 0px 4px 10px black;
`

function posicionarNav(e){
    const nav = document.querySelector('nav')
    const posicaoDaNav =  window.innerHeight - (window.innerHeight/2 + nav.clientHeight/2)
    nav.style.top = posicaoDaNav +'px'
}
window.addEventListener('resize', e => posicionarNav() )
window.addEventListener('load', e => posicionarNav() )

export default props =>
    <Nav>
        {props.children}
    </Nav>