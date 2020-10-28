import React from 'react'
import styled from '@emotion/styled'

const Inner = styled.div``

type Props = React.PropsWithChildren<{}>

export default function ({ children }: Props) {
  return <Inner>{children}</Inner>
}
