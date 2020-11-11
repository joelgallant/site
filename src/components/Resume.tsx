import React from 'react'
import styled from '@emotion/styled'
import ResumeHeader from './ResumeHeader.mdx'
import ResumeExperience from './ResumeExperience.mdx'

export default function () {
  return (
    <Container>
      <Header>
        <ResumeHeader />
      </Header>
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <SectionContent>
          To be filled
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <SectionContent>
          <ResumeExperience />
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Achievements & Projects</SectionTitle>
        <SectionContent>
          To be filled
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Education</SectionTitle>
        <SectionContent>
          To be filled
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Find Me</SectionTitle>
        <SectionContent>
          To be filled
        </SectionContent>
      </Section>
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

  font-family: Sans-Serif;

  a[href] {
    color: black;
    text-decoration: none;
    border-bottom: 1px dotted #999;
  }
`

const Header = styled.div`
  h2 {
    font-size: 2.5em;
    border-bottom: 1px solid #999;
    padding-bottom: 5px;
    margin: 25px 0;
  }

  p:last-of-type {
    color: #0000008c;
    font-style: italic;
    font-family: Serif;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

const SectionTitle = styled.div`
  height: 60px;
  flex: 0 0 15%;
  font-size: 1.1em;
  font-style: italic;
  font-weight: bold;
  font-family: Serif;
  border-right: 1px solid #999;
  padding-left: 50px;
  padding-right: 30px;
  margin-right: 20px;
`

const SectionContent = styled.div`
  flex: 0 0 fit-content;

  h2 {
    margin: 0;
    font-size: 1.4em;
    position: relative;

    &:not(:first-of-type) {
      margin-top: 30px;
    }

    span {
      position: absolute;
      bottom: 0;
      right: 0;

      font-size: 0.6em;
      font-family: Serif;
      color: #757575;
    }
  }
`
