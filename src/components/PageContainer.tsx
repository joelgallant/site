import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import favicon from '../favicon.ico';

const Inner = styled.div`
  overflow: hidden !important;
`

type Props = React.PropsWithChildren<{ title: string }>

export default function ({ title, children }: Props) {
  return (
    <Inner>
      <Helmet title={title}>
        <link rel="icon" href={favicon} />
      </Helmet>

      {children}
    </Inner>
  )
}
