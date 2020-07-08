import React from 'react';
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import backgroundDust from './components/img/dust2Back.png'
import backgroundCache from './components/img/cacheBack.png'
import backgroundInferno from './components/img/infernoBack.png'
import backgroundOverpass from './components/img/overpassBack.png'
import backgroundMirage from './components/img/mirageBack.png'
import mapaDust from './components/img/mapaD2.png'
import mapaMirage from './components/img/mapMirage.png'
import mapaInferno from './components/img/infernoMap.png'
import mapaOverpass from './components/img/overpassMap.png'
import mapaCache from './components/img/mapCache.png'
import navDust from './components/img/dust2Nav.png'
import navMirage from './components/img/mirageNav.png'
import navInferno from './components/img/infernoNav.jpg'
import navOverpass from './components/img/overpassNav.png'
import navCache from './components/img/cacheNav.png'

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


    <Background id='dust' foto={backgroundDust}>
      <ShowMe id='dust' />
      <ContainerMap mapa={mapaDust}>
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

    <Background id='mirage' foto={backgroundMirage}>
      <ShowMe id='mirage' />
      <ContainerMap mapa={mapaMirage} >
        <Smoke id='DUSTcarroB' top='238px' left='97px' />
      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='cache' foto={backgroundCache}>
      <ShowMe id='cache' />
      <ContainerMap mapa={mapaCache} >

      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='inferno' foto={backgroundInferno}>
      <ShowMe id='inferno' />
      <ContainerMap mapa={mapaInferno} >

      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='overpass' foto={backgroundOverpass}>
      <ShowMe id='overpass' />
      <ContainerMap mapa={mapaOverpass} >

      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>


    <Nav>
      <A mapa='#dust'>
        <Mapa foto={navDust} id='dust'>
          <Circle class='selected' />
        </Mapa>
      </A>
      <A mapa='#mirage'>
        <Mapa foto={navMirage} id='mirage'>
          <Circle />
        </Mapa>
      </A>
      <A mapa='#cache'>
        <Mapa foto={navCache} id='cache'>
          <Circle />
        </Mapa>
      </A>
      <A mapa='#inferno'>
        <Mapa foto={navInferno} id='inferno'>
          <Circle />
        </Mapa>
      </A>
      <A mapa='#overpass'>
        <Mapa foto={navOverpass} id='overpass'>
          <Circle />
        </Mapa>
      </A>
    </Nav>
  </App>