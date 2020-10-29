import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useWindowSize } from 'react-use'

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const HeaderLeft = styled.div`
  margin: 1.5em 0 0 1.5em;
  font-size: 1.25em;
  line-height: 1.7em;

  @media (max-width: 750px) {
    margin: 1.5em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const HeaderRight = styled.div`
  margin: 2.5em 2em 0 0;
  font-size: 0.9em;
  line-height: 1.2em;

  @media (max-width: 750px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const Name = styled.div`
  color: white;
  font-weight: bold;
  letter-spacing: 0.02em;
  @media (max-width: 750px) { text-align: center; }
`

const Subtitle = styled.div`
  display: inline;
  color: white;
  letter-spacing: 0.06em;
  opacity: 90%;

  @media (max-width: 750px) { text-align: center; }
`

const NavLink = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 1.5em;
  letter-spacing: 0.05em;
  color: #251a27;

  @media (max-width: 750px) {
    color: white;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: #5f3548;
    opacity: 40%;
  }

  &:hover {
    &:before,
    &:after {
      opacity: 90%;
    }
  }

  &:before {
    left: 10%;
    bottom: -4px;
    height: 3px;
    width: 60%;
  }

  &:after {
    left: 35%;
    bottom: -10px;
    height: 3px;
    width: 60%;
  }
`

export default function () {
  return (
    <>
      <Background />

      <Header>
        <HeaderLeft>
          <Name>Joel Gallant</Name>
          <Subtitle>Software Developer</Subtitle>
          <Icons />
        </HeaderLeft>
        <HeaderRight>
          <Link to="/resume">
            <NavLink>Resume</NavLink>
          </Link>
          <Link to="/about">
            <NavLink>About</NavLink>
          </Link>
        </HeaderRight>
      </Header>
    </>
  )
}

const animationLength = 10

const BackgroundSvg = styled.svg`
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  min-height: 230px;
  max-height: 270px;

  @media (max-width: 750px) {
    height: 400px;
    max-height: 400px;
    // even it out on mobile devices
    transform: rotate(10deg) scale(1.5) translateY(10px) translateX(-40px);
  }
`

const Background = () => {
  const { width } = useWindowSize()

  return (
    <BackgroundSvg viewBox="0 0 1000 300" preserveAspectRatio="none">
      <g transform="">
        <linearGradient id="lg" x1="0" x2="1" y1="0" y2="0">
          <stop stop-color="var(--header-color)" offset="0"></stop>
          <stop stop-color="var(--header-color-gradient-end)" offset="1"></stop>
        </linearGradient>
        <path d="" fill="url(#lg)" opacity="0.5">
          <animate
            attributeName="d"
            dur={`${animationLength * 1}s`}
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            values="M0 0L 0 230.43468811277629Q 125 245.72334193585212  250 228.92656639025046T 500 156.85273614093924T 750 145.17993515277283T 1000 104.22676008076186L 1000 0 Z;M0 0L 0 232.73000997570148Q 125 212.94513603690643  250 191.8792079424308T 500 183.3904075017759T 750 149.0364032269452T 1000 135.7283379556738L 1000 0 Z;M0 0L 0 207.09121329054608Q 125 204.885542024737  250 184.17543281254325T 500 172.87224153999412T 750 110.6251819027104T 1000 81.50848037260053L 1000 0 Z;M0 0L 0 230.43468811277629Q 125 245.72334193585212  250 228.92656639025046T 500 156.85273614093924T 750 145.17993515277283T 1000 104.22676008076186L 1000 0 Z"
          ></animate>
        </path>
        <path d="" fill="url(#lg)" opacity="0.5">
          <animate
            attributeName="d"
            dur={`${animationLength * 1.25}s`}
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            values="M0 0L 0 222.4901766794592Q 125 207.41934349981898  250 189.2166178049621T 500 138.51059644625164T 750 163.04626691990268T 1000 77.57969886202751L 1000 0 Z;M0 0L 0 232.34735103551623Q 125 274.61592409186744  250 233.89552388377265T 500 182.1506199872218T 750 168.46380433409348T 1000 121.10553894561231L 1000 0 Z;M0 0L 0 245.93024273801004Q 125 249.30287866024176  250 214.70014068204097T 500 183.54529346351953T 750 182.85496374338268T 1000 119.52405207680543L 1000 0 Z;M0 0L 0 222.4901766794592Q 125 207.41934349981898  250 189.2166178049621T 500 138.51059644625164T 750 163.04626691990268T 1000 77.57969886202751L 1000 0 Z"
          ></animate>
        </path>
        <path d="" fill="url(#lg)" opacity="0.5">
          <animate
            attributeName="d"
            dur={`${animationLength * 1.5}s`}
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            values="M0 0L 0 251.6923975244882Q 125 224.51672432666436  250 204.6218032600524T 500 156.6773697895906T 750 110.27502908914505T 1000 84.56628509421617L 1000 0 Z;M0 0L 0 231.59081872310196Q 125 245.26266106401343  250 230.83740439503796T 500 200.67732211615834T 750 167.30677267462937T 1000 100.37962398937294L 1000 0 Z;M0 0L 0 231.313326242712Q 125 221.84532811447525  250 187.27638401193934T 500 136.99039319605174T 750 168.66185285979594T 1000 88.7541842534776L 1000 0 Z;M0 0L 0 251.6923975244882Q 125 224.51672432666436  250 204.6218032600524T 500 156.6773697895906T 750 110.27502908914505T 1000 84.56628509421617L 1000 0 Z"
          ></animate>
        </path>
        <path d="" fill="url(#lg)" opacity="0.4">
          <animate
            attributeName="d"
            dur={`${animationLength * 1.75}s`}
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            values="M0 0L 0 257.1018609084118Q 125 229.3885793390253  250 205.41187801603067T 500 156.862667124594T 750 158.78838266828228T 1000 113.03565895038528L 1000 0 Z;M0 0L 0 202.00504889660755Q 125 210.70234622499166  250 178.59896514166527T 500 191.62797595659322T 750 138.67008500132022T 1000 106.47383387916294L 1000 0 Z;M0 0L 0 210.35596937593607Q 125 206.56970569881247  250 192.37597681336166T 500 200.18824597084205T 750 126.3577276001549T 1000 71.56954194779559L 1000 0 Z;M0 0L 0 257.1018609084118Q 125 229.3885793390253  250 205.41187801603067T 500 156.862667124594T 750 158.78838266828228T 1000 113.03565895038528L 1000 0 Z"
          ></animate>
        </path>
        <path d="" fill="url(#lg)" opacity="0.3">
          <animate
            attributeName="d"
            dur={`${animationLength * 2}s`}
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            values="M0 0L 0 208.12625880867176Q 125 283.6114303730666  250 238.23186919670707T 500 185.65332790554046T 750 140.4395941621321T 1000 85.55278974378395L 1000 0 Z;M0 0L 0 223.38094291722Q 125 242.89404511727392  250 227.05793110528035T 500 162.11358391693977T 750 157.93292573347156T 1000 104.0724850149968L 1000 0 Z;M0 0L 0 217.6716272150922Q 125 220.18133470311543  250 191.54323170195204T 500 179.15980935358678T 750 162.97144349860974T 1000 121.46395657565516L 1000 0 Z;M0 0L 0 208.12625880867176Q 125 283.6114303730666  250 238.23186919670707T 500 185.65332790554046T 750 140.4395941621321T 1000 85.55278974378395L 1000 0 Z"
          ></animate>
        </path>
      </g>
    </BackgroundSvg>
  )
}

const IconsContainer = styled.div`
  display: inline;
  margin-left: 0.4em;
  & > * {
    margin: 0 0.25em;
  }
`

const IconSvg = styled.svg`
  margin-bottom: -3px;
  height: 1em;
  fill: white;
`

const Icons = () => (
  <IconsContainer>
    <LinkedIn />
    <Github />
  </IconsContainer>
)

const LinkedIn = () => (
  <Link to="https://www.linkedin.com/in/gallantjoel">
    <IconSvg
      role="img"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="linkedin">linkedin</title>

      <g id="linkedin">
        <path d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M11.4,24.2H7.5V12.5h3.9V24.2z M9.4,10.9L9.4,10.9c-1.3,0-2.2-0.9-2.2-2c0-1.2,0.9-2,2.2-2s2.2,0.9,2.2,2C11.6,10,10.8,10.9,9.4,10.9z M25.4,24.2h-3.9v-6.3 c0-1.6-0.6-2.7-2-2.7c-1.1,0-1.7,0.7-2,1.4c-0.1,0.3-0.1,0.6-0.1,1v6.5h-3.9c0,0,0.1-10.6,0-11.7h3.9v1.7c0.5-0.8,1.4-1.9,3.5-1.9 c2.6,0,4.5,1.7,4.5,5.3V24.2z"></path>
      </g>
    </IconSvg>
  </Link>
)

const Github = () => (
  <Link to="https://github.com/joelgallant">
    <IconSvg
      role="img"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="github">github</title>
      <g>
        <path d="M16.3,2C8,2,1.3,8.7,1.3,17 c0,6.6,4.3,12.2,10.2,14.2c0.7,0.1,1-0.3,1-0.7c0-0.4,0-1.3,0-2.5c-4.2,0.9-5-2-5-2c-0.7-1.7-1.7-2.2-1.7-2.2 c-1.4-0.9,0.1-0.9,0.1-0.9c1.5,0.1,2.3,1.5,2.3,1.5c1.3,2.3,3.5,1.6,4.4,1.2c0.1-1,0.5-1.6,1-2c-3.3-0.4-6.8-1.7-6.8-7.4 c0-1.6,0.6-3,1.5-4c-0.2-0.4-0.7-1.9,0.1-4c0,0,1.3-0.4,4.1,1.5c1.2-0.3,2.5-0.5,3.7-0.5c1.3,0,2.6,0.2,3.7,0.5 c2.9-1.9,4.1-1.5,4.1-1.5c0.8,2.1,0.3,3.6,0.1,4c1,1,1.5,2.4,1.5,4c0,5.8-3.5,7-6.8,7.4c0.5,0.5,1,1.4,1,2.8c0,2,0,3.6,0,4.1 c0,0.4,0.3,0.9,1,0.7c5.9-2,10.2-7.6,10.2-14.2C31.2,8.7,24.5,2,16.3,2z"></path>
      </g>
    </IconSvg>
  </Link>
)
