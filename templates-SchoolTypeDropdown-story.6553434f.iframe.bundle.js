(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[1774],{"./src/templates/SchoolTypeDropdown.jsx":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _propTypes=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_fontConstants=_interopRequireDefault(__webpack_require__("./src/fontConstants.js")),_locale=_interopRequireDefault(__webpack_require__("./src/util/locale-do-not-import.js")),_color=_interopRequireDefault(__webpack_require__("./src/util/color.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var SchoolTypeDropdown=exports.default=function(_Component){function SchoolTypeDropdown(){return _Component.apply(this,arguments)||this}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(SchoolTypeDropdown,_Component),SchoolTypeDropdown.prototype.render=function render(){var showError=this.props.showErrorMsg&&!this.props.value,errorDiv=_react.default.createElement("div",{style:styles.errors},_locale.default.censusRequiredSelect()),countryIsUS=!1;return this.props.country&&"United States"===this.props.country&&(countryIsUS=!0),_react.default.createElement("div",null,_react.default.createElement("div",{style:styles.singleLineContainerStyles},_react.default.createElement("div",{style:styles.singleLineLayoutStyles},_locale.default.signupFormSchoolType(),this.props.showRequiredIndicator&&countryIsUS&&_react.default.createElement("span",{style:styles.asterisk}," *")),_react.default.createElement("select",{id:"school-type",name:this.props.fieldName,type:"select",onChange:this.props.onChange,value:this.props.value,style:styles.selectStyle},_react.default.createElement("option",{disabled:!0,value:""}),_react.default.createElement("option",{value:"charter"},_locale.default.schoolTypeCharter()),_react.default.createElement("option",{value:"private"},_locale.default.schoolTypePrivate()),_react.default.createElement("option",{value:"public"},_locale.default.schoolTypePublic()),_react.default.createElement("option",{value:"homeschool"},_locale.default.schoolTypeHomeschool()),_react.default.createElement("option",{value:"afterschool"},_locale.default.schoolTypeAfter()),_react.default.createElement("option",{value:"organization"},_locale.default.schoolTypeOrganization()),_react.default.createElement("option",{value:"other"},_locale.default.schoolTypeOther()))),showError&&errorDiv)},SchoolTypeDropdown}(_react.Component);_defineProperty(SchoolTypeDropdown,"propTypes",{onChange:_propTypes.default.func.isRequired,value:_propTypes.default.string,country:_propTypes.default.string,fieldName:_propTypes.default.string,showRequiredIndicator:_propTypes.default.bool,showErrorMsg:_propTypes.default.bool}),_defineProperty(SchoolTypeDropdown,"defaultProps",{value:"",fieldName:"user[school_info_attributes][school_type]"});var styles={asterisk:_objectSpread(_objectSpread({fontSize:20},_fontConstants.default["main-font-semi-bold"]),{},{color:_color.default.red}),errors:_objectSpread(_objectSpread({fontSize:14},_fontConstants.default["main-font-regular"]),{},{color:_color.default.red,paddingTop:5,paddingBottom:5}),singleLineLayoutStyles:_objectSpread(_objectSpread({display:"table-cell",width:210,verticalAlign:"middle",minHeight:42,fontSize:13},_fontConstants.default["main-font-regular"]),{},{color:"#333",padding:0}),singleLineContainerStyles:{display:"table",width:"100%"},selectStyle:{width:390,verticalAlign:"top",marginBottom:"5px",marginTop:"5px"}};module.exports=exports.default},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};return ReactPropTypes.checkPropTypes=emptyFunction,ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./src/templates/SchoolTypeDropdown.story.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Overview=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_SchoolTypeDropdown=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./src/templates/SchoolTypeDropdown.jsx"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}exports.default={component:_SchoolTypeDropdown.default};var DropdownWrapper=function(_Component){function DropdownWrapper(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_this=_Component.call.apply(_Component,[this].concat(args))||this,"state",{value:""}),_this}!function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(DropdownWrapper,_Component);var _proto=DropdownWrapper.prototype;return _proto.onChange=function onChange(event){this.setState({value:event.target.value})},_proto.render=function render(){return _react.default.createElement(_SchoolTypeDropdown.default,{value:this.state.value,onChange:this.onChange.bind(this)})},DropdownWrapper}(_react.Component);(exports.Overview=function Template(args){return _react.default.createElement(DropdownWrapper,args)}.bind({})).args={}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLVNjaG9vbFR5cGVEcm9wZG93bi1zdG9yeS5kMDJkM2I5Ny5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiIyUEFBQSxJQUFBQSxXQUFBQyx1QkFBQUMsb0JBQUEsdUNBQ0FDLE9BS2tDLFNBQUFDLHdCQUFBQyxFQUFBQyxHQUFBLElBQUFBLEdBQUFELEdBQUFBLEVBQUFFLFdBQUEsT0FBQUYsRUFBQSxVQUFBQSxHQUFBLFVBQUFHLFFBQUFILElBQUEsbUJBQUFBLEVBQUEsZUFBQUEsR0FBQSxJQUFBSSxFQUFBQyx5QkFBQUosR0FBQSxHQUFBRyxHQUFBQSxFQUFBRSxJQUFBTixHQUFBLE9BQUFJLEVBQUFHLElBQUFQLEdBQUEsSUFBQVEsRUFBQSxDQUFBQyxVQUFBLE1BQUFDLEVBQUFDLE9BQUFDLGdCQUFBRCxPQUFBRSx5QkFBQSxRQUFBQyxLQUFBZCxFQUFBLGVBQUFjLEdBQUEsR0FBQUMsZUFBQUMsS0FBQWhCLEVBQUFjLEdBQUEsS0FBQUcsRUFBQVAsRUFBQUMsT0FBQUUseUJBQUFiLEVBQUFjLEdBQUEsS0FBQUcsSUFBQUEsRUFBQVYsS0FBQVUsRUFBQUMsS0FBQVAsT0FBQUMsZUFBQUosRUFBQU0sRUFBQUcsR0FBQVQsRUFBQU0sR0FBQWQsRUFBQWMsRUFBQSxRQUFBTixFQUFBLFFBQUFSLEVBQUFJLEdBQUFBLEVBQUFjLElBQUFsQixFQUFBUSxHQUFBQSxDQUFBLENBTGxDVCxDQUFBRixvQkFBQSxrQ0FFQXNCLGVBQUF2Qix1QkFBQUMsb0JBQUEsMkJBQ0F1QixRQUFBeEIsdUJBQUFDLG9CQUFBLHVDQUVBd0IsT0FBQXpCLHVCQUFBQyxvQkFBQSx3QkFBa0MsU0FBQVEseUJBQUFMLEdBQUEsc0JBQUFzQixRQUFBLGdCQUFBckIsRUFBQSxJQUFBcUIsUUFBQWxCLEVBQUEsSUFBQWtCLFFBQUEsT0FBQWpCLHlCQUFBLFNBQUFBLHlCQUFBTCxHQUFBLE9BQUFBLEVBQUFJLEVBQUFILENBQUEsR0FBQUQsRUFBQSxVQUFBSix1QkFBQTJC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QUFLcUIsU0FBU3pDLEtBQUtvQixPQUduQyxFQUFDZ0YsZUFBQSxDQWhCa0IsQ0FBU2pELE9BQUFBLFlBeUJUdkMsUUFBQUEsU0FOSixTQUFYb0csU0FBV1QsTUFBSSxPQUFJdkosT0FBQSxRQUFBd0UsY0FBQzRFLGdCQUFvQkcsS0FBUSxFQU1yQnZHLEtBQUssQ0FBQyxJQUM5QnVHLEtBQU8sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL3RlbXBsYXRlcy9TY2hvb2xUeXBlRHJvcGRvd24uanN4Iiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL3RlbXBsYXRlcy9TY2hvb2xUeXBlRHJvcGRvd24uc3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZm9udENvbnN0YW50cyBmcm9tICdAY2RvL2FwcHMvZm9udENvbnN0YW50cyc7XG5pbXBvcnQgaTE4biBmcm9tICdAY2RvL2xvY2FsZSc7XG5cbmltcG9ydCBjb2xvciBmcm9tICcuLi91dGlsL2NvbG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nob29sVHlwZURyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb3VudHJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93UmVxdWlyZWRJbmRpY2F0b3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dFcnJvck1zZzogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgZmllbGROYW1lOiAndXNlcltzY2hvb2xfaW5mb19hdHRyaWJ1dGVzXVtzY2hvb2xfdHlwZV0nLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzaG93RXJyb3IgPSB0aGlzLnByb3BzLnNob3dFcnJvck1zZyAmJiAhdGhpcy5wcm9wcy52YWx1ZTtcbiAgICBjb25zdCBlcnJvckRpdiA9IChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5lcnJvcnN9PntpMThuLmNlbnN1c1JlcXVpcmVkU2VsZWN0KCl9PC9kaXY+XG4gICAgKTtcblxuICAgIGxldCBjb3VudHJ5SXNVUyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnByb3BzLmNvdW50cnkgJiYgdGhpcy5wcm9wcy5jb3VudHJ5ID09PSAnVW5pdGVkIFN0YXRlcycpIHtcbiAgICAgIGNvdW50cnlJc1VTID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnNpbmdsZUxpbmVDb250YWluZXJTdHlsZXN9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5zaW5nbGVMaW5lTGF5b3V0U3R5bGVzfT5cbiAgICAgICAgICAgIHtpMThuLnNpZ251cEZvcm1TY2hvb2xUeXBlKCl9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93UmVxdWlyZWRJbmRpY2F0b3IgJiYgY291bnRyeUlzVVMgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmFzdGVyaXNrfT4gKjwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJzY2hvb2wtdHlwZVwiXG4gICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLmZpZWxkTmFtZX1cbiAgICAgICAgICAgIHR5cGU9XCJzZWxlY3RcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuc2VsZWN0U3R5bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD17dHJ1ZX0gdmFsdWU9XCJcIiAvPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoYXJ0ZXJcIj57aTE4bi5zY2hvb2xUeXBlQ2hhcnRlcigpfTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXZhdGVcIj57aTE4bi5zY2hvb2xUeXBlUHJpdmF0ZSgpfTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB1YmxpY1wiPntpMThuLnNjaG9vbFR5cGVQdWJsaWMoKX08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJob21lc2Nob29sXCI+e2kxOG4uc2Nob29sVHlwZUhvbWVzY2hvb2woKX08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZnRlcnNjaG9vbFwiPntpMThuLnNjaG9vbFR5cGVBZnRlcigpfTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9yZ2FuaXphdGlvblwiPlxuICAgICAgICAgICAgICB7aTE4bi5zY2hvb2xUeXBlT3JnYW5pemF0aW9uKCl9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPntpMThuLnNjaG9vbFR5cGVPdGhlcigpfTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dFcnJvciAmJiBlcnJvckRpdn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBhc3Rlcmlzazoge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICAuLi5mb250Q29uc3RhbnRzWydtYWluLWZvbnQtc2VtaS1ib2xkJ10sXG4gICAgY29sb3I6IGNvbG9yLnJlZCxcbiAgfSxcbiAgZXJyb3JzOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIC4uLmZvbnRDb25zdGFudHNbJ21haW4tZm9udC1yZWd1bGFyJ10sXG4gICAgY29sb3I6IGNvbG9yLnJlZCxcbiAgICBwYWRkaW5nVG9wOiA1LFxuICAgIHBhZGRpbmdCb3R0b206IDUsXG4gIH0sXG4gIHNpbmdsZUxpbmVMYXlvdXRTdHlsZXM6IHtcbiAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgd2lkdGg6IDIxMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBtaW5IZWlnaHQ6IDQyLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICAuLi5mb250Q29uc3RhbnRzWydtYWluLWZvbnQtcmVndWxhciddLFxuICAgIGNvbG9yOiAnIzMzMycsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbiAgc2luZ2xlTGluZUNvbnRhaW5lclN0eWxlczoge1xuICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgc2VsZWN0U3R5bGU6IHtcbiAgICB3aWR0aDogMzkwLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgbWFyZ2luVG9wOiAnNXB4JyxcbiAgfSxcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNjaG9vbFR5cGVEcm9wZG93biBmcm9tICcuL1NjaG9vbFR5cGVEcm9wZG93bic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBTY2hvb2xUeXBlRHJvcGRvd24sXG59O1xuXG4vL1xuLy8gVEVNUExBVEVcbi8vXG5cbmNsYXNzIERyb3Bkb3duV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgfTtcblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNjaG9vbFR5cGVEcm9wZG93blxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBUZW1wbGF0ZSA9IGFyZ3MgPT4gPERyb3Bkb3duV3JhcHBlciB7Li4uYXJnc30gLz47XG5cbi8vXG4vLyBTVE9SSUVTXG4vL1xuXG5leHBvcnQgY29uc3QgT3ZlcnZpZXcgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbk92ZXJ2aWV3LmFyZ3MgPSB7fTtcbiJdLCJuYW1lcyI6WyJfcHJvcFR5cGVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImUiLCJyIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJ0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2ZvbnRDb25zdGFudHMiLCJfbG9jYWxlIiwiX2NvbG9yIiwiV2Vha01hcCIsIm9iaiIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9zZXRQcm90b3R5cGVPZiIsInAiLCJzZXRQcm90b3R5cGVPZiIsImJpbmQiLCJrZXkiLCJ2YWx1ZSIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIlNjaG9vbFR5cGVEcm9wZG93biIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJyZW5kZXIiLCJzaG93RXJyb3IiLCJ0aGlzIiwicHJvcHMiLCJzaG93RXJyb3JNc2ciLCJlcnJvckRpdiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInN0eWxlcyIsImVycm9ycyIsImkxOG4iLCJjZW5zdXNSZXF1aXJlZFNlbGVjdCIsImNvdW50cnlJc1VTIiwiY291bnRyeSIsInNpbmdsZUxpbmVDb250YWluZXJTdHlsZXMiLCJzaW5nbGVMaW5lTGF5b3V0U3R5bGVzIiwic2lnbnVwRm9ybVNjaG9vbFR5cGUiLCJzaG93UmVxdWlyZWRJbmRpY2F0b3IiLCJhc3RlcmlzayIsImlkIiwibmFtZSIsImZpZWxkTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInNlbGVjdFN0eWxlIiwiZGlzYWJsZWQiLCJzY2hvb2xUeXBlQ2hhcnRlciIsInNjaG9vbFR5cGVQcml2YXRlIiwic2Nob29sVHlwZVB1YmxpYyIsInNjaG9vbFR5cGVIb21lc2Nob29sIiwic2Nob29sVHlwZUFmdGVyIiwic2Nob29sVHlwZU9yZ2FuaXphdGlvbiIsInNjaG9vbFR5cGVPdGhlciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsImZvbnRTaXplIiwiZm9udENvbnN0YW50cyIsImNvbG9yIiwicmVkIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJkaXNwbGF5Iiwid2lkdGgiLCJ2ZXJ0aWNhbEFsaWduIiwibWluSGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsIm1vZHVsZSIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiZW1wdHlGdW5jdGlvbiIsInNoaW0iLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJsb2NhdGlvbiIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImVyciIsIkVycm9yIiwiZ2V0U2hpbSIsIlJlYWN0UHJvcFR5cGVzIiwiYXJyYXkiLCJudW1iZXIiLCJvYmplY3QiLCJzeW1ib2wiLCJhbnkiLCJhcnJheU9mIiwiZWxlbWVudCIsImluc3RhbmNlT2YiLCJub2RlIiwib2JqZWN0T2YiLCJvbmVPZiIsIm9uZU9mVHlwZSIsInNoYXBlIiwiZXhhY3QiLCJjaGVja1Byb3BUeXBlcyIsIl9TY2hvb2xUeXBlRHJvcGRvd24iLCJjb21wb25lbnQiLCJEcm9wZG93bldyYXBwZXIiLCJfdGhpcyIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY29uY2F0IiwiX3Byb3RvIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInN0YXRlIiwiVGVtcGxhdGUiXSwic291cmNlUm9vdCI6IiJ9