(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/pages/auth/login/login.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/pages/auth/login/login.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  \r\n.login{\r\n    background: rgb(104, 169, 255);\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/pages/auth/login/Login.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/pages/auth/login/Login.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.css */ "./resources/js/components/pages/auth/login/login.css");
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_forms_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/forms/LoginForm/LoginForm */ "./resources/js/components/ui/forms/LoginForm/LoginForm.js");
/* harmony import */ var _store_actions_AuthActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/actions/AuthActionCreator */ "./resources/js/store/actions/AuthActionCreator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    console.log('Login');
    return _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Login Form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_forms_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./resources/js/components/pages/auth/login/login.css":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/auth/login/login.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/pages/auth/login/login.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/ui/controls/InputGroup/InputGroup.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/ui/controls/InputGroup/InputGroup.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var InputGroup = function InputGroup(_ref) {
  var type = _ref.type,
      label = _ref.label,
      field = _ref.field,
      value = _ref.value,
      errors = _ref.errors,
      loader = _ref.loader,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur;

  function renderLoader(loader) {
    if (loader) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "spinner-border text-primary",
      role: "status"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only"
    }, "Loading...")));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: field,
    className: "col-sm-2"
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: type,
    id: field,
    name: field,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-control', 'col-sm-9', {
      'is-invalid': !!errors.length
    })
  }), renderLoader(loader), !!errors.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors));
}; // TextFieldGroup.propTypes = {
//     field: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     error: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     onBlur: PropTypes.func
// }
// TextFieldGroup.defaultProps = {
//     type: 'text'
// }


/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

/***/ }),

/***/ "./resources/js/components/ui/forms/LoginForm/LoginForm.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ui/forms/LoginForm/LoginForm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controls_InputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controls/InputGroup/InputGroup */ "./resources/js/components/ui/controls/InputGroup/InputGroup.js");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rules */ "./resources/js/components/ui/forms/rules.js");
/* harmony import */ var _store_actions_AuthActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/actions/AuthActionCreator */ "./resources/js/store/actions/AuthActionCreator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var LoginForm =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      controls: {
        email: {
          type: "text",
          field: "email",
          label: "Email",
          value: "a@gmail.com",
          errors: [],
          rules: {
            required: true,
            email: true
          },
          touched: false
        },
        password: {
          type: "password",
          field: "password",
          label: "Password",
          value: "12345",
          errors: [],
          rules: {
            required: true,
            min: 3
          },
          touched: false
        }
      },
      errors: {},
      isFormValid: true
    });

    _defineProperty(_assertThisInitialized(_this), "setStateByErrors", function (name, value) {
      if (!!_this.state.errors[name]) {
        var _this$setState;

        var errors = Object.assign({}, _this.state.errors);
        delete errors[name];

        _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, "errors", errors), _this$setState));
      } else {
        _this.setState(_defineProperty({}, name, value));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var name = e.target.name;

      var controls = _objectSpread({}, _this.state.controls);

      var field = _objectSpread({}, controls[name]);

      field.value = e.target.value;
      field = _this.handleErrors(field);
      field.touched = true;
      controls[name] = field;

      var isFormValid = _this.handleFormIsValid(controls);

      _this.setState(function () {
        return {
          controls: controls,
          isFormValid: isFormValid
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleErrors", function (field) {
      field.errors = []; //required

      if (!!field.rules[_rules__WEBPACK_IMPORTED_MODULE_3__["rules"].required]) {
        if (field.value.length == 0) field.errors.push("This field is required! ");
      } //email


      if (!!field.rules[_rules__WEBPACK_IMPORTED_MODULE_3__["rules"].email]) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(field.value.toLowerCase())) field.errors.push("Wrong email address! ");
      } //min


      if (!!field.rules[_rules__WEBPACK_IMPORTED_MODULE_3__["rules"].min]) {
        var rule = field.rules[_rules__WEBPACK_IMPORTED_MODULE_3__["rules"].min];
        if (field.value.length < rule) field.errors.push("Too short!");
      }

      return field;
    });

    _defineProperty(_assertThisInitialized(_this), "renderInputs", function () {
      return Object.keys(_this.state.controls).map(function (key, index) {
        var control = _this.state.controls[key];
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_controls_InputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: key + index,
          type: control.type,
          label: control.label,
          field: control.field,
          value: control.value,
          errors: control.errors,
          onChange: _this.handleChange
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (e) {
      e.preventDefault();

      _this.props.login(_this.state.controls.email.value, _this.state.controls.password.value);
    });

    return _this;
  }

  _createClass(LoginForm, [{
    key: "handleFormIsValid",
    value: function handleFormIsValid(controls) {
      for (var _i = 0, _Object$entries = Object.entries(controls); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            control = _Object$entries$_i[1];

        if (control.errors.length > 0 || !control.touched) return false;
      }

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "form",
        onSubmit: this.submitHandler
      }, this.renderInputs(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary",
        disabled: !this.state.isFormValid
      }, "Login")));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapDispatchtoProps(dispatch) {
  return {
    login: function login(email, password) {
      return dispatch(_store_actions_AuthActionCreator__WEBPACK_IMPORTED_MODULE_4__["AuthActionCreator"].login(email, password));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchtoProps)(LoginForm));

/***/ }),

/***/ "./resources/js/components/ui/forms/rules.js":
/*!***************************************************!*\
  !*** ./resources/js/components/ui/forms/rules.js ***!
  \***************************************************/
/*! exports provided: rules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rules", function() { return rules; });
var rules = {
  required: 'required',
  email: 'email',
  min: 'min',
  isBusy: 'isBusy'
};

/***/ }),

/***/ "./resources/js/global/axios.js":
/*!**************************************!*\
  !*** ./resources/js/global/axios.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var http = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  //baseURL: 'http://localhost:3000/api/'
  baseURL: 'http://localhost:3000/api/'
});
http.defaults.headers.common['Content-Type'] = 'application/json'; // http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

/* harmony default export */ __webpack_exports__["default"] = (http);

/***/ }),

/***/ "./resources/js/store/actions/AuthActionCreator.js":
/*!*********************************************************!*\
  !*** ./resources/js/store/actions/AuthActionCreator.js ***!
  \*********************************************************/
/*! exports provided: AuthActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionCreator", function() { return AuthActionCreator; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./resources/js/store/actions/actionTypes.js");
/* harmony import */ var _global_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/axios */ "./resources/js/global/axios.js");
/* harmony import */ var _global_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../global/history */ "./resources/js/global/history.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var AuthActionCreator =
/*#__PURE__*/
function () {
  function AuthActionCreator() {
    _classCallCheck(this, AuthActionCreator);
  }

  _createClass(AuthActionCreator, null, [{
    key: "login",
    value: function login(email, password) {
      return function (dispatch) {
        _global_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('login', {
          email: email,
          password: password
        }).then(function (data) {
          console.log(data); //localStorage.setItem('token', data.data.access_token);

          dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN"],
            value: true
          }); //history.push('/tasks');
        })["catch"](function (e) {
          console.error(e);
        });
      };
    }
  }]);

  return AuthActionCreator;
}();

/***/ })

}]);