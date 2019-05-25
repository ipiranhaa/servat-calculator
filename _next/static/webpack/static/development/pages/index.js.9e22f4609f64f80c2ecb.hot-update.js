webpackHotUpdate('static/development/pages/index.js', {
  /***/ './src/reducers/orderReducer.tsx':
    /*!***************************************!*\
  !*** ./src/reducers/orderReducer.tsx ***!
  \***************************************/
    /*! exports provided: orderDefaultState, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'orderDefaultState',
        function() {
          return orderDefaultState
        }
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ './node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js'
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ './node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js'
      )

      var orderDefaultState = {
        orderList: [],
        editingOrder: {
          name: '',
          currentOrder: '',
          orders: [],
        },
      }
      /* harmony default export */ __webpack_exports__['default'] = function(state, action) {
        switch (action.type) {
          case 'ADD_ORDER':
            return Object(
              _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )({}, state, {
              orderList: [].concat(
                Object(
                  _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]
                )(state.orderList),
                [action.payload]
              ),
            })

          case 'SET_NEW_ORDER_NAME':
            return Object(
              _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )({}, state, {
              editingOrder: Object(
                _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ]
              )({}, state.editingOrder, {
                name: action.payload,
              }),
            })

          case 'SET_NEW_ORDER_PRICE':
            return Object(
              _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )({}, state, {
              editingOrder: Object(
                _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ]
              )({}, state.editingOrder, {
                currentOrder: action.payload,
              }),
            })

          case 'SET_NEW_ORDERS':
            return Object(
              _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )({}, state, {
              editingOrder: Object(
                _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ]
              )({}, state.editingOrder, {
                orders: action.payload,
              }),
            })

          case 'SUBMIT_NEW_ORDER_PRICE':
            return Object(
              _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )({}, state, {
              editingOrder: Object(
                _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ]
              )({}, state.editingOrder, {
                currentOrder: orderDefaultState.editingOrder.currentOrder,
                orders: [].concat(
                  Object(
                    _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                      'default'
                    ]
                  )(state.editingOrder.orders),
                  [state.editingOrder.currentOrder]
                ),
              }),
            })

          case 'SUBMIT_NEW_PERSON':
            return Object(
              _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )({}, state, {
              editingOrder: orderDefaultState.editingOrder,
              orderList: [].concat(
                Object(
                  _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]
                )(state.orderList),
                [
                  {
                    id: state.orderList.length,
                    name: state.editingOrder.name,
                    orders: state.editingOrder.orders,
                    total: state.editingOrder.orders.reduce(function(a, b) {
                      return a + b
                    }, 0),
                  },
                ]
              ),
            })

          default:
            return state
        }
      }

      /***/
    },
})
//# sourceMappingURL=index.js.9e22f4609f64f80c2ecb.hot-update.js.map
