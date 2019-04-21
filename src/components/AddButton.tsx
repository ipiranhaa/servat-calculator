import React from 'react'
import styled from 'styled-components'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const FabContainer = styled.div`
  position: fixed;
  text-align: center;
  width: 100%;
  bottom: 0;
  padding-bottom: 16%;
`

function AddButton() {
  return (
    <FabContainer>
      <Fab color="primary" aria-label="Add">
        <AddIcon />
      </Fab>
    </FabContainer>
  )
}

export default AddButton
