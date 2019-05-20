import React, { useReducer } from 'react'
import AddButton from '../components/AddButton'
import ManageOrders from './ManageOrders'
import Settings from './Settings'
import Report from './Report'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CreateDialog from '../components/CreateDialog'
import menuReducer, { menuDefaultState } from '../reducers/menuReducer'
import uiReducer, { uiDefaultState } from '../reducers/uiReducer'
import orderReducer, { orderDefaultState } from '../reducers/orderReducer'
import settingsReducer, { settingsDefaultState } from '../reducers/settingsReducer'
import { changeMenu } from '../actions/menuAction'
import formatNumber from '../utils/formatNumber'
import { calTotalPrice } from '../utils/calculate'

function Main() {
  const [{ selectedMenu }, menuDispatch] = useReducer(menuReducer, menuDefaultState)
  const [{ orderList, editingOrder }, orderDispatch] = useReducer(orderReducer, orderDefaultState)
  const [calculateSetting, settingsDispatch] = useReducer(settingsReducer, settingsDefaultState)
  const [{ createDialog }, uiDispatch] = useReducer(uiReducer, uiDefaultState)

  // Total price calculator
  const overallPrice = orderList.reduce((total, order) => {
    return total + order.total
  }, 0)

  const { isIncludeServiceCharge, isIncludeVat, serviceCharge, vat } = calculateSetting
  let totalPrice: string = overallPrice
  if (isIncludeServiceCharge && isIncludeVat) {
    totalPrice = formatNumber(calTotalPrice(overallPrice, serviceCharge, vat))
  } else if (isIncludeServiceCharge) {
    totalPrice = formatNumber(calTotalPrice(overallPrice, serviceCharge, null))
  } else if (isIncludeVat) {
    totalPrice = formatNumber(calTotalPrice(overallPrice, null, vat))
  }

  const handleNavigationChange = (_e: React.FormEvent<HTMLInputElement>, value: any) => {
    const action: any = changeMenu(value)
    menuDispatch(action)
  }

  let selectingPage = null

  switch (selectedMenu) {
    case 'settings':
      selectingPage = (
        <Settings calculateSetting={calculateSetting} settingsDispatch={settingsDispatch} />
      )
      break

    case 'report':
      selectingPage = <Report orderList={orderList} calculateSetting={calculateSetting} />
      break

    default:
      selectingPage = <ManageOrders orderList={orderList} orderDispatch={orderDispatch} />
      break
  }

  return (
    <>
      <Header totalPrice={totalPrice} />
      {selectingPage}
      <AddButton uiDispatch={uiDispatch} />
      <CreateDialog
        isOpen={createDialog.isOpen}
        editingOrder={editingOrder}
        uiDispatch={uiDispatch}
        orderDispatch={orderDispatch}
      />
      <Navigation selectedMenu={selectedMenu} onChange={handleNavigationChange} />
    </>
  )
}

export default Main
