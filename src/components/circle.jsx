import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    float: right;
    margin-top: 50px;
    margin-right: 5px;
    transition: .4s;
    border: 1px solid grey;

    &.selected{
        background: #6400B2;
}
`
export default props =>
    <Circle className={props.class} id='circle'/>