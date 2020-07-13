import React from 'react';
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import './assets/font-awesome-4.7.0/css/font-awesome.css'
import img from './assets/images.js'

import Background from './components/Background.jsx'
import BackgroundLoader from './components/BackgroundLoader.jsx'
import Nav from './components/Nav.jsx'
import NavLoader from './components/NavLoader.jsx'
import A from './components/A.jsx'
import Mapa from './components/Mapa.jsx'
import Circle from './components/circle.jsx'
import ShowMe from './components/ShowMe.jsx'
import ContainerMap from './components/ContainerMap.jsx'
import Video from './components/Video.jsx'
import Iframe from './components/Iframe.jsx'
import Options from './components/options.jsx'
import Smoke from './components/Smoke.jsx'
import Loader from './components/Loader.jsx'
import Mensagem from './components/Mensagem.jsx'
import Social from './components/Social.jsx'

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

const App = styled.div`
  background-color: #6400B2;
`

export default props =>
  <App>
    <GlobalStyle />

    <Loader />
    <BackgroundLoader>
      <NavLoader />
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </BackgroundLoader>

    <Mensagem />
    <Social>
      <a href='https://github.com/RobertDS07/CounterStrategy' target='_blank'><i className="fa fa-github fa-3x"></i></a>
    </Social>

    <Background id='dust' foto={img.backgroundDust}>
      <ShowMe id='dust' />
      <ContainerMap mapa={img.mapaDust}>
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

    <Background id='mirage' foto={img.backgroundMirage}>
      <ShowMe id='mirage' />
      <ContainerMap mapa={img.mapaMirage} >
        <Smoke id='MIRAGEcabecinha' top='545px' left='410px' />
        <Smoke id='MIRAGEctA' top='715px' left='337px' />
        <Smoke id='MIRAGEpassagemA' top='557px' left='377px' />
        <Smoke id='MIRAGEjanelao' top='327px' left='297px' />
        <Smoke id='MIRAGEliga' top='407px' left='372px' />
        <Smoke id='MIRAGEl' top='127px' left='242px' />
        <Smoke id='MIRAGEtapete' top='23px' left='222px' />
        <Smoke id='MIRAGEvan' top='26px' left='57px' />
        <Smoke id='MIRAGEjanelaB' top='256px' left='120px' />
        <Smoke id='MIRAGEbombB' top='100px' left='107px' />
        <Smoke id='MIRAGEforest' top='70px' left='50px' />
      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='cache' foto={img.backgroundCache}>
      <ShowMe id='cache' />
      <ContainerMap mapa={img.mapaCache} >
        <Smoke id='CACHEmeioTr' top='412px' left='390px' />
        <Smoke id='CACHEportaGaragem' top='109px' left='337px' />
        <Smoke id='CACHEbaixoB' top='659px' left='197px' />
        <Smoke id='CACHEportaMeio' top='472px' left='207px' />
        <Smoke id='CACHEentradaA' top='182px' left='197px' />
        <Smoke id='CACHEdentroB' top='699px' left='257px' />
        <Smoke id='CACHEceuB' top='615px' left='207px' />
        <Smoke id='CACHEestreitoB' top='689px' left='207px' />
        <Smoke id='CACHEentradaB' top='600px' left='307px' />
        <Smoke id='CACHEladoDaAzul' top='49px' left='257px' />
        <Smoke id='CACHEtoxico' top='252px' left='237px' />
        <Smoke id='CACHEcaixaMeioCache' top='372px' left='267px' />
      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='inferno' foto={img.backgroundInferno}>
      <ShowMe id='inferno' />
      <ContainerMap mapa={img.mapaInferno} >
        <Smoke id='INFERNOcaixao' top='63px' left='386px' />
        <Smoke id='INFERNOdentroDoBombBMarota' top='162px' left='405px' />
        <Smoke id='INFERNOCtEntradaB' top='147px' left='476px' />
        <Smoke id='INFERNOentradaDoBombB' top='127px' left='566px' />
        <Smoke id='INFERNOdentroDoBombB' top='141px' left='394px' />
        <Smoke id='INFERNOcarro' top='283px' left='364px' />
        <Smoke id='INFERNOnip' top='466px' left='555px' />
        <Smoke id='INFERNOvarandaTapete' top='654px' left='683px' />
        <Smoke id='INFERNOareia' top='629px' left='713px' />
        <Smoke id='INFERNObiblioteca' top='482px' left='709px' />
        <Smoke id='INFERNOarco' top='401px' left='624px' />
        <Smoke id='INFERNOB' top='272px' left='400px' />
      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>

    <Background id='overpass' foto={img.backgroundOverpass}>
      <ShowMe id='overpass' />
      <ContainerMap mapa={img.mapaOverpass} >
        <Smoke id='OVERPASSlixeiraA' top='110px' left='387px' />
        <Smoke id='OVERPASSbanco' top='90px' left='297px' />
        <Smoke id='OVERPASSceu' top='175px' left='457px' />
        <Smoke id='OVERPASSsapao' top='341px' left='683px' />
        <Smoke id='OVERPASStoxicoB' top='196px' left='607px' />
        <Smoke id='OVERPASSentradaDoComSaida' top='253px' left='566px' />
        <Smoke id='OVERPASSdentroBombA' top='141px' left='359px' />
        <Smoke id='OVERPASSdentroBombB' top='236px' left='577px' />
        <Smoke id='OVERPASSantesDoSapao' top='457px' left='672px' />
        <Smoke id='OVERPASSbanheiroMarota' top='419px' left='429px' />
        <Smoke id='OVERPASSrua' top='323px' left='348px' />
        <Smoke id='OVERPASSportaBanheiro' top='391px' left='252px' />
      </ContainerMap>
      <Video>
        <Iframe />
        <Options></Options>
      </Video>
    </Background>


    <Nav>
      <A mapa='#dust'>
        <Mapa foto={img.navDust} id='dust'>
          <Circle class='selected' />
        </Mapa>
      </A>
      <A mapa='#mirage'>
        <Mapa foto={img.navMirage} id='mirage'>
          <Circle />
        </Mapa>
      </A>
      <A mapa='#cache'>
        <Mapa foto={img.navCache} id='cache'>
          <Circle />
        </Mapa>
      </A>
      <A mapa='#inferno'>
        <Mapa foto={img.navInferno} id='inferno'>
          <Circle />
        </Mapa>
      </A>
      <A mapa='#overpass'>
        <Mapa foto={img.navOverpass} id='overpass'>
          <Circle />
        </Mapa>
      </A>
    </Nav>
  </App>