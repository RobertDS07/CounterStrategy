import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    &.none{
        display: none;
    }
`

export default props =>
    <Background className='none' id={props.id} style={{ backgroundImage: `url(${props.foto})` }}>
        {props.children}
    </Background>