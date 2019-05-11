interface State {
  orderList: any[]
  editingOrder: {
    name: string
    currentOrder: number | string
    orders: any[]
  }
}

interface Action {
  type: string
  payload: any
}

export const orderDefaultState: State = {
  orderList: [],
  editingOrder: {
    name: '',
    currentOrder: '',
    orders: [],
  },
}

export default (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orderList: [...state.orderList, action.payload],
      }

    case 'SET_NEW_ORDER_NAME':
      return {
        ...state,
        editingOrder: {
          ...state.editingOrder,
          name: action.payload,
        },
      }

    case 'SET_NEW_ORDER_PRICE':
      return {
        ...state,
        editingOrder: {
          ...state.editingOrder,
          currentOrder: action.payload,
        },
      }

    case 'SUBMIT_NEW_ORDER_PRICE':
      return {
        ...state,
        editingOrder: {
          ...state.editingOrder,
          currentOrder: orderDefaultState.editingOrder.currentOrder,
          orders: [...state.editingOrder.orders, state.editingOrder.currentOrder],
        },
      }

    case 'SUBMIT_NEW_PERSON':
      return {
        ...state,
        orderList: [
          ...state.orderList,
          {
            id: state.orderList.length,
            name: state.editingOrder.name,
            orders: state.editingOrder.orders,
            total: state.editingOrder.orders.reduce((a, b) => a + b, 0),
          },
        ],
      }

    default:
      return state
  }
}
