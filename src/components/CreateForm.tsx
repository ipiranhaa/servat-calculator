import React from 'react'
import styled from 'styled-components'
import {
  TextField,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { setNewOrderName, setNewOrderPrice, submitNewOrderPrice } from '../actions/orderAction'

const StyledTextField: React.ComponentType<any> = styled(TextField)`
  width: 100%;
`

interface Props {
  editingOrder: {
    name: string
    currentOrder: number | string
    orders: number[]
  }
  orderDispatch: any
}

function CreateForm(props: Props) {
  const { editingOrder, orderDispatch } = props

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action: any = setNewOrderName(e.target.value)
    orderDispatch(action)
  }

  const handleOrderPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action: any = setNewOrderPrice(parseInt(e.target.value, 10))
    orderDispatch(action)
  }

  const handleSubmitPrice = () => {
    orderDispatch(submitNewOrderPrice())
  }

  const InputButton = (
    <InputAdornment position='end'>
      <IconButton aria-label='Send' onClick={handleSubmitPrice}>
        <AddIcon />
      </IconButton>
    </InputAdornment>
  )

  return (
    <form>
      <StyledTextField
        label='Name'
        value={editingOrder.name}
        onChange={handleNameChange}
        margin='normal'
        variant='outlined'
        autoFocus
      />
      <FormControl>
        <InputLabel htmlFor='adornment-order'>Price of a order</InputLabel>
        <Input
          id='adornment-order'
          type='number'
          endAdornment={InputButton}
          value={editingOrder.currentOrder}
          onChange={handleOrderPriceChange}
        />
      </FormControl>
    </form>
  )
}

export default CreateForm
