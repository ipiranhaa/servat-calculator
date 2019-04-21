import React from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const StyledTypography: React.ComponentType<any> = styled(Typography)`
  line-height: 1.2 !important;
`

const StyledPriceContainer: React.ComponentType<any> = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledPriceContainer>
          <StyledTypography variant="body2" color="textSecondary">
            Total
          </StyledTypography>
          <StyledTypography variant="h6">9999</StyledTypography>
        </StyledPriceContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Header
