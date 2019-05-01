interface State {
  orderList: []
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

// const all: any[] = [{}]
export const orderDefaultState = {
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
