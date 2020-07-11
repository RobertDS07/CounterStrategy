import React from 'react'
import styled, { keyframes } from 'styled-components'

const loading =  keyframes`
    0%{
        left: 0px;
    }
    10%{
        left: 100px;
    }
    17%{
        left: 200px;
    }
    20%{
        left: 300px;
    }
    32%{
        left: 450px;
    }
    54%{
        left: 660px;
    }
    69%{
        left: 790px;
    }
    80%{
        left: 990px;
    }
    90%{
        left: 1580px;
    }
    99%{
        left: 1980px;
    }
`

const Loader = styled.div`
    position: absolute;
    top: 0;
    left: 3110px;
    width: 100%;
    height: 5px;
    background-color: white;
    animation: ${loading} 17s 1;
    z-index: 3;
    &.nonee{
        display: none;
    }
`

export default props =>
    <Loader id='loader' />