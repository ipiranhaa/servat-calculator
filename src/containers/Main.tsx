import React, { useReducer } from 'react'
import AddButton from '../components/AddButton'
import CreateOrders from './ManageOrders'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import menuReducer from '../reducers/menuReducer'
import { changeMenu } from '../actions/menuAction'

function Main() {
  const [{ selectedMenu }, dispatch] = useReducer(menuReducer, { selectedMenu: 'orders' })

  const handleNavigationChange = (e: React.FormEvent<HTMLInputElement>, value: any) => {
    let parsedValue = null

    switch (value) {
      case 1:
        parsedValue = 'settings'
        break

      case 2:
        parsedValue = 'report'
        break

      default:
        parsedValue = 'orders'
        break
    }

    const action: any = changeMenu(parsedValue)
    dispatch(action)
  }

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
      <Navigation selectedMenu={selectedMenu} onChange={handleNavigationChange} />
    </>
  )
}

export default Main
