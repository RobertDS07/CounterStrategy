import React from 'react'
import styled from 'styled-components'

const Mapa = styled.div`
    width: 213px;
    height: 122px;
    background-size: 213px 122px;
`

export default props =>
    <Mapa id={props.id} style={{backgroundImage: `url(${props.foto})`}} >
        {props.children}
    </Mapa>