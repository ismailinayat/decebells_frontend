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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      dropdownOpen = _useState[0],
      setDropdownOpen = _useState[1];

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

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
      return C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return setDropdownOpen(!dropdownOpen);

            case 2:
              console.log(dropdownOpen);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var userLoggedIn = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var res;
      return C_Users_Mohammad_Ismail_Desktop_decebells_from_scratch_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('http://localhost:5000/api/v1/users/isLoggedIn');

            case 3:
              res = _context3.sent;
              return _context3.abrupt("return", res.data.data.freshUser);

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0.response);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function userLoggedIn() {
      return _ref3.apply(this, arguments);
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
        lineNumber: 58,
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
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          onClick: handleClick,
          htmlFor: "navi-toggle",
          className: "navigation__button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "navigation__icon",
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 93
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "navigation__background",
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
              lineNumber: 74,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
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
            lineNumber: 80,
            columnNumber: 30
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "navbar__linksbox__link",
            children: "About Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
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
              lineNumber: 92,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
              lineNumber: 101,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
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
              lineNumber: 108,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "navbar__notification",
              children: cartLength
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
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
              lineNumber: 116,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
            lineNumber: 127,
            columnNumber: 64
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
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
            lineNumber: 128,
            columnNumber: 65
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_s(Navbar, "K6drJcCCQVSkhiXyyKmibc3niWo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwiY2FydEl0ZW1zIiwiY2FydExlbmd0aCIsImxlbmd0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwibG9nb3V0SGFuZGxlciIsImF4aW9zIiwiZ2V0IiwicmVsb2FkIiwidG9hc3QiLCJlcnJvciIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyTG9nZ2VkSW4iLCJyZXMiLCJkYXRhIiwiZnJlc2hVc2VyIiwicmVzcG9uc2UiLCJ1c2VRdWVyeSIsImlzTG9hZGluZyIsInN0YXR1cyIsImlzRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLE1BQVQsR0FBbUI7QUFBQTs7QUFBQSxvQkFFR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FGYjtBQUFBLE1BRVZDLFNBRlUsZUFFVkEsU0FGVTs7QUFHakIsTUFBTUMsVUFBVSxHQUFHRCxTQUFTLENBQUNFLE1BQTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFKaUIsa0JBTXVCQyxzREFBUSxDQUFDLEtBQUQsQ0FOL0I7QUFBQSxNQU1WQyxZQU5VO0FBQUEsTUFNSUMsZUFOSjs7QUFRakIsTUFBTUMsYUFBYTtBQUFBLHdWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVpDLDZDQUFLLENBQUNDLEdBQU4sQ0FBVSwyQ0FBVixDQUZZOztBQUFBO0FBR2xCUCxvQkFBTSxDQUFDUSxNQUFQO0FBSGtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTU5D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O0tBakNwQzFCLE07QUF5SE1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmRlNzE1NGJlNWQ0NGZiYTkxY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7RmFVc2VyQWx0fSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7UmlMb2dvdXRCb3hSTGluZX0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xyXG5pbXBvcnQge0lvTWRDYXJ0fSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7Q2FydENvbnRleHR9IGZyb20gJy4uL2NvbnRleHRzL0NhcnRDb250ZXh0JztcclxuaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSAncmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdmJhciAoKSB7XHJcblxyXG4gIGNvbnN0IHtjYXJ0SXRlbXN9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgY29uc3QgY2FydExlbmd0aCA9IGNhcnRJdGVtcy5sZW5ndGg7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9IGFzeW5jKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL3VzZXJzL2xvZ291dCcpXHJcbiAgICAgIHJvdXRlci5yZWxvYWQoKTtcclxuXHJcblxyXG4gICAgfSBjYXRjaChlcnIpIHt0b2FzdC5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKX1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGF3YWl0IHNldERyb3Bkb3duT3BlbighZHJvcGRvd25PcGVuKVxyXG4gICAgY29uc29sZS5sb2coZHJvcGRvd25PcGVuKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlckxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL3VzZXJzL2lzTG9nZ2VkSW4nKVxyXG4gICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YS5mcmVzaFVzZXI7XHJcblxyXG4gICAgfSBjYXRjaChlcnIpIHtjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpfVxyXG5cclxuICBcclxuICB9XHJcblxyXG5cclxuICBjb25zdCB7ZGF0YSwgaXNMb2FkaW5nLCBzdGF0dXMsIGlzRXJyb3J9ID0gdXNlUXVlcnkoJ3VzZXInLCB1c2VyTG9nZ2VkSW4pXHJcblxyXG4gIC8vY29uc29sZS5sb2coc3RhdHVzKVxyXG4gIC8vY29uc29sZS5sb2coZGF0YSlcclxuICAvL2NvbnNvbGUubG9nKGlzTG9hZGluZylcclxuICAvL2NvbnNvbGUubG9nKGlzRXJyb3IpXHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfX2NvbnRhaW5lcic+XHJcbiAgICAgIDw+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lcj48L1RvYXN0Q29udGFpbmVyPlxyXG4gICAgICA8Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcblxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX2NoZWNrYm94XCIgaWQ9XCJuYXZpLXRvZ2dsZVwiLz5cclxuICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXtoYW5kbGVDbGlja30gaHRtbEZvcj1cIm5hdmktdG9nZ2xlXCIgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fYnV0dG9uXCI+PHNwYW4gY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9faWNvblwiPiZuYnNwOzwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19iYWNrZ3JvdW5kXCI+Jm5ic3A7PC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2xvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYXZiYXJfX2xvZ28nPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J25hdmJhcl9fbG9nby1pbWFnZScgd2lkdGg9ezgwfSBoZWlnaHQ9ezcwfSBzcmM9Jy9sb2dvLnBuZycvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2xpbmtzYm94XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvc2hvcCc+PGEgY2xhc3NOYW1lPSduYXZiYXJfX2xpbmtzYm94X19saW5rJz5TSE9QPC9hPjwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+PGEgY2xhc3NOYW1lPSduYXZiYXJfX2xpbmtzYm94X19saW5rJz5BYm91dCBVczwvYT48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pY29uLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAge2RhdGEgPyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9maWxlJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9faWNvbi1ib3hcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZhVXNlckFsdCBjbGFzc05hbWU9J25hdmJhcl9faWNvbicgc2l6ZT0nMi41cmVtJy8+IFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xvZ2luJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9faWNvbi1ib3hcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbG9naW4nPkxvZ2luPC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvY2FydCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2ljb24tYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8SW9NZENhcnQgY2xhc3NOYW1lPSduYXZiYXJfX2ljb24nIHNpemU9JzIuNXJlbScvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYXZiYXJfX25vdGlmaWNhdGlvbic+e2NhcnRMZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICB7ZGF0YSA/IFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pY29uLWJveFwiIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9ID5cclxuICAgICAgICAgICAgICAgIDxSaUxvZ291dEJveFJMaW5lIGNsYXNzTmFtZT0nbmF2YmFyX19pY29uJyBzaXplPScyLjVyZW0nLz5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19pdGVtXCI+PExpbmsgaHJlZj0nL3Nob3AnPjxhIGNsYXNzTmFtZT0nbmF2YmFyX19saW5rc2JveF9fbGluayc+MSkgU0hPUDwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25fX2l0ZW1cIj48TGluayBocmVmPScvYWJvdXQnPjxhIGNsYXNzTmFtZT0nbmF2YmFyX19saW5rc2JveF9fbGluayc+MikgQWJvdXQgVXM8L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJzb3VyY2VSb290IjoiIn0=