webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/CartContext */ "./contexts/CartContext.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "C:\\Users\\Mohammad Ismail\\Desktop\\decebells from scratch\\frontend\\components\\navbar.js",
    _s = $RefreshSig$();













function Navbar() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__["CartContext"]),
      cartItems = _useContext.cartItems;

  var cartLength = cartItems.length;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();

  var logoutHandler = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('http://localhost:5000/api/v1/users/logout');

            case 3:
              router.reload();
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error('Something went wrong');

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function logoutHandler() {
      return _ref.apply(this, arguments);
    };
  }();

  var userLoggedIn = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var res;
      return C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('http://localhost:5000/api/v1/users/isLoggedIn');

            case 3:
              res = _context2.sent;
              return _context2.abrupt("return", res.data.data.freshUser);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.response);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function userLoggedIn() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_10__["useQuery"])('user', userLoggedIn),
      data = _useQuery.data,
      isLoading = _useQuery.isLoading,
      status = _useQuery.status,
      isError = _useQuery.isError; //console.log(status)
  //console.log(data)
  //console.log(isLoading)
  //console.log(isError)


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "nav__container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }, this)
    }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "navbar",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "navigation",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          className: "navigation__checkbox",
          id: "navi-toggle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "navi-toggle",
          className: "navigation__button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "navigation__icon",
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 71
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "navigation__background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "navbar__logo-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "navbar__logo",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
              className: "navbar__logo-image",
              width: 80,
              height: 70,
              src: "/logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "navbar__linksbox",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/shop",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "navbar__linksbox__link",
            children: "SHOP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 30
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "navbar__linksbox__link",
            children: "About Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "navbar__icon-container",
        children: [data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "navbar__icon-box",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaUserAlt"], {
              className: "navbar__icon",
              size: "2.5rem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/login",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "navbar__icon-box",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: "login",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/cart",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "navbar__icon-box",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoMdCart"], {
              className: "navbar__icon",
              size: "2.5rem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "navbar__notification",
              children: cartLength
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "#",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "navbar__icon-box",
            onClick: logoutHandler,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_7__["RiLogoutBoxRLine"], {
              className: "navbar__icon",
              size: "2.5rem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "dropdown",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "dropdown__item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/shop",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "navbar__linksbox__link",
            children: "1) SHOP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 64
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "dropdown__item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "navbar__linksbox__link",
            children: "2) About Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 65
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(Navbar, "igRaDSG7Qhmg7GdJzVzxesogrqY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"], react_query__WEBPACK_IMPORTED_MODULE_10__["useQuery"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwiY2FydEl0ZW1zIiwiY2FydExlbmd0aCIsImxlbmd0aCIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ291dEhhbmRsZXIiLCJheGlvcyIsImdldCIsInJlbG9hZCIsInRvYXN0IiwiZXJyb3IiLCJ1c2VyTG9nZ2VkSW4iLCJyZXMiLCJkYXRhIiwiZnJlc2hVc2VyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwidXNlUXVlcnkiLCJpc0xvYWRpbmciLCJzdGF0dXMiLCJpc0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxNQUFULEdBQW1CO0FBQUE7O0FBQUEsb0JBRUdDLHdEQUFVLENBQUNDLGlFQUFELENBRmI7QUFBQSxNQUVWQyxTQUZVLGVBRVZBLFNBRlU7O0FBR2pCLE1BQU1DLFVBQVUsR0FBR0QsU0FBUyxDQUFDRSxNQUE3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBRUEsTUFBTUMsYUFBYTtBQUFBLHdWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVpDLDZDQUFLLENBQUNDLEdBQU4sQ0FBVSwyQ0FBVixDQUZZOztBQUFBO0FBR2xCSixvQkFBTSxDQUFDSyxNQUFQO0FBSGtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTU5DLG1FQUFLLENBQUNDLEtBQU4sQ0FBWSxzQkFBWjs7QUFOTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiTCxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQVNBLE1BQU1NLFlBQVk7QUFBQSx5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ZUFzRUU7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNNO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLCtCQUFnQyxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxPQUFYO0FBQUEsaUNBQW1CO0FBQUcscUJBQVMsRUFBQyx3QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETixlQUVNO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLCtCQUFnQyxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUEsaUNBQW9CO0FBQUcscUJBQVMsRUFBQyx3QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErRUQ7O0dBaEhRUixNO1VBSVFPLHNELEVBc0I0QmMscUQ7OztLQTFCcENyQixNO0FBa0hNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhmZTE3MTgyMmE2ZjRlMDc0YTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3VzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge0ZhVXNlckFsdH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQge1JpTG9nb3V0Qm94UkxpbmV9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHtJb01kQ2FydH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQge0NhcnRDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0cy9DYXJ0Q29udGV4dCc7XHJcbmltcG9ydCB7dXNlUXVlcnl9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBOYXZiYXIgKCkge1xyXG5cclxuICBjb25zdCB7Y2FydEl0ZW1zfSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gIGNvbnN0IGNhcnRMZW5ndGggPSBjYXJ0SXRlbXMubGVuZ3RoO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gYXN5bmMoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvdXNlcnMvbG9nb3V0JylcclxuICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG5cclxuXHJcbiAgICB9IGNhdGNoKGVycikge3RvYXN0LmVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlckxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL3VzZXJzL2lzTG9nZ2VkSW4nKVxyXG4gICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YS5mcmVzaFVzZXI7XHJcblxyXG4gICAgfSBjYXRjaChlcnIpIHtjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpfVxyXG5cclxuICBcclxuICB9XHJcblxyXG5cclxuICBjb25zdCB7ZGF0YSwgaXNMb2FkaW5nLCBzdGF0dXMsIGlzRXJyb3J9ID0gdXNlUXVlcnkoJ3VzZXInLCB1c2VyTG9nZ2VkSW4pXHJcblxyXG4gIC8vY29uc29sZS5sb2coc3RhdHVzKVxyXG4gIC8vY29uc29sZS5sb2coZGF0YSlcclxuICAvL2NvbnNvbGUubG9nKGlzTG9hZGluZylcclxuICAvL2NvbnNvbGUubG9nKGlzRXJyb3IpXHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfX2NvbnRhaW5lcic+XHJcbiAgICAgIDw+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lcj48L1RvYXN0Q29udGFpbmVyPlxyXG4gICAgICA8Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcblxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX2NoZWNrYm94XCIgaWQ9XCJuYXZpLXRvZ2dsZVwiLz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmF2aS10b2dnbGVcIiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19idXR0b25cIj48c3BhbiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19pY29uXCI+Jm5ic3A7PC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX2JhY2tncm91bmRcIj4mbmJzcDs8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nby1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hdmJhcl9fbG9nbyc+XHJcbiAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nbmF2YmFyX19sb2dvLWltYWdlJyB3aWR0aD17ODB9IGhlaWdodD17NzB9IHNyYz0nL2xvZ28ucG5nJy8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9fbGlua3Nib3hcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zaG9wJz48YSBjbGFzc05hbWU9J25hdmJhcl9fbGlua3Nib3hfX2xpbmsnPlNIT1A8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48YSBjbGFzc05hbWU9J25hdmJhcl9fbGlua3Nib3hfX2xpbmsnPkFib3V0IFVzPC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2ljb24tY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICB7ZGF0YSA/IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2ZpbGUnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pY29uLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RmFVc2VyQWx0IGNsYXNzTmFtZT0nbmF2YmFyX19pY29uJyBzaXplPScyLjVyZW0nLz4gXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPScvbG9naW4nPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pY29uLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdsb2dpbic+TG9naW48L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jYXJ0Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9faWNvbi1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxJb01kQ2FydCBjbGFzc05hbWU9J25hdmJhcl9faWNvbicgc2l6ZT0nMi41cmVtJy8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hdmJhcl9fbm90aWZpY2F0aW9uJz57Y2FydExlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIHtkYXRhID8gXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2ljb24tYm94XCIgb25DbGljaz17bG9nb3V0SGFuZGxlcn0gPlxyXG4gICAgICAgICAgICAgICAgPFJpTG9nb3V0Qm94UkxpbmUgY2xhc3NOYW1lPSduYXZiYXJfX2ljb24nIHNpemU9JzIuNXJlbScvPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25fX2l0ZW1cIj48TGluayBocmVmPScvc2hvcCc+PGEgY2xhc3NOYW1lPSduYXZiYXJfX2xpbmtzYm94X19saW5rJz4xKSBTSE9QPC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9faXRlbVwiPjxMaW5rIGhyZWY9Jy9hYm91dCc+PGEgY2xhc3NOYW1lPSduYXZiYXJfX2xpbmtzYm94X19saW5rJz4yKSBBYm91dCBVczwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==