import React, { createContext, useReducer, useContext } from 'react'
import menuReducer from '../reducers/menuReducer'

const defaultState = {
  selectedMenu: 'orders',
}

export const MenuContext = createContext(defaultState)

export const MenuConsumer = MenuContext.Consumer

interface Props {
  children: any
}

export const MenuProvider = ({ children }: Props) => (
  <MenuContext.Provider value={useReducer(menuReducer, defaultState)}>
    {children}
  </MenuContext.Provider>
)

export const useMenuValue = useContext(MenuContext)
