import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

interface Props {
  children: any
}

const StyledGrid: React.ComponentType<any> = styled(Grid)`
  height: 100vh;
`

function Layout(props: Props) {
  const { children } = props

  return (
    <Grid container>
      <StyledGrid item xs sm md lg xl>
        {children}
      </StyledGrid>
    </Grid>
  )
}

export default Layout
