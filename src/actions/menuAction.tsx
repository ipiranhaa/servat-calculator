import { createAction } from 'redux-actions'

export const changeMenu = createAction('SET_MENU', (menuOrder: number) => {
  switch (menuOrder) {
    case 1:
      return 'settings'

    case 2:
      return 'report'

    default:
      return 'orders'
  }
})
