import React from 'react'
import styled from 'styled-components'

const Social = styled.div`
    min-width: 100px;
    min-height: 100px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;
    & i{
        border-radius: 50%;
    }
`

export default props =>
    <Social>
        {props.children}
    </Social>