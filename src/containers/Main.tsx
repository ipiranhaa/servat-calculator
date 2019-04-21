import React, { useContext } from 'react'
import AddButton from '../components/AddButton'
import CreateOrders from './ManageOrders'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { menuContext } from '../contexts/globalContext'

function Main() {
  const { selectedMenu } = useContext(menuContext)
  let selectingPage = null

  switch (selectedMenu) {
    case 'settings':
      selectingPage = <div>Setting</div>
      break

    case 'report':
      selectingPage = <div>Report</div>
      break

    default:
      selectingPage = <CreateOrders />
      break
  }

  return (
    <>
      <Header />
      {selectingPage}
      <AddButton />
      <Navigation selectedMenu={selectedMenu} />
    </>
  )
}

export default Main
