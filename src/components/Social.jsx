import React from 'react'
import styled from 'styled-components'

const Social = styled.div`
    max-width: 100px;
    max-height: 100px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;
    & i{
        border-radius: 50%;
    }
    @media (max-width: 1886px){
        left: 30px;
        bottom: 30px;
        right: none;
    }
`

export default props =>
    <Social>
        {props.children}
    </Social>