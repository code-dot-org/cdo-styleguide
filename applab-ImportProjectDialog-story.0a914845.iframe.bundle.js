"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[2336],{"./src/applab/ImportProjectDialog.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.ImportProjectDialog=void 0;var _propTypes=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_reactRedux=__webpack_require__("./node_modules/react-redux/es/index.js"),_Dialog=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./src/templates/Dialog.jsx")),_color=_interopRequireDefault(__webpack_require__("./src/util/color.js")),_screens=__webpack_require__("./src/applab/redux/screens.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var initialState={url:""},ImportProjectDialog=exports.ImportProjectDialog=function(_React$Component){function ImportProjectDialog(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this,"state",_objectSpread({},initialState)),_defineProperty(_this,"onImport",(function(){_this.props.onImport(_this.state.url),_this.setState(initialState)})),_this}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(ImportProjectDialog,_React$Component),ImportProjectDialog.prototype.render=function render(){var _this2=this;return _react.default.createElement(_Dialog.default,_extends({},this.props,{title:"Import screens"}),_react.default.createElement(_Dialog.Body,null,_react.default.createElement("p",{style:styles.instructions},'Copy the share link of the app you would like to import screens from. Paste in the URL of that app below and click "Next."'," ",_react.default.createElement("a",{href:"".concat(window.dashboard.CODE_ORG_URL,"/applab/docs/import"),target:"_blank",rel:"noopener noreferrer"},"Learn More")),_react.default.createElement("div",{style:styles.urlInputWrapper},_react.default.createElement("input",{type:"text",value:this.state.url,style:styles.urlInput,onChange:function onChange(event){return _this2.setState({url:event.target.value})}})),this.props.error&&_react.default.createElement("p",{style:styles.errorText},"We can't seem to find this project. Please make sure you've entered a valid App Lab project URL.")),_react.default.createElement(_Dialog.Buttons,null,_react.default.createElement(_Dialog.Confirm,{onClick:this.onImport,disabled:this.props.isFetching},this.props.isFetching&&_react.default.createElement("span",{className:"fa fa-spin fa-spinner"})," ","Next")))},ImportProjectDialog}(_react.default.Component);_defineProperty(ImportProjectDialog,"propTypes",_objectSpread(_objectSpread({},_Dialog.default.propTypes),{},{onImport:_propTypes.default.func.isRequired,isFetching:_propTypes.default.bool,error:_propTypes.default.bool}));var styles={urlInputWrapper:{display:"flex",alignItems:"stretch",width:"100%"},urlInput:{width:"inherit"},instructions:{color:_color.default.black},errorText:{color:_color.default.red}};exports.default=(0,_reactRedux.connect)((function(state){return{isOpen:state.screens.isImportingScreen&&!state.screens.importProject.fetchedProject,isFetching:state.screens.importProject.isFetchingProject,error:state.screens.importProject.errorFetchingProject}}),(function(dispatch){return{onImport:function onImport(url){dispatch((0,_screens.fetchProject)(url))},handleClose:function handleClose(){dispatch((0,_screens.toggleImportScreen)(!1))}}}))(ImportProjectDialog)},"./src/applab/ImportProjectDialog.story.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WhileFetching=exports.OnOpen=exports.ErrorFetching=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_react=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react/index.js")),_ImportProjectDialog=__webpack_require__("./src/applab/ImportProjectDialog.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}exports.default={component:_ImportProjectDialog.ImportProjectDialog};var Template=function Template(args){return _react.default.createElement(_ImportProjectDialog.ImportProjectDialog,_extends({hideBackdrop:!0,onImport:(0,_addonActions.action)("onImport")},args))};exports.OnOpen=Template.bind({});(exports.WhileFetching=Template.bind({})).args={isFetching:!0},(exports.ErrorFetching=Template.bind({})).args={error:!0}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGFiLUltcG9ydFByb2plY3REaWFsb2ctc3RvcnkuOTRlZTZhNzQuaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoic1NBQUEsSUFBQUEsV0FBQUMsdUJBQUFDLG9CQUFBLHVDQUNBQyxPQUFBRix1QkFBQUMsb0JBQUEsa0NBQ0FFLFlBQUFGLG9CQUFBLDBDQUVBRyxRQUdpRSxTQUFBQyx3QkFBQUMsRUFBQUMsR0FBQSxJQUFBQSxHQUFBRCxHQUFBQSxFQUFBRSxXQUFBLE9BQUFGLEVBQUEsVUFBQUEsR0FBQSxVQUFBRyxRQUFBSCxJQUFBLG1CQUFBQSxFQUFBLGVBQUFBLEdBQUEsSUFBQUksRUFBQUMseUJBQUFKLEdBQUEsR0FBQUcsR0FBQUEsRUFBQUUsSUFBQU4sR0FBQSxPQUFBSSxFQUFBRyxJQUFBUCxHQUFBLElBQUFRLEVBQUEsQ0FBQUMsVUFBQSxNQUFBQyxFQUFBQyxPQUFBQyxnQkFBQUQsT0FBQUUseUJBQUEsUUFBQUMsS0FBQWQsRUFBQSxlQUFBYyxHQUFBLEdBQUFDLGVBQUFDLEtBQUFoQixFQUFBYyxHQUFBLEtBQUFHLEVBQUFQLEVBQUFDLE9BQUFFLHlCQUFBYixFQUFBYyxHQUFBLEtBQUFHLElBQUFBLEVBQUFWLEtBQUFVLEVBQUFDLEtBQUFQLE9BQUFDLGVBQUFKLEVBQUFNLEVBQUFHLEdBQUFULEVBQUFNLEdBQUFkLEVBQUFjLEVBQUEsUUFBQU4sRUFBQSxRQUFBUixFQUFBSSxHQUFBQSxFQUFBYyxJQUFBbEIsRUFBQVEsR0FBQUEsQ0FBQSxDQUhqRVQsQ0FBQUosb0JBQUEsK0JBQ0F3QixPQUFBekIsdUJBQUFDLG9CQUFBLHdCQUVBeUIsU0FBQXpCLG9CQUFBLGlDQUFpRSxTQUFBVSx5QkFBQUwsR0FBQSxzQkFBQXFCLFFBQUEsZ0JBQUFwQixFQUFBLElBQUFvQixRQUFBakIsRUFBQSxJQUFBaUIsUUFBQSxPQUFBaEIseUJBQUEsU0FBQUEseUJBQUFMLEdBQUEsT0FBQUEsRUFBQUksRUFBQUgsQ0FBQSxHQUFBRCxFQUFBLFVBQUFO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SW1wb3J0UHJvamVjdERpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL2FwcGxhYi9JbXBvcnRQcm9qZWN0RGlhbG9nLnN0b3J5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgRGlhbG9nLCB7Qm9keSwgQnV0dG9ucywgQ29uZmlybX0gZnJvbSAnLi4vdGVtcGxhdGVzL0RpYWxvZyc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vdXRpbC9jb2xvcic7XG5cbmltcG9ydCB7ZmV0Y2hQcm9qZWN0LCB0b2dnbGVJbXBvcnRTY3JlZW59IGZyb20gJy4vcmVkdXgvc2NyZWVucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt1cmw6ICcnfTtcblxuZXhwb3J0IGNsYXNzIEltcG9ydFByb2plY3REaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkRpYWxvZy5wcm9wVHlwZXMsXG4gICAgb25JbXBvcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNGZXRjaGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRlID0gey4uLmluaXRpYWxTdGF0ZX07XG5cbiAgb25JbXBvcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkltcG9ydCh0aGlzLnN0YXRlLnVybCk7XG4gICAgdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZyB7Li4udGhpcy5wcm9wc30gdGl0bGU9XCJJbXBvcnQgc2NyZWVuc1wiPlxuICAgICAgICA8Qm9keT5cbiAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmluc3RydWN0aW9uc30+XG4gICAgICAgICAgICBDb3B5IHRoZSBzaGFyZSBsaW5rIG9mIHRoZSBhcHAgeW91IHdvdWxkIGxpa2UgdG8gaW1wb3J0IHNjcmVlbnNcbiAgICAgICAgICAgIGZyb20uIFBhc3RlIGluIHRoZSBVUkwgb2YgdGhhdCBhcHAgYmVsb3cgYW5kIGNsaWNrIFwiTmV4dC5cInsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtgJHt3aW5kb3cuZGFzaGJvYXJkLkNPREVfT1JHX1VSTH0vYXBwbGFiL2RvY3MvaW1wb3J0YH1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExlYXJuIE1vcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnVybElucHV0V3JhcHBlcn0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51cmx9XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMudXJsSW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHt1cmw6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciAmJiAoXG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmVycm9yVGV4dH0+XG4gICAgICAgICAgICAgIFdlIGNhbid0IHNlZW0gdG8gZmluZCB0aGlzIHByb2plY3QuIFBsZWFzZSBtYWtlIHN1cmUgeW91J3ZlXG4gICAgICAgICAgICAgIGVudGVyZWQgYSB2YWxpZCBBcHAgTGFiIHByb2plY3QgVVJMLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm9keT5cbiAgICAgICAgPEJ1dHRvbnM+XG4gICAgICAgICAgPENvbmZpcm0gb25DbGljaz17dGhpcy5vbkltcG9ydH0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNGZXRjaGluZ30+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0ZldGNoaW5nICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc3BpbiBmYS1zcGlubmVyXCIgLz5cbiAgICAgICAgICAgICl9eycgJ31cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L0NvbmZpcm0+XG4gICAgICAgIDwvQnV0dG9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICB1cmxJbnB1dFdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIHVybElucHV0OiB7XG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgfSxcbiAgLy8gVE9ETzogZGl0Y2ggdGhlc2Ugc3R5bGVzIGluIGZhdm9yIG9mIHN0YW5kYXJkaXplZCB0eXBvZ3JhcGh5IGNvbXBvbmVudHNcbiAgLy8gb25jZSB0aGV5IGV4aXN0XG4gIGluc3RydWN0aW9uczoge1xuICAgIGNvbG9yOiBjb2xvci5ibGFjayxcbiAgfSxcbiAgZXJyb3JUZXh0OiB7XG4gICAgY29sb3I6IGNvbG9yLnJlZCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgaXNPcGVuOlxuICAgICAgc3RhdGUuc2NyZWVucy5pc0ltcG9ydGluZ1NjcmVlbiAmJlxuICAgICAgIXN0YXRlLnNjcmVlbnMuaW1wb3J0UHJvamVjdC5mZXRjaGVkUHJvamVjdCxcbiAgICBpc0ZldGNoaW5nOiBzdGF0ZS5zY3JlZW5zLmltcG9ydFByb2plY3QuaXNGZXRjaGluZ1Byb2plY3QsXG4gICAgZXJyb3I6IHN0YXRlLnNjcmVlbnMuaW1wb3J0UHJvamVjdC5lcnJvckZldGNoaW5nUHJvamVjdCxcbiAgfSksXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgb25JbXBvcnQodXJsKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaFByb2plY3QodXJsKSk7XG4gICAgfSxcbiAgICBoYW5kbGVDbG9zZSgpIHtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZUltcG9ydFNjcmVlbihmYWxzZSkpO1xuICAgIH0sXG4gIH0pXG4pKEltcG9ydFByb2plY3REaWFsb2cpO1xuIiwiaW1wb3J0IHthY3Rpb259IGZyb20gJ0BzdG9yeWJvb2svYWRkb24tYWN0aW9ucyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge0ltcG9ydFByb2plY3REaWFsb2d9IGZyb20gJy4vSW1wb3J0UHJvamVjdERpYWxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBJbXBvcnRQcm9qZWN0RGlhbG9nLFxufTtcblxuY29uc3QgVGVtcGxhdGUgPSBhcmdzID0+IChcbiAgPEltcG9ydFByb2plY3REaWFsb2cgaGlkZUJhY2tkcm9wIG9uSW1wb3J0PXthY3Rpb24oJ29uSW1wb3J0Jyl9IHsuLi5hcmdzfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE9uT3BlbiA9IFRlbXBsYXRlLmJpbmQoe30pO1xuXG5leHBvcnQgY29uc3QgV2hpbGVGZXRjaGluZyA9IFRlbXBsYXRlLmJpbmQoe30pO1xuV2hpbGVGZXRjaGluZy5hcmdzID0ge1xuICBpc0ZldGNoaW5nOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IEVycm9yRmV0Y2hpbmcgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkVycm9yRmV0Y2hpbmcuYXJncyA9IHtcbiAgZXJyb3I6IHRydWUsXG59O1xuIl0sIm5hbWVzIjpbIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl9yZWFjdFJlZHV4IiwiX0RpYWxvZyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZSIsInIiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsInQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY29sb3IiLCJfc2NyZWVucyIsIldlYWtNYXAiLCJvYmoiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9leHRlbmRzIiwiYXNzaWduIiwiYmluZCIsInRhcmdldCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsImFwcGx5Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJlbnVtZXJhYmxlIiwicHVzaCIsIl9vYmplY3RTcHJlYWQiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfc2V0UHJvdG90eXBlT2YiLCJwIiwic2V0UHJvdG90eXBlT2YiLCJ2YWx1ZSIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImluaXRpYWxTdGF0ZSIsInVybCIsIkltcG9ydFByb2plY3REaWFsb2ciLCJleHBvcnRzIiwiX1JlYWN0JENvbXBvbmVudCIsIl90aGlzIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJwcm9wcyIsIm9uSW1wb3J0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIl9pbmhlcml0c0xvb3NlIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwicmVuZGVyIiwiX3RoaXMyIiwiY3JlYXRlRWxlbWVudCIsInRoaXMiLCJ0aXRsZSIsIkJvZHkiLCJzdHlsZSIsInN0eWxlcyIsImluc3RydWN0aW9ucyIsImhyZWYiLCJ3aW5kb3ciLCJkYXNoYm9hcmQiLCJDT0RFX09SR19VUkwiLCJyZWwiLCJ1cmxJbnB1dFdyYXBwZXIiLCJ0eXBlIiwidXJsSW5wdXQiLCJvbkNoYW5nZSIsImV2ZW50IiwiZXJyb3IiLCJlcnJvclRleHQiLCJCdXR0b25zIiwiQ29uZmlybSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImlzRmV0Y2hpbmciLCJjbGFzc05hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkRpYWxvZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJjb2xvciIsImJsYWNrIiwicmVkIiwiY29ubmVjdCIsImlzT3BlbiIsInNjcmVlbnMiLCJpc0ltcG9ydGluZ1NjcmVlbiIsImltcG9ydFByb2plY3QiLCJmZXRjaGVkUHJvamVjdCIsImlzRmV0Y2hpbmdQcm9qZWN0IiwiZXJyb3JGZXRjaGluZ1Byb2plY3QiLCJkaXNwYXRjaCIsImZldGNoUHJvamVjdCIsImhhbmRsZUNsb3NlIiwidG9nZ2xlSW1wb3J0U2NyZWVuIiwiX2FkZG9uQWN0aW9ucyIsIl9JbXBvcnRQcm9qZWN0RGlhbG9nIiwiY29tcG9uZW50IiwiVGVtcGxhdGUiLCJoaWRlQmFja2Ryb3AiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9