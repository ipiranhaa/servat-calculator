import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100vw;
  padding: 0 6vw;
  overflow: auto;
  height: calc(100vh - 56px - 56px);
`

interface Props {
  children: any
}

function Container(prop: Props) {
  return <StyledContainer>{prop.children}</StyledContainer>
}

export default Container
