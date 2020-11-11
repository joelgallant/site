import React from 'react'
import styled from '@emotion/styled'
import ResumeHeader from './ResumeHeader.mdx'

export default function () {
  return (
    <Container>
      <div className="header">
        <ResumeHeader />
      </div>
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

  .header {
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
  }
`
