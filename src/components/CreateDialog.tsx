import React from 'react'
import styled from 'styled-components'
import {
  Dialog,
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import DeleteIcon from '@material-ui/icons/Delete'
import FoodIcon from '@material-ui/icons/Fastfood'
import { toggleCreateDialog } from '../actions/uiAction'
import CreateForm from './CreateForm'
import { setNewOrders, submitNewPerson } from '../actions/orderAction'

const StyledAppBar: React.ComponentType<any> = styled(AppBar)`
  position: 'relative';
`

const StyledTypography: React.ComponentType<any> = styled(Typography)`
  flex: 1;
`

const StyledContainer: React.ComponentType<any> = styled.div`
  padding: 10vh 6vw;
`

interface Props {
  isOpen: boolean
  editingOrder: {
    name: string
    currentOrder: number | string
    orders: number[]
  }
  uiDispatch: any
  orderDispatch: any
}

function CreateDialog(props: Props) {
  const { isOpen, editingOrder, uiDispatch, orderDispatch } = props

  const handleClose = () => {
    const action: any = toggleCreateDialog(false)
    uiDispatch(action)
  }

  const handleSubmitPerson = () => {
    orderDispatch(submitNewPerson())
    handleClose()
  }

  const handleRemoveOrder = (index: number) => {
    const newOrders = editingOrder.orders.filter((_value, idx) => idx !== index)
    orderDispatch(setNewOrders(newOrders))
  }

  // const Transition = (componentProps: any) => <Slide direction='up' {...componentProps} />

  return (
    <Dialog fullScreen open={isOpen} onClose={handleClose}>
      <StyledAppBar>
        <Toolbar>
          <IconButton color='inherit' aria-label='Close' onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <StyledTypography variant='h6' color='inherit'>
            Add Order
          </StyledTypography>
          <Button color='inherit' onClick={handleSubmitPerson}>
            save
          </Button>
        </Toolbar>
      </StyledAppBar>
      <StyledContainer>
        <CreateForm editingOrder={editingOrder} orderDispatch={orderDispatch} />
        <List dense={false}>
          {editingOrder.orders.map((price, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <FoodIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={price} />
              <ListItemSecondaryAction>
                <IconButton aria-label='Delete' onClick={() => handleRemoveOrder(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </StyledContainer>
    </Dialog>
  )
}

export default CreateDialog
