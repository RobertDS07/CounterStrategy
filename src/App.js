import React from 'react';
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import Background from './components/Background.jsx'
import Nav from './components/Nav.jsx'
import A from './components/A.jsx'
import Mapa from './components/Mapa.jsx'
import Circle from './components/circle.jsx'
import ShowMe from './components/ShowMe.jsx'
import ContainerMap from './components/ContainerMap.jsx'
import Video from './components/Video.jsx'
import Iframe from './components/Iframe.jsx'
import Options from './components/options.jsx'
import Smoke from './components/Smoke.jsx'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  body{
    font-family: 'Quantico', sans-serif;
  }
`

const App = styled.div``

export default props =>
  <App>
    <GlobalStyle />


    <Background id='dust' foto='/static/media/dust2Back.7f43cf3a.png'>
      <ShowMe id='dust' />
      <ContainerMap mapa='/static/media/mapaD2.09735c3e.png'>
        <Smoke id='DUSTcarroB' top='238px' left='97px' />
        <Smoke id='DUSTaltarB' top='58px' left='77px' />
        <Smoke id='DUSTmeioDoBombB' top='128px' left='107px' />
        <Smoke id='DUSTportaB' top='148px' left='157px' />
        <Smoke id='DUSTburacoB' top='68px' left='157px' />
        <Smoke id='DUSTmeioCt' top='165px' left='380px' />
        <Smoke id='DUSTportaMeio' top='260px' left='334px' />
        <Smoke id='DUSTcaixaGordaMeio' top='293px' left='357px' />
        <Smoke id='DUSTvaranda' top='173px' left='514px' />
        <Smoke id='DUSTbaseCtA' top='153px' left='544px' />
        <Smoke id='DUSTportaFundo' top='413px' left='554px' />
        <Smoke id='DUSTesquinaFundo' top='353px' left='674px' />
      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='mirage' foto='/static/media/mirageBack.2a0f18c7.png'>
      <ShowMe id='mirage' />
      <ContainerMap mapa='/static/media/mapMirage.763828ec.png' >
        <Smoke id='DUSTcarroB' top='238px' left='97px' />
      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='cache' foto='/static/media/cacheBack.ce44ae21.png'>
      <ShowMe id='cache' />
      <ContainerMap mapa='/static/media/mapCache.f859bed3.png' >

      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='inferno' foto='/static/media/infernoBack.d0c51b20.png'>
      <ShowMe id='inferno' />
      <ContainerMap mapa='/static/media/infernoMap.e444a196.png' >

      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='overpass' foto='/static/media/overpassBack.c966db7c.png'>
      <ShowMe id='overpass' />
      <ContainerMap mapa='/static/media/overpassMap.a82e4f52.png' >

      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>


    <Nav>
      <A mapa='#dust'>
        <Mapa foto='/static/media/dust2Nav.0affb091.png' id='dust'>
          <Circle class='selected' />
        </Mapa>
      </A>
      <A mapa='#mirage'>
        <Mapa foto='/static/media/mirageNav.330f8538.png' id='mirage'>
          <Circle />
        </Mapa>
      </A>
      <A mapa='#cache'>
        <Mapa foto='/static/media/cacheNav.696facb3.png' id='cache'>
          <Circle />
        </Mapa>
      </A>
      <A mapa='#inferno'>
        <Mapa foto='/static/media/infernoNav.c7814e03.jpg' id='inferno'>
          <Circle />
        </Mapa>
      </A>
      <A mapa='#overpass'>
        <Mapa foto='/static/media/overpassNav.dadb86c8.png' id='overpass'>
          <Circle />
        </Mapa>
      </A>
    </Nav>
  </App>