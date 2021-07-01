import React from 'react'
import styled from '@emotion/styled'
import HomeIntro from './HomeIntro.mdx'
import HomeSkills from './HomeSkills.mdx'
import HomeRecommendations from './HomeRecommendations.mdx'

export default function () {
  return (
    <Container>
      <Intro />
      <Skills />
      <Recommendations />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto 50px auto;

  @media (max-width: 900px) {
    width: 80vw;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5%;

  &:not(:first-of-type) {
    margin-top: 50px;
  }

  &:first-of-type {
    margin-top: 80px;

    @media (max-width: 750px) {
      margin-top: 100px;
    }
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 1em 0 0 0;
  }
`

const LeftBox = styled(Box)`
  align-self: flex-start;

  margin-right: 5%;
  @media (max-width: 900px) {
    margin-left: 0;
    margin-right: 0;
  }
`

const RightBox = styled(Box)`
  align-self: flex-end;
  text-align: end;

  margin-left: 5%;
  @media (max-width: 900px) {
    margin-left: 0;
    margin-right: 0;
  }

  // go back to the left when < 650px
  @media (max-width: 650px) {
    align-self: flex-start;
    text-align: start;
  }
`

const Intro = () => (
  <RightBox>
    <HomeIntro />
  </RightBox>
)

const Skills = () => (
  <LeftBox>
    <HomeSkills />
  </LeftBox>
)

const Recommendations = () => (
  <RightBox>
    <HomeRecommendations />
  </RightBox>
)
