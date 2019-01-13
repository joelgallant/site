import React from 'react'
import PageContainer from '../components/PageContainer'
import Header from '../components/Header'
import Home from '../components/Home'

export default function () {
  return (
    <PageContainer title="Home">
      <Header />
      <Home />
    </PageContainer>
  )
}
