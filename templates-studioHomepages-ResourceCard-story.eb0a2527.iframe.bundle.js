(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[6721],{"./.storybook/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{reduxStore:()=>reduxStore});var redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/redux/es/redux.js"),redux_thunk__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/redux-thunk/lib/index.js"),_cdo_apps_code_studio_isRtlRedux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/code-studio/isRtlRedux.js"),_cdo_apps_code_studio_responsiveRedux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/code-studio/responsiveRedux.js");const reduxStore=(reducers={},state={})=>(0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({isRtl:_cdo_apps_code_studio_isRtlRedux__WEBPACK_IMPORTED_MODULE_1__.default,responsive:_cdo_apps_code_studio_responsiveRedux__WEBPACK_IMPORTED_MODULE_2__.default,...reducers}),state,(0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_0__.default))},"./src/code-studio/isRtlRedux.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function locale(){var state=arguments.length>0&&void 0!==arguments[0]&&arguments[0],action=arguments.length>1?arguments[1]:void 0;if(action.type===SET_RTL)return action.isRtl;return state},exports.isRtlFromDOM=isRtlFromDOM,exports.setRtlFromDOM=exports.setRtl=void 0;var SET_RTL="isRtl/SET_RTL",setRtl=function setRtl(isRtl){return{type:SET_RTL,isRtl}};exports.setRtl=setRtl;function isRtlFromDOM(){var head=document.getElementsByTagName("head")[0];if(head&&head.parentElement){var dir=head.parentElement.getAttribute("dir");return!(!dir||"rtl"!==dir.toLowerCase())}return!1}exports.setRtlFromDOM=function setRtlFromDOM(){return setRtl(isRtlFromDOM())}},"./src/code-studio/responsiveRedux.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResponsiveSize=void 0,exports.default=function reducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;if(action.type===SET_RESPONSIVE_SIZE&&state.responsiveSize!==action.responsiveSize)return _objectSpread(_objectSpread({},state),{},{responsiveSize:action.responsiveSize});return state},exports.getResponsiveBreakpoint=getResponsiveBreakpoint,exports.setResponsiveSize=void 0;var _utils=__webpack_require__("./src/utils.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var SET_RESPONSIVE_SIZE="responsive/SET_RESPONSIVE_SIZE";exports.setResponsiveSize=function setResponsiveSize(responsiveSize){return{type:SET_RESPONSIVE_SIZE,responsiveSize}};var ResponsiveSize=(0,_utils.makeEnum)("lg","md","sm","xs");exports.ResponsiveSize=ResponsiveSize;var Breakpoints=[{breakpoint:992,responsiveSize:ResponsiveSize.lg},{breakpoint:720,responsiveSize:ResponsiveSize.md},{breakpoint:650,responsiveSize:ResponsiveSize.sm},{breakpoint:0,responsiveSize:ResponsiveSize.xs}];function getResponsiveBreakpoint(width){return Breakpoints.find((function(_ref){var breakpoint=_ref.breakpoint;return width>breakpoint})).responsiveSize}var initialState={responsiveSize:getResponsiveBreakpoint(window.innerWidth)}},"./src/fontConstants.js":module=>{module.exports={"metropolis-font":"'Metropolis', sans-serif","main-font":"'Metropolis', sans-serif","thin-font-weight":"100","extra-light-font-weight":"200","light-font-weight":"300","regular-font-weight":"400","medium-font-weight":"500","semi-bold-font-weight":"600","bold-font-weight":"700","extra-bold-font-weight":"800","black-font-weight":"900","main-font-thin":{fontFamily:"'Metropolis', sans-serif",fontWeight:"100",fontStyle:"normal"},"main-font-thin-italic":{fontFamily:"'Metropolis', sans-serif",fontWeight:"100",fontStyle:"italic"},"main-font-extra-light":{fontFamily:"'Metropolis', sans-serif",fontWeight:"200",fontStyle:"normal"},"main-font-extra-light-italic":{fontFamily:"'Metropolis', sans-serif",fontWeight:"200",fontStyle:"italic"},"main-font-light":{fontFamily:"'Metropolis', sans-serif",fontWeight:"300",fontStyle:"normal"},"main-font-light-italic":{fontFamily:"'Metropolis', sans-serif",fontWeight:"300",fontStyle:"italic"},"main-font-regular":{fontFamily:"'Metropolis', sans-serif",fontWeight:"400",fontStyle:"normal"},"main-font-regular-italic":{fontFamily:"'Metropolis', sans-serif",fontWeight:"400",fontStyle:"italic"},"main-font-medium":{fontFamily:"'Metropolis', sans-serif",fontWeight:"500",fontStyle:"normal"},"main-font-medium-italic":{fontFamily:"'Metropolis', sans-serif",fontWeight:"500",fontStyle:"italic"},"main-font-semi-bold":{fontFamily:"'Metropolis', sans-serif",fontWeight:"600",fontStyle:"normal"},"main-font-semi-bold-italic":{fontFamily:"'Metropolis', sans-serif",fontWeight:"600",fontStyle:"italic"},"main-font-bold":{fontFamily:"'Metropolis', sans-serif",fontWeight:"700",fontStyle:"normal"},"main-font-bold-italic":{fontFamily:"'Metropolis', sans-serif",fontWeight:"700",fontStyle:"italic"},"main-font-extra-bold":{fontFamily:"'Metropolis', sans-serif",fontWeight:"800",fontStyle:"normal"},"main-font-extra-bold-italic":{fontFamily:"'Metropolis', sans-serif",fontWeight:"800",fontStyle:"italic"},"main-font-black":{fontFamily:"'Metropolis', sans-serif",fontWeight:"900",fontStyle:"normal"},"main-font-black-italic":{fontFamily:"'Metropolis', sans-serif",fontWeight:"900",fontStyle:"italic"},"barlowSemiCondensed-semibold":"'Barlow Semi Condensed Semibold', sans-serif","barlowSemiCondensed-medium":"'Barlow Semi Condensed Medium', sans-serif","code-font":"'Source Code Pro', Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace","font-awesome-core-url":"'https://dsco.code.org/assets/font-awesome-pro/1684178876/css/fontawesome.min.css'","font-awesome-brands-url":"'https://dsco.code.org/assets/font-awesome-pro/1684178876/css/brands.min.css'","font-awesome-solid-url":"'https://dsco.code.org/assets/font-awesome-pro/1684178876/css/solid.min.css'","font-awesome-regular-url":"'https://dsco.code.org/assets/font-awesome-pro/1684178876/css/regular.min.css'","font-awesome-v4-fonts-url":"'https://dsco.code.org/assets/font-awesome-pro/1684178876/css/v4-font-face.min.css'","font-awesome-v4-shims-url":"'https://dsco.code.org/assets/font-awesome-pro/1684178876/css/v4-shims.min.css'"}},"./src/util/color.js":module=>{module.exports={black:"#000",background_black:"#121416",dark_gray:"#2D3139",darkest_gray:"#292F36",dark_slate_gray:"#282c34",darkest_slate_gray:"#25292d",dark_charcoal:"#4d575f",charcoal:"#5b6770",light_gray:"#949ca2",lighter_gray:"#c6cacd",lightest_gray:"#e7e8ea",background_gray:"#f2f2f2",dimgray:"#696969",white:"#fff",default_blue:"#3670b3",dark_teal:"#0094a3",teal:"#0093a4",applab_button_teal:"#1abc9c",light_teal:"#59cad3",lightish_teal:"#80d6de",lighter_teal:"#a6e3e8",lightest_teal:"#d9f3f5",ai_rubric_cyan:"#3cfff8",purple:"#8c52ba",light_purple:"#a69bc1",lighter_purple:"#cfc9de",lightest_purple:"#ebe8f1",cyan:"#0094ca",light_cyan:"#59b9dc",lighter_cyan:"#a6daed",lightest_cyan:"#d9eff7",almost_white_cyan:"#f5fcff",orange:"#ffa400",light_orange:"#ffc459",lighter_orange:"#ffe0a6",lightest_orange:"#fff2d9",dark_orange:"#ff8600",green:"#b9bf15",light_green:"#d1d567",lighter_green:"#e7e9ad",lightest_green:"#f5f5dc",highlight_green:"#8afc9b",yellow:"#ffb81d",light_yellow:"#ffdb74",lighter_yellow:"#ffebb5",lightest_yellow:"#fff7df",goldenrod:"#daa520",header_text:"#fff",bkgnd_color:"#0093a4",inset_color:"#c6cacd",dark_color:"#8c52ba",hdr_color:"#8c52ba",red:"#c00",lightest_red:"#fcc",dark_red:"#d62911",realgreen:"#008000",realyellow:"#ff0",mustardyellow:"#efcd1c",twitter_blue:"#00aced",facebook_blue:"#3b5998",linkedin_blue:"#0077B5",dark_blue:"#00647f",blockly_flyout_gray:"#ddd",default_text:"#333",border_gray:"#bbb",border_light_gray:"#d8d8d8",table_header:"#ececec",table_light_row:"#fcfcfc",table_dark_row:"#f4f4f4",level_submitted:"#8c52ba",level_perfect:"rgb(14, 190, 14)",level_passed:"rgb(159, 212, 159)",level_attempted:"#ff0",level_not_tried:"#fefefe",level_current:"#ffa400",level_review_rejected:"#c00",level_review_accepted:"rgb(11, 142, 11)",assessment:"#0094ca",workspace_running_background:"#e5e5e5",dark_purple:"#682A77",bright_green:"#0ebe0e",neon_pink:"#e9118f",link_color:"#0596ce",shadow:"rgba(0, 0, 0, 0.3)",bootstrap_button_blue:"#337ab7",bootstrap_button_red:"#d9534f",bootstrap_error_background:"#f2dede",bootstrap_error_text:"#b94a48",bootstrap_v3_error_text:"#a94442",bootstrap_error_border:"#ebccd1",bootstrap_warning_background:"#fcf8e3",bootstrap_warning_text:"#c09853",bootstrap_warning_border:"#faebcc",bootstrap_border_color:"#cccccc",bootstrap_success_background:"#dff0d8",bootstrap_success_text:"#468847",bootstrap_success_border:"#d6e9c6",droplet_light_green:"#d3e965",droplet_blue:"#64b5f6",droplet_bright_blue:"#19c3e1",droplet_yellow:"#fff176",droplet_orange:"#ffb74d",droplet_red:"#f78183",droplet_cyan:"#4dd0e1",droplet_pink:"#f57ac6",droplet_purple:"#bb77c7",droplet_green:"#68d995",droplet_white:"#fff",oceans_deep_blue:"rgb(2, 0, 28)",dark_black:"#121212",brand_primary_light:"#ABDFE5",brand_primary_default:"#009EB0",brand_primary_dark:"#008291",brand_secondary_light:"#E0D1EC",brand_secondary_default:"#8C52BA",brand_secondary_dark:"#6F488E",brand_accent_default:"#ED6060",product_affirmative_default:"#3EA33E",product_negative_light:"#FDEBE9",product_negative_default:"#E5311A",product_negative_dark:"#AA2513",product_caution_default:"#F9CB28",product_information_default:"#007ACC",neutral_white:"#FFFFFF",neutral_light:"#F7F8FA",neutral_dark10:"#EAEBEB",neutral_dark20:"#D4D5D7",neutral_dark30:"#BFC1C3",neutral_dark40:"#A9ACAF",neutral_dark50:"#94979B",neutral_dark60:"#7F8286",neutral_dark70:"#6A6E73",neutral_dark80:"#54595E",neutral_dark90:"#3F444B",neutral_dark:"#292F36",google_brand_color:"#0F9D58",microsoft_brand_color:"#FFB900",facebook_brand_color:"#3B5998",light_primary_100:"#ABDFE5",light_primary_500:"#0093A4",light_primary_700:"#008291",light_secondary_100:"#E2D4EE",light_secondary_500:"#8C52BA",light_secondary_700:"#6F488E",light_gray_50:"#F7F8FA",light_gray_100:"#EAEBEB",light_gray_200:"#D4D5D7",light_gray_300:"#BFC1C3",light_gray_500:"#94979B",light_gray_700:"#6A6E73",light_gray_800:"#54595E",light_gray_900:"#3F444B",light_affirmative_100:"#E2F1E2",light_affirmative_500:"#3EA33E",light_negative_500:"#E5311A",light_caution_500:"#F9CB28",light_info_100:"#DCEFFB",light_info_500:"#1892E3",light_white:"#FFFFFF",light_black:"#292F36"}},"./src/templates/studioHomepages/ResourceCard.story.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.ToolCardWithWrap=exports.ToolCard=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_ResourceCard=_interopRequireDefault(__webpack_require__("./src/templates/studioHomepages/ResourceCard.jsx")),_reactRedux=__webpack_require__("./node_modules/react-redux/es/index.js"),_decorators=__webpack_require__("./.storybook/decorators.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var _default={component:_ResourceCard.default};exports.default=_default;var Template=function Template(args){return _react.default.createElement(_reactRedux.Provider,{store:(0,_decorators.reduxStore)()},_react.default.createElement(_ResourceCard.default,_extends({title:"Teacher Community",description:"Ask questions about curriculum, share ideas from your lessons, and get help from other teachers",buttonText:"Connect Today",link:"link to teacher community"},args)))},ToolCard=Template.bind({});exports.ToolCard=ToolCard;var ToolCardWithWrap=Template.bind({});exports.ToolCardWithWrap=ToolCardWithWrap,ToolCardWithWrap.args={allowWrap:!0}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLXN0dWRpb0hvbWVwYWdlcy1SZXNvdXJjZUNhcmQtc3RvcnkuOWJkNjAzZTIuaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiMnVCQU1PLE1BQU1BLFdBQWEsQ0FBQ0MsU0FBVyxDQUFDLEVBQUdDLE1BQVEsQ0FBQyxLQUMxQyxxQ0FBQUMsY0FDTCxxQ0FBQUMsaUJBQWdCLENBQUNDLE1BQUssaUZBQVkseUZBQ2xDSCxPQUNBLHFDQUFBSSxpQkFBZ0Isa0QsNEpDY0wsU0FBU0MsU0FBOEIsSUFBdkJMLE1BQXVCLHdEQUFSTSxPQUFRLHVDQUNwRCxHQUFJQSxPQUFPQyxPQUFTQyxRQUNsQixPQUFPRixPQUFPSCxNQUVoQixPQUFPSCxLQUNSLEUsOEVBN0JELElBQU1RLFFBQVUsZ0JBQ0hDLE9BQVMsU0FBVEEsT0FBU04sT0FBSyxNQUFLLENBQUNJLEtBQU1DLFFBQVNMLE1BQXJCLEUsc0JBYXBCLFNBQVNPLGVBQ2QsSUFBTUMsS0FBT0MsU0FBU0MscUJBQXFCLFFBQVEsR0FDbkQsR0FBSUYsTUFBUUEsS0FBS0csY0FBZSxDQUM5QixJQUFNQyxJQUFNSixLQUFLRyxjQUFjRSxhQUFhLE9BQzVDLFNBQVVELEtBQTZCLFFBQXRCQSxJQUFJRSxjQUN0QixDQUNDLE9BQU8sQ0FFVixDLHNCQXBCNEIsU0FBaEJDLGdCQUFnQixPQUFNVCxPQUFPQyxlQUFiLEMsbU5DNEJkLFNBQVNTLFVBQXNDLElBQTlCbkIsTUFBOEIsdURBQXRCb0IsYUFBY2QsT0FBUSx1Q0FDNUQsR0FDRUEsT0FBT0MsT0FBU2MscUJBQ2hCckIsTUFBTXNCLGlCQUFtQmhCLE9BQU9nQixlQUVoQyxPQUFPLGNBQVAsaUJBQVd0QixPQUFYLElBQWtCc0IsZUFBZ0JoQixPQUFPZ0IsaUJBRTNDLE9BQU90QixLQUNSLEUseUZBdENELGlELGs2QkFFQSxJQUFNcUIsb0JBQXNCLGlDLDBCQUNLLFNBQXBCRSxrQkFBb0JELGdCQUFjLE1BQUssQ0FDbERmLEtBQU1jLG9CQUNOQyxlQUY2QyxF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QUFLLENBQUMsRywwQkFFaEMsSUFBTUMsaUJBQW1CVixTQUFTUyxLQUFLLENBQUMsRywwQ0FDL0NDLGlCQUFpQlQsS0FBTyxDQUN0QlUsV0FBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vLnN0b3J5Ym9vay9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy9jb2RlLXN0dWRpby9pc1J0bFJlZHV4LmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy9jb2RlLXN0dWRpby9yZXNwb25zaXZlUmVkdXguanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL2ZvbnRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL3V0aWwvY29sb3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL3RlbXBsYXRlcy9zdHVkaW9Ib21lcGFnZXMvUmVzb3VyY2VDYXJkLnN0b3J5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJlZHV4VGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgaXNSdGwgZnJvbSAnQGNkby9hcHBzL2NvZGUtc3R1ZGlvL2lzUnRsUmVkdXgnO1xuaW1wb3J0IHJlc3BvbnNpdmUgZnJvbSAnQGNkby9hcHBzL2NvZGUtc3R1ZGlvL3Jlc3BvbnNpdmVSZWR1eCc7XG5cbmV4cG9ydCBjb25zdCByZWR1eFN0b3JlID0gKHJlZHVjZXJzID0ge30sIHN0YXRlID0ge30pID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7aXNSdGwsIHJlc3BvbnNpdmUsIC4uLnJlZHVjZXJzfSksXG4gICAgc3RhdGUsXG4gICAgYXBwbHlNaWRkbGV3YXJlKHJlZHV4VGh1bmspXG4gICk7XG59O1xuIiwiY29uc3QgU0VUX1JUTCA9ICdpc1J0bC9TRVRfUlRMJztcbmV4cG9ydCBjb25zdCBzZXRSdGwgPSBpc1J0bCA9PiAoe3R5cGU6IFNFVF9SVEwsIGlzUnRsfSk7XG5leHBvcnQgY29uc3Qgc2V0UnRsRnJvbURPTSA9ICgpID0+IHNldFJ0bChpc1J0bEZyb21ET00oKSk7XG5cbi8vIERhc2hib2FyZCBzaWduYWxzIHdoZXRoZXIgb3Igbm90IHdlJ3JlIGluIHJ0bCBieSBzZXR0aW5nIFwiZGlyXCIgb24gdGhlIHJvb3Rcbi8vIGVsZW1lbnQuIEluIGFuIGlkZWFsIHdvcmxkLCByZWR1eCB3b3VsZCBiZSB0aGUgc291cmNlIG9mIHRydXRoLCBidXQgd2UgaGF2ZVxuLy8gQ1NTIHNlbGVjdG9ycyB0aGF0IGRlcGVuZCBvbiB0aGlzIERPTSBzdGF0ZSwgc29tZSBvZiB3aGljaCBhcmUgdXNlZCBpbiBjYXNlc1xuLy8gd2hlcmUgd2UgZG9uJ3QgaGF2ZSByZWR1eC5cbi8vIEluc3RlYWQgd2UgaGF2ZSB0aGUgRE9NIGNvbnRpbnVlIHRvIGJlIHRoZSBzb3VyY2Ugb2YgdHJ1dGgsIGFuZCBzZXQgb3VyIHN0b3JlXG4vLyBzdGF0ZSBhY2NvcmRpbmdseSBzbyB0aGF0IGNvbXBvbmVudHMgY2FuIGFjY2VzcyB0aGlzIGluZm8uXG5cbi8qKlxuICogVGhpcyBtZXRob2QgbG9va3MgYXQgdGhlIERPTSBhbmQgZGVjaWRlcyB3aGV0aGVyIG9yIG5vdCB3ZSdyZSBpbiBSVEwgbW9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUnRsRnJvbURPTSgpIHtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIGlmIChoZWFkICYmIGhlYWQucGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGRpciA9IGhlYWQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpO1xuICAgIHJldHVybiAhIShkaXIgJiYgZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWxlKHN0YXRlID0gZmFsc2UsIGFjdGlvbikge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IFNFVF9SVEwpIHtcbiAgICByZXR1cm4gYWN0aW9uLmlzUnRsO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCB7bWFrZUVudW19IGZyb20gJ0BjZG8vYXBwcy91dGlscyc7XG5cbmNvbnN0IFNFVF9SRVNQT05TSVZFX1NJWkUgPSAncmVzcG9uc2l2ZS9TRVRfUkVTUE9OU0lWRV9TSVpFJztcbmV4cG9ydCBjb25zdCBzZXRSZXNwb25zaXZlU2l6ZSA9IHJlc3BvbnNpdmVTaXplID0+ICh7XG4gIHR5cGU6IFNFVF9SRVNQT05TSVZFX1NJWkUsXG4gIHJlc3BvbnNpdmVTaXplLFxufSk7XG5cbmV4cG9ydCBjb25zdCBSZXNwb25zaXZlU2l6ZSA9IG1ha2VFbnVtKCdsZycsICdtZCcsICdzbScsICd4cycpO1xuXG4vLyBEZWZhdWx0IHdpbmRvdyB3aWR0aHMgdGhhdCBhcmUgdGhlIHN0YXJ0aW5nIHBvaW50cyBmb3IgZWFjaCB3aWR0aCBjYXRlZ29yeS5cbmNvbnN0IEJyZWFrcG9pbnRzID0gW1xuICB7YnJlYWtwb2ludDogOTkyLCByZXNwb25zaXZlU2l6ZTogUmVzcG9uc2l2ZVNpemUubGd9LFxuICB7YnJlYWtwb2ludDogNzIwLCByZXNwb25zaXZlU2l6ZTogUmVzcG9uc2l2ZVNpemUubWR9LFxuICB7YnJlYWtwb2ludDogNjUwLCByZXNwb25zaXZlU2l6ZTogUmVzcG9uc2l2ZVNpemUuc219LFxuICB7YnJlYWtwb2ludDogMCwgcmVzcG9uc2l2ZVNpemU6IFJlc3BvbnNpdmVTaXplLnhzfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNwb25zaXZlQnJlYWtwb2ludCh3aWR0aCkge1xuICByZXR1cm4gQnJlYWtwb2ludHMuZmluZCgoe2JyZWFrcG9pbnR9KSA9PiB3aWR0aCA+IGJyZWFrcG9pbnQpLnJlc3BvbnNpdmVTaXplO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHJlc3BvbnNpdmVTaXplOiBnZXRSZXNwb25zaXZlQnJlYWtwb2ludCh3aW5kb3cuaW5uZXJXaWR0aCksXG59O1xuXG4vKipcbiAqIFJlZHVjZXIgZm9yIHJlc3BvbnNpdmUgc2l6ZXMuIE9ubHkgcmV0dXJuIGEgbmV3IHN0YXRlIGlmIHdlJ3ZlIGFjdHVhbGx5XG4gKiBjcm9zc2VkIGludG8gYSBuZXcgYnJlYWtwb2ludCB3aWR0aC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChcbiAgICBhY3Rpb24udHlwZSA9PT0gU0VUX1JFU1BPTlNJVkVfU0laRSAmJlxuICAgIHN0YXRlLnJlc3BvbnNpdmVTaXplICE9PSBhY3Rpb24ucmVzcG9uc2l2ZVNpemVcbiAgKSB7XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVzcG9uc2l2ZVNpemU6IGFjdGlvbi5yZXNwb25zaXZlU2l6ZX07XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gYXBwcy9zcmMvZm9udENvbnN0YW50cy5qc1xuLy8gR0VORVJBVEVEIEZJTEU6IERPIE5PVCBNT0RJRlkgRElSRUNUTFlcbi8vIFRoaXMgZ2VuZXJhdGVkIGZpbGUgZXhwb3J0cyBhbGwgdmFyaWFibGVzIGRlZmluZWQgaW4gc2hhcmVkL2Nzcy9mb250LnNjc3Ncbi8vIGZvciB1c2UgaW4gSmF2YVNjcmlwdC4gVGhlIGdlbmVyYXRvciBzY3JpcHQgaXMgY29udmVydC1zY3NzLXZhcmlhYmxlcy5qc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibWV0cm9wb2xpcy1mb250XCI6IFwiJ01ldHJvcG9saXMnLCBzYW5zLXNlcmlmXCIsXG4gIFwibWFpbi1mb250XCI6IFwiJ01ldHJvcG9saXMnLCBzYW5zLXNlcmlmXCIsXG4gIFwidGhpbi1mb250LXdlaWdodFwiOiBcIjEwMFwiLFxuICBcImV4dHJhLWxpZ2h0LWZvbnQtd2VpZ2h0XCI6IFwiMjAwXCIsXG4gIFwibGlnaHQtZm9udC13ZWlnaHRcIjogXCIzMDBcIixcbiAgXCJyZWd1bGFyLWZvbnQtd2VpZ2h0XCI6IFwiNDAwXCIsXG4gIFwibWVkaXVtLWZvbnQtd2VpZ2h0XCI6IFwiNTAwXCIsXG4gIFwic2VtaS1ib2xkLWZvbnQtd2VpZ2h0XCI6IFwiNjAwXCIsXG4gIFwiYm9sZC1mb250LXdlaWdodFwiOiBcIjcwMFwiLFxuICBcImV4dHJhLWJvbGQtZm9udC13ZWlnaHRcIjogXCI4MDBcIixcbiAgXCJibGFjay1mb250LXdlaWdodFwiOiBcIjkwMFwiLFxuICBcIm1haW4tZm9udC10aGluXCI6IHtcbiAgXCJmb250RmFtaWx5XCI6IFwiJ01ldHJvcG9saXMnLCBzYW5zLXNlcmlmXCIsXG4gIFwiZm9udFdlaWdodFwiOiBcIjEwMFwiLFxuICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICB9LFxuICBcIm1haW4tZm9udC10aGluLWl0YWxpY1wiOiB7XG4gIFwiZm9udEZhbWlseVwiOiBcIidNZXRyb3BvbGlzJywgc2Fucy1zZXJpZlwiLFxuICBcImZvbnRXZWlnaHRcIjogXCIxMDBcIixcbiAgXCJmb250U3R5bGVcIjogXCJpdGFsaWNcIixcbiAgfSxcbiAgXCJtYWluLWZvbnQtZXh0cmEtbGlnaHRcIjoge1xuICBcImZvbnRGYW1pbHlcIjogXCInTWV0cm9wb2xpcycsIHNhbnMtc2VyaWZcIixcbiAgXCJmb250V2VpZ2h0XCI6IFwiMjAwXCIsXG4gIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gIH0sXG4gIFwibWFpbi1mb250LWV4dHJhLWxpZ2h0LWl0YWxpY1wiOiB7XG4gIFwiZm9udEZhbWlseVwiOiBcIidNZXRyb3BvbGlzJywgc2Fucy1zZXJpZlwiLFxuICBcImZvbnRXZWlnaHRcIjogXCIyMDBcIixcbiAgXCJmb250U3R5bGVcIjogXCJpdGFsaWNcIixcbiAgfSxcbiAgXCJtYWluLWZvbnQtbGlnaHRcIjoge1xuICBcImZvbnRGYW1pbHlcIjogXCInTWV0cm9wb2xpcycsIHNhbnMtc2VyaWZcIixcbiAgXCJmb250V2VpZ2h0XCI6IFwiMzAwXCIsXG4gIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gIH0sXG4gIFwibWFpbi1mb250LWxpZ2h0LWl0YWxpY1wiOiB7XG4gIFwiZm9udEZhbWlseVwiOiBcIidNZXRyb3BvbGlzJywgc2Fucy1zZXJpZlwiLFxuICBcImZvbnRXZWlnaHRcIjogXCIzMDBcIixcbiAgXCJmb250U3R5bGVcIjogXCJpdGFsaWNcIixcbiAgfSxcbiAgXCJtYWluLWZvbnQtcmVndWxhclwiOiB7XG4gIFwiZm9udEZhbWlseVwiOiBcIidNZXRyb3BvbGlzJywgc2Fucy1zZXJpZlwiLFxuICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIixcbiAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgfSxcbiAgXCJtYWluLWZvbnQtcmVndWxhci1pdGFsaWNcIjoge1xuICBcImZvbnRGYW1pbHlcIjogXCInTWV0cm9wb2xpcycsIHNhbnMtc2VyaWZcIixcbiAgXCJmb250V2VpZ2h0XCI6IFwiNDAwXCIsXG4gIFwiZm9udFN0eWxlXCI6IFwiaXRhbGljXCIsXG4gIH0sXG4gIFwibWFpbi1mb250LW1lZGl1bVwiOiB7XG4gIFwiZm9udEZhbWlseVwiOiBcIidNZXRyb3BvbGlzJywgc2Fucy1zZXJpZlwiLFxuICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgfSxcbiAgXCJtYWluLWZvbnQtbWVkaXVtLWl0YWxpY1wiOiB7XG4gIFwiZm9udEZhbWlseVwiOiBcIidNZXRyb3BvbGlzJywgc2Fucy1zZXJpZlwiLFxuICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgXCJmb250U3R5bGVcIjogXCJpdGFsaWNcIixcbiAgfSxcbiAgXCJtYWluLWZvbnQtc2VtaS1ib2xkXCI6IHtcbiAgXCJmb250RmFtaWx5XCI6IFwiJ01ldHJvcG9saXMnLCBzYW5zLXNlcmlmXCIsXG4gIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICB9LFxuICBcIm1haW4tZm9udC1zZW1pLWJvbGQtaXRhbGljXCI6IHtcbiAgXCJmb250RmFtaWx5XCI6IFwiJ01ldHJvcG9saXMnLCBzYW5zLXNlcmlmXCIsXG4gIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICBcImZvbnRTdHlsZVwiOiBcIml0YWxpY1wiLFxuICB9LFxuICBcIm1haW4tZm9udC1ib2xkXCI6IHtcbiAgXCJmb250RmFtaWx5XCI6IFwiJ01ldHJvcG9saXMnLCBzYW5zLXNlcmlmXCIsXG4gIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICB9LFxuICBcIm1haW4tZm9udC1ib2xkLWl0YWxpY1wiOiB7XG4gIFwiZm9udEZhbWlseVwiOiBcIidNZXRyb3BvbGlzJywgc2Fucy1zZXJpZlwiLFxuICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgXCJmb250U3R5bGVcIjogXCJpdGFsaWNcIixcbiAgfSxcbiAgXCJtYWluLWZvbnQtZXh0cmEtYm9sZFwiOiB7XG4gIFwiZm9udEZhbWlseVwiOiBcIidNZXRyb3BvbGlzJywgc2Fucy1zZXJpZlwiLFxuICBcImZvbnRXZWlnaHRcIjogXCI4MDBcIixcbiAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgfSxcbiAgXCJtYWluLWZvbnQtZXh0cmEtYm9sZC1pdGFsaWNcIjoge1xuICBcImZvbnRGYW1pbHlcIjogXCInTWV0cm9wb2xpcycsIHNhbnMtc2VyaWZcIixcbiAgXCJmb250V2VpZ2h0XCI6IFwiODAwXCIsXG4gIFwiZm9udFN0eWxlXCI6IFwiaXRhbGljXCIsXG4gIH0sXG4gIFwibWFpbi1mb250LWJsYWNrXCI6IHtcbiAgXCJmb250RmFtaWx5XCI6IFwiJ01ldHJvcG9saXMnLCBzYW5zLXNlcmlmXCIsXG4gIFwiZm9udFdlaWdodFwiOiBcIjkwMFwiLFxuICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICB9LFxuICBcIm1haW4tZm9udC1ibGFjay1pdGFsaWNcIjoge1xuICBcImZvbnRGYW1pbHlcIjogXCInTWV0cm9wb2xpcycsIHNhbnMtc2VyaWZcIixcbiAgXCJmb250V2VpZ2h0XCI6IFwiOTAwXCIsXG4gIFwiZm9udFN0eWxlXCI6IFwiaXRhbGljXCIsXG4gIH0sXG4gIFwiYmFybG93U2VtaUNvbmRlbnNlZC1zZW1pYm9sZFwiOiBcIidCYXJsb3cgU2VtaSBDb25kZW5zZWQgU2VtaWJvbGQnLCBzYW5zLXNlcmlmXCIsXG4gIFwiYmFybG93U2VtaUNvbmRlbnNlZC1tZWRpdW1cIjogXCInQmFybG93IFNlbWkgQ29uZGVuc2VkIE1lZGl1bScsIHNhbnMtc2VyaWZcIixcbiAgXCJjb2RlLWZvbnRcIjogXCInU291cmNlIENvZGUgUHJvJywgTW9uYWNvLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgVGVybWluYWwsIG1vbm9zcGFjZVwiLFxuICBcImZvbnQtYXdlc29tZS1jb3JlLXVybFwiOiBcIidodHRwczovL2RzY28uY29kZS5vcmcvYXNzZXRzL2ZvbnQtYXdlc29tZS1wcm8vMTY4NDE3ODg3Ni9jc3MvZm9udGF3ZXNvbWUubWluLmNzcydcIixcbiAgXCJmb250LWF3ZXNvbWUtYnJhbmRzLXVybFwiOiBcIidodHRwczovL2RzY28uY29kZS5vcmcvYXNzZXRzL2ZvbnQtYXdlc29tZS1wcm8vMTY4NDE3ODg3Ni9jc3MvYnJhbmRzLm1pbi5jc3MnXCIsXG4gIFwiZm9udC1hd2Vzb21lLXNvbGlkLXVybFwiOiBcIidodHRwczovL2RzY28uY29kZS5vcmcvYXNzZXRzL2ZvbnQtYXdlc29tZS1wcm8vMTY4NDE3ODg3Ni9jc3Mvc29saWQubWluLmNzcydcIixcbiAgXCJmb250LWF3ZXNvbWUtcmVndWxhci11cmxcIjogXCInaHR0cHM6Ly9kc2NvLmNvZGUub3JnL2Fzc2V0cy9mb250LWF3ZXNvbWUtcHJvLzE2ODQxNzg4NzYvY3NzL3JlZ3VsYXIubWluLmNzcydcIixcbiAgXCJmb250LWF3ZXNvbWUtdjQtZm9udHMtdXJsXCI6IFwiJ2h0dHBzOi8vZHNjby5jb2RlLm9yZy9hc3NldHMvZm9udC1hd2Vzb21lLXByby8xNjg0MTc4ODc2L2Nzcy92NC1mb250LWZhY2UubWluLmNzcydcIixcbiAgXCJmb250LWF3ZXNvbWUtdjQtc2hpbXMtdXJsXCI6IFwiJ2h0dHBzOi8vZHNjby5jb2RlLm9yZy9hc3NldHMvZm9udC1hd2Vzb21lLXByby8xNjg0MTc4ODc2L2Nzcy92NC1zaGltcy5taW4uY3NzJ1wiLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIGFwcHMvc3JjL3V0aWwvY29sb3IuanNcbi8vIEdFTkVSQVRFRCBGSUxFOiBETyBOT1QgTU9ESUZZIERJUkVDVExZXG4vLyBUaGlzIGdlbmVyYXRlZCBmaWxlIGV4cG9ydHMgYWxsIHZhcmlhYmxlcyBkZWZpbmVkIGluIHNoYXJlZC9jc3MvY29sb3Iuc2Nzc1xuLy8gZm9yIHVzZSBpbiBKYXZhU2NyaXB0LiBUaGUgZ2VuZXJhdG9yIHNjcmlwdCBpcyBjb252ZXJ0LXNjc3MtdmFyaWFibGVzLmpzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJibGFja1wiOiBcIiMwMDBcIixcbiAgXCJiYWNrZ3JvdW5kX2JsYWNrXCI6IFwiIzEyMTQxNlwiLFxuICBcImRhcmtfZ3JheVwiOiBcIiMyRDMxMzlcIixcbiAgXCJkYXJrZXN0X2dyYXlcIjogXCIjMjkyRjM2XCIsXG4gIFwiZGFya19zbGF0ZV9ncmF5XCI6IFwiIzI4MmMzNFwiLFxuICBcImRhcmtlc3Rfc2xhdGVfZ3JheVwiOiBcIiMyNTI5MmRcIixcbiAgXCJkYXJrX2NoYXJjb2FsXCI6IFwiIzRkNTc1ZlwiLFxuICBcImNoYXJjb2FsXCI6IFwiIzViNjc3MFwiLFxuICBcImxpZ2h0X2dyYXlcIjogXCIjOTQ5Y2EyXCIsXG4gIFwibGlnaHRlcl9ncmF5XCI6IFwiI2M2Y2FjZFwiLFxuICBcImxpZ2h0ZXN0X2dyYXlcIjogXCIjZTdlOGVhXCIsXG4gIFwiYmFja2dyb3VuZF9ncmF5XCI6IFwiI2YyZjJmMlwiLFxuICBcImRpbWdyYXlcIjogXCIjNjk2OTY5XCIsXG4gIFwid2hpdGVcIjogXCIjZmZmXCIsXG4gIFwiZGVmYXVsdF9ibHVlXCI6IFwiIzM2NzBiM1wiLFxuICBcImRhcmtfdGVhbFwiOiBcIiMwMDk0YTNcIixcbiAgXCJ0ZWFsXCI6IFwiIzAwOTNhNFwiLFxuICBcImFwcGxhYl9idXR0b25fdGVhbFwiOiBcIiMxYWJjOWNcIixcbiAgXCJsaWdodF90ZWFsXCI6IFwiIzU5Y2FkM1wiLFxuICBcImxpZ2h0aXNoX3RlYWxcIjogXCIjODBkNmRlXCIsXG4gIFwibGlnaHRlcl90ZWFsXCI6IFwiI2E2ZTNlOFwiLFxuICBcImxpZ2h0ZXN0X3RlYWxcIjogXCIjZDlmM2Y1XCIsXG4gIFwiYWlfcnVicmljX2N5YW5cIjogXCIjM2NmZmY4XCIsXG4gIFwicHVycGxlXCI6IFwiIzhjNTJiYVwiLFxuICBcImxpZ2h0X3B1cnBsZVwiOiBcIiNhNjliYzFcIixcbiAgXCJsaWdodGVyX3B1cnBsZVwiOiBcIiNjZmM5ZGVcIixcbiAgXCJsaWdodGVzdF9wdXJwbGVcIjogXCIjZWJlOGYxXCIsXG4gIFwiY3lhblwiOiBcIiMwMDk0Y2FcIixcbiAgXCJsaWdodF9jeWFuXCI6IFwiIzU5YjlkY1wiLFxuICBcImxpZ2h0ZXJfY3lhblwiOiBcIiNhNmRhZWRcIixcbiAgXCJsaWdodGVzdF9jeWFuXCI6IFwiI2Q5ZWZmN1wiLFxuICBcImFsbW9zdF93aGl0ZV9jeWFuXCI6IFwiI2Y1ZmNmZlwiLFxuICBcIm9yYW5nZVwiOiBcIiNmZmE0MDBcIixcbiAgXCJsaWdodF9vcmFuZ2VcIjogXCIjZmZjNDU5XCIsXG4gIFwibGlnaHRlcl9vcmFuZ2VcIjogXCIjZmZlMGE2XCIsXG4gIFwibGlnaHRlc3Rfb3JhbmdlXCI6IFwiI2ZmZjJkOVwiLFxuICBcImRhcmtfb3JhbmdlXCI6IFwiI2ZmODYwMFwiLFxuICBcImdyZWVuXCI6IFwiI2I5YmYxNVwiLFxuICBcImxpZ2h0X2dyZWVuXCI6IFwiI2QxZDU2N1wiLFxuICBcImxpZ2h0ZXJfZ3JlZW5cIjogXCIjZTdlOWFkXCIsXG4gIFwibGlnaHRlc3RfZ3JlZW5cIjogXCIjZjVmNWRjXCIsXG4gIFwiaGlnaGxpZ2h0X2dyZWVuXCI6IFwiIzhhZmM5YlwiLFxuICBcInllbGxvd1wiOiBcIiNmZmI4MWRcIixcbiAgXCJsaWdodF95ZWxsb3dcIjogXCIjZmZkYjc0XCIsXG4gIFwibGlnaHRlcl95ZWxsb3dcIjogXCIjZmZlYmI1XCIsXG4gIFwibGlnaHRlc3RfeWVsbG93XCI6IFwiI2ZmZjdkZlwiLFxuICBcImdvbGRlbnJvZFwiOiBcIiNkYWE1MjBcIixcbiAgXCJoZWFkZXJfdGV4dFwiOiBcIiNmZmZcIixcbiAgXCJia2duZF9jb2xvclwiOiBcIiMwMDkzYTRcIixcbiAgXCJpbnNldF9jb2xvclwiOiBcIiNjNmNhY2RcIixcbiAgXCJkYXJrX2NvbG9yXCI6IFwiIzhjNTJiYVwiLFxuICBcImhkcl9jb2xvclwiOiBcIiM4YzUyYmFcIixcbiAgXCJyZWRcIjogXCIjYzAwXCIsXG4gIFwibGlnaHRlc3RfcmVkXCI6IFwiI2ZjY1wiLFxuICBcImRhcmtfcmVkXCI6IFwiI2Q2MjkxMVwiLFxuICBcInJlYWxncmVlblwiOiBcIiMwMDgwMDBcIixcbiAgXCJyZWFseWVsbG93XCI6IFwiI2ZmMFwiLFxuICBcIm11c3RhcmR5ZWxsb3dcIjogXCIjZWZjZDFjXCIsXG4gIFwidHdpdHRlcl9ibHVlXCI6IFwiIzAwYWNlZFwiLFxuICBcImZhY2Vib29rX2JsdWVcIjogXCIjM2I1OTk4XCIsXG4gIFwibGlua2VkaW5fYmx1ZVwiOiBcIiMwMDc3QjVcIixcbiAgXCJkYXJrX2JsdWVcIjogXCIjMDA2NDdmXCIsXG4gIFwiYmxvY2tseV9mbHlvdXRfZ3JheVwiOiBcIiNkZGRcIixcbiAgXCJkZWZhdWx0X3RleHRcIjogXCIjMzMzXCIsXG4gIFwiYm9yZGVyX2dyYXlcIjogXCIjYmJiXCIsXG4gIFwiYm9yZGVyX2xpZ2h0X2dyYXlcIjogXCIjZDhkOGQ4XCIsXG4gIFwidGFibGVfaGVhZGVyXCI6IFwiI2VjZWNlY1wiLFxuICBcInRhYmxlX2xpZ2h0X3Jvd1wiOiBcIiNmY2ZjZmNcIixcbiAgXCJ0YWJsZV9kYXJrX3Jvd1wiOiBcIiNmNGY0ZjRcIixcbiAgXCJsZXZlbF9zdWJtaXR0ZWRcIjogXCIjOGM1MmJhXCIsXG4gIFwibGV2ZWxfcGVyZmVjdFwiOiBcInJnYigxNCwgMTkwLCAxNClcIixcbiAgXCJsZXZlbF9wYXNzZWRcIjogXCJyZ2IoMTU5LCAyMTIsIDE1OSlcIixcbiAgXCJsZXZlbF9hdHRlbXB0ZWRcIjogXCIjZmYwXCIsXG4gIFwibGV2ZWxfbm90X3RyaWVkXCI6IFwiI2ZlZmVmZVwiLFxuICBcImxldmVsX2N1cnJlbnRcIjogXCIjZmZhNDAwXCIsXG4gIFwibGV2ZWxfcmV2aWV3X3JlamVjdGVkXCI6IFwiI2MwMFwiLFxuICBcImxldmVsX3Jldmlld19hY2NlcHRlZFwiOiBcInJnYigxMSwgMTQyLCAxMSlcIixcbiAgXCJhc3Nlc3NtZW50XCI6IFwiIzAwOTRjYVwiLFxuICBcIndvcmtzcGFjZV9ydW5uaW5nX2JhY2tncm91bmRcIjogXCIjZTVlNWU1XCIsXG4gIFwiZGFya19wdXJwbGVcIjogXCIjNjgyQTc3XCIsXG4gIFwiYnJpZ2h0X2dyZWVuXCI6IFwiIzBlYmUwZVwiLFxuICBcIm5lb25fcGlua1wiOiBcIiNlOTExOGZcIixcbiAgXCJsaW5rX2NvbG9yXCI6IFwiIzA1OTZjZVwiLFxuICBcInNoYWRvd1wiOiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICBcImJvb3RzdHJhcF9idXR0b25fYmx1ZVwiOiBcIiMzMzdhYjdcIixcbiAgXCJib290c3RyYXBfYnV0dG9uX3JlZFwiOiBcIiNkOTUzNGZcIixcbiAgXCJib290c3RyYXBfZXJyb3JfYmFja2dyb3VuZFwiOiBcIiNmMmRlZGVcIixcbiAgXCJib290c3RyYXBfZXJyb3JfdGV4dFwiOiBcIiNiOTRhNDhcIixcbiAgXCJib290c3RyYXBfdjNfZXJyb3JfdGV4dFwiOiBcIiNhOTQ0NDJcIixcbiAgXCJib290c3RyYXBfZXJyb3JfYm9yZGVyXCI6IFwiI2ViY2NkMVwiLFxuICBcImJvb3RzdHJhcF93YXJuaW5nX2JhY2tncm91bmRcIjogXCIjZmNmOGUzXCIsXG4gIFwiYm9vdHN0cmFwX3dhcm5pbmdfdGV4dFwiOiBcIiNjMDk4NTNcIixcbiAgXCJib290c3RyYXBfd2FybmluZ19ib3JkZXJcIjogXCIjZmFlYmNjXCIsXG4gIFwiYm9vdHN0cmFwX2JvcmRlcl9jb2xvclwiOiBcIiNjY2NjY2NcIixcbiAgXCJib290c3RyYXBfc3VjY2Vzc19iYWNrZ3JvdW5kXCI6IFwiI2RmZjBkOFwiLFxuICBcImJvb3RzdHJhcF9zdWNjZXNzX3RleHRcIjogXCIjNDY4ODQ3XCIsXG4gIFwiYm9vdHN0cmFwX3N1Y2Nlc3NfYm9yZGVyXCI6IFwiI2Q2ZTljNlwiLFxuICBcImRyb3BsZXRfbGlnaHRfZ3JlZW5cIjogXCIjZDNlOTY1XCIsXG4gIFwiZHJvcGxldF9ibHVlXCI6IFwiIzY0YjVmNlwiLFxuICBcImRyb3BsZXRfYnJpZ2h0X2JsdWVcIjogXCIjMTljM2UxXCIsXG4gIFwiZHJvcGxldF95ZWxsb3dcIjogXCIjZmZmMTc2XCIsXG4gIFwiZHJvcGxldF9vcmFuZ2VcIjogXCIjZmZiNzRkXCIsXG4gIFwiZHJvcGxldF9yZWRcIjogXCIjZjc4MTgzXCIsXG4gIFwiZHJvcGxldF9jeWFuXCI6IFwiIzRkZDBlMVwiLFxuICBcImRyb3BsZXRfcGlua1wiOiBcIiNmNTdhYzZcIixcbiAgXCJkcm9wbGV0X3B1cnBsZVwiOiBcIiNiYjc3YzdcIixcbiAgXCJkcm9wbGV0X2dyZWVuXCI6IFwiIzY4ZDk5NVwiLFxuICBcImRyb3BsZXRfd2hpdGVcIjogXCIjZmZmXCIsXG4gIFwib2NlYW5zX2RlZXBfYmx1ZVwiOiBcInJnYigyLCAwLCAyOClcIixcbiAgXCJkYXJrX2JsYWNrXCI6IFwiIzEyMTIxMlwiLFxuICBcImJyYW5kX3ByaW1hcnlfbGlnaHRcIjogXCIjQUJERkU1XCIsXG4gIFwiYnJhbmRfcHJpbWFyeV9kZWZhdWx0XCI6IFwiIzAwOUVCMFwiLFxuICBcImJyYW5kX3ByaW1hcnlfZGFya1wiOiBcIiMwMDgyOTFcIixcbiAgXCJicmFuZF9zZWNvbmRhcnlfbGlnaHRcIjogXCIjRTBEMUVDXCIsXG4gIFwiYnJhbmRfc2Vjb25kYXJ5X2RlZmF1bHRcIjogXCIjOEM1MkJBXCIsXG4gIFwiYnJhbmRfc2Vjb25kYXJ5X2RhcmtcIjogXCIjNkY0ODhFXCIsXG4gIFwiYnJhbmRfYWNjZW50X2RlZmF1bHRcIjogXCIjRUQ2MDYwXCIsXG4gIFwicHJvZHVjdF9hZmZpcm1hdGl2ZV9kZWZhdWx0XCI6IFwiIzNFQTMzRVwiLFxuICBcInByb2R1Y3RfbmVnYXRpdmVfbGlnaHRcIjogXCIjRkRFQkU5XCIsXG4gIFwicHJvZHVjdF9uZWdhdGl2ZV9kZWZhdWx0XCI6IFwiI0U1MzExQVwiLFxuICBcInByb2R1Y3RfbmVnYXRpdmVfZGFya1wiOiBcIiNBQTI1MTNcIixcbiAgXCJwcm9kdWN0X2NhdXRpb25fZGVmYXVsdFwiOiBcIiNGOUNCMjhcIixcbiAgXCJwcm9kdWN0X2luZm9ybWF0aW9uX2RlZmF1bHRcIjogXCIjMDA3QUNDXCIsXG4gIFwibmV1dHJhbF93aGl0ZVwiOiBcIiNGRkZGRkZcIixcbiAgXCJuZXV0cmFsX2xpZ2h0XCI6IFwiI0Y3RjhGQVwiLFxuICBcIm5ldXRyYWxfZGFyazEwXCI6IFwiI0VBRUJFQlwiLFxuICBcIm5ldXRyYWxfZGFyazIwXCI6IFwiI0Q0RDVEN1wiLFxuICBcIm5ldXRyYWxfZGFyazMwXCI6IFwiI0JGQzFDM1wiLFxuICBcIm5ldXRyYWxfZGFyazQwXCI6IFwiI0E5QUNBRlwiLFxuICBcIm5ldXRyYWxfZGFyazUwXCI6IFwiIzk0OTc5QlwiLFxuICBcIm5ldXRyYWxfZGFyazYwXCI6IFwiIzdGODI4NlwiLFxuICBcIm5ldXRyYWxfZGFyazcwXCI6IFwiIzZBNkU3M1wiLFxuICBcIm5ldXRyYWxfZGFyazgwXCI6IFwiIzU0NTk1RVwiLFxuICBcIm5ldXRyYWxfZGFyazkwXCI6IFwiIzNGNDQ0QlwiLFxuICBcIm5ldXRyYWxfZGFya1wiOiBcIiMyOTJGMzZcIixcbiAgXCJnb29nbGVfYnJhbmRfY29sb3JcIjogXCIjMEY5RDU4XCIsXG4gIFwibWljcm9zb2Z0X2JyYW5kX2NvbG9yXCI6IFwiI0ZGQjkwMFwiLFxuICBcImZhY2Vib29rX2JyYW5kX2NvbG9yXCI6IFwiIzNCNTk5OFwiLFxuICBcImxpZ2h0X3ByaW1hcnlfMTAwXCI6IFwiI0FCREZFNVwiLFxuICBcImxpZ2h0X3ByaW1hcnlfNTAwXCI6IFwiIzAwOTNBNFwiLFxuICBcImxpZ2h0X3ByaW1hcnlfNzAwXCI6IFwiIzAwODI5MVwiLFxuICBcImxpZ2h0X3NlY29uZGFyeV8xMDBcIjogXCIjRTJENEVFXCIsXG4gIFwibGlnaHRfc2Vjb25kYXJ5XzUwMFwiOiBcIiM4QzUyQkFcIixcbiAgXCJsaWdodF9zZWNvbmRhcnlfNzAwXCI6IFwiIzZGNDg4RVwiLFxuICBcImxpZ2h0X2dyYXlfNTBcIjogXCIjRjdGOEZBXCIsXG4gIFwibGlnaHRfZ3JheV8xMDBcIjogXCIjRUFFQkVCXCIsXG4gIFwibGlnaHRfZ3JheV8yMDBcIjogXCIjRDRENUQ3XCIsXG4gIFwibGlnaHRfZ3JheV8zMDBcIjogXCIjQkZDMUMzXCIsXG4gIFwibGlnaHRfZ3JheV81MDBcIjogXCIjOTQ5NzlCXCIsXG4gIFwibGlnaHRfZ3JheV83MDBcIjogXCIjNkE2RTczXCIsXG4gIFwibGlnaHRfZ3JheV84MDBcIjogXCIjNTQ1OTVFXCIsXG4gIFwibGlnaHRfZ3JheV85MDBcIjogXCIjM0Y0NDRCXCIsXG4gIFwibGlnaHRfYWZmaXJtYXRpdmVfMTAwXCI6IFwiI0UyRjFFMlwiLFxuICBcImxpZ2h0X2FmZmlybWF0aXZlXzUwMFwiOiBcIiMzRUEzM0VcIixcbiAgXCJsaWdodF9uZWdhdGl2ZV81MDBcIjogXCIjRTUzMTFBXCIsXG4gIFwibGlnaHRfY2F1dGlvbl81MDBcIjogXCIjRjlDQjI4XCIsXG4gIFwibGlnaHRfaW5mb18xMDBcIjogXCIjRENFRkZCXCIsXG4gIFwibGlnaHRfaW5mb181MDBcIjogXCIjMTg5MkUzXCIsXG4gIFwibGlnaHRfd2hpdGVcIjogXCIjRkZGRkZGXCIsXG4gIFwibGlnaHRfYmxhY2tcIjogXCIjMjkyRjM2XCIsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXNvdXJjZUNhcmQgZnJvbSAnLi9SZXNvdXJjZUNhcmQnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtyZWR1eFN0b3JlfSBmcm9tICdAY2RvL3N0b3J5Ym9vay9kZWNvcmF0b3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IFJlc291cmNlQ2FyZCxcbn07XG5cbmNvbnN0IFRlbXBsYXRlID0gYXJncyA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZSgpfT5cbiAgICA8UmVzb3VyY2VDYXJkXG4gICAgICB0aXRsZT1cIlRlYWNoZXIgQ29tbXVuaXR5XCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiQXNrIHF1ZXN0aW9ucyBhYm91dCBjdXJyaWN1bHVtLCBzaGFyZSBpZGVhcyBmcm9tIHlvdXIgbGVzc29ucywgYW5kIGdldCBoZWxwIGZyb20gb3RoZXIgdGVhY2hlcnNcIlxuICAgICAgYnV0dG9uVGV4dD1cIkNvbm5lY3QgVG9kYXlcIlxuICAgICAgbGluaz1cImxpbmsgdG8gdGVhY2hlciBjb21tdW5pdHlcIlxuICAgICAgey4uLmFyZ3N9XG4gICAgLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBjb25zdCBUb29sQ2FyZCA9IFRlbXBsYXRlLmJpbmQoe30pO1xuXG5leHBvcnQgY29uc3QgVG9vbENhcmRXaXRoV3JhcCA9IFRlbXBsYXRlLmJpbmQoe30pO1xuVG9vbENhcmRXaXRoV3JhcC5hcmdzID0ge1xuICBhbGxvd1dyYXA6IHRydWUsXG59O1xuIl0sIm5hbWVzIjpbInJlZHV4U3RvcmUiLCJyZWR1Y2VycyIsInN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJpc1J0bCIsImFwcGx5TWlkZGxld2FyZSIsImxvY2FsZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfUlRMIiwic2V0UnRsIiwiaXNSdGxGcm9tRE9NIiwiaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnRFbGVtZW50IiwiZGlyIiwiZ2V0QXR0cmlidXRlIiwidG9Mb3dlckNhc2UiLCJzZXRSdGxGcm9tRE9NIiwicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsIlNFVF9SRVNQT05TSVZFX1NJWkUiLCJyZXNwb25zaXZlU2l6ZSIsInNldFJlc3BvbnNpdmVTaXplIiwiUmVzcG9uc2l2ZVNpemUiLCJtYWtlRW51bSIsIkJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludCIsImxnIiwibWQiLCJzbSIsInhzIiwiZ2V0UmVzcG9uc2l2ZUJyZWFrcG9pbnQiLCJ3aWR0aCIsImZpbmQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsIlJlc291cmNlQ2FyZCIsIlRlbXBsYXRlIiwiYXJncyIsIlByb3ZpZGVyIiwic3RvcmUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uVGV4dCIsImxpbmsiLCJUb29sQ2FyZCIsImJpbmQiLCJUb29sQ2FyZFdpdGhXcmFwIiwiYWxsb3dXcmFwIl0sInNvdXJjZVJvb3QiOiIifQ==