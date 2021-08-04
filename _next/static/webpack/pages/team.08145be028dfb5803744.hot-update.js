webpackHotUpdate_N_E("pages/team",{

/***/ "./pages/team/index.js":
/*!*****************************!*\
  !*** ./pages/team/index.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.module.css */ \"./pages/team/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/usr/local/google/home/gehrmann/Documents/GEM-benchmark.github.io/web/pages/team/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import Contact from \"../components/contact\";\n\n\n\n\n\n\n\n\nvar ContactList = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ContactList, _React$Component);\n\n  var _super = _createSuper(ContactList);\n\n  function ContactList(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ContactList);\n\n    _this = _super.call(this, props);\n\n    var contact_cards = _this.props.contacts.map(function (c, idx) {\n      return __jsx(Contact, {\n        key: idx,\n        name: c.name,\n        position: c.position,\n        organization: c.organization,\n        website: c.website,\n        twitter: c.twitter,\n        note: c.note,\n        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 7\n        }\n      });\n    });\n\n    _this.state = {\n      contact_cards: contact_cards\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ContactList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var temp = this.state.contact_cards.slice();\n\n      for (var i = temp.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var _ref = [temp[j], temp[i]];\n        temp[i] = _ref[0];\n        temp[j] = _ref[1];\n      }\n\n      this.setState({\n        contact_cards: temp\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"section\", {\n        className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.cards,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }\n      }, this.state.contact_cards);\n    }\n  }]);\n\n  return ContactList;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\nfunction Contact(props) {\n  // Optional Website link.\n  var website_tag = \"\";\n\n  if (props.website != '') {\n    website_tag = __jsx(\"a\", {\n      href: props.website,\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faDribbble\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 47\n      }\n    }), \" Web\");\n  } // Optional Twitter tag.\n\n\n  var twitter_tag = \"\";\n\n  if (props.twitter != '') {\n    var twitter_href = \"https://twitter.com/\" + props.twitter;\n    twitter_tag = __jsx(\"a\", {\n      href: twitter_href,\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faTwitter\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 46\n      }\n    }), \" Twitter\");\n  }\n\n  return __jsx(\"article\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, props.name), __jsx(\"p\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, props.position), __jsx(\"p\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, props.organization), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, website_tag, \" \", __jsx(\"span\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.spacer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 23\n    }\n  }), \" \", twitter_tag), __jsx(\"p\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.note,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, props.note));\n}\n\n_c = Contact;\nvar __N_SSG = true;\nfunction Home(_ref2) {\n  var teamData = _ref2.teamData;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    home: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, \"GEM Team\")), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.headingXl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, \"Team\"), __jsx(\"p\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \"GEM is a community-driven effort with the goal to improve how progress in natural language generation is measured. It would not be possible without a large group of collaborators to take on challenging tasks.\", __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, \"This page acts as a directory of our amazing contributors. If you want to join the organization,  \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/team/join\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 37\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 15\n    }\n  }, \"click here to fill out the sign-up form.\")))), __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.centered,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, __jsx(ContactList, {\n    contacts: teamData.teamMembers,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }))));\n}\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Contact\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS9pbmRleC5qcz85YmJhIl0sIm5hbWVzIjpbIkNvbnRhY3RMaXN0IiwicHJvcHMiLCJjb250YWN0X2NhcmRzIiwiY29udGFjdHMiLCJtYXAiLCJjIiwiaWR4IiwibmFtZSIsInBvc2l0aW9uIiwib3JnYW5pemF0aW9uIiwid2Vic2l0ZSIsInR3aXR0ZXIiLCJub3RlIiwic3RhdGUiLCJ0ZW1wIiwic2xpY2UiLCJpIiwibGVuZ3RoIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0YXRlIiwic3R5bGVzIiwiY2FyZHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhY3QiLCJ3ZWJzaXRlX3RhZyIsImZhRHJpYmJibGUiLCJ0d2l0dGVyX3RhZyIsInR3aXR0ZXJfaHJlZiIsImZhVHdpdHRlciIsImNhcmQiLCJ0aXRsZSIsInNwYWNlciIsIkhvbWUiLCJ0ZWFtRGF0YSIsInV0aWxTdHlsZXMiLCJoZWFkaW5nWGwiLCJkZXNjcmlwdGlvbiIsImNlbnRlcmVkIiwidGVhbU1lbWJlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0lBRU1BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBQ0EsUUFBSUMsYUFBYSxHQUFHLE1BQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsQ0FBRCxFQUFJQyxHQUFKO0FBQUEsYUFDMUMsTUFBQyxPQUFEO0FBQ0UsV0FBRyxFQUFFQSxHQURQO0FBRUUsWUFBSSxFQUFFRCxDQUFDLENBQUNFLElBRlY7QUFFZ0IsZ0JBQVEsRUFBRUYsQ0FBQyxDQUFDRyxRQUY1QjtBQUdFLG9CQUFZLEVBQUVILENBQUMsQ0FBQ0ksWUFIbEI7QUFHZ0MsZUFBTyxFQUFFSixDQUFDLENBQUNLLE9BSDNDO0FBSUUsZUFBTyxFQUFFTCxDQUFDLENBQUNNLE9BSmI7QUFLRSxZQUFJLEVBQUVOLENBQUMsQ0FBQ08sSUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRDBDO0FBQUEsS0FBeEIsQ0FBcEI7O0FBU0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hYLG1CQUFhLEVBQUVBO0FBREosS0FBYjtBQVhpQjtBQWNsQjs7Ozt3Q0FFbUI7QUFDbEIsVUFBSVksSUFBSSxHQUFHLEtBQUtELEtBQUwsQ0FBV1gsYUFBWCxDQUF5QmEsS0FBekIsRUFBWDs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBR0YsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBM0IsRUFBOEJELENBQUMsR0FBRyxDQUFsQyxFQUFxQ0EsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxZQUFJRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJMLENBQUMsR0FBRyxDQUFyQixDQUFYLENBQVI7QUFEd0MsbUJBRW5CLENBQUNGLElBQUksQ0FBQ0ksQ0FBRCxDQUFMLEVBQVVKLElBQUksQ0FBQ0UsQ0FBRCxDQUFkLENBRm1CO0FBRXZDRixZQUFJLENBQUNFLENBQUQsQ0FGbUM7QUFFOUJGLFlBQUksQ0FBQ0ksQ0FBRCxDQUYwQjtBQUd6Qzs7QUFDRCxXQUFLSSxRQUFMLENBQWM7QUFBRXBCLHFCQUFhLEVBQUVZO0FBQWpCLE9BQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFTLGlCQUFTLEVBQUVTLHlEQUFNLENBQUNDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLWCxLQUFMLENBQVdYLGFBRGQsQ0FERjtBQUtEOzs7O0VBaEN1QnVCLDRDQUFLLENBQUNDLFM7O0FBb0NoQyxTQUFTQyxPQUFULENBQWlCMUIsS0FBakIsRUFBd0I7QUFFdEI7QUFDQSxNQUFJMkIsV0FBVyxHQUFHLEVBQWxCOztBQUNBLE1BQUkzQixLQUFLLENBQUNTLE9BQU4sSUFBaUIsRUFBckIsRUFBeUI7QUFDdkJrQixlQUFXLEdBQ1Q7QUFBRyxVQUFJLEVBQUUzQixLQUFLLENBQUNTLE9BQWY7QUFBd0IsWUFBTSxFQUFDLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0MsTUFBQywrRUFBRDtBQUFpQixVQUFJLEVBQUVtQiw4RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF4QyxTQURGO0FBR0QsR0FScUIsQ0FVdEI7OztBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFDQSxNQUFJN0IsS0FBSyxDQUFDVSxPQUFOLElBQWlCLEVBQXJCLEVBQXlCO0FBQ3ZCLFFBQUlvQixZQUFZLEdBQUcseUJBQXlCOUIsS0FBSyxDQUFDVSxPQUFsRDtBQUNBbUIsZUFBVyxHQUNUO0FBQUcsVUFBSSxFQUFFQyxZQUFUO0FBQXVCLFlBQU0sRUFBQyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVDLE1BQUMsK0VBQUQ7QUFBaUIsVUFBSSxFQUFFQyw2RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF2QyxhQURGO0FBR0Q7O0FBRUQsU0FDRTtBQUFTLGFBQVMsRUFBRVQseURBQU0sQ0FBQ1UsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFVix5REFBTSxDQUFDaEIsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2Qk4sS0FBSyxDQUFDTSxJQUFuQyxDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUVnQix5REFBTSxDQUFDVyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCakMsS0FBSyxDQUFDTyxRQUFuQyxDQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUVlLHlEQUFNLENBQUNXLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJqQyxLQUFLLENBQUNRLFlBQW5DLENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dtQixXQURILE9BQ2dCO0FBQU0sYUFBUyxFQUFFTCx5REFBTSxDQUFDWSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGhCLE9BQ3lETCxXQUR6RCxDQUpGLEVBT0U7QUFBRyxhQUFTLEVBQUVQLHlEQUFNLENBQUNYLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJYLEtBQUssQ0FBQ1csSUFBbEMsQ0FQRixDQURGO0FBV0Q7O0tBOUJRZSxPOztBQWdDTSxTQUFTUyxJQUFULFFBQTRCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZO0FBQ3pDLFNBQ0UsTUFBQywwREFBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFQyxnRUFBVSxDQUFDQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJRTtBQUFHLGFBQVMsRUFBRWhCLHlEQUFNLENBQUNpQixXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlOQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkdBRTBCLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBRHNCLENBRjFCLENBTEYsQ0FKRixFQWdCRTtBQUFLLGFBQVMsRUFBRWpCLHlEQUFNLENBQUNrQixRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQWEsWUFBUSxFQUFFSixRQUFRLENBQUNLLFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWhCRixDQUpGLENBREY7QUEyQkQ7TUE1QnVCTixJIiwiZmlsZSI6Ii4vcGFnZXMvdGVhbS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG4vLyBpbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0VGVhbURhdGEgfSBmcm9tIFwiLi4vLi4vbGliL3RlYW1cIjtcbmltcG9ydCB7IGZhRHJpYmJibGUsIGZhVHdpdHRlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5cbmNsYXNzIENvbnRhY3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdmFyIGNvbnRhY3RfY2FyZHMgPSB0aGlzLnByb3BzLmNvbnRhY3RzLm1hcCgoYywgaWR4KSA9PlxuICAgICAgPENvbnRhY3RcbiAgICAgICAga2V5PXtpZHh9XG4gICAgICAgIG5hbWU9e2MubmFtZX0gcG9zaXRpb249e2MucG9zaXRpb259XG4gICAgICAgIG9yZ2FuaXphdGlvbj17Yy5vcmdhbml6YXRpb259IHdlYnNpdGU9e2Mud2Vic2l0ZX1cbiAgICAgICAgdHdpdHRlcj17Yy50d2l0dGVyfVxuICAgICAgICBub3RlPXtjLm5vdGV9IC8+XG4gICAgKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250YWN0X2NhcmRzOiBjb250YWN0X2NhcmRzXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCB0ZW1wID0gdGhpcy5zdGF0ZS5jb250YWN0X2NhcmRzLnNsaWNlKCk7XG4gICAgZm9yIChsZXQgaSA9IHRlbXAubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIFt0ZW1wW2ldLCB0ZW1wW2pdXSA9IFt0ZW1wW2pdLCB0ZW1wW2ldXTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRhY3RfY2FyZHM6IHRlbXAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cbiAgICAgICAge3RoaXMuc3RhdGUuY29udGFjdF9jYXJkc31cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cblxuZnVuY3Rpb24gQ29udGFjdChwcm9wcykge1xuXG4gIC8vIE9wdGlvbmFsIFdlYnNpdGUgbGluay5cbiAgdmFyIHdlYnNpdGVfdGFnID0gXCJcIjtcbiAgaWYgKHByb3BzLndlYnNpdGUgIT0gJycpIHtcbiAgICB3ZWJzaXRlX3RhZyA9IChcbiAgICAgIDxhIGhyZWY9e3Byb3BzLndlYnNpdGV9IHRhcmdldD1cIl9ibGFua1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFEcmliYmJsZX0gLz4gV2ViPC9hPlxuICAgICk7XG4gIH1cblxuICAvLyBPcHRpb25hbCBUd2l0dGVyIHRhZy5cbiAgdmFyIHR3aXR0ZXJfdGFnID0gXCJcIjtcbiAgaWYgKHByb3BzLnR3aXR0ZXIgIT0gJycpIHtcbiAgICB2YXIgdHdpdHRlcl9ocmVmID0gXCJodHRwczovL3R3aXR0ZXIuY29tL1wiICsgcHJvcHMudHdpdHRlclxuICAgIHR3aXR0ZXJfdGFnID0gKFxuICAgICAgPGEgaHJlZj17dHdpdHRlcl9ocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlcn0gLz4gVHdpdHRlcjwvYT5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57cHJvcHMubmFtZX08L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9wcy5wb3NpdGlvbn08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Byb3BzLm9yZ2FuaXphdGlvbn08L3A+XG4gICAgICA8cD5cbiAgICAgICAge3dlYnNpdGVfdGFnfSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXJ9Pjwvc3Bhbj4ge3R3aXR0ZXJfdGFnfVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm90ZX0+e3Byb3BzLm5vdGV9PC9wPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHRlYW1EYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkdFTSBUZWFtPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nWGx9PlxuICAgICAgICAgIFRlYW1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBHRU0gaXMgYSBjb21tdW5pdHktZHJpdmVuIGVmZm9ydCB3aXRoIHRoZSBnb2FsIHRvIGltcHJvdmUgaG93IHByb2dyZXNzIGluXG4gICAgICAgICAgbmF0dXJhbCBsYW5ndWFnZSBnZW5lcmF0aW9uIGlzIG1lYXN1cmVkLiBJdCB3b3VsZCBub3QgYmUgcG9zc2libGUgd2l0aG91dFxuICAgICAgICAgIGEgbGFyZ2UgZ3JvdXAgb2YgY29sbGFib3JhdG9ycyB0byB0YWtlIG9uIGNoYWxsZW5naW5nIHRhc2tzLlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGlzIHBhZ2UgYWN0cyBhcyBhIGRpcmVjdG9yeSBvZiBvdXIgYW1hemluZyBjb250cmlidXRvcnMuIElmIHlvdSB3YW50IHRvXG4gICAgICAgICAgICBqb2luIHRoZSBvcmdhbml6YXRpb24sICA8TGluayBocmVmPVwiL3RlYW0vam9pblwiPlxuICAgICAgICAgICAgICA8YT5jbGljayBoZXJlIHRvIGZpbGwgb3V0IHRoZSBzaWduLXVwIGZvcm0uPC9hPjwvTGluaz5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcmVkfT5cbiAgICAgICAgICA8Q29udGFjdExpc3QgY29udGFjdHM9e3RlYW1EYXRhLnRlYW1NZW1iZXJzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB0ZWFtRGF0YSA9IGF3YWl0IGdldFRlYW1EYXRhKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRlYW1EYXRhLFxuICAgIH0sXG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/team/index.js\n");

/***/ })

})