import React from 'react'
import AddButton from '../components/AddButton'
import CreateOrders from './ManageOrders'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

function Main() {
  return (
    <>
      <Header />
      <CreateOrders />
      <AddButton />
      <Navigation />
    </>
  )
}

export default Main
