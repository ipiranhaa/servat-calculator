import React from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const StyledTypography: React.ComponentType<any> = styled(Typography)`
  color: #e8eaf6 !important;
  line-height: 1.2 !important;
`

const StyledPriceContainer: React.ComponentType<any> = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`

interface Props {
  totalPrice: string
}

function Header(props: Props) {
  const { totalPrice } = props
  return (
    <AppBar position='static'>
      <Toolbar>
        <StyledPriceContainer>
          <StyledTypography variant='body2' color='textSecondary'>
            Total
          </StyledTypography>
          <StyledTypography variant='h6'>{totalPrice}</StyledTypography>
        </StyledPriceContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Header
