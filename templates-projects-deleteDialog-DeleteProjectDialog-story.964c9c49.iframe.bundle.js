"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[5054],{"./.storybook/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{reduxStore:()=>reduxStore});var redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/redux/es/redux.js"),_cdo_apps_code_studio_isRtlRedux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/code-studio/isRtlRedux.js"),_cdo_apps_code_studio_responsiveRedux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/code-studio/responsiveRedux.js"),redux_thunk__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/redux-thunk/lib/index.js");const reduxStore=(reducers={},state={})=>(0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({isRtl:_cdo_apps_code_studio_isRtlRedux__WEBPACK_IMPORTED_MODULE_0__.default,responsive:_cdo_apps_code_studio_responsiveRedux__WEBPACK_IMPORTED_MODULE_1__.default,...reducers}),state,(0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__.default))},"./src/templates/projects/deleteDialog/DeleteProjectDialog.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.UnconnectedDeleteProjectDialog=void 0;var _propTypes=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_react=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_reactRedux=__webpack_require__("./node_modules/react-redux/es/index.js"),_BaseDialog=_interopRequireDefault(__webpack_require__("./src/templates/BaseDialog.jsx")),_DialogFooter=_interopRequireDefault(__webpack_require__("./src/templates/teacherDashboard/DialogFooter.jsx")),_Button=_interopRequireDefault(__webpack_require__("./src/templates/Button.jsx")),_locale=_interopRequireDefault(__webpack_require__("./src/util/locale-do-not-import.js")),_deleteProjectDialogRedux=__webpack_require__("./src/templates/projects/deleteDialog/deleteProjectDialogRedux.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var DeleteProjectDialog=function(_Component){function DeleteProjectDialog(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_Component.call.apply(_Component,[this].concat(args))||this),"close",(function(){return _this.props.onClose()})),_defineProperty(_assertThisInitialized(_this),"delete",(function(){return _this.props.deleteProject(_this.props.projectId)})),_this}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(DeleteProjectDialog,_Component),DeleteProjectDialog.prototype.render=function render(){return _react.default.createElement(_BaseDialog.default,{isOpen:this.props.isOpen,handleClose:this.close,useUpdatedStyles:!0,style:styles.dialog},_react.default.createElement("h2",{className:"delete-dialog-title"},_locale.default.deleteProject()),_react.default.createElement("div",{style:{marginBottom:10}},_locale.default.deleteProjectConfirm()),_react.default.createElement(_DialogFooter.default,null,_react.default.createElement(_Button.default,{text:_locale.default.dialogCancel(),onClick:this.close,color:_Button.default.ButtonColor.gray,className:"no-mc"}),_react.default.createElement(_Button.default,{text:_locale.default.delete(),onClick:this.delete,color:_Button.default.ButtonColor.brandSecondaryDefault,className:"no-mc ui-confirm-project-delete-button",isPending:this.props.isDeletePending,pendingText:_locale.default.deleting()})))},DeleteProjectDialog}(_react.Component);_defineProperty(DeleteProjectDialog,"propTypes",{isOpen:_propTypes.default.bool.isRequired,projectId:_propTypes.default.string,isDeletePending:_propTypes.default.bool,onClose:_propTypes.default.func.isRequired,deleteProject:_propTypes.default.func.isRequired});var styles={dialog:{paddingLeft:20,paddingRight:20,paddingBottom:20}},UnconnectedDeleteProjectDialog=DeleteProjectDialog;exports.UnconnectedDeleteProjectDialog=UnconnectedDeleteProjectDialog;var _default=(0,_reactRedux.connect)((function(state){return{isOpen:state.deleteDialog.isOpen,isDeletePending:state.deleteDialog.isDeletePending,projectId:state.deleteDialog.projectId}}),(function(dispatch){return{onClose:function onClose(){dispatch((0,_deleteProjectDialogRedux.hideDeleteDialog)())},deleteProject:function deleteProject(projectId){return dispatch((0,_deleteProjectDialogRedux.deleteProject)(projectId))}}}))(DeleteProjectDialog);exports.default=_default},"./src/templates/projects/deleteDialog/DeleteProjectDialog.story.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Pending=exports.Default=void 0;var _react=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react/index.js")),_DeleteProjectDialog=__webpack_require__("./src/templates/projects/deleteDialog/DeleteProjectDialog.jsx"),_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_decorators=__webpack_require__("./.storybook/decorators.js"),_reactRedux=__webpack_require__("./node_modules/react-redux/es/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var _default={component:_DeleteProjectDialog.UnconnectedDeleteProjectDialog};exports.default=_default;var DEFAULT_PROPS={isOpen:!0,projectId:"MY_PROJECT_ID",onClose:(0,_addonActions.action)("close"),deleteProject:function deleteProject(){return console.log("Delete project")}},Template=function Template(args){return _react.default.createElement(_reactRedux.Provider,{store:(0,_decorators.reduxStore)()},_react.default.createElement(_DeleteProjectDialog.UnconnectedDeleteProjectDialog,_extends({},DEFAULT_PROPS,args)))},Default=Template.bind({});exports.Default=Default,Default.args={isDeletePending:!1};var Pending=Template.bind({});exports.Pending=Pending,Pending.args={isDeletePending:!0}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLXByb2plY3RzLWRlbGV0ZURpYWxvZy1EZWxldGVQcm9qZWN0RGlhbG9nLXN0b3J5LjU1ZDRlYzA0LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6IjJ1QkFLTyxNQUFNQSxXQUFhLENBQUNDLFNBQVcsQ0FBQyxFQUFHQyxNQUFRLENBQUMsS0FDMUMscUNBQUFDLGNBQ0wscUNBQUFDLGlCQUFnQixDQUFDQyxNQUFLLGlGQUFZLHlGQUNsQ0gsT0FDQSxxQ0FBQUksaUJBQWdCLGtELHlmQ1RwQixpR0FDQSxPLHVxQkFBQSx1REFDQSwwRUFDQSwwRkFDQSwrR0FDQSxrRkFDQSwwRkFDQSxtSCw0MkJBRU1DLG9CQUFBQSxTQUFBQSxZLHFRQVNJLGtCQUFNLE1BQUtDLE1BQU1DLFNBQWpCLEksd0RBRUMsa0JBQU0sTUFBS0QsTUFBTUUsY0FBYyxNQUFLRixNQUFNRyxVQUExQyxJLDZQQUVUQyxPQUFBLFNBQUFBLFNBQ0UsT0FDRSw2QkFBQyxvQkFBRCxDQUNFQyxPQUFRQyxLQUFLTixNQUFNSyxPQUNuQkUsWUFBYUQsS0FBS0UsTUFDbEJDLGtCQUFnQixFQUNoQkMsTUFBT0MsT0FBT0MsUUFFZCxtQ0FBSUMsVUFBVSx1QkFBdUJDLFFBQUFBLFFBQUtaLGlCQUMxQyxvQ0FBS1EsTUFBTyxDQUFDSyxhQUFjLEtBQU1ELFFBQUFBLFFBQUtFLHdCQUN0Qyw2QkFBQyxzQkFBRCxLQUNFLDZCQUFDLGdCQUFELENBQ0VDLEtBQU1ILFFBQUFBLFFBQUtJLGVBQ1hDLFFBQVNiLEtBQUtFLE1BQ2RZLE1BQU9DLFFBQUFBLFFBQU9DLFlBQVlDLEtBQzFCVixVQUFVLFVBRVosNkJBQUMsZ0JBQUQsQ0FDRUksS0FBTUgsUUFBQUEsUUFBQSxTQUNOSyxRQUFTYixLQUFBLE9BQ1RjLE1BQU9DLFFBQUFBLFFBQU9DLFlBQVlFLHNCQUMxQlgsVUFBVSx5Q0FDVlksVUFBV25CLEtBQUtOLE1BQU0wQixnQkFDdEJDLFlBQWFiLFFBQUFBLFFBQUtjLGNBSzNCLEUsb0JBekNHN0IsQ0FBNEI4QixPQUFBQSxXLGdCQUE1QjlCLG9CQUFBQSxZQUNlLENBQ2pCTSxPQUFReUIsV0FBQUEsUUFBVUMsS0FBS0MsV0FDdkI3QixVQUFXMkIsV0FBQUEsUUFBVUcsT0FDckJQLGdCQUFpQkksV0FBQUEsUUFBVUMsS0FDM0I5QixRQUFTNkIsV0FBQUEsUUFBVUksS0FBS0YsV0FDeEI5QixjQUFlNEIsV0FBQUEsUUFBVUksS0FBS0YsYUFzQ2xDLElBQU1yQixPQUFTLENBQ2JDLE9BQVEsQ0FDTnVCLFlBQWEsR0FDYkMsYUFBYyxHQUNkQyxjQUFlLEtBSU5DLCtCQUFpQ3ZDLG9CLG9GQUUvQixFQUFBd0MsWUFBQUEsVUFDYixTQUFBN0MsT0FBSyxNQUFLLENBQ1JXLE9BQVFYLE1BQU04QyxhQUFhbkMsT0FDM0JxQixnQkFBaUJoQyxNQUFNOEMsYUFBYWQsZ0JBQ3BDdkIsVUFBV1QsTUFBTThDLGFBQWFyQyxVQUgzQixJQUtMLFNBQUFzQyxVQUFRLE1BQUssQ0FDWHhDLFFBRFcsbUJBRVR3QyxVQUFTLEVBQUFDLDBCQUFBQSxvQkFDVixFQUNEeEMsY0FKVyx1QkFJR0MsV0FDWixPQUFPc0MsVUFBUyxFQUFBdkMsMEJBQUFBLGVBQWNDLFdBQy9CLEVBTkssR0FOSyxDQWNiSixxQixzUUM3RUYsVyxrRkFBQSx1REFDQSwwR0FDQSwyRkFDQSw4REFDQSwwRSxpVEFFZSxDQUNiNEMsVUFBVzVDLHFCQUFBQSxnQyx5QkFHYixJQUVNNkMsY0FBZ0IsQ0FDcEJ2QyxRQUFRLEVBQ1JGLFVBSmlCLGdCQUtqQkYsU0FBUyxFQUFBNEMsY0FBQUEsUUFBTyxTQUNoQjNDLGNBQWUsZ0NBQU00QyxRQUFRQyxJQUFJLGlCQUFsQixHQUVYQyxTQUFXLFNBQVhBLFNBQVdDLE1BQUksT0FDbkIsNkJBQUMsWUFBQUMsU0FBRCxDQUFVQyxPQUFPLEVBQUEzRCxZQUFBQSxlQUNmLDZCQUFDLG9EQUFELFlBQXlCb0QsY0FBbUJLLE9BRjNCLEVBTVJHLFFBQVVKLFNBQVNLLEtBQUssQ0FBQyxHLHdCQUN0Q0QsUUFBUUgsS0FBTyxDQUNidkIsaUJBQWlCLEdBR1osSUFBTTRCLFFBQVVOLFNBQVNLLEtBQUssQ0FBQyxHLHdCQUN0Q0MsUUFBUUwsS0FBTyxDQUNidkIsaUJBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi8uc3Rvcnlib29rL2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL3RlbXBsYXRlcy9wcm9qZWN0cy9kZWxldGVEaWFsb2cvRGVsZXRlUHJvamVjdERpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL3RlbXBsYXRlcy9wcm9qZWN0cy9kZWxldGVEaWFsb2cvRGVsZXRlUHJvamVjdERpYWxvZy5zdG9yeS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBpc1J0bCBmcm9tICdAY2RvL2FwcHMvY29kZS1zdHVkaW8vaXNSdGxSZWR1eCc7XG5pbXBvcnQgcmVzcG9uc2l2ZSBmcm9tICdAY2RvL2FwcHMvY29kZS1zdHVkaW8vcmVzcG9uc2l2ZVJlZHV4JztcbmltcG9ydCByZWR1eFRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuZXhwb3J0IGNvbnN0IHJlZHV4U3RvcmUgPSAocmVkdWNlcnMgPSB7fSwgc3RhdGUgPSB7fSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgY29tYmluZVJlZHVjZXJzKHtpc1J0bCwgcmVzcG9uc2l2ZSwgLi4ucmVkdWNlcnN9KSxcbiAgICBzdGF0ZSxcbiAgICBhcHBseU1pZGRsZXdhcmUocmVkdXhUaHVuaylcbiAgKTtcbn07XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBCYXNlRGlhbG9nIGZyb20gJy4uLy4uL0Jhc2VEaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0Zvb3RlciBmcm9tICcuLi8uLi90ZWFjaGVyRGFzaGJvYXJkL0RpYWxvZ0Zvb3Rlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL0J1dHRvbic7XG5pbXBvcnQgaTE4biBmcm9tICdAY2RvL2xvY2FsZSc7XG5pbXBvcnQge2hpZGVEZWxldGVEaWFsb2csIGRlbGV0ZVByb2plY3R9IGZyb20gJy4vZGVsZXRlUHJvamVjdERpYWxvZ1JlZHV4JztcblxuY2xhc3MgRGVsZXRlUHJvamVjdERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHByb2plY3RJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0RlbGV0ZVBlbmRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGVsZXRlUHJvamVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjbG9zZSA9ICgpID0+IHRoaXMucHJvcHMub25DbG9zZSgpO1xuXG4gIGRlbGV0ZSA9ICgpID0+IHRoaXMucHJvcHMuZGVsZXRlUHJvamVjdCh0aGlzLnByb3BzLnByb2plY3RJZCk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QmFzZURpYWxvZ1xuICAgICAgICBpc09wZW49e3RoaXMucHJvcHMuaXNPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5jbG9zZX1cbiAgICAgICAgdXNlVXBkYXRlZFN0eWxlc1xuICAgICAgICBzdHlsZT17c3R5bGVzLmRpYWxvZ31cbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRlbGV0ZS1kaWFsb2ctdGl0bGVcIj57aTE4bi5kZWxldGVQcm9qZWN0KCl9PC9oMj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fT57aTE4bi5kZWxldGVQcm9qZWN0Q29uZmlybSgpfTwvZGl2PlxuICAgICAgICA8RGlhbG9nRm9vdGVyPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHRleHQ9e2kxOG4uZGlhbG9nQ2FuY2VsKCl9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsb3NlfVxuICAgICAgICAgICAgY29sb3I9e0J1dHRvbi5CdXR0b25Db2xvci5ncmF5fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdGV4dD17aTE4bi5kZWxldGUoKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlfVxuICAgICAgICAgICAgY29sb3I9e0J1dHRvbi5CdXR0b25Db2xvci5icmFuZFNlY29uZGFyeURlZmF1bHR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYyB1aS1jb25maXJtLXByb2plY3QtZGVsZXRlLWJ1dHRvblwiXG4gICAgICAgICAgICBpc1BlbmRpbmc9e3RoaXMucHJvcHMuaXNEZWxldGVQZW5kaW5nfVxuICAgICAgICAgICAgcGVuZGluZ1RleHQ9e2kxOG4uZGVsZXRpbmcoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ0Zvb3Rlcj5cbiAgICAgIDwvQmFzZURpYWxvZz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZGlhbG9nOiB7XG4gICAgcGFkZGluZ0xlZnQ6IDIwLFxuICAgIHBhZGRpbmdSaWdodDogMjAsXG4gICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVW5jb25uZWN0ZWREZWxldGVQcm9qZWN0RGlhbG9nID0gRGVsZXRlUHJvamVjdERpYWxvZztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBpc09wZW46IHN0YXRlLmRlbGV0ZURpYWxvZy5pc09wZW4sXG4gICAgaXNEZWxldGVQZW5kaW5nOiBzdGF0ZS5kZWxldGVEaWFsb2cuaXNEZWxldGVQZW5kaW5nLFxuICAgIHByb2plY3RJZDogc3RhdGUuZGVsZXRlRGlhbG9nLnByb2plY3RJZCxcbiAgfSksXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgb25DbG9zZSgpIHtcbiAgICAgIGRpc3BhdGNoKGhpZGVEZWxldGVEaWFsb2coKSk7XG4gICAgfSxcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKGRlbGV0ZVByb2plY3QocHJvamVjdElkKSk7XG4gICAgfSxcbiAgfSlcbikoRGVsZXRlUHJvamVjdERpYWxvZyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtVbmNvbm5lY3RlZERlbGV0ZVByb2plY3REaWFsb2cgYXMgRGVsZXRlUHJvamVjdERpYWxvZ30gZnJvbSAnLi9EZWxldGVQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB7YWN0aW9ufSBmcm9tICdAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnMnO1xuaW1wb3J0IHtyZWR1eFN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi8uc3Rvcnlib29rL2RlY29yYXRvcnMnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogRGVsZXRlUHJvamVjdERpYWxvZyxcbn07XG5cbmNvbnN0IFBST0pFQ1RfSUQgPSAnTVlfUFJPSkVDVF9JRCc7XG5cbmNvbnN0IERFRkFVTFRfUFJPUFMgPSB7XG4gIGlzT3BlbjogdHJ1ZSxcbiAgcHJvamVjdElkOiBQUk9KRUNUX0lELFxuICBvbkNsb3NlOiBhY3Rpb24oJ2Nsb3NlJyksXG4gIGRlbGV0ZVByb2plY3Q6ICgpID0+IGNvbnNvbGUubG9nKCdEZWxldGUgcHJvamVjdCcpLFxufTtcbmNvbnN0IFRlbXBsYXRlID0gYXJncyA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZSgpfT5cbiAgICA8RGVsZXRlUHJvamVjdERpYWxvZyB7Li4uREVGQVVMVF9QUk9QU30gey4uLmFyZ3N9IC8+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pO1xuRGVmYXVsdC5hcmdzID0ge1xuICBpc0RlbGV0ZVBlbmRpbmc6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IFBlbmRpbmcgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcblBlbmRpbmcuYXJncyA9IHtcbiAgaXNEZWxldGVQZW5kaW5nOiB0cnVlLFxufTtcbiJdLCJuYW1lcyI6WyJyZWR1eFN0b3JlIiwicmVkdWNlcnMiLCJzdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwiaXNSdGwiLCJhcHBseU1pZGRsZXdhcmUiLCJEZWxldGVQcm9qZWN0RGlhbG9nIiwicHJvcHMiLCJvbkNsb3NlIiwiZGVsZXRlUHJvamVjdCIsInByb2plY3RJZCIsInJlbmRlciIsImlzT3BlbiIsInRoaXMiLCJoYW5kbGVDbG9zZSIsImNsb3NlIiwidXNlVXBkYXRlZFN0eWxlcyIsInN0eWxlIiwic3R5bGVzIiwiZGlhbG9nIiwiY2xhc3NOYW1lIiwiaTE4biIsIm1hcmdpbkJvdHRvbSIsImRlbGV0ZVByb2plY3RDb25maXJtIiwidGV4dCIsImRpYWxvZ0NhbmNlbCIsIm9uQ2xpY2siLCJjb2xvciIsIkJ1dHRvbiIsIkJ1dHRvbkNvbG9yIiwiZ3JheSIsImJyYW5kU2Vjb25kYXJ5RGVmYXVsdCIsImlzUGVuZGluZyIsImlzRGVsZXRlUGVuZGluZyIsInBlbmRpbmdUZXh0IiwiZGVsZXRpbmciLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJVbmNvbm5lY3RlZERlbGV0ZVByb2plY3REaWFsb2ciLCJjb25uZWN0IiwiZGVsZXRlRGlhbG9nIiwiZGlzcGF0Y2giLCJoaWRlRGVsZXRlRGlhbG9nIiwiY29tcG9uZW50IiwiREVGQVVMVF9QUk9QUyIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJUZW1wbGF0ZSIsImFyZ3MiLCJQcm92aWRlciIsInN0b3JlIiwiRGVmYXVsdCIsImJpbmQiLCJQZW5kaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==