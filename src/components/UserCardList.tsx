import React from 'react'
import styled from 'styled-components'
import UserCardItem from './UserCardItem'

interface Props {
  orderList: any[]
  orderDispatch: any
}

interface Order {
  id: number
  name: string
  total: number
}

const StyledContainer = styled.div`
  position: fixed;
  width: 100vw;
  padding: 0 6vw;
  overflow: auto;
  height: calc(100vh - 56px - 56px);
`

function UserCardList(props: Props) {
  const { orderList } = props

  return (
    <StyledContainer>
      <UserCardItem id={11} name="PLs" totalPrice={500} />
      <UserCardItem id={12} name="PLs" totalPrice={500} />
      <UserCardItem id={13} name="PLs" totalPrice={500} />
      {orderList.map((order: Order) => (
        <UserCardItem key={order.id} id={order.id} name={order.name} totalPrice={order.total} />
      ))}
    </StyledContainer>
  )
}

export default UserCardList
