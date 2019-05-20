import React from 'react'
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

function UserCardList(props: Props) {
  const { orderList } = props

  return (
    <>
      {orderList.map((order: Order) => (
        <UserCardItem key={order.id} id={order.id} name={order.name} totalPrice={order.total} />
      ))}
    </>
  )
}

export default UserCardList
