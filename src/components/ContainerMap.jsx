import React from 'react'
import styled from 'styled-components'

const ContainerMap = styled.div`
    width: 0px;
    height: 0px;
    position: relative;
    margin-left: 500px;
    margin-top: 580px;
    transition: .4s;
    background-size: 800px 800px;
    &.show {
    margin-left: 300px;
    margin-top: 80px;
    min-width: 800px;
    min-height: 800px;
}
`

export default props =>
    <ContainerMap className='containerMap' style={{backgroundImage: `url(${props.mapa})`}}>
        {props.children}
    </ContainerMap>