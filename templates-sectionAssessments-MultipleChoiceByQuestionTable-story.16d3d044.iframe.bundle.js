(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[1894],{"./src/legacySharedComponents/FontAwesome.jsx":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=FontAwesome;var _lodash=_interopRequireDefault(__webpack_require__("./node_modules/lodash/lodash.js")),_propTypes=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_excluded=["icon","className","title"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FontAwesome(_ref){var icon=_ref.icon,className=_ref.className,title=_ref.title,props=_objectWithoutProperties(_ref,_excluded),newProps=_lodash.default.assign({},props,{className:"fa fa-".concat(icon," ").concat(className||"")});return _react.default.createElement("i",_extends({},newProps,{title}))}FontAwesome.propTypes={icon:_propTypes.default.string.isRequired,className:_propTypes.default.string,title:_propTypes.default.string},module.exports=exports.default},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};return ReactPropTypes.checkPropTypes=emptyFunction,ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./src/templates/sectionAssessments/MultipleChoiceByQuestionTable.story.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Primary=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_MultipleChoiceByQuestionTable=_interopRequireDefault(__webpack_require__("./src/templates/sectionAssessments/MultipleChoiceByQuestionTable.jsx"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.default={name:"MultipleChoiceByQuestionTable",component:_MultipleChoiceByQuestionTable.default},exports.Primary=function Primary(){return _react.default.createElement(_MultipleChoiceByQuestionTable.default,{studentAnswers:[{name:"Matt",id:1,answer:"B",correct:!1},{name:"Kim",id:2,answer:"A",correct:!0},{name:"Megan",id:3,answer:"C",correct:!1}]})}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLXNlY3Rpb25Bc3Nlc3NtZW50cy1NdWx0aXBsZUNob2ljZUJ5UXVlc3Rpb25UYWJsZS1zdG9yeS5iOTUwOWRlOC5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJzUUFDQSxJQUFBQSxRQUFBQyx1QkFBQUMsb0JBQUEsb0NBQ0FDLFdBQUFGLHVCQUFBQyxvQkFBQSx1Q0FDQUUsT0FBQUgsdUJBQUFDLG9CQUFBLGtDQUEwQkcsVUFBQSw2QkFIMUIsU0FBQUosdUJBQUFLLEtBQUEsT0FBQUEsS0FBQUEsSUFBQUMsV0FBQUQsSUFBQSxTQUFBQSxJQUFBLFVBQUFFLFdBQUEsT0FBQUEsU0FBQUMsT0FBQUMsT0FBQUQsT0FBQUMsT0FBQUMsT0FBQSxTQUFBQyxRQUFBLFFBQUFDLEVBQUEsRUFBQUEsRUFBQUMsVUFBQUMsT0FBQUYsSUFBQSxLQUFBRyxPQUFBRixVQUFBRCxHQUFBLFFBQUFJLE9BQUFELE9BQUFQLE9BQUFTLFVBQUFDLGVBQUFDLEtBQUFKLE9BQUFDLE9BQUFMLE9BQUFLLEtBQUFELE9BQUFDLEtBQUEsUUFBQUwsTUFBQSxFQUFBSixTQUFBYSxNQUFBLEtBQUFQLFVBQUEsVUFBQVEseUJBQUFOLE9BQUFPLFVBQUEsU0FBQVAsT0FBQSxhQUFBQyxJQUFBSixFQUFBRCxPQUFBLFNBQUFZLDhCQUFBUixPQUFBTyxVQUFBLFNBQUFQLE9BQUEsYUFBQUMsSUFBQUosRUFBQUQsT0FBQSxHQUFBYSxXQUFBaEIsT0FBQWlCLEtBQUFWLFFBQUEsSUFBQUgsRUFBQSxFQUFBQSxFQUFBWSxXQUFBVixPQUFBRixJQUFBSSxJQUFBUSxXQUFBWixHQUFBVSxTQUFBSSxRQUFBVixNQUFBLElBQUFMLE9BQUFLLEtBQUFELE9BQUFDLE1BQUEsT0FBQUwsTUFBQSxDQUFBWSxDQUFBUixPQUFBTyxVQUFBLEdBQUFkLE9BQUFtQixzQkFBQSxLQUFBQyxpQkFBQXBCLE9BQUFtQixzQkFBQVosUUFBQSxJQUFBSCxFQUFBLEVBQUFBLEVBQUFnQixpQkFBQWQsT0FBQUYsSUFBQUksSUFBQVksaUJBQUFoQixHQUFBVSxTQUFBSSxRQUFBVixNQUFBLEdBQUFSLE9BQUFTLFVBQUFZLHFCQUFBVixLQUFBSixPQUFBQyxPQUFBTCxPQUFBSyxLQUFBRCxPQUFBQyxLQUFBLFFBQUFMLE1BQUEsQ0FZZSxTQUFTbUIsWUFBV0MsTUFBcUMsSUFBbkNDLEtBQUlELEtBQUpDLEtBQU1DLFVBQVNGLEtBQVRFLFVBQVdDLE1BQUtILEtBQUxHLE1BQVVDLE1BQUtkLHlCQUFBVSxLQUFBM0IsV0FDN0RnQyxTQUFXQyxRQUFBQSxRQUFFNUIsT0FBTyxDQUFDLEVBQUcwQixNQUFPLENBQ25DRixVQUFXLFNBQUZLLE9BQVdOLEtBQUksS0FBQU0sT0FBSUwsV0FBd0IsTUFFdEQsT0FBTzlCLE9BQUEsUUFBQW9DLGNBQUEsSUFBQWhDLFNBQUEsR0FBTzZCLFNBQVEsQ0FBRUYsUUFDMUIsQ0FFQUosWUFBWVUsVUFBWSxDQUN0QlIsS0FBTVMsV0FBQUEsUUFBVUMsT0FBT0MsV0FDdkJWLFVBQVdRLFdBQUFBLFFBQVVDLE9BQ3JCUixNQUFPTyxXQUFBQSxRQUFVQyxRQUdqQkUsT0FBQUMsUUFBQUEsUUFBQSxPLCtIQ2hCRixJQUFJQyxxQkFBdUIsb0JBQVEseURBRW5DLFNBQVNDLGdCQUFpQixDQUUxQkgsT0FBT0MsUUFBVSxXQUNmLFNBQVNHLEtBQUtiLE1BQU9jLFNBQVVDLGNBQWVDLFNBQVVDLGFBQWNDLFFBQ3BFLEdBQUlBLFNBQVdQLHFCQUFmLENBSUEsSUFBSVEsSUFBTSxJQUFJQyxNQUNaLG1MQUtGLE1BREFELElBQUlFLEtBQU8sc0JBQ0xGLEdBUE4sQ0FRRixDQUVBLFNBQVNHLFVBQ1AsT0FBT1QsSUFDVCxDQUhBQSxLQUFLTCxXQUFhSyxLQU1sQixJQUFJVSxlQUFpQixDQUNuQkMsTUFBT1gsS0FDUFksS0FBTVosS0FDTmEsS0FBTWIsS0FDTmMsT0FBUWQsS0FDUmUsT0FBUWYsS0FDUk4sT0FBUU0sS0FDUmdCLE9BQVFoQixLQUVSaUIsSUFBS2pCLEtBQ0xrQixRQUFTVCxRQUNUVSxRQUFTbkIsS0FDVG9CLFdBQVlYLFFBQ1pZLEtBQU1yQixLQUNOc0IsU0FBVWIsUUFDVmMsTUFBT2QsUUFDUGUsVUFBV2YsUUFDWGdCLE1BQU9oQixRQUNQaUIsTUFBT2pCLFNBTVQsT0FIQUMsZUFBZWlCLGVBQWlCNUIsY0FDaENXLGVBQWVqQixVQUFZaUIsZUFFcEJBLGNBQ1QsQywrRkNoQ0VkLE9BQU9DLFFBQVUsb0JBQVEsd0RBQVIsRSxnRkNmbkJELE9BQU9DLFFBRm9CLDhDLGtQQ1QzQixJQUFBMUMsT0FBQUgsdUJBQUFDLG9CQUFBLGtDQUVBMkUsK0JBQUE1RSx1QkFBQUMsb0JBQUEseUVBQTRFLFNBQUFELHVCQUFBSyxLQUFBLE9BQUFBLEtBQUFBLElBQUFDLFdBQUFELElBQUEsU0FBQUEsSUFBQSxDQUFBd0MsUUFBQUEsUUFFN0QsQ0FDYlcsS0FBTSxnQ0FDTnFCLFVBQVdDLCtCQUFBQSxTQUdPakMsUUFBQUEsUUFBRyxTQUFWa0MsVUFBTyxPQUNsQjVFLE9BQUEsUUFBQW9DLGNBQUNxQywrQkFBQSxRQUE2QixDQUM1QkksZUFBZ0IsQ0FDZCxDQUFDeEIsS0FBTSxPQUFReUIsR0FBSSxFQUFHQyxPQUFRLElBQUtDLFNBQVMsR0FDNUMsQ0FBQzNCLEtBQU0sTUFBT3lCLEdBQUksRUFBR0MsT0FBUSxJQUFLQyxTQUFTLEdBQzNDLENBQUMzQixLQUFNLFFBQVN5QixHQUFJLEVBQUdDLE9BQVEsSUFBS0MsU0FBUyxLQUUvQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL2xlZ2FjeVNoYXJlZENvbXBvbmVudHMvRm9udEF3ZXNvbWUuanN4Iiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL3RlbXBsYXRlcy9zZWN0aW9uQXNzZXNzbWVudHMvTXVsdGlwbGVDaG9pY2VCeVF1ZXN0aW9uVGFibGUuc3RvcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZmlsZSBmb250LWF3ZXNvbWUgaGVscGVyIGNvbXBvbmVudC4gKi9cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBHaXZlbiBhbiBpY29uIG5hbWUsIHJlbmRlciB0aGUgaWNvbiB1c2luZyBhbiA8aT4gdGFnIGluIHR5cGljYWwgZm9udC1hd2Vzb21lXG4gKiBmYXNoaW9uLiAgUmVxdWlyZXMgZm9udC1hd2Vzb21lIHRvIGJlIGF2YWlsYWJsZSBvbiB0aGUgcGFnZS5cbiAqIFNlZSBodHRwOi8vZm9udGF3ZXNvbWUuaW8vaWNvbnMvIHRvIGxvb2sgdXAgc3VwcG9ydGVkIGljb24gbmFtZXMuXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIERTQ08gRm9udEF3ZXNvbWVWNkljb24gaW5zdGVhZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb250QXdlc29tZSh7aWNvbiwgY2xhc3NOYW1lLCB0aXRsZSwgLi4ucHJvcHN9KSB7XG4gIGNvbnN0IG5ld1Byb3BzID0gXy5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBgZmEgZmEtJHtpY29ufSAke2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfWAsXG4gIH0pO1xuICByZXR1cm4gPGkgey4uLm5ld1Byb3BzfSB0aXRsZT17dGl0bGV9IC8+O1xufVxuXG5Gb250QXdlc29tZS5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gVGl0bGUgc2hvdWxkIGJlIHVzZWQgZm9yIHNlbWFudGljIGljb25zLiBJZiBub3QgZ2l2ZW4sIHRoZSBzY3JlZW5yZWFkZXIgd2lsbCBub3QgcmVhZCB0aGUgaWNvblxuICAvLyBTZWUgaHR0cHM6Ly9mb250YXdlc29tZS5jb20vZG9jcy93ZWIvZGlnLWRlZXBlci9hY2Nlc3NpYmlsaXR5I2ljb25zLXVzZWQtYXMtc2VtYW50aWMtZWxlbWVudHNcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTXVsdGlwbGVDaG9pY2VCeVF1ZXN0aW9uVGFibGUgZnJvbSAnLi9NdWx0aXBsZUNob2ljZUJ5UXVlc3Rpb25UYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ011bHRpcGxlQ2hvaWNlQnlRdWVzdGlvblRhYmxlJyxcbiAgY29tcG9uZW50OiBNdWx0aXBsZUNob2ljZUJ5UXVlc3Rpb25UYWJsZSxcbn07XG5cbmV4cG9ydCBjb25zdCBQcmltYXJ5ID0gKCkgPT4gKFxuICA8TXVsdGlwbGVDaG9pY2VCeVF1ZXN0aW9uVGFibGVcbiAgICBzdHVkZW50QW5zd2Vycz17W1xuICAgICAge25hbWU6ICdNYXR0JywgaWQ6IDEsIGFuc3dlcjogJ0InLCBjb3JyZWN0OiBmYWxzZX0sXG4gICAgICB7bmFtZTogJ0tpbScsIGlkOiAyLCBhbnN3ZXI6ICdBJywgY29ycmVjdDogdHJ1ZX0sXG4gICAgICB7bmFtZTogJ01lZ2FuJywgaWQ6IDMsIGFuc3dlcjogJ0MnLCBjb3JyZWN0OiBmYWxzZX0sXG4gICAgXX1cbiAgLz5cbik7XG4iXSwibmFtZXMiOlsiX2xvZGFzaCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3Byb3BUeXBlcyIsIl9yZWFjdCIsIl9leGNsdWRlZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsImJpbmQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlS2V5cyIsImtleXMiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiRm9udEF3ZXNvbWUiLCJfcmVmIiwiaWNvbiIsImNsYXNzTmFtZSIsInRpdGxlIiwicHJvcHMiLCJuZXdQcm9wcyIsIl8iLCJjb25jYXQiLCJjcmVhdGVFbGVtZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsImVtcHR5RnVuY3Rpb24iLCJzaGltIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwibG9jYXRpb24iLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJlcnIiLCJFcnJvciIsIm5hbWUiLCJnZXRTaGltIiwiUmVhY3RQcm9wVHlwZXMiLCJhcnJheSIsImJvb2wiLCJmdW5jIiwibnVtYmVyIiwib2JqZWN0Iiwic3ltYm9sIiwiYW55IiwiYXJyYXlPZiIsImVsZW1lbnQiLCJpbnN0YW5jZU9mIiwibm9kZSIsIm9iamVjdE9mIiwib25lT2YiLCJvbmVPZlR5cGUiLCJzaGFwZSIsImV4YWN0IiwiY2hlY2tQcm9wVHlwZXMiLCJfTXVsdGlwbGVDaG9pY2VCeVF1ZXN0aW9uVGFibGUiLCJjb21wb25lbnQiLCJNdWx0aXBsZUNob2ljZUJ5UXVlc3Rpb25UYWJsZSIsIlByaW1hcnkiLCJzdHVkZW50QW5zd2VycyIsImlkIiwiYW5zd2VyIiwiY29ycmVjdCJdLCJzb3VyY2VSb290IjoiIn0=