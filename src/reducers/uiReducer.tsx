interface State {
  createDialog: {
    isOpen: boolean
  }
}

interface Action {
  type: string
  payload: any
}

export const uiDefaultState = {
  createDialog: {
    isOpen: false,
  },
}

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_CREATE_DIALOG':
      return {
        ...state,
        createDialog: {
          isOpen: action.payload,
        },
      }

    default:
      return state
  }
}
