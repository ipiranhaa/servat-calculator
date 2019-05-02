import React from 'react'
import UserCardList from '../components/UserCardList'

interface Props {
  orderList: any[]
  orderDispatch: any
}

function ManageOrders(props: Props) {
  const { orderList, orderDispatch } = props

  return (
    <>
      <UserCardList orderList={orderList} orderDispatch={orderDispatch} />
    </>
  )
}

export default ManageOrders
