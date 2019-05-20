import React from 'react'
import UserCardList from '../components/UserCardList'
import Container from '../components/Container'
import EmptyLabel from '../components/EmptyLabel'

interface Props {
  orderList: any[]
  orderDispatch: any
}

function ManageOrders(props: Props) {
  const { orderList, orderDispatch } = props

  return (
    <Container>
      {orderList.length === 0 && <EmptyLabel />}
      <UserCardList orderList={orderList} orderDispatch={orderDispatch} />
    </Container>
  )
}

export default ManageOrders
