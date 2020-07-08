import React from 'react'
import styled from 'styled-components'

const A = styled.a``

export let positionVideo = 0

function circle(e){
    let circle = document.querySelectorAll('#circle')
    circle = Array.from(circle)

    function backgroundCircle(posicao){
        circle.forEach(p => p.classList.remove('selected'))
        circle[posicao].classList.add('selected')
    }

    switch (e.target.id) {
        case 'dust':
            positionVideo = 0
            backgroundCircle(0)
        break
        case 'mirage':
            positionVideo = 1
            backgroundCircle(1)
        break
        case 'cache':
            positionVideo = 2
            backgroundCircle(2)
        break
        case 'inferno':
            positionVideo = 3
            backgroundCircle(3)
        break
        case 'overpass':
            positionVideo = 4
            backgroundCircle(4)
        break
    }
}

export default props =>
    <A href={props.mapa} onClick={e => circle(e)} >
        {props.children}
    </A>