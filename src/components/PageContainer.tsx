import React from 'react'
import styled from '@emotion/styled'

const Inner = styled.div`
  transform: translateZ(0);
  overflow: hidden !important;
`

type Props = React.PropsWithChildren<{}>

export default function ({ children }: Props) {
  return <Inner>{children}</Inner>
}
