"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[7843],{"./.storybook/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{reduxStore:()=>reduxStore,reduxStoreDecorator:()=>reduxStoreDecorator});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/redux/es/redux.js"),redux_thunk__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/redux-thunk/lib/index.js"),_cdo_apps_code_studio_isRtlRedux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/code-studio/isRtlRedux.js"),_cdo_apps_code_studio_responsiveRedux__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/code-studio/responsiveRedux.js");const reduxStore=(reducers={},state={})=>(0,redux__WEBPACK_IMPORTED_MODULE_5__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_5__.combineReducers)({isRtl:_cdo_apps_code_studio_isRtlRedux__WEBPACK_IMPORTED_MODULE_3__.default,responsive:_cdo_apps_code_studio_responsiveRedux__WEBPACK_IMPORTED_MODULE_4__.default,...reducers}),state,(0,redux__WEBPACK_IMPORTED_MODULE_5__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__.default)),reduxStoreDecorator=function(Story,context){const state=(0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)({},this.initialState,context.parameters.store);return(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider)({children:Story(),store:reduxStore(this.reducers,state)})}},"./src/code-studio/isRtlRedux.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function locale(){var state=arguments.length>0&&void 0!==arguments[0]&&arguments[0],action=arguments.length>1?arguments[1]:void 0;if(action.type===SET_RTL)return action.isRtl;return state},exports.isRtlFromDOM=isRtlFromDOM,exports.setRtlFromDOM=exports.setRtl=void 0;var SET_RTL="isRtl/SET_RTL",setRtl=exports.setRtl=function setRtl(isRtl){return{type:SET_RTL,isRtl}};exports.setRtlFromDOM=function setRtlFromDOM(){return setRtl(isRtlFromDOM())};function isRtlFromDOM(){var head=document.getElementsByTagName("head")[0];if(head&&head.parentElement){var dir=head.parentElement.getAttribute("dir");return!(!dir||"rtl"!==dir.toLowerCase())}return!1}},"./src/code-studio/responsiveRedux.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResponsiveSize=void 0,exports.default=function reducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;if(action.type===SET_RESPONSIVE_SIZE&&state.responsiveSize!==action.responsiveSize)return _objectSpread(_objectSpread({},state),{},{responsiveSize:action.responsiveSize});return state},exports.getResponsiveBreakpoint=getResponsiveBreakpoint,exports.setResponsiveSize=void 0;var _utils=__webpack_require__("./src/utils.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var SET_RESPONSIVE_SIZE="responsive/SET_RESPONSIVE_SIZE",ResponsiveSize=(exports.setResponsiveSize=function setResponsiveSize(responsiveSize){return{type:SET_RESPONSIVE_SIZE,responsiveSize}},exports.ResponsiveSize=(0,_utils.makeEnum)("lg","md","sm","xs")),Breakpoints=[{breakpoint:992,responsiveSize:ResponsiveSize.lg},{breakpoint:720,responsiveSize:ResponsiveSize.md},{breakpoint:650,responsiveSize:ResponsiveSize.sm},{breakpoint:0,responsiveSize:ResponsiveSize.xs}];function getResponsiveBreakpoint(width){var responsiveSize=Breakpoints.find((function(_ref){var breakpoint=_ref.breakpoint;return width>breakpoint}));return void 0===responsiveSize?(console.error("No responsive size found for width ".concat(width,", defaulting to xs")),ResponsiveSize.xs):responsiveSize.responsiveSize}var initialState={responsiveSize:getResponsiveBreakpoint(window.innerWidth)}},"./src/templates/studioHomepages/CourseBlocksWrapper.story.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.ManyCardsWithDescription=exports.CardsWithoutBottomMarginAndLinkAndDescription=exports.CardsWithOnlyLink=exports.CardsWithOnlyDescription=exports.CardsWithLinkAndDescription=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_reactRedux=__webpack_require__("./node_modules/react-redux/es/index.js"),_courseBlockCardsConstants=__webpack_require__("./src/util/courseBlockCardsConstants.js"),_decorators=__webpack_require__("./.storybook/decorators.js"),_CourseBlocksWrapper=_interopRequireDefault(__webpack_require__("./src/templates/studioHomepages/CourseBlocksWrapper.jsx"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.default={component:_CourseBlocksWrapper.default};var Template=function Template(args){return _react.default.createElement(_reactRedux.Provider,{store:(0,_decorators.reduxStore)()},_react.default.createElement(_CourseBlocksWrapper.default,args))};(exports.CardsWithLinkAndDescription=Template.bind({})).args={cards:_courseBlockCardsConstants.TeacherGradeBandCards,heading:"Course Blocks Title",description:"Descriptions of these cards and their relevance",link:"/test/link",linkText:"View more of these cards",hideBottomMargin:!1},(exports.CardsWithOnlyLink=Template.bind({})).args={cards:_courseBlockCardsConstants.TeacherGradeBandCards,link:"/test/link",linkText:"View more of these cards",hideBottomMargin:!1},(exports.CardsWithOnlyDescription=Template.bind({})).args={cards:_courseBlockCardsConstants.TeacherGradeBandCards,heading:"Course Blocks Title",description:"Descriptions of these cards and their relevance",hideBottomMargin:!1},(exports.CardsWithoutBottomMarginAndLinkAndDescription=Template.bind({})).args={cards:_courseBlockCardsConstants.TeacherGradeBandCards,hideBottomMargin:!0},(exports.ManyCardsWithDescription=Template.bind({})).args={cards:_courseBlockCardsConstants.ToolsCards.concat(_courseBlockCardsConstants.ToolsAIExtrasCard),heading:"Course Blocks Title",description:"Descriptions of these cards and their relevance",hideBottomMargin:!0}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLXN0dWRpb0hvbWVwYWdlcy1Db3Vyc2VCbG9ja3NXcmFwcGVyLXN0b3J5LjBlNzI5MWFmLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ink5QkFRTyxNQUFNQSxXQUFhLENBQUNDLFNBQVcsQ0FBQyxFQUFHQyxNQUFRLENBQUMsS0FDMUMscUNBQUFDLGNBQ0wscUNBQUFDLGlCQUFnQixDQUFDQyxNQUFLLGlGQUFZLHlGQUNsQ0gsT0FDQSxxQ0FBQUksaUJBQWdCLG1EQUlQQyxvQkFBc0IsU0FBVUMsTUFBT0MsU0FDbEQsTUFBTVAsT0FBUSxzQ0FBQVEsT0FBTSxDQUFDLEVBQUdDLEtBQUtDLGFBQWNILFFBQVFJLFdBQVdDLE9BQzlELE9BQU8sMkNBQUFDLFVBQVMsQ0FDZEMsU0FBVVIsUUFDVk0sTUFBT2QsV0FBV1csS0FBS1YsU0FBVUMsUUFFckMsQywrSUNFZSxTQUFTZSxTQUE4QixJQUF2QmYsTUFBS2dCLFVBQUFDLE9BQUEsUUFBQUMsSUFBQUYsVUFBQSxJQUFBQSxVQUFBLEdBQVVHLE9BQU1ILFVBQUFDLE9BQUEsRUFBQUQsVUFBQSxRQUFBRSxFQUNsRCxHQUFJQyxPQUFPQyxPQUFTQyxRQUNsQixPQUFPRixPQUFPaEIsTUFFaEIsT0FBT0gsS0FDVCxFLDhFQTdCQSxJQUFNcUIsUUFBVSxnQkFDSEMsT0FBTUMsUUFBQUEsT0FBRyxTQUFURCxPQUFTbkIsT0FBSyxNQUFLLENBQUNpQixLQUFNQyxRQUFTbEIsTUFBTSxFQUM1Qm9CLFFBQUFBLGNBQUcsU0FBaEJDLGdCQUFhLE9BQVNGLE9BQU9HLGVBQWUsRUFZbEQsU0FBU0EsZUFDZCxJQUFNQyxLQUFPQyxTQUFTQyxxQkFBcUIsUUFBUSxHQUNuRCxHQUFJRixNQUFRQSxLQUFLRyxjQUFlLENBQzlCLElBQU1DLElBQU1KLEtBQUtHLGNBQWNFLGFBQWEsT0FDNUMsU0FBVUQsS0FBNkIsUUFBdEJBLElBQUlFLGNBQ3ZCLENBQ0UsT0FBTyxDQUVYLEMsc01DZWUsU0FBU0MsVUFBc0MsSUFB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LFFBQVMsc0JBQ1RDLFlBQWEsa0RBQ2JHLGtCQUFrQixJQUdzQ3pGLFFBQUFBLDhDQUFHK0UsU0FBU0csS0FBSyxDQUFDLElBQzlCRixLQUFPLENBQ25ERyxNQUFPQywyQkFBQUEsc0JBQ1BLLGtCQUFrQixJQUdpQnpGLFFBQUFBLHlCQUFHK0UsU0FBU0csS0FBSyxDQUFDLElBQzlCRixLQUFPLENBQzlCRyxNQUFPTywyQkFBQUEsV0FBV3ZCLE9BQU93QiwyQkFBQUEsbUJBQ3pCTixRQUFTLHNCQUNUQyxZQUFhLGtEQUNiRyxrQkFBa0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrbHktbW9vYy8uLy5zdG9yeWJvb2svZGVjb3JhdG9ycy5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvY29kZS1zdHVkaW8vaXNSdGxSZWR1eC5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvY29kZS1zdHVkaW8vcmVzcG9uc2l2ZVJlZHV4LmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL0NvdXJzZUJsb2Nrc1dyYXBwZXIuc3RvcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJlZHV4VGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgaXNSdGwgZnJvbSAnQGNkby9hcHBzL2NvZGUtc3R1ZGlvL2lzUnRsUmVkdXgnO1xuaW1wb3J0IHJlc3BvbnNpdmUgZnJvbSAnQGNkby9hcHBzL2NvZGUtc3R1ZGlvL3Jlc3BvbnNpdmVSZWR1eCc7XG5cbmV4cG9ydCBjb25zdCByZWR1eFN0b3JlID0gKHJlZHVjZXJzID0ge30sIHN0YXRlID0ge30pID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7aXNSdGwsIHJlc3BvbnNpdmUsIC4uLnJlZHVjZXJzfSksXG4gICAgc3RhdGUsXG4gICAgYXBwbHlNaWRkbGV3YXJlKHJlZHV4VGh1bmspXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVkdXhTdG9yZURlY29yYXRvciA9IGZ1bmN0aW9uIChTdG9yeSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZSA9IG1lcmdlKHt9LCB0aGlzLmluaXRpYWxTdGF0ZSwgY29udGV4dC5wYXJhbWV0ZXJzLnN0b3JlKTtcbiAgcmV0dXJuIFByb3ZpZGVyKHtcbiAgICBjaGlsZHJlbjogU3RvcnkoKSxcbiAgICBzdG9yZTogcmVkdXhTdG9yZSh0aGlzLnJlZHVjZXJzLCBzdGF0ZSksXG4gIH0pO1xufTtcbiIsImNvbnN0IFNFVF9SVEwgPSAnaXNSdGwvU0VUX1JUTCc7XG5leHBvcnQgY29uc3Qgc2V0UnRsID0gaXNSdGwgPT4gKHt0eXBlOiBTRVRfUlRMLCBpc1J0bH0pO1xuZXhwb3J0IGNvbnN0IHNldFJ0bEZyb21ET00gPSAoKSA9PiBzZXRSdGwoaXNSdGxGcm9tRE9NKCkpO1xuXG4vLyBEYXNoYm9hcmQgc2lnbmFscyB3aGV0aGVyIG9yIG5vdCB3ZSdyZSBpbiBydGwgYnkgc2V0dGluZyBcImRpclwiIG9uIHRoZSByb290XG4vLyBlbGVtZW50LiBJbiBhbiBpZGVhbCB3b3JsZCwgcmVkdXggd291bGQgYmUgdGhlIHNvdXJjZSBvZiB0cnV0aCwgYnV0IHdlIGhhdmVcbi8vIENTUyBzZWxlY3RvcnMgdGhhdCBkZXBlbmQgb24gdGhpcyBET00gc3RhdGUsIHNvbWUgb2Ygd2hpY2ggYXJlIHVzZWQgaW4gY2FzZXNcbi8vIHdoZXJlIHdlIGRvbid0IGhhdmUgcmVkdXguXG4vLyBJbnN0ZWFkIHdlIGhhdmUgdGhlIERPTSBjb250aW51ZSB0byBiZSB0aGUgc291cmNlIG9mIHRydXRoLCBhbmQgc2V0IG91ciBzdG9yZVxuLy8gc3RhdGUgYWNjb3JkaW5nbHkgc28gdGhhdCBjb21wb25lbnRzIGNhbiBhY2Nlc3MgdGhpcyBpbmZvLlxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGxvb2tzIGF0IHRoZSBET00gYW5kIGRlY2lkZXMgd2hldGhlciBvciBub3Qgd2UncmUgaW4gUlRMIG1vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1J0bEZyb21ET00oKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICBpZiAoaGVhZCAmJiBoZWFkLnBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXIgPSBoZWFkLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXInKTtcbiAgICByZXR1cm4gISEoZGlyICYmIGRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvY2FsZShzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSBTRVRfUlRMKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5pc1J0bDtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQge21ha2VFbnVtfSBmcm9tICdAY2RvL2FwcHMvdXRpbHMnO1xuXG5jb25zdCBTRVRfUkVTUE9OU0lWRV9TSVpFID0gJ3Jlc3BvbnNpdmUvU0VUX1JFU1BPTlNJVkVfU0laRSc7XG5leHBvcnQgY29uc3Qgc2V0UmVzcG9uc2l2ZVNpemUgPSByZXNwb25zaXZlU2l6ZSA9PiAoe1xuICB0eXBlOiBTRVRfUkVTUE9OU0lWRV9TSVpFLFxuICByZXNwb25zaXZlU2l6ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVNpemUgPSBtYWtlRW51bSgnbGcnLCAnbWQnLCAnc20nLCAneHMnKTtcblxuLy8gRGVmYXVsdCB3aW5kb3cgd2lkdGhzIHRoYXQgYXJlIHRoZSBzdGFydGluZyBwb2ludHMgZm9yIGVhY2ggd2lkdGggY2F0ZWdvcnkuXG5jb25zdCBCcmVha3BvaW50cyA9IFtcbiAge2JyZWFrcG9pbnQ6IDk5MiwgcmVzcG9uc2l2ZVNpemU6IFJlc3BvbnNpdmVTaXplLmxnfSxcbiAge2JyZWFrcG9pbnQ6IDcyMCwgcmVzcG9uc2l2ZVNpemU6IFJlc3BvbnNpdmVTaXplLm1kfSxcbiAge2JyZWFrcG9pbnQ6IDY1MCwgcmVzcG9uc2l2ZVNpemU6IFJlc3BvbnNpdmVTaXplLnNtfSxcbiAge2JyZWFrcG9pbnQ6IDAsIHJlc3BvbnNpdmVTaXplOiBSZXNwb25zaXZlU2l6ZS54c30sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcG9uc2l2ZUJyZWFrcG9pbnQod2lkdGgpIHtcbiAgY29uc3QgcmVzcG9uc2l2ZVNpemUgPSBCcmVha3BvaW50cy5maW5kKCh7YnJlYWtwb2ludH0pID0+IHdpZHRoID4gYnJlYWtwb2ludCk7XG4gIGlmIChyZXNwb25zaXZlU2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBObyByZXNwb25zaXZlIHNpemUgZm91bmQgZm9yIHdpZHRoICR7d2lkdGh9LCBkZWZhdWx0aW5nIHRvIHhzYFxuICAgICk7XG4gICAgcmV0dXJuIFJlc3BvbnNpdmVTaXplLnhzO1xuICB9XG4gIHJldHVybiByZXNwb25zaXZlU2l6ZS5yZXNwb25zaXZlU2l6ZTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICByZXNwb25zaXZlU2l6ZTogZ2V0UmVzcG9uc2l2ZUJyZWFrcG9pbnQod2luZG93LmlubmVyV2lkdGgpLFxufTtcblxuLyoqXG4gKiBSZWR1Y2VyIGZvciByZXNwb25zaXZlIHNpemVzLiBPbmx5IHJldHVybiBhIG5ldyBzdGF0ZSBpZiB3ZSd2ZSBhY3R1YWxseVxuICogY3Jvc3NlZCBpbnRvIGEgbmV3IGJyZWFrcG9pbnQgd2lkdGguXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBpZiAoXG4gICAgYWN0aW9uLnR5cGUgPT09IFNFVF9SRVNQT05TSVZFX1NJWkUgJiZcbiAgICBzdGF0ZS5yZXNwb25zaXZlU2l6ZSAhPT0gYWN0aW9uLnJlc3BvbnNpdmVTaXplXG4gICkge1xuICAgIHJldHVybiB7Li4uc3RhdGUsIHJlc3BvbnNpdmVTaXplOiBhY3Rpb24ucmVzcG9uc2l2ZVNpemV9O1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7XG4gIFRlYWNoZXJHcmFkZUJhbmRDYXJkcyxcbiAgVG9vbHNDYXJkcyxcbiAgVG9vbHNBSUV4dHJhc0NhcmQsXG59IGZyb20gJ0BjZG8vYXBwcy91dGlsL2NvdXJzZUJsb2NrQ2FyZHNDb25zdGFudHMnO1xuaW1wb3J0IHtyZWR1eFN0b3JlfSBmcm9tICdAY2RvL3N0b3J5Ym9vay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IENvdXJzZUJsb2Nrc1dyYXBwZXIgZnJvbSAnLi9Db3Vyc2VCbG9ja3NXcmFwcGVyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IENvdXJzZUJsb2Nrc1dyYXBwZXIsXG59O1xuXG4vLyBUZW1wbGF0ZVxuY29uc3QgVGVtcGxhdGUgPSBhcmdzID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlKCl9PlxuICAgIDxDb3Vyc2VCbG9ja3NXcmFwcGVyIHsuLi5hcmdzfSAvPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IENhcmRzV2l0aExpbmtBbmREZXNjcmlwdGlvbiA9IFRlbXBsYXRlLmJpbmQoe30pO1xuQ2FyZHNXaXRoTGlua0FuZERlc2NyaXB0aW9uLmFyZ3MgPSB7XG4gIGNhcmRzOiBUZWFjaGVyR3JhZGVCYW5kQ2FyZHMsXG4gIGhlYWRpbmc6ICdDb3Vyc2UgQmxvY2tzIFRpdGxlJyxcbiAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbnMgb2YgdGhlc2UgY2FyZHMgYW5kIHRoZWlyIHJlbGV2YW5jZScsXG4gIGxpbms6ICcvdGVzdC9saW5rJyxcbiAgbGlua1RleHQ6ICdWaWV3IG1vcmUgb2YgdGhlc2UgY2FyZHMnLFxuICBoaWRlQm90dG9tTWFyZ2luOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJkc1dpdGhPbmx5TGluayA9IFRlbXBsYXRlLmJpbmQoe30pO1xuQ2FyZHNXaXRoT25seUxpbmsuYXJncyA9IHtcbiAgY2FyZHM6IFRlYWNoZXJHcmFkZUJhbmRDYXJkcyxcbiAgbGluazogJy90ZXN0L2xpbmsnLFxuICBsaW5rVGV4dDogJ1ZpZXcgbW9yZSBvZiB0aGVzZSBjYXJkcycsXG4gIGhpZGVCb3R0b21NYXJnaW46IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IENhcmRzV2l0aE9ubHlEZXNjcmlwdGlvbiA9IFRlbXBsYXRlLmJpbmQoe30pO1xuQ2FyZHNXaXRoT25seURlc2NyaXB0aW9uLmFyZ3MgPSB7XG4gIGNhcmRzOiBUZWFjaGVyR3JhZGVCYW5kQ2FyZHMsXG4gIGhlYWRpbmc6ICdDb3Vyc2UgQmxvY2tzIFRpdGxlJyxcbiAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbnMgb2YgdGhlc2UgY2FyZHMgYW5kIHRoZWlyIHJlbGV2YW5jZScsXG4gIGhpZGVCb3R0b21NYXJnaW46IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IENhcmRzV2l0aG91dEJvdHRvbU1hcmdpbkFuZExpbmtBbmREZXNjcmlwdGlvbiA9IFRlbXBsYXRlLmJpbmQoe30pO1xuQ2FyZHNXaXRob3V0Qm90dG9tTWFyZ2luQW5kTGlua0FuZERlc2NyaXB0aW9uLmFyZ3MgPSB7XG4gIGNhcmRzOiBUZWFjaGVyR3JhZGVCYW5kQ2FyZHMsXG4gIGhpZGVCb3R0b21NYXJnaW46IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgTWFueUNhcmRzV2l0aERlc2NyaXB0aW9uID0gVGVtcGxhdGUuYmluZCh7fSk7XG5NYW55Q2FyZHNXaXRoRGVzY3JpcHRpb24uYXJncyA9IHtcbiAgY2FyZHM6IFRvb2xzQ2FyZHMuY29uY2F0KFRvb2xzQUlFeHRyYXNDYXJkKSxcbiAgaGVhZGluZzogJ0NvdXJzZSBCbG9ja3MgVGl0bGUnLFxuICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9ucyBvZiB0aGVzZSBjYXJkcyBhbmQgdGhlaXIgcmVsZXZhbmNlJyxcbiAgaGlkZUJvdHRvbU1hcmdpbjogdHJ1ZSxcbn07XG4iXSwibmFtZXMiOlsicmVkdXhTdG9yZSIsInJlZHVjZXJzIiwic3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImlzUnRsIiwiYXBwbHlNaWRkbGV3YXJlIiwicmVkdXhTdG9yZURlY29yYXRvciIsIlN0b3J5IiwiY29udGV4dCIsIm1lcmdlIiwidGhpcyIsImluaXRpYWxTdGF0ZSIsInBhcmFtZXRlcnMiLCJzdG9yZSIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsb2NhbGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1JUTCIsInNldFJ0bCIsImV4cG9ydHMiLCJzZXRSdGxGcm9tRE9NIiwiaXNSdGxGcm9tRE9NIiwiaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnRFbGVtZW50IiwiZGlyIiwiZ2V0QXR0cmlidXRlIiwidG9Mb3dlckNhc2UiLCJyZWR1Y2VyIiwiU0VUX1JFU1BPTlNJVkVfU0laRSIsInJlc3BvbnNpdmVTaXplIiwiX29iamVjdFNwcmVhZCIsIl91dGlscyIsInJlcXVpcmUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJvd25LZXlzIiwiZSIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJmb3JFYWNoIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsInZhbHVlIiwiX3RvUHJvcGVydHlLZXkiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJSZXNwb25zaXZlU2l6ZSIsInNldFJlc3BvbnNpdmVTaXplIiwibWFrZUVudW0iLCJCcmVha3BvaW50cyIsImJyZWFrcG9pbnQiLCJsZyIsIm1kIiwic20iLCJ4cyIsImdldFJlc3BvbnNpdmVCcmVha3BvaW50Iiwid2lkdGgiLCJmaW5kIiwiX3JlZiIsImNvbnNvbGUiLCJlcnJvciIsImNvbmNhdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX3JlYWN0UmVkdXgiLCJfY291cnNlQmxvY2tDYXJkc0NvbnN0YW50cyIsIl9kZWNvcmF0b3JzIiwiX0NvdXJzZUJsb2Nrc1dyYXBwZXIiLCJfX2VzTW9kdWxlIiwiY29tcG9uZW50IiwiQ291cnNlQmxvY2tzV3JhcHBlciIsIlRlbXBsYXRlIiwiYXJncyIsImNyZWF0ZUVsZW1lbnQiLCJiaW5kIiwiY2FyZHMiLCJUZWFjaGVyR3JhZGVCYW5kQ2FyZHMiLCJoZWFkaW5nIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwibGlua1RleHQiLCJoaWRlQm90dG9tTWFyZ2luIiwiVG9vbHNDYXJkcyIsIlRvb2xzQUlFeHRyYXNDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==