(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[375],{"./src/code-studio/pd/workshop_dashboard/components/survey_results/free_response_section.jsx":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _propTypes=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_reactBootstrap=__webpack_require__("./node_modules/react-bootstrap/es/index.js"),_lodash=_interopRequireDefault(__webpack_require__("./node_modules/lodash/lodash.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}!function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(exports.default=function(_React$Component){function FreeResponseSection(){return _React$Component.apply(this,arguments)||this}!function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(FreeResponseSection,_React$Component);var _proto=FreeResponseSection.prototype;return _proto.renderFacilitatorsAndAnswers=function renderFacilitatorsAndAnswers(answers){var _this=this;return Object.keys(answers).map((function(facilitator_name,i){return _react.default.createElement("li",{key:i},facilitator_name,_react.default.createElement("ul",null,answers[facilitator_name].map((function(feedback,j){return _this.renderBullet(feedback,j)}))))}))},_proto.renderAnswers=function renderAnswers(answers){var _this2=this;return answers.map((function(answer,i){return _this2.renderBullet(answer,i)}))},_proto.renderBullet=function renderBullet(text,key){var trimmedText=_lodash.default.trim(text);if(trimmedText)return _react.default.createElement("li",{key},trimmedText)},_proto.renderResponseSection=function renderResponseSection(responses){if(responses)return Array.isArray(responses)?this.renderAnswers(responses):this.renderFacilitatorsAndAnswers(responses)},_proto.render=function render(){var _this3=this;return _react.default.createElement("div",null,this.props.questions.map((function(question,i){return _react.default.createElement(_reactBootstrap.Well,{key:i},_react.default.createElement("b",null,question.text),_this3.renderResponseSection(_this3.props.responseData[question.key]))})))},FreeResponseSection}(_react.default.Component),"propTypes",{questions:_propTypes.default.arrayOf(_propTypes.default.object).isRequired,responseData:_propTypes.default.object.isRequired}),module.exports=exports.default},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};return ReactPropTypes.checkPropTypes=emptyFunction,ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./src/code-studio/pd/workshop_dashboard/components/survey_results/free_response_section.story.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.SingleFacilitator=exports.MultipleFacilitators=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_free_response_section=_interopRequireDefault(__webpack_require__("./src/code-studio/pd/workshop_dashboard/components/survey_results/free_response_section.jsx"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.default={component:_free_response_section.default};var Template=function Template(args){return _react.default.createElement("div",{id:"application-container"},_react.default.createElement(_free_response_section.default,args))};(exports.SingleFacilitator=Template.bind({})).args={questions:[{text:"Question 1",key:"question_1"},{text:"Question 2",key:"question_2"}],responseData:{question_1:["Feedback 1_1","Feedback 1_2"],question_2:["Feedback 2_1","Feedback 2_2"]}},(exports.MultipleFacilitators=Template.bind({})).args={questions:[{text:"Question 1",key:"question_1"},{text:"Question 2",key:"question_2"}],responseData:{question_1:{"Facilitator 1":["Q1F1 feedback","Q1F1 feedback"],"Facilitator 2":["Q1F2 feedback","Q1F2 feedback"]},question_2:{"Facilitator 1":["Q2F1 feedback","Q2F1 feedback"],"Facilitator 2":["Q2F2 feedback","Q2F2 feedback"]}}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zdHVkaW8tcGQtd29ya3Nob3BfZGFzaGJvYXJkLWNvbXBvbmVudHMtc3VydmV5X3Jlc3VsdHMtZnJlZV9yZXNwb25zZV9zZWN0aW9uLXN0b3J5LjI4YTZlM2QzLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6IitTQUFBLElBQUFBLFdBQUFDLHVCQUFBQyxvQkFBQSx1Q0FDQUMsT0FBQUYsdUJBQUFDLG9CQUFBLGtDQUNBRSxnQkFBQUYsb0JBQUEsOENBQ0FHLFFBQUFKLHVCQUFBQyxvQkFBQSxvQ0FBdUIsU0FBQUQsdUJBQUFLLEtBQUEsT0FBQUEsS0FBQUEsSUFBQUMsV0FBQUQsSUFBQSxTQUFBQSxJQUFBLFVBQUFFLFFBQUFDLEdBQUEsT0FBQUQsUUFBQSxtQkFBQUUsUUFBQSxpQkFBQUEsT0FBQUMsU0FBQSxTQUFBRixHQUFBLGNBQUFBLENBQUEsV0FBQUEsR0FBQSxPQUFBQSxHQUFBLG1CQUFBQyxRQUFBRCxFQUFBRyxjQUFBRixRQUFBRCxJQUFBQyxPQUFBRyxVQUFBLGdCQUFBSixDQUFBLEVBQUFELFFBQUFDLEVBQUEsVUFBQUssZ0JBQUFMLEVBQUFNLEdBQUEsT0FBQUQsZ0JBQUFFLE9BQUFDLGVBQUFELE9BQUFDLGVBQUFDLE9BQUEsU0FBQUosZ0JBQUFMLEVBQUFNLEdBQUEsT0FBQU4sRUFBQVUsVUFBQUosRUFBQU4sQ0FBQSxFQUFBSyxnQkFBQUwsRUFBQU0sRUFBQSxXQUFBSyxnQkFBQWQsSUFBQWUsSUFBQUMsT0FBQSxPQUFBRCxJQUFBLFNBQUFFLGVBQUFDLEdBQUEsSUFBQUMsRUFBQSxTQUFBQyxhQUFBRixFQUFBRyxHQUFBLGFBQUFuQixRQUFBZ0IsS0FBQUEsRUFBQSxPQUFBQSxFQUFBLElBQUFJLEVBQUFKLEVBQUFkLE9BQUFtQixhQUFBLFlBQUFELEVBQUEsS0FBQUgsRUFBQUcsRUFBQUUsS0FBQU4sRUFBQUcsR0FBQSx3QkFBQW5CLFFBQUFpQixHQUFBLE9BQUFBLEVBQUEsVUFBQU0sVUFBQSxrRUFBQUosRUFBQUssT0FB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V0FBWSxDQUNWLGdCQUFpQixDQUFDLGdCQUFpQixpQkFDbkMsZ0JBQWlCLENBQUMsZ0JBQWlCLGtCQUVyQ0MsV0FBWSxDQUNWLGdCQUFpQixDQUFDLGdCQUFpQixpQkFDbkMsZ0JBQWlCLENBQUMsZ0JBQWlCLG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL2NvZGUtc3R1ZGlvL3BkL3dvcmtzaG9wX2Rhc2hib2FyZC9jb21wb25lbnRzL3N1cnZleV9yZXN1bHRzL2ZyZWVfcmVzcG9uc2Vfc2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvY29kZS1zdHVkaW8vcGQvd29ya3Nob3BfZGFzaGJvYXJkL2NvbXBvbmVudHMvc3VydmV5X3Jlc3VsdHMvZnJlZV9yZXNwb25zZV9zZWN0aW9uLnN0b3J5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7V2VsbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLWltcG9ydHNcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyZWVSZXNwb25zZVNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHF1ZXN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbiAgICByZXNwb25zZURhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXJGYWNpbGl0YXRvcnNBbmRBbnN3ZXJzKGFuc3dlcnMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYW5zd2VycykubWFwKChmYWNpbGl0YXRvcl9uYW1lLCBpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICB7ZmFjaWxpdGF0b3JfbmFtZX1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7YW5zd2Vyc1tmYWNpbGl0YXRvcl9uYW1lXS5tYXAoKGZlZWRiYWNrLCBqKSA9PlxuICAgICAgICAgICAgICB0aGlzLnJlbmRlckJ1bGxldChmZWVkYmFjaywgailcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJBbnN3ZXJzKGFuc3dlcnMpIHtcbiAgICByZXR1cm4gYW5zd2Vycy5tYXAoKGFuc3dlciwgaSkgPT4gdGhpcy5yZW5kZXJCdWxsZXQoYW5zd2VyLCBpKSk7XG4gIH1cblxuICByZW5kZXJCdWxsZXQodGV4dCwga2V5KSB7XG4gICAgY29uc3QgdHJpbW1lZFRleHQgPSBfLnRyaW0odGV4dCk7XG4gICAgaWYgKHRyaW1tZWRUZXh0KSB7XG4gICAgICByZXR1cm4gPGxpIGtleT17a2V5fT57dHJpbW1lZFRleHR9PC9saT47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUmVzcG9uc2VTZWN0aW9uKHJlc3BvbnNlcykge1xuICAgIGlmIChyZXNwb25zZXMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3BvbnNlcykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQW5zd2VycyhyZXNwb25zZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRmFjaWxpdGF0b3JzQW5kQW5zd2VycyhyZXNwb25zZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFdlbGwga2V5PXtpfT5cbiAgICAgICAgICAgICAgPGI+e3F1ZXN0aW9uWyd0ZXh0J119PC9iPlxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSZXNwb25zZVNlY3Rpb24oXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNwb25zZURhdGFbcXVlc3Rpb24ua2V5XVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9XZWxsPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGcmVlUmVzcG9uc2VTZWN0aW9uIGZyb20gJy4vZnJlZV9yZXNwb25zZV9zZWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IEZyZWVSZXNwb25zZVNlY3Rpb24sXG59O1xuXG5jb25zdCBUZW1wbGF0ZSA9IGFyZ3MgPT4gKFxuICA8ZGl2IGlkPVwiYXBwbGljYXRpb24tY29udGFpbmVyXCI+XG4gICAgPEZyZWVSZXNwb25zZVNlY3Rpb24gey4uLmFyZ3N9IC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IFNpbmdsZUZhY2lsaXRhdG9yID0gVGVtcGxhdGUuYmluZCh7fSk7XG5TaW5nbGVGYWNpbGl0YXRvci5hcmdzID0ge1xuICBxdWVzdGlvbnM6IFtcbiAgICB7dGV4dDogJ1F1ZXN0aW9uIDEnLCBrZXk6ICdxdWVzdGlvbl8xJ30sXG4gICAge3RleHQ6ICdRdWVzdGlvbiAyJywga2V5OiAncXVlc3Rpb25fMid9LFxuICBdLFxuICByZXNwb25zZURhdGE6IHtcbiAgICBxdWVzdGlvbl8xOiBbJ0ZlZWRiYWNrIDFfMScsICdGZWVkYmFjayAxXzInXSxcbiAgICBxdWVzdGlvbl8yOiBbJ0ZlZWRiYWNrIDJfMScsICdGZWVkYmFjayAyXzInXSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBNdWx0aXBsZUZhY2lsaXRhdG9ycyA9IFRlbXBsYXRlLmJpbmQoe30pO1xuTXVsdGlwbGVGYWNpbGl0YXRvcnMuYXJncyA9IHtcbiAgcXVlc3Rpb25zOiBbXG4gICAge3RleHQ6ICdRdWVzdGlvbiAxJywga2V5OiAncXVlc3Rpb25fMSd9LFxuICAgIHt0ZXh0OiAnUXVlc3Rpb24gMicsIGtleTogJ3F1ZXN0aW9uXzInfSxcbiAgXSxcbiAgcmVzcG9uc2VEYXRhOiB7XG4gICAgcXVlc3Rpb25fMToge1xuICAgICAgJ0ZhY2lsaXRhdG9yIDEnOiBbJ1ExRjEgZmVlZGJhY2snLCAnUTFGMSBmZWVkYmFjayddLFxuICAgICAgJ0ZhY2lsaXRhdG9yIDInOiBbJ1ExRjIgZmVlZGJhY2snLCAnUTFGMiBmZWVkYmFjayddLFxuICAgIH0sXG4gICAgcXVlc3Rpb25fMjoge1xuICAgICAgJ0ZhY2lsaXRhdG9yIDEnOiBbJ1EyRjEgZmVlZGJhY2snLCAnUTJGMSBmZWVkYmFjayddLFxuICAgICAgJ0ZhY2lsaXRhdG9yIDInOiBbJ1EyRjIgZmVlZGJhY2snLCAnUTJGMiBmZWVkYmFjayddLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl9yZWFjdEJvb3RzdHJhcCIsIl9sb2Rhc2giLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3NldFByb3RvdHlwZU9mIiwicCIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiYmluZCIsIl9fcHJvdG9fXyIsIl9kZWZpbmVQcm9wZXJ0eSIsImtleSIsInZhbHVlIiwiX3RvUHJvcGVydHlLZXkiLCJ0IiwiaSIsIl90b1ByaW1pdGl2ZSIsInIiLCJlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJleHBvcnRzIiwiX1JlYWN0JENvbXBvbmVudCIsIkZyZWVSZXNwb25zZVNlY3Rpb24iLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX3Byb3RvIiwicmVuZGVyRmFjaWxpdGF0b3JzQW5kQW5zd2VycyIsImFuc3dlcnMiLCJfdGhpcyIsImtleXMiLCJtYXAiLCJmYWNpbGl0YXRvcl9uYW1lIiwiY3JlYXRlRWxlbWVudCIsImZlZWRiYWNrIiwiaiIsInJlbmRlckJ1bGxldCIsInJlbmRlckFuc3dlcnMiLCJfdGhpczIiLCJhbnN3ZXIiLCJ0ZXh0IiwidHJpbW1lZFRleHQiLCJfIiwidHJpbSIsInJlbmRlclJlc3BvbnNlU2VjdGlvbiIsInJlc3BvbnNlcyIsIkFycmF5IiwiaXNBcnJheSIsInRoaXMiLCJyZW5kZXIiLCJfdGhpczMiLCJwcm9wcyIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiV2VsbCIsInJlc3BvbnNlRGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJtb2R1bGUiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsImVtcHR5RnVuY3Rpb24iLCJzaGltIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwibG9jYXRpb24iLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJlcnIiLCJFcnJvciIsIm5hbWUiLCJnZXRTaGltIiwiUmVhY3RQcm9wVHlwZXMiLCJhcnJheSIsImJvb2wiLCJmdW5jIiwibnVtYmVyIiwic3RyaW5nIiwic3ltYm9sIiwiYW55IiwiZWxlbWVudCIsImluc3RhbmNlT2YiLCJub2RlIiwib2JqZWN0T2YiLCJvbmVPZiIsIm9uZU9mVHlwZSIsInNoYXBlIiwiZXhhY3QiLCJjaGVja1Byb3BUeXBlcyIsIl9mcmVlX3Jlc3BvbnNlX3NlY3Rpb24iLCJjb21wb25lbnQiLCJUZW1wbGF0ZSIsImFyZ3MiLCJpZCIsInF1ZXN0aW9uXzEiLCJxdWVzdGlvbl8yIl0sInNvdXJjZVJvb3QiOiIifQ==