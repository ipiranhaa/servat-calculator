webpackHotUpdate('static/development/pages/index.js', {
  /***/ './src/components/CreateDialog.tsx':
    /*!*****************************************!*\
  !*** ./src/components/CreateDialog.tsx ***!
  \*****************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js'
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      )
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
      )
      /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @material-ui/core */ './node_modules/@material-ui/core/index.es.js'
      )
      /* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @material-ui/icons/Close */ './node_modules/@material-ui/icons/Close.js'
      )
      /* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__
      )
      /* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @material-ui/icons/Delete */ './node_modules/@material-ui/icons/Delete.js'
      )
      /* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__
      )
      /* harmony import */ var _material_ui_icons_Fastfood__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @material-ui/icons/Fastfood */ './node_modules/@material-ui/icons/Fastfood.js'
      )
      /* harmony import */ var _material_ui_icons_Fastfood__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        _material_ui_icons_Fastfood__WEBPACK_IMPORTED_MODULE_5__
      )
      /* harmony import */ var _actions_uiAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../actions/uiAction */ './src/actions/uiAction.tsx'
      )
      /* harmony import */ var _CreateForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./CreateForm */ './src/components/CreateForm.tsx'
      )
      /* harmony import */ var _actions_orderAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../actions/orderAction */ './src/actions/orderAction.tsx'
      )
      var _jsxFileName =
        '/Users/ipiranhaa/Documents/Git/servat-calculator/src/components/CreateDialog.tsx'

      var StyledAppBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__['default'])(
        _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['AppBar']
      ).withConfig({
        displayName: 'CreateDialog__StyledAppBar',
        componentId: 'egmxd9-0',
      })(["position:'relative';"])
      var StyledTypography = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__['default'])(
        _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['Typography']
      ).withConfig({
        displayName: 'CreateDialog__StyledTypography',
        componentId: 'egmxd9-1',
      })(['flex:1;'])
      var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[
        'default'
      ].div.withConfig({
        displayName: 'CreateDialog__StyledContainer',
        componentId: 'egmxd9-2',
      })(['padding:10vh 6vw;'])

      function CreateDialog(props) {
        var isOpen = props.isOpen,
          editingOrder = props.editingOrder,
          uiDispatch = props.uiDispatch,
          orderDispatch = props.orderDispatch

        var handleClose = function handleClose() {
          var action = Object(_actions_uiAction__WEBPACK_IMPORTED_MODULE_6__['toggleCreateDialog'])(
            false
          )
          uiDispatch(action)
        }

        var handleSubmitPerson = function handleSubmitPerson() {
          orderDispatch(
            Object(_actions_orderAction__WEBPACK_IMPORTED_MODULE_8__['submitNewPerson'])()
          )
          handleClose()
        }

        var handleRemoveOrder = function handleRemoveOrder(index) {
          var newOrders = editingOrder.orders.filter(function(_value, idx) {
            return idx !== index
          })
          orderDispatch(
            Object(_actions_orderAction__WEBPACK_IMPORTED_MODULE_8__['setNewOrders'])(newOrders)
          )
        }

        var isCanSave = editingOrder.name && editingOrder.orders.length > 0
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['Dialog'],
          {
            fullScreen: true,
            open: isOpen,
            onClose: handleClose,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            StyledAppBar,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['Toolbar'],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['IconButton'],
                {
                  color: 'inherit',
                  'aria-label': 'Close',
                  onClick: handleClose,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                    },
                    __self: this,
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                StyledTypography,
                {
                  variant: 'h6',
                  color: 'inherit',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                  },
                  __self: this,
                },
                'Add Order'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['Button'],
                {
                  color: 'inherit',
                  onClick: handleSubmitPerson,
                  disabled: !isCanSave,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                  },
                  __self: this,
                },
                'save'
              )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            StyledContainer,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _CreateForm__WEBPACK_IMPORTED_MODULE_7__['default'],
              {
                editingOrder: editingOrder,
                orderDispatch: orderDispatch,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                },
                __self: this,
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['List'],
              {
                dense: false,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                },
                __self: this,
              },
              editingOrder.orders.map(function(price, index) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['ListItem'],
                  {
                    key: index,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['ListItemAvatar'],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['Avatar'],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _material_ui_icons_Fastfood__WEBPACK_IMPORTED_MODULE_5___default.a,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                          },
                          __self: this,
                        }
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['ListItemText'],
                    {
                      primary: price,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                      },
                      __self: this,
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['ListItemSecondaryAction'],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _material_ui_core__WEBPACK_IMPORTED_MODULE_2__['IconButton'],
                      {
                        'aria-label': 'Delete',
                        onClick: function onClick() {
                          return handleRemoveOrder(index)
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95,
                          },
                          __self: this,
                        }
                      )
                    )
                  )
                )
              })
            )
          )
        )
      }

      /* harmony default export */ __webpack_exports__['default'] = CreateDialog

      /***/
    },
})
//# sourceMappingURL=index.js.83ca6485bd4a97a68245.hot-update.js.map
