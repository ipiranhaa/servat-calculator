import menuReducer from './menuReducer'

interface State {
  menu: {
    selectedMenu: string
  }
}

interface Action {
  type: string
  payload: any
}

const mainReducer = ({ menu }: State, action: Action) => ({
  menu: menuReducer(menu, action),
})

export default mainReducer
