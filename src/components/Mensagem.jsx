import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0%{
        top: 0;
    }
    80%{
        top: 0;
    }
`

const Mensagem = styled.div`
    display: none;
    
    &.visible{
    display: block;
    min-width: 100px;
    min-height: 50px;
    text-align: center;
    position: fixed;
    top: -160px;
    right: 50px;
    z-index: 1;
    padding: 10px;
    color: white;
    border-bottom: 1px solid #6400B2;
    border-right: 1px solid #6400B2;
    border-left: 1px solid #6400B2;
    border-radius: 10px;
    box-shadow: 0px 8px 8px black;
    animation: ${animation} 8s 1;  
    }
`

export default props =>
    <Mensagem id='mensagem'>
        <h4>ESTE SITE ESTÁ EM DESENVOLVIMENTO</h4>
        <p>se gostou da ideia, compartilhe!</p>
    </Mensagem>