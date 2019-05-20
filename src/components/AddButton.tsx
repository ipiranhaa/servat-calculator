import React from 'react'
import styled from 'styled-components'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { toggleCreateDialog } from '../actions/uiAction'

const FabContainer = styled.div`
  position: fixed;
  text-align: center;
  width: 100%;
  bottom: 64px;
`

interface Props {
  uiDispatch: any
}

function AddButton(props: Props) {
  const { uiDispatch } = props

  const handleClickAdd = () => {
    const action: any = toggleCreateDialog(true)
    uiDispatch(action)
  }

  return (
    <FabContainer>
      <Fab color='primary' aria-label='Add' onClick={handleClickAdd}>
        <AddIcon />
      </Fab>
    </FabContainer>
  )
}

export default AddButton
