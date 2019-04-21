import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import BackIcon from '@material-ui/icons/NavigateBefore'
import NextIcon from '@material-ui/icons/NavigateNext'

const StyledContainer = styled.div`
  position: fixed;
  text-align: center;
  width: 100%;
  bottom: 0;
`

const StyledButton = styled(Button)`
  border-radius: 0 !important;
  line-height: 2.9 !important;
  width: ${props => (props.half ? '50%' : '100%')};
`

function BottomNavigation({ onBack, onNext }) {
  let button = null
  if (typeof onBack === 'function' && typeof onNext === 'function') {
    button = (
      <>
        <StyledButton half variant="contained" color="secondary" onClick={onBack}>
          <BackIcon />
          Back
        </StyledButton>
        <StyledButton half variant="contained" color="secondary" onClick={onNext}>
          Next
          <NextIcon />
        </StyledButton>
      </>
    )
  } else if (typeof onBack === 'function') {
    button = (
      <StyledButton variant="contained" color="secondary" onClick={onBack}>
        <BackIcon />
        Back
      </StyledButton>
    )
  } else if (typeof onNext === 'function') {
    button = (
      <StyledButton variant="contained" color="secondary" onClick={onNext}>
        Next
        <NextIcon />
      </StyledButton>
    )
  }

  return <StyledContainer>{button}</StyledContainer>
}

BottomNavigation.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func,
}

export default BottomNavigation
