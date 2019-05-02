interface State {
  selectedMenu: string
}

interface Action {
  type: string
  payload: State['selectedMenu']
}

export const menuDefaultState = {
  selectedMenu: 'orders',
}

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_MENU':
      return {
        ...state,
        selectedMenu: action.payload,
      }

    default:
      return state
  }
}
