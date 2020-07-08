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
`

function ShowMap(e){
    let showMebtn = document.querySelectorAll('.showMap')
    showMebtn = Array.from(showMebtn)
    let mapa = document.querySelectorAll('.containerMap')
    mapa = Array.from(mapa)
    
    function showMap(posicao){
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

export default props =>
    <ShowMe className='showMap' id={props.id} onClick={e => ShowMap(e)}>Show Me</ShowMe>