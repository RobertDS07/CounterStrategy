import React from 'react'
import styled from 'styled-components'

const Options = styled.div`
    text-align: center;
    position: absolute;
    display: none;
    &.showOptions{
        display: flex;
        flex-direction: row;
    }
    .option1{
    padding: 0px 10px;
    border-right: 1px solid #2b0846;
    border-left: 1px solid #2b0846;
    font-size: 25px;
    cursor: pointer;
    margin: 0px 10px;
    color: white;
    transition: .3s;
}
.option1:hover{
    color: #6400B2;
}
`

export default props =>
    <Options className='options'>
        {props.children}
    </Options>