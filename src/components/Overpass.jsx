import React from 'react'
import styled from 'styled-components'
import overpassImg from './img/overpassBack.png'

const Overpass = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${overpassImg});
    position: relative;
`

export default props => 
    <Overpass id='overpass'>

    </Overpass>