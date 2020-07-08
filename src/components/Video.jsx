import React from 'react'
import styled from 'styled-components'

const Video = styled.div`
    float: right;
    position: absolute;
    right: 20px;
    top: 230px;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    &.showVideo{
        visibility: visible;
    }
`

export default props =>
    <Video className='video'>
        {props.children}
    </Video>