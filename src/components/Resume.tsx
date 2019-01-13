import React from 'react'
import styled from '@emotion/styled'
import ResumeHeader from './ResumeHeader.mdx'
import ResumeSkills from './ResumeSkills.mdx'
import ResumeTools from './ResumeTools.mdx'
import ResumeExperience from './ResumeExperience.mdx'
import ResumeProjects from './ResumeProjects.mdx'
import ResumeEducation from './ResumeEducation.mdx'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import gitlab from '../images/gitlab.svg'
import mail from '../images/mail.svg'

// Generating a PDF:
// - Chrome ctrl-p
// - Customized margins, 10mm, 0, 6.5mm, 0

export default function () {
  return (
    <Container>
      <Header>
        <ResumeHeader />
      </Header>
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <ListSection>
          <ResumeSkills />
        </ListSection>
      </Section>
      <Section style={{ marginTop: 0 }}>
        <SectionTitle>Tools</SectionTitle>
        <ListSection>
          <ResumeTools />
        </ListSection>
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
          <ResumeProjects />
        </SectionContent>
      </Section>
      <Section style={{ marginTop: 20 }}>
        <SectionTitle style={{ height: 40 }}>Education</SectionTitle>
        <SectionContent>
          <ResumeEducation />
        </SectionContent>
      </Section>

      <ImageSection>
        <a href="https://www.linkedin.com/in/gallantjoel">
          <img src={linkedin} height="40px" />
        </a>

        <a href="https://github.com/joelgallant">
          <img src={github} height="40px" />
        </a>

        <a href="https://gitlab.com/joelgallant">
          <img src={gitlab} height="40px" />
        </a>

        <a href="mailto:resume@joelgallant.io">
          <img src={mail} height="40px" />
        </a>
      </ImageSection>

      <NotInPrint>
        <a href="../resume.pdf">PDF Version</a>
      </NotInPrint>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto 50px auto;

  p {
    font-size: 0.9em;
  }

  @media print {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-25px);
  }

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

  @media print {
    margin-top: 0;
  }
`

const SectionTitle = styled.div`
  height: 60px;
  min-width: 100px;
  flex-basis: 0;

  padding-left: 40px;
  padding-right: 30px;
  margin-right: 20px;
  border-right: 1px solid #999;

  font-size: 1.1em;
  font-style: italic;
  font-weight: bold;
  font-family: Serif;
  text-align: end;

  @media print {
    padding-left: 0;
    min-width: 80px;
  }
`

const SectionContent = styled.div`
  flex: 1;

  h2,
  h3,
  h4 {
    margin: 0;
    position: relative;

    &:not(:first-of-type) {
      margin-top: 30px;
    }

    @media print {
      margin-top: 1px !important;
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

  p {
    margin-top: 10px;
  }

  h2 {
    font-size: 1.4em;
  }

  h3 {
    font-size: 1.1em;
  }
`

const ListSection = styled(SectionContent)`
  display: flex;
  flex-direction: row;

  .list {
    flex: calc(1 / 3);
    margin-left: 15px;

    h4 {
      text-decoration: underline;
      margin-bottom: 10px;
    }

    ul {
      margin-top: 0;
      padding-left: 15px;
    }
  }
`

const ImageSection = styled(SectionContent)`
  display: flex;
  justify-content: center;
  margin: 60px 0 40px 0;

  a {
    margin: 0 15px;
  }
`

const NotInPrint = styled.div`
  @media print {
    display: none;
  }

  display: flex;
  justify-content: center;
`
