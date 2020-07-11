import React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe`
    width: 760px;
    height: 515px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
`

export default props =>
    <Iframe src='https://www.youtube.com/embed/34OUz71_qRE' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>