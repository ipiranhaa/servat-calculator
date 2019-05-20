import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const StyledTypography: React.ComponentType<any> = styled(Typography)`
  padding: 12vh 0;
`

function EmptyLabel() {
  return (
    <StyledTypography variant='subtitle1' align='center' color='textSecondary' gutterBottom>
      Please add some order first.
    </StyledTypography>
  )
}

export default EmptyLabel
