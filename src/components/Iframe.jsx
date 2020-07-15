import React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe`
    width: 760px;
    height: 515px;
    border: 0;
    @media (max-width: 1370px){
        width: 560px;
        height: 400px;
    }
`

export default props =>
    <Iframe src='https://www.youtube.com/embed/34OUz71_qRE' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>