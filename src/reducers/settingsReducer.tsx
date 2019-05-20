interface State {
  isIncludeServiceCharge: boolean
  isIncludeVat: boolean
  serviceCharge: number
  vat: number
}

interface Action {
  type: string
  payload: any
}

export const settingsDefaultState = {
  isIncludeServiceCharge: true,
  isIncludeVat: true,
  serviceCharge: 10,
  vat: 7,
}

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_SERVICE_CHARGE_TOGGLE':
      return {
        ...state,
        isIncludeServiceCharge: action.payload,
      }

    case 'SET_VAT_TOGGLE':
      return {
        ...state,
        isIncludeVat: action.payload,
      }

    case 'SET_SERVICE_CHARGE':
      return {
        ...state,
        serviceCharge: action.payload,
      }

    case 'SET_VAT':
      return {
        ...state,
        vat: action.payload,
      }

    default:
      return state
  }
}
