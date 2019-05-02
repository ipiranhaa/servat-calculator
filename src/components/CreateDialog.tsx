import React from 'react'
import styled from 'styled-components'
import { Dialog, AppBar, Button, Toolbar, IconButton, Typography, Slide } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { toggleCreateDialog } from '../actions/uiAction'

const StyledAppBar: React.ComponentType<any> = styled(AppBar)`
  position: 'relative';
`

const StyledTypography: React.ComponentType<any> = styled(Typography)`
  flex: 1;
`

interface Props {
  isOpen: boolean
  uiDispatch: any
}

function CreateDialog(props: Props) {
  const { isOpen, uiDispatch } = props

  const handleClose = () => {
    const action: any = toggleCreateDialog(false)
    uiDispatch(action)
  }

  const Transition = (componentProps: any) => <Slide direction="up" {...componentProps} />

  return (
    <Dialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
      <StyledAppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="Close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <StyledTypography variant="h6" color="inherit">
            Add Order
          </StyledTypography>
          <Button color="inherit" onClick={handleClose}>
            save
          </Button>
        </Toolbar>
      </StyledAppBar>
    </Dialog>
  )
}

export default CreateDialog
