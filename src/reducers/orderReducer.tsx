interface State {
  orderList: any[]
}

interface Action {
  type: string
  payload: {
    id: number
    name: string
    orders: number[]
    total: number
  }
}

export const orderDefaultState: State = {
  orderList: [],
}

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        orderList: [...state.orderList, action.payload],
      }

    default:
      return state
  }
}
